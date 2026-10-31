# Flax 通用安全存储：宿主接口与可选平台实现

状态：通用接口及可选 Keychain/Keystore
package 已实现，当前用法与限制以[安全存储契约](../architecture/secure-storage.md)为准。本文保留设计依据和后续扩展方向；尚未发布产物。

本提案为[权限设计](permissions.md)以及后续安装信任信息、证书等提供共用的安全存储契约。宿主可以接入自己的实现，也可以显式选择 Flax 提供的可选平台包。Core不自带普通文件回退，不把“数据放在 data 外”当成安全存储的完整保证。

## 1. 包边界与职责

| 部分           | 拟议位置与职责                                                                                                        |
| -------------- | --------------------------------------------------------------------------------------------------------------------- |
| 通用接口       | `package:flax/secure_storage.dart`，只定义 Dart 契约、地址参数和错误，不引入平台安全存储插件或第三方加密依赖。        |
| 各功能消费者   | 权限、安装与证书各自定义记录格式、版本、身份和有效性规则，通过同一个接口读写。                                        |
| 宿主自有实现   | 实现 FlaxSecureStorage，可对接宿主已经部署的安全存储、认证数据库或其他满足契约的后端。                                |
| 可选默认实现   | 拟议独立 Dart/Flutter package `flax_secure_storage`，提供 Keychain/Keystore 适配，依赖 Core 接口；Core 不反向依赖它。 |
| 普通文件与缓存 | bundle、data、下载内容、localStorage 和可重建索引仍使用自己的存储，不把所有文件都转入安全存储。                       |

宿主使用自有实现时无需依赖可选包，也不会因为使用 Flax 而带入该包的平台实现。可选包没有 JS/npm 部分，不作为给 JS 安装能力的 FlaxPlugin，也不自动出现在 binding 注册中。这里不新增通用数据库、ORM、插件发现或密钥管理框架。

## 2. 最小 Dart 接口

建议以字节为值，消费者自行编码 JSON、证书等。接口不认识权限状态、安装包或业务账号，不替消费者解释记录。

```dart
import 'dart:typed_data';

// Contract sketch; see the architecture document for the implemented API.
abstract interface class FlaxSecureStorage {
  Future<Uint8List?> read({
    required String module,
    required String owner,
    required String key,
  });

  Future<void> write({
    required String module,
    required String owner,
    required String key,
    required Uint8List value,
  });

  Future<void> delete({
    required String module,
    required String owner,
    required String key,
  });

  Future<void> deleteOwner({required String owner});
}
```

前三项是单记录操作；deleteOwner 仅清理本接口管理的、这个主体在各功能模块中的 Flax 记录，不调用宿主全局安全库的 deleteAll。返回成功表示目标 owner 的 Flax 记录已经清理，不表示整个多记录清理具有事务性；部分失败须明确报告，调用者保持该主体禁用并继续处理，不能宣称卸载已完成。删除前须按第 5 节停止该 owner 的新工作并排空在途写入，不能与旧写入竞速。

### 2.1 三个地址字段

| 字段   | 定义                                                                                                                                 |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| module | Flax 内部功能模块/命名空间，例如 flax.permissions、flax.installations、flax.certificates，不是 Flax 应用的 appId。                   |
| owner  | 宿主确定的安全主体标识；应用级 owner 绑定可信应用身份与本次安装实例，宿主/发布者共享记录另用独立主体。不是会话 ID 或 JS 自报字符串。 |
| key    | 功能模块自己的记录名，例如 state、identity 或 trust，不参与文件路径解析。                                                            |

这里的 module 不是 ESM module，也不是 FlaxSession.namespace。Flax 自有功能保留
`flax.*`，宿主扩展使用自己的命名空间；相同 owner/key 在不同 module 下互不覆盖。应用身份由可信宿主上下文解析，不能只相信一个可冒用的 appId。应用级 owner 在同一次可信安装的普通更新及多个 Session 间稳定，卸载重装必须生成新安装实例和新 owner；账号分区及来源连续性的验证仍由消费者负责。

当前 appId 对应哪个可信安装实例，由宿主可信安装注册表或宿主 owner 下的 flax.installations 记录确定。不能从 bundle、目录或普通安装完成记录自动重建信任；记录缺失时先由可信宿主重新确认，而非沿用猜出的 owner。宿主/发布者全局 owner 与应用级 owner 分开，避免卸载应用时误删共享信任信息。

每个存储实例固定一个专用存储范围，隔离宿主在同一 Keychain 或数据库里的其他用途；它不是 JS 可传入的参数。实现将该范围、格式版本及 module/owner/key 规范编码并作完整性绑定，不能用未经转义的分隔符拼接或直接当相对路径。哈希可以用于底层定位，但不是访问权限；搬移到另一范围、应用、功能模块或 key 的有效记录也不能被接受。字符串匹配精确，不做隐式 trim、大小写折叠或路径归一化。

例如权限管理组件可以写入：

```dart
// Proposed usage; permissionBytes contains the consumer's versioned record.
await storage.write(
  module: 'flax.permissions',
  owner: trustedInstallationOwner,
  key: 'state',
  value: permissionBytes,
);
```

## 3. 实现必须满足的安全契约

1. 保证记录的保密性及真实性/完整性，消费者不能接受任意可改文件直接返回的权限值。认证或解密失败必须报错，不能将仅通过普通哈希校验的值或自动重置后的默认数据当成可信记录。
2. read 返回 null 只表示记录不存在。设备锁定、密钥失效、平台不可用、损坏和 IO 错误都不能折算为 null；初始化也不能静默删除旧密钥、清空存储再继续。读取不自动触发生物验证或系统权限申请，需要交互时由宿主另行处理。
3. write/delete 对单条记录是完整操作；完成时达到后端承诺的持久化点，并保证后续读取一致，不能只更新内存后异步提交。失败也可能具有不确定结果，消费者须阻断受影响授权并重读确认，不假设底层一定没有变化。
4. 访问控制覆盖记录、密钥、临时副本、备份与迁移。不得向 JS 导出接口、底层路径、密钥或原生句柄，不通过文件选择器、分享、AssetBundle 或原生通道开放。平台不支持或安全后端不可用时明确失败，不回退到普通文件。
5. 记录编码、大小与格式错误必须显式处理，不偷偷截断、拆分后缺少完整性验证或合并其他主体的数据。读写期间对调用方可变字节采取稳定快照，返回值不能是允许外部修改存储内部缓存的共享缓冲区。

建议用 FlaxSecureStorageException 区分 unavailable、locked、integrityFailure、ioFailure、unsupported 等原因，保留宿主可诊断的底层错误，不记录明文秘密或密钥。非法地址等参数错误不伪装成用户拒绝。具体错误类型亦为提案。

### 3.1 存储安全与业务有效性分工

安全存储保证读出的记录可信；权限模块仍需检查声明摘要、安装实例、账号、范围、修订和当前宿主系统授权。不能因为字节来自 Keychain 就直接返回 granted，也不能让存储实现自己决定用户是否授权。

安全存储不提供隐含的多记录事务、compare-and-swap 或任意 update 回调。首版各消费者集中管理写入，权限管理组件按可信主体串行并检查修订；多 Session 共享该组件，不各自读改写同一记录。异步读取和写入完成后也要校验当前身份及修订，旧结果不能发布成新授权。涉及多 isolate、进程或远端存储的宿主，须在协调层或后端实现同等同步，不能把单记录原子写当成解决旧批准覆盖新撤销。

保密性与完整性不等于抗删除或抗旧记录回放。记录缺失时不能自动批准，旧批准也不能只凭本地修订号宣称新鲜；需要抵抗整个存储快照回滚的产品，另行提供受保护版本锚点或服务端校验。本接口不承诺抵抗已控制宿主进程、root/越狱或管理级回滚。

## 4. 可选平台包

可选包 `flax_secure_storage` 提供
`FlaxPlatformSecureStorage`，由宿主显式创建并注入。平台选项、原生插件和加密代码留在这个包，Core不增加对应传递依赖。

| 平台         | 实现方向                                                                                                                        |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| iOS/macOS    | 小型记录使用 Keychain；用隔离的 service/account 等属性承载地址，选择适当的可访问性与迁移策略，不要求每次查询都弹认证框。        |
| Android      | Keystore 保护密钥，值用带认证的加密方式保存在宿主内部私有存储；验证地址绑定及认证结果后才返回，不把 Keystore 当普通键值数据库。 |
| 宿主其他后端 | 通过同一 Dart 接口对接，满足相同的命名空间、原子操作、错误和安全保证，不要求宿主更换既有基础设施。                              |
| 未支持的平台 | 报告不可用；不将明文文件、浏览器本地存储或另一种保护级别的后端作为静默替代。                                                    |

Keychain 与 Keystore 都以宿主 App 为主体，不会自动区分 Flax 应用；应用划分由 owner 和 Flax 调用上下文维护。Android 的认证加密应将固定存储范围、module/owner/key 与格式信息纳入可信绑定；底层文件即使被更改，也不能变成新的有效批准。[Keychain 可访问性][apple-keychain]和
[Android Keystore][android-keystore]解释了平台能力。

实现时评估了
[flutter_secure_storage][flutter-secure-storage]，但其 Android 写入完成和默认恢复行为不满足这里的持久化契约。当前可选包直接使用小型 Keychain
/ Keystore 原生适配，不再引入另一套安全存储依赖；原生实现、错误处理及限制见
[安全存储契约](../architecture/secure-storage.md)。宿主使用自有后端时仍不依赖这个可选包。

### 4.1 Apple 使用 Data Protection Keychain

Apple 实现明确设置
`kSecUseDataProtectionKeychain = true`，不回退或自动迁移到旧式 file-based
Keychain。它由宿主主程序的签名身份和访问组控制；不是每个 Flax 应用各签一份描述文件，也不是模块申请权限时要再弹一次系统授权。

macOS 宿主须配置有效签名及描述文件，在 Keychain
Sharing 中保留宿主私有访问组，Debug、Profile、Release 配置都需正确签名。iOS 沿用正常的应用签名身份。不需要另开 App
Groups 或 iCloud。可选包默认使用系统为宿主选择的访问组；若宿主已有共享组，应将私有组保留为首项，不能把 service 或 namespace 当成访问控制。具体配置见[Apple 宿主接入说明](../../packages/flax_secure_storage/README.md#apple-host-setup)。

macOS 的系统 App Sandbox 与 Flax 应用沙箱分开。Data Protection Keychain 不依赖系统 App
Sandbox；但当前 Flax 文件后端需要重新打开 `/dev/fd`，系统 App
Sandbox 会拒绝该操作。因此 macOS 文件/UI 验收使用 Flutter 的 CI 宿主模式，保留 Flax 目录隔离、真实签名和库验证。两层文件沙箱同时启用需另行适配原生描述符后端，不回退为普通路径访问。

初始化先写入并删除一条不含敏感数据的保留探测记录，因为未正确签名的空库查询也可能返回“不存在”。探测失败则
`open()`
失败，允许宿主修正配置后重试；不会继续创建可用的权限组件。中断后遗留的探测记录由下次初始化清理。后续每次操作仍需处理错误，不能认为初始化成功就永远可用。缺失 entitlement 对应
`unavailable`，需要交互或认证失败对应
`locked`；底层 OSStatus 保留在异常 cause 中供宿主诊断。不触发认证弹窗，也不改变进程级 Keychain 交互设置。

普通更新保持 bundle
ID、访问组和 namespace 稳定；变更这些身份可能使旧记录不可见，需由宿主明确处理恢复，不能据此沿用旧授权。模块卸载继续走权限管理组件的卸载和 owner 清理，删除 data 目录或卸载宿主不能代替此流程。此选择不改变 Core 的安全存储接口，也不强制使用宿主自有实现的业务引入可选包。

### 4.2 备份与迁移

默认不云同步，不让普通模块 data 备份自动恢复权限或信任记录。Android 配置加密数据和相关元数据的备份/迁移排除；Apple按实际用途设置访问级别和同步/迁移策略。换设备、密钥失效或安装身份不匹配时重新验证，不以明文缓存补回。ThisDeviceOnly不表示同设备旧快照绝不可能恢复，不能作为完整抗回滚承诺。[Android 备份][android-backup]与
[Apple Keychain 访问条件][apple-keychain]提供原生配置依据。

底层若需要文件、临时副本或辅助索引，位置由实现决定并对模块不可访问；私有目录、文件保护和备份排除均覆盖原子替换及异常清理，不只在首次创建时设置。[Android 私有文件][android-private-files]
说明了内部存储边界。

## 5. 宿主接入、共享与清理

安全存储在安装、加载以及 Session 之前就可能使用，不能只作为 FlaxView 的配置。宿主通过 Flax.registerSecureStorage 显式注册，或直接向权限管理组件注入后端：

```dart
// Use the host's own implementation.
Flax.registerSecureStorage(myHostSecureStorage);
```

或由宿主显式依赖可选包：

```dart
// Or explicitly install the optional native package.
import 'package:flax_secure_storage/flax_secure_storage.dart';

Flax.registerSecureStorage(await FlaxPlatformSecureStorage.open());
```

宿主注册后，安装/加载流程与权限管理使用同一实例；各自捕获明确的配置快照，不在每个 View 重复创建。活动 Session、管理组件或安装任务存在时不能热切换后端。测试重置须先结束相关工作；不引入自动迁移、运行中切库或 Session 自行选择实现。

注册不自动跨 Dart
isolate 复制。现有安装器的 Isolate.run 处理解包等工作，未来安全存储调用应留在拥有后端/平台通道的宿主上下文，再把必要的普通数据交给计算任务；不把平台存储对象传入工作 isolate，也不让工作 isolate 自建回退后端。多个上下文需要使用时，由宿主显式协调调用和写入。

未提供实现时，需要安全记录的能力明确不可用；权限查询/申请可返回 unavailable 和 secureStorageUnavailable，不自动创建普通 JSON 或启用内存批准来继续。不需要安全记录的普通文件、UI 和可重建缓存不因此强制依赖平台存储。内存实现只作为显式的测试替身，不充当生产回退。

存储异步操作发生在初始化、申请、设置变更及安装等流程；同步 binding
handler 继续读取已经验证的授权快照，不同步访问平台存储。未能可信读取时不建立授权快照，必需写入失败时不新增批准；已有快照继续受当前宿主系统状态、修订和资源生命周期约束。

撤权先使活动授权失效，再持久保存；保存失败不报告跨重启撤销成功。关闭 Session 不删除持久批准。卸载由宿主在各功能消费者之外统一协调：

1. 先阻止该安装 owner 接纳新工作、失效活动授权，并在可信安装记录中标记待卸载。标记或后续清理失败均保留禁用状态并报告，不能确认卸载成功。
2. 停止相关 Session 和后台任务，释放原生资源；等待已接纳的权限、安装、证书等所有命名空间写入结束。不能只等权限管理组件自己的队列。
3. 执行 deleteOwner 作为该 owner 的清理屏障，再移除普通管理目录并完成可信安装记录更新。旧任务即使迟到也不得重新写入，重装使用全新 owner；失败可针对待卸载记录重试。

同一存储范围的协调者保证上述顺序，不为此增加通用事务 DSL。deleteOwner 不删除其他主体、宿主其他用途的记录或它们共用的根密钥；宿主 owner 下的当前安装索引由安装消费者单独更新。只删除 apps 文件夹不能宣称 Keychain 等记录已经清理。

同一可信应用的安装与卸载还须按应用身份串行；旧管理目录清理完成前不能在相同目录重装。全新 owner 隔离安全记录，不能替代目录生命周期协调，否则旧卸载任务仍可能删除新安装的 bundle/data。

## 6. 权限、安装与证书如何共用

| 消费者         | module 示例        | owner/key 与记录                                                                                                              |
| -------------- | ------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| 模块权限       | flax.permissions   | 应用安装 owner 下的 state；记录声明批准、当前 approvedScope、最近申请及修订，不保存永久有效的 OS granted。                    |
| 安装信任信息   | flax.installations | 宿主 owner 下按可信应用身份定位当前安装实例、接受的来源及安装阶段；安装专属附加记录才放应用安装 owner，不由包自报值直接覆盖。 |
| 证书与信任配置 | flax.certificates  | 明确的宿主、发布者或应用主体下的 trust/固定记录；存证书、指纹或受保护密钥引用。共享宿主记录不随某应用卸载删除。               |
| 宿主扩展       | 宿主自己的命名空间 | 可按业务接入，仍由可信宿主决定主体和清理范围，不向 JS 开放任意命名空间读写。                                                  |

这里只统一存储，不统一三个消费者的数据模型或业务决策，也不承诺现在已经实现安装签名或证书管理。现有
`.flax-install.json`
是普通完成/完整性检查记录；本轮不改安装器，也不把它升级为安全授权来源。未来涉及可信来源、签名身份连续性或接受的证书时，使用安全存储中的锚点核对普通内容；锚点缺失不能从可改索引或包内声明自动补成已信任。

不可导出的私钥仍留在平台密钥系统中，安全存储只保存引用。不要为了复用 read 接口把 Keystore 私钥导出成字节；真正签名/解密操作属于后续独立密钥能力，不在本接口加提前占位 API。

## 7. 后续验收

1. Core 不依赖可选平台包；宿主自有实现可以独立接入，未配置或平台不支持时没有明文/内存回退。
2. 固定存储范围及三元组编码不会碰撞，同名 key 在不同功能或主体下隔离；替换密文、搬移到其他地址、修改认证信息均失败，不产生批准。
3. 不存在、锁定、密钥失效和篡改等结果可区分；错误不被当成 null，失败或恢复不会覆盖既有决定；单记录写入完成语义真实可验证。
4. 并发查询/请求、撤销、Session 关闭及旧回调不能覆盖新状态；卸载排空跨功能写入后只清理指定 owner，旧写入不能复活记录，失败不能宣称成功，重装不继承旧 owner。
5. 验证默认平台实现的备份、迁移、访问条件和应用隔离；私钥不导出，接口和辅助文件不通过 JS、选择器或其他原生入口泄漏。文档和模拟实现不算真机安全验收。

[apple-keychain]:
  https://developer.apple.com/documentation/security/restricting-keychain-item-accessibility
[android-keystore]: https://developer.android.com/privacy-and-security/keystore
[android-backup]: https://developer.android.com/identity/data/autobackup
[android-private-files]:
  https://developer.android.com/training/data-storage/app-specific
[flutter-secure-storage]: https://pub.dev/packages/flutter_secure_storage
