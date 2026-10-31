# Flax 应用权限与 iOS、Android 能力目录

状态：核心权限体系及可选平台包已实现，当前接口以[权限契约](../architecture/permissions.md)为准。平台资料核对日期为 2026-10-30；permission_handler 适配版本为 13.0.2。本文保留设计讨论与能力目录，示意代码不替代已实现接口文档。

本文定义应用清单、安装确认、运行时申请、binding 检查和权限扩展的分工，并按 iOS、Android 的公开应用能力整理目录。ID 已作为能力定义提供，不表示已有对应 Flax
API、插件或系统适配。平台的签名权限、系统服务权限和私有 entitlement 不直接变成 Flax 权限。

已实现的文件、资源包、localStorage 和 JS FFI 边界以
[沙箱契约](../architecture/sandbox.md)为准。清单权限、申请接口、权限注解、网络/Wasm 检查及受限 File 已接入；47 项目录只提供定义，不表示新增了全部设备 API。导航与宿主 Widget 树隔离仍暂缓，宿主必须让真实授权操作处于模块无法调用的位置。

## 1. 声明与授权规则

ID 精确匹配，不使用前缀或通配符授权。有效范围取应用声明与宿主上限的交集，授权记录不能扩大范围；例如 network 不隐含 network.local，读取不隐含写入。

每项受控能力必须出现在 `flax.json.permissions`
中并提供用途。宿主提供插件和允许策略，不会补齐应用未声明的权限。未声明时，调用和申请均拒绝，不展示弹窗。这一规则不依赖是否启用数据沙箱；原有未标记的普通 API 不因此全部增加检查。

安装器读取并校验清单，展示权限名称、用途和访问范围，再记录用户确认的声明快照。仅下载、解包或读取到一份清单不表示授权。内置 bundle 或 directory 没有独立安装界面时，也由可信宿主提供明确的批准入口，不能把一次普通 rebuild 当作用户同意。

| 使用分类      | 是否先调用 permissions.request()       | 本次操作如何确认                                                       |
| ------------- | -------------------------------------- | ---------------------------------------------------------------------- |
| I：配置型     | 不需要；声明并完成安装确认后直接调用。 | 不增加 Flax 权限弹窗，系统自身限制仍生效。                             |
| R：申请型     | 首次使用前需要，后续复用仍有效的授权。 | 宿主先取得所需原生权限，再进行 Flax 模块授权；实际调用仍检查。         |
| U：操作确认型 | 不需要；配置后直接发起受控操作。       | 在选择器、分享、编辑、认证等本次流程中确认，不叠加 Flax 通用授权弹窗。 |

从权限管理接口看只有配置型和申请型。I、U 均使用
`FlaxPermissionAuthorization.install`，R 使用
`FlaxPermissionAuthorization.runtime`；U 是目录上的操作特征，不是第三种可持久化授权状态。U 的逐次交互由具体服务强制，不能用安装确认或 request() 的结果代替选文件、认证、发送等本次操作。

这些规则由可信宿主或插件定义，应用不能在清单中降低授权要求。每个 API 仍检查宿主允许范围和资源归属；并非每个平台都为每种操作提供系统确认框，缺少相应界面时由受控宿主流程完成。

剪贴板采用 I。iOS 的程序读取与用户主动粘贴处理不同，不能假定每次读取都有系统提示，也不能把系统是否弹窗当作 Flax 授权依据。[Apple 剪贴板交互][apple-pasteboard]
说明了系统粘贴控件与程序读取的区别。

未知权限 ID、无效参数、缺少默认语言用途说明均为清单校验错误。已知但硬件或系统服务不可用的能力不能伪造授权，对应调用报告不可用。声明权限不会安装缺失插件，也不保证平台可用性。

### 1.1 配置后直接使用：6 项

共同前提是清单已声明、用途有效、安装时已确认、宿主允许。业务网络属于这一类；HTTP/HTTPS
Fetch 与 WebSocket 不需要额外的 Flax 运行时申请。局域网发现/连接是另一项能力，不能因为网络已配置就自动取得。

| 权限 ID                | 能力           |
| ---------------------- | -------------- |
| `flax.network`         | 业务请求       |
| `flax.module.remote`   | 远程模块       |
| `flax.wasm`            | Wasm 执行      |
| `flax.clipboard.read`  | 主动读剪贴板   |
| `flax.clipboard.write` | 写剪贴板       |
| `flax.motion`          | 原始运动传感器 |

未声明 network 时拒绝业务请求；已声明且未限制 origins 时才不限目标。剪贴板读写也直接检查清单和安装批准，不要求先 request()。系统自身的粘贴保护、传感器访问条件等照常生效。

### 1.2 使用前需要运行时申请：27 项

| 分组           | 数量 | 权限                                                                                                                                      |
| -------------- | ---- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| 采集与识别     | 4    | 相机采集、录音、系统语音识别、活动识别                                                                                                    |
| 定位           | 2    | 前台定位、后台定位                                                                                                                        |
| 个人数据       | 10   | 读照片/视频库、向图库添加、修改/删除图库、读系统音乐/音频库、读联系人库、写联系人库、读日历、程序化写日历、读系统提醒事项、写系统提醒事项 |
| 附近设备与通知 | 7    | 受管局域网设备访问、扫描蓝牙、连接蓝牙、蓝牙广播、读受支持 Wi-Fi 信息、附近设备测距、本模块通知                                           |
| 健康           | 4    | 读健康记录、写健康记录、后台健康任务、实时身体指标                                                                                        |

申请成功后，同一应用、同一权限和范围内的 API 复用授权，不按 API 或每次调用重复弹窗。需要系统权限时，必须由宿主先取得足够的原生授权，模块才能申请自己的权限；模块申请不会代为请求系统权限。后台、精度、数据类型等新增范围需要补充申请；不能因前台定位已获准就继续在后台采集。

### 1.3 配置后直接发起、本次流程确认：14 项

| 分组           | 数量 | 权限                                                |
| -------------- | ---- | --------------------------------------------------- |
| 资源选择       | 4    | 选择照片/视频、选择联系人、打开外部文档、导出文档   |
| 系统数据编辑   | 1    | 通过界面添加事件                                    |
| 设备与认证     | 3    | 请求连接指定 Wi-Fi、前台 NFC 标签操作、发起本地认证 |
| 外部展示与输出 | 3    | 打开外部链接、系统分享、打印当前内容                |
| 通讯           | 3    | 拨号界面/确认、短信编辑、邮件编辑                   |

这一类同样不需要先调用 permissions.request()。例如选择照片时直接打开系统选择器，选择的照片是本次授予的资源范围；读取整库则属于申请型。导出文件不授予沙箱外任意 File 写权限，拨号界面不授予静默拨号，短信编辑不授予读短信或静默发送。

以上分类只描述 Flax 是否需要额外申请，不取消系统权限或逐次确认。运行时申请和真实操作可以异步，binding
handler 仍只做同步判断。完整的两平台映射和限制见第 4 节。

### 1.4 宿主系统权限与模块权限分开

permission_handler 查询和申请的是主 App 的系统权限，没有 Flax 应用身份。Flax 自己的声明、安装批准、模块授权、范围和撤销记录单独管理，不能共用一份 granted 标志。

1. 需要独立系统授权的能力，由宿主 App 在可信的宿主界面先行申请。宿主尚未获得本次范围所需权限时，模块的 request() 返回 hostPermissionRequired，不弹模块授权框，也不自动打开系统弹窗或设置页。它只阻止相关能力，不阻止整个模块启动。
2. 宿主已有权限只是前置条件，不自动给任何模块授权。模块仍需清单声明、安装批准、宿主允许以及自己的运行时批准；主 App 或其他模块以前的同意不能代替本模块同意。
3. 每次实际使用也要求宿主系统授权仍然满足范围。宿主撤权后，已有模块批准不再产生有效访问；恢复宿主权限不会给尚未批准的模块补授权，也不能让已经撤销的模块权限复活。
4. 普通业务网络、剪贴板、自定义业务权限等没有对应独立系统申请时，原生前提明确为notRequired。文件选择、分享、认证等逐次操作仍执行自己的系统流程；文档选择器的单资源授权不等于可提前申请的整盘权限。
5. 宿主只有部分权限时，模块只能申请宿主可提供的具体范围；超出范围返回hostScopeInsufficient，调用方可显式缩小范围。系统不完整暴露授权结果时，返回unknown，不能推断已经允许；专用提供者只能在可确认的资源或范围内开放，无法证明时不进入模块授权或放行未知范围。

清单披露和安装确认可以发生在宿主权限不足时，它们不是系统授权或运行时模块批准。后续宿主取得权限后，申请型能力仍需模块自己的显式申请。

## 2. 应用配置与国际化

以下是发布清单的设计。构建工具将源配置写入 `flax.json`，不从代码调用自动补齐权限。

```json
{
  "id": "com.example.orders",
  "version": "1.0.0",
  "entry": "app.js",
  "defaultLocale": "zh-CN",
  "permissions": {
    "flax.clipboard.read": {
      "purpose": {
        "zh-CN": "粘贴用户复制的订单编号",
        "en": "Paste the order number copied by the user."
      }
    },
    "flax.network": {
      "purpose": {
        "zh-CN": "获取订单和物流信息",
        "en": "Retrieve orders and delivery information."
      },
      "origins": ["https://api.example.com", "wss://updates.example.com"]
    },
    "com.example.orders.read": {
      "purpose": {
        "zh-CN": "展示当前账号的历史订单",
        "en": "Display the current account's order history."
      }
    }
  }
}
```

`purpose` 统一使用语言表，单语言只填一项。每项权限都必须有 `defaultLocale`
的非空文案。展示跟随宿主已选定的 Locale，按完整 Locale、合适的语言/文字体系/地区、默认语言回退；保留
`zh-Hans`、`zh-Hant` 信息，不仅截取第一段语言代码。

应用提供名称、简介和用途翻译；宿主或插件提供权限名称，宿主提供按钮和固定说明。系统授权界面由系统和宿主原生资源管理。安装前解析静态文本，不执行应用 JS，不请求远程翻译，不依赖应用内部 i18n 库。ID、origins 和实际范围不参与翻译。全部用途翻译随包批准；切换显示语言不改变授权，更新用途仍需经过用途变更确认。

## 3. 定义、复用与 binding

稳定 ID 用于 JSON、安装记录和 JS SDK；Dart
API 引用同一个不可变定义。简单业务权限不需要空 policy 类或逐 API 检查函数。需要参数限制时才关联 policy 类型和同步 handler，沙箱原有按 Type 查找 policy 的机制不变。

权限定义、授权模式与 FlaxPermissionGuard 放在纯 Dart 的 flax_annotations；运行时策略、上下文、管理组件和安全存储放在 Core。生成器和 Core 使用同一份不可变元数据，annotations 不依赖 Core、Flutter 或 permission_handler，不新增独立的权限契约包。这些边界及下列注解已实现。

```dart
import 'package:flax_annotations/flax_annotations.dart';

// A business package defines one permission shared by both generated APIs.
const ordersRead = FlaxPermissionDefinition(
  id: 'com.example.orders.read',
  title: '读取订单',
  authorization: FlaxPermissionAuthorization.install,
);

@FlaxExport()
abstract class OrderApi {
  @FlaxPermissionGuard(ordersRead)
  Future<List<Order>> listOrders();

  @FlaxPermissionGuard(ordersRead)
  Future<Order> getOrder(String id);
}
```

`Order`
是 App 的业务类型。两个 API 共用声明和授权，同一权限也可用于订阅、详情等入口。读取不自动包含取消订单等写能力，也不能代替服务器对账号和订单的授权。

生成器将使用到的权限定义汇总进现有 binding 插件的不可变元数据，手工宿主插件提供相同定义。宿主在执行 JS 前建立目录；相同 ID 的冲突定义报错，不以后注册覆盖前者。App 扩展使用自己的命名空间，不能覆盖
`flax.*`。SDK/第三方 API 在 binding YAML 中引用同一定义。

带 scope 的权限由对应可信提供者定义允许字段、默认值、规范化、范围覆盖判断及实际 API 参数到 scope 的映射；没有范围的权限只接受省略或空 scope。清单、query/request、申请合并、持久记录和 handler 使用同一规则，只接收可验证的普通数据，未知字段及无法解释的范围直接拒绝。不能让通用 JSON 子集比较决定“后台定位包含前台”“读包含写”等业务含义，也不新增通用范围规则引擎。

批准的是宿主界面展示的完整目标范围。扩大范围时由提供者计算保留旧批准后的目标，并重新验证清单、宿主和系统上限；无法安全合并时明确失败或重新确认完整目标，不自动拼 JSON、扩大权限或悄悄丢弃旧批准。

```text
确定当前 Session 和调用参数
  → 校验已批准声明与宿主允许范围
  → 检查本次范围所需的宿主系统权限前提
  → 检查当前模块实际授权与范围
  → 执行同步参数 handler（若有）
  → 执行现有沙箱规则
  → 调用原 API 或受限后端
```

权限检查位于沙箱替换之前，`replace` 路径也不能跳过。权限层第一版只检查，不新增
`replace`。一个 API 需要多项权限时全部满足，例如录音录像需要相机和麦克风，后台定位需要定位及后台定位，不增加通用授权表达式语言。

构造函数、静态/实例方法、顶层函数、访问器、操作符、extension，以及继承、泛型和 `super`
沿用原声明识别。带检查的访问器不能被 JS 常量或缓存绕过，普通 API 不普遍加壳。Fetch/WebSocket、模块加载在 Dart 实际请求位置检查，不伪装成生成 binding。

handler 保持同步，不弹窗、不重试，不更改目标的同步/Future/Stream 契约。同步 API 同步拒绝，Future
API 使用失败 Future/Promise
rejection；Stream 服务在实际订阅启动时也检查。控制器、流和连接绑定调用者与有效范围，只标注工厂不足以保护后续操作，不引入通用 Promise 结果过滤器来隔离任意宿主对象。

模块申请接口可以异步，但不调用 permission_handler.request()。成功后更新当前 Session，不重建并销毁正在等待结果的 JS。同项并发申请合并，不同请求由宿主协调且不无限排队；关闭后的迟到结果不能恢复资源。原生状态查询可能异步，不能要求同步 handler 完成原生查询，也不能只靠永久缓存判断系统授权。具体规则见第 3.2 至 3.5 节。

授权按宿主确认的应用身份、权限 ID 和范围保存，账号相关授权还须绑定账号。不同 API 可以共享，应用重新运行可复用仍有效的授权，不同应用不继承。`manifest.id`
不是自证身份，宿主须确认归属。记录放在宿主管理区域，不放在 JS 可写的 data、localStorage 或包内容中。

新增权限、扩大范围或改变用途需重新确认。撤销先阻止新访问，再清理该应用活动资源；首版可以重建受影响 Session。通知计划、后台任务和持久原生访问记录需插件额外清理，不能仅凭重建 Session 宣称已撤销。模块撤销不能撤销整个主 App 的系统授权。

申请拒绝正常返回状态，未授权实际调用使用
`FLAX_PERMISSION_DENIED`，保留权限 ID、operation 及
`notDeclared`、`notApproved`、`hostDenied` 等原因。沙箱拒绝仍为
`FLAX_SANDBOX_DENIED`。binding、Future/Stream、Fetch、WebSocket 保持原返回/事件模型，不把错误仅转换成字符串。

### 3.1 外部文件：选择器返回受限 File

选择器返回实现 Dart `File` 接口的受限对象，复用现有 File
binding、FileImage 和 Image.file。默认直接访问用户选中的原文件，不复制到 data；不再设计独立文档对象的读写、流和 close 接口。受限 File 及宿主选择器接口已实现，移动端原生资源后端由宿主提供，见[实际接口](../architecture/permissions.md#selected-external-file)。

#### 3.1.1 选择与对象边界

采用 `flax.documents.open`，清单声明用途和 `mode`（`read` 或 `readWrite`，默认
`read`）。安装批准后可以直接发起选择器，无须额外request()；每次选择仍由系统界面确认具体资源。未声明或未批准时，在打开选择器前拒绝。
`readWrite` 仅表示可请求修改选中文件内容，不包含删除、重命名或父目录访问。

Dart 选择器的返回类型为
`Future<File?>`，取消返回 null；JS 通过现有 Future 和对象引用桥接收到 File，不新增返回结果过滤器。以下示例假定用户选择了一张图片：

```javascript
// The host installs FlaxDocumentPlugin and supplies the trusted picker backend.
const file = await documents.open({ mode: 'read' });
if (file) {
  const preview = Image.file(file);
  // Large files can also be processed through file.openRead().
}
```

宿主签发的文件对象绑定可信应用身份、Session、选中资源、授权标识及有效读写范围。范围取清单、宿主策略、本次请求和系统实际授权的交集，不能把只读升级为可写。原生 URI、安全范围 URL、文件描述符和普通宿主 File 只保留在受限后端，不交给 JS。

`FlaxFilePolicy.requireFile`
接受当前 Session 的 data 文件，以及该 Session 签发且授权仍有效的选中文件；不能简单放行任意
`implements File` 的对象或 JS
proxy。检查 handler 仍同步，实际读写范围也由文件对象内部检查，覆盖 Flutter 原生调用等不经过 binding 的路径。

`File(path)`、`File.fromUri`、Directory 和按路径调用的 FileStat/FileSystemEntity 规则不扩展，仍然只能访问当前 data。选中一个文件不开放父目录、同目录文件、链接目标或其他应用的资源。主 App 私有数据继续通过明确业务 API 提供，不借选择器授予任意宿主路径访问。

授权账本、安装记录、密钥及其他模块的存储属于宿主保留资源，不能通过文件选择器重新签发访问权。检查必须针对实际资源身份和允许范围，覆盖链接、URI 别名及自定义 FileProvider，不只比较文件名；宿主也不能把内部管理目录作为分享目录或资源包暴露。相关存储建议见第 9 节。

#### 3.1.2 方法范围与显式复制

下表仅约束选择器返回的外部 File，data 内 File 保持现有契约。未列出或未来新增的资源操作先拒绝，经审查后再开放，不能自动委托给普通宿主 File。

| 方法或属性                                                                             | 支持范围与拒绝规则                                                                                                                                       |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| path、uri、isAbsolute、absolute、toString                                              | path/uri 仅描述不透明资源标识，不暴露原生 URI 或宿主真实目录；isAbsolute 描述标识格式，不保证真实本地路径；absolute 返回同一个受限对象。                 |
| exists                                                                                 | 有效授权下检查选中文件是否存在；撤权不能伪装为 false，原生访问错误不伪装成不存在。                                                                       |
| length、stat、lastAccessed、lastModified                                               | 提供者能真实提供所需信息时支持；大小或时间未知时明确报告不支持，不伪造值，未知大小不能当作 0。                                                           |
| readAsBytes、readAsString、readAsLines                                                 | 需要有效读取范围，沿用编码及错误语义；显式整文件读取会占用内存，不作为大文件默认处理方式。                                                               |
| openRead([start, end])                                                                 | 支持有限块大小、背压、暂停与取消；区间读取保持 Dart 语义，后端不能安全实现时报告不支持。流在实际订阅和持续读取时检查授权。                               |
| writeAsBytes、writeAsString                                                            | 需要 readWrite 且原生后端支持相应写入模式、追加/截断和 flush；只修改已选原文件，成功返回同一个受限 File，不重建普通 File。不支持的模式不降级为其他写法。 |
| copy(destination)                                                                      | 显式导入：从选中文件流式复制到当前 data；目标先经过现有受限路径后端检查，成功返回 data 内受限 File。不能写到另一个外部路径，不经过整文件 JS 缓冲。       |
| parent、create、rename、delete、setLastAccessed、setLastModified、resolveSymbolicLinks | 第一版拒绝，包括递归变体；readWrite 不增加这些操作或其他文件的访问范围。                                                                                 |
| 所有 *Sync、open、openSync、openWrite、watch                                           | 第一版拒绝，不输出原始 RandomAccessFile、IOSink 或文件监听；不因某个平台恰好支持本地文件而放宽通用契约。                                                 |

因此不再新增 importFile 读写体系。明确需要独立副本时调用
`file.copy(dataPath)`，原文件默认保持原位置；副本随后按 data 文件的现有规则使用。复制失败或取消必须释放源资源，清理临时结果时不能删除调用前已经存在的目标。

`flax.documents.export`
仍对应用户选择输出目标的受控导出流程，由宿主从合法 File/数据流写入；它不放宽 File.copy、File(path) 或普通路径写入。只有接受真实路径的第三方 API 才考虑显式临时副本，并由该操作负责空间和清理，不默认复制全部大文件。

#### 3.1.3 Image.file 与缓存隔离

当前 Flutter 的 FileImage 对自定义 File 调用 `length()` 和
`readAsBytes()`，能够复用受限对象的真实读取逻辑；Image.file 内部创建 FileImage，不需要给 JS 增加专用图片接口。提供者须能满足这两个方法；未知大小等情况不能以假值绕过检查，不可用时明确失败。使用前仍检查资源可读，不能把普通宿主 File 直接作为已授权对象接纳。

FileImage 的原生相等判断和缓存键依赖
`file.path + scale`。外部 File 的不透明 path 必须区分应用、Session 和本次资源授权，同一有效授权保持稳定；不能只用文件名或外部真实路径。这样保留授权内的正常缓存复用，防止跨应用、跨 Session、跨授权复用。该标识不代表本地可访问路径，也不能通过 File(path)/File.fromUri 重新获得授权；data 内 File.path 继续使用真实绝对路径。

仅把受限 File 传给原生 FileImage 还不完整：缓存命中可以不执行 File
IO。需要 Dart 内部的受限图片 provider，在每次进入缓存查询前检查资源令牌，并在真实加载和交付解码结果前复查；签发键之后发生撤权也不能继续命中。不能只在构造、File.readAsBytes 或 JS 显式调用 obtainKey 时检查。

直接 FileImage、Image.file 内部创建的 provider，以及 ResizeImage 的外层尺寸缓存都须走这条受控路径。Image.file 需由 Dart
binding 替换构造其 provider 链，保留原参数与 Widget 行为；内部 provider 在类型需要时保持 FileImage 兼容，单靠拦截 JS 的 FileImage 构造覆盖不了 Flutter 内部调用。授权登记覆盖派生缓存键，已有沙箱内图片规则不放宽；不修改 Flutter
SDK，不给应用新增图片 API。

写入成功后使该资源的旧图片缓存失效，并让相关视图重新获取；只读对象不能沿用其他可写对象的授权。撤权或 Session 关闭时停止后续加载、使迟到的解码结果失效、清理该授权关联的缓存及视图引用，不清空主 App 或其他模块的全局缓存。已交给业务的字节和已经显示的像素无法通过撤权追回，不能承诺擦除所有历史内容。

Image.file 复用接口不等于低内存解码：该读取分支会取得完整编码图片字节，解码另有内存成本。大文件普通处理优先 openRead；图片大小控制或预览优化由具体服务另行设计，不通过隐式复制声称节省内存。

#### 3.1.4 授权与异步资源生命周期

1. 选择前校验声明、安装批准和请求范围；打开系统选择器属于目标 API 的异步工作，权限和沙箱 handler 保持同步，不自动弹第二个授权框或重试。
2. 选择完成后再次确认 Session、应用身份和授权仍有效，再签发受限 File。取消返回 null；关闭或撤权后到达的选择结果不得交付，并释放这次流程取得的原生资源。
3. 每次真实 IO 检查对象归属、有效授权及读写范围。writeAsBytes/writeAsString 返回 Future<File>
   时保留同一个受限对象；copy 返回当前 data 的受限对象。Stream 在订阅时检查，并在持续读取中响应撤权、关闭和取消，不能因早已创建流就继续访问。
4. 撤权先使该授权关联的全部 File、流和图片加载失效，再取消订阅、清理缓存及在途工作。原生句柄按每次操作或流的生命周期打开和关闭；完成、失败、取消和 Session 关闭均释放资源，不依赖 JS
   GC，也不给 File 新增 close()。无法立即取消的原生操作在结束后释放资源，不能交付迟到结果；已经完成的写入不保证回滚。
5. 资源对象默认只在当前 Session 有效，不序列化 File/path 作为下次授权，也不跨 Session 复用对象。未来若支持长期访问，由宿主按应用单独保存原生授权记录，恢复时重查声明、批准、撤销状态及原生有效性，再签发新对象；清理一个模块的记录不撤销主 App 或其他模块的共享系统授权。

未声明、未批准、读写范围不足或已撤销使用本文的
`FLAX_PERMISSION_DENIED`，保留权限 ID、operation 和具体原因；data 越界和固定沙箱拒绝继续使用
`FLAX_SANDBOX_DENIED`，包括表中的父目录、创建/重命名/删除、修改时间、链接解析、原始句柄和监听拒绝。Session 关闭沿用会话关闭错误。其余本版未支持的同步方法或提供者能力使用 UnsupportedError，原生文档消失及读写失败保留实际 IO 错误，不混为用户拒绝，也不静默返回成功。上述错误在 Future/Stream 中继续走原来的 Promise
rejection/流错误通道。

#### 3.1.5 平台适配与空间边界

Android 后端通过文档 URI 和 ContentResolver 访问；提供者可能给出不可 seek 的流，文件大小也可能未知，不能强行转为普通本地 File。iOS 后端管理安全范围 URL、文件协调及对应资源释放。[Android 文档访问][android-documents]、[Android 文档流][android-document-streams]和
[Apple 外部文档访问][apple-shared-documents]定义了原生访问方式，File 接口适配不能跳过这些要求。

不主动复制不等于物理零拷贝或零额外空间：云端提供者可能下载、缓存或暂存内容，修改文件及原生协调也可能需要临时空间。受限 File 统一的是受支持的对象读写方式，不承诺拥有真实路径、全部同步方法或所有本地文件语义。

### 3.2 permission_handler 的适配边界

permission_handler 是可选的宿主系统权限后端，不是 Flax 模块权限后端。Core 保留声明、批准、模块授权、binding 检查和错误定义，不直接依赖或向 JS 导出 Permission、Permission.values、原生整数编号及原生 request/openAppSettings。业务权限与扩展也不依赖这个库。

| 层面                    | 职责                                                                                  |
| ----------------------- | ------------------------------------------------------------------------------------- |
| Flax 权限定义与 binding | 用稳定 ID 标注操作、收集不可变定义、执行同步检查；保留沙箱 check/replace/deny。       |
| 宿主系统权限适配        | 将能力和 scope 映射到原生前提，安全地异步查询；只有可信宿主流程可以申请系统权限。     |
| Flax 模块授权           | 宿主前提满足后，询问是否允许这个模块使用声明能力，单独记录范围、历史与决定。          |
| 实际服务后端            | 限制部分照片、只读日历、定位精度、选中文件和活动资源，不凭系统 granted 放开全部资源。 |
| 宿主原生工程            | 集成插件、Manifest/Info.plist/entitlement 和平台配置；动态安装模块不会补写原生配置。  |

一个 Flax 权限可以依赖多个系统权限，多个 Flax 权限也可以共用同一个系统权限。后台定位按原生要求分阶段取得，照片按媒体类型与系统版本映射；不按名字把目录一对一映射到 Permission。普通网络、剪贴板和纯业务权限可以没有原生请求；外部文档走选择器，不申请 storage/manageExternalStorage 来解除沙箱。

所需适配器缺失、平台不支持或原生配置不足时，报告 unavailable/hostMisconfigured，不伪装成用户拒绝。该库当前主包支持列表没有 macOS，宿主可另接实现；未接入某平台的系统权限不影响不依赖该原生能力的模块功能。

版本核对包含平台分包。Android 14.1.x 已要求 compileSdk
37，不只照抄主包 README 中旧的 35；iOS 按实际 CocoaPods/SPM 配置启用能力。原生 usage
description 属于主 App 的本地化资源，模块 purpose 只用于模块授权界面，不能运行时替换系统弹窗文案。[主包与配置][permission-handler]、[Android 更新记录][permission-handler-android]和
[Apple 更新记录][permission-handler-apple]记录了平台差异。

### 3.3 JS 权限查询、申请与状态

第一版提供两个异步接口，已安装在 Session 的 JS 全局中：

```typescript
declare const permissions: {
  query(id: string, options?: { scope?: unknown }): Promise<FlaxPermissionResult>;
  request(id: string, options?: { scope?: unknown }): Promise<FlaxPermissionResult>;
};
```

scope 使用第 3 节提供者的统一规则，省略时使用该声明的默认申请范围。query 只查询本模块可见状态，不弹窗、不写批准、不增加申请历史，不枚举宿主其他权限。request 是应用显式发起模块授权的唯一入口，建议在用户操作时调用，不自动重试，不请求宿主系统权限。JS 自报 userGesture 不能证明真实交互；可信同意来自宿主界面，由宿主检查可交互状态并约束重复提示。

| 返回字段      | 含义                                                                                                                                                         |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| permission    | 本次查询的稳定权限 ID。                                                                                                                                      |
| state         | 本模块在本次 scope 下的有效状态，见下表；不是原生状态的直接透传。                                                                                            |
| requested     | 当前可信应用/账号、该权限和声明版本是否进入过合法模块授权流程；不是任意 scope 的完整申请历史，也不能推断系统是否弹过框。                                     |
| reason、scope | 原因和实际批准/可用范围，例如 notDeclared、notApproved、hostDenied、hostPermissionRequired、hostScopeInsufficient、moduleDenied、cancelled；不伪造完整范围。 |
| serviceStatus | 仅相关服务返回 enabled、disabled、notApplicable 或 unknown，设备服务开关与权限批准分开。                                                                     |

| state       | 定义                                                                       |
| ----------- | -------------------------------------------------------------------------- |
| prompt      | 宿主前提满足，但模块当前范围尚需批准或重新确认；不保证系统将弹框。         |
| granted     | 模块已批准，宿主与系统可确认的范围覆盖本次请求；实际 API 仍检查。          |
| limited     | 模块已有批准，但实际有效交集只有部分资源或范围；只允许 scope 内的操作。    |
| denied      | 声明、安装批准、宿主策略、宿主系统前提或模块决定阻止使用，由 reason 区分。 |
| unavailable | 缺少提供者、所需配置、系统能力或硬件，不能伪装成授权成功。                 |
| unknown     | 无法安全确认必要授权状态；不当作 granted，也不写入用户已拒绝的决定。       |

模块尚未批准时，不因宿主原生 limited 就返回模块已获部分授权；须先为宿主可覆盖的范围申请模块批准。已有批准在宿主范围缩小时，可用部分以 limited 和 scope 表达。通知 provisional 仅表示允许的非打扰式通知范围，不能折算为全部通知能力；系统 restricted 不会因重复申请解除。[原生状态定义][permission-handler-status]
供适配层参考，系统细节仅按本模块实际需要解释，不向未声明模块暴露主 App 的全量状态。

requested 在本权限当前声明版本下记录，用户拒绝或取消后可以为 true；扩大 scope 后也可能 requested=true 且 state=prompt，不能据它判断本次范围已申请或已批准。未声明、未批准或宿主前提不足而提前返回时，不因调用 request 就新增申请历史。安装型可以 requested=false 且 state=granted。文件选择权限 granted 只表示可打开选择器，具体文件权利保存在返回的受限 File 中。

状态计算顺序固定，避免未声明模块探测宿主状态，也避免同一结果被不同入口解释成不同权限：

1. 校验 ID 和规范化 scope；未知 ID 或非法参数报错。未声明、声明未批准或宿主策略拒绝时直接 denied，不读取并暴露相关宿主系统细节。
2. 检查提供者、必要配置及安全记录；缺失或不可用返回 unavailable，必要状态无法可信确认时不建立有效授权。存储异常按第 9 节处理，不转为 prompt 或用户拒绝。
3. 必需的宿主原生状态未知返回 unknown，缺少所需权限返回 denied 及 hostPermissionRequired；仅有部分可确认范围时，request 超范围返回 hostScopeInsufficient，query 只计算可用交集。
4. 安装型使用已批准声明；申请型使用当前 approvedScope。仍有效的批准完整覆盖本次范围时 granted；否则整项撤销或最近一次对同一规范化目标的明确拒绝返回 denied/moduleDenied，并保留可用的较小 scope。其余情况，有部分有效批准则 limited，没有则 prompt。取消不变成持久拒绝，拒绝扩大范围也不影响对较小已批准范围的查询。
5. 返回本模块实际可见的 scope 和 serviceStatus。服务开关与授权决定分开，不能因服务打开就批准，也不能因服务暂时关闭抹掉模块决定。

Android
14.1.0 起，普通 status 查询无法区分未请求、永久拒绝和已重置为“每次询问”，只有宿主真正 request 的结果可能报告 permanentlyDenied。不能从模块 requested、旧结果或 shouldShowRequestRationale 推导永久准确的 canRequest 标志，也不能将 denied 一律解释为永不允许再次申请。[Android 状态变更][permission-handler-android]

下例 request 由用户点击功能触发；宿主权限不足时返回原因，由宿主提供自己的设置引导，不自动衔接系统申请：

```javascript
// Query and request only this module's permission.
const current = await permissions.query('flax.camera');
const result = await permissions.request('flax.camera');
if (result.state === 'granted') {
  // The camera API still checks the effective module and host permissions.
} else if (result.reason === 'hostPermissionRequired') {
  // The host App must obtain its own system permission first.
}
```

query/request 返回相同结构。用户拒绝、取消及正常前置阻断通过结果表达；未知 ID、非法 scope、实现或桥接错误保留明确错误，不伪装成用户拒绝。真正受控 API 未授权时仍抛 FLAX_PERMISSION_DENIED，保持 operation、permission 和 reason。

### 3.4 宿主配置与模块申请流程

FlaxView 的拥有型入口和 FlaxSession 接收同一个不可变 permissions 宿主策略，与 sandbox 并列。宿主允许列表只缩小范围，不补清单声明、不替代模块或系统授权。FlaxView.session/page 继承 Session，不逐页面覆盖；宿主策略快照变化重建 Session，授权状态变化更新现有 Session。

```dart
final policy = FlaxPermissionPolicy(
  application: approvedApplication,
  allow: {'flax.camera', 'flax.network', 'flax.documents.open'},
  onRequest: showModulePermissionDialog,
);
```

onRequest 的设计契约如下；实际接口以 [权限契约](../architecture/permissions.md) 为准：

```dart
enum FlaxPermissionDecision { allow, deny, cancel }

typedef FlaxPermissionRequestHandler =
    Future<FlaxPermissionDecision> Function(FlaxPermissionRequest request);
```

FlaxPermissionRequest 携带 Core 创建的只读快照，包含可信应用展示信息、权限名称、已批准用途与显示语言、当前批准及本次完整目标范围。回调只决定 allow/deny/cancel，不能返回另一个身份或扩大目标；它只询问本模块，不在其中调用 permission_handler.request()。未提供回调而确实需要申请时返回 unavailable/moduleConsentUnavailable；界面不能交互时返回 unavailable/interactionRequired，不后台弹框或无限挂起。

request 另提供只读的 Future<void>
whenCancelled，最后一个合法等待者关闭、请求失效或卸载时通知宿主关闭相应界面并释放占位；还有合法等待者时不取消共享请求。宿主不得将取消当同意；不可取消的弹窗 Future 迟到仍丢弃。未进入界面的 busy、缺少回调或不可交互结果不新增 requested。

未提供策略时受控能力默认不允许；未标记普通 binding 不因此全部增加检查。权限定义由可信插件提供，不由 JS 选择 native
Permission 编号。

1. 确认 Session 仍处于 open、可信应用身份、已批准声明、宿主允许范围、提供者及本次所需的宿主系统前提。宿主权限不足或必要状态未知时直接返回原因，不弹模块授权框。
2. 安装型直接返回有效状态，不弹通用框；操作确认型也不会由 request 代替选择器或认证。申请型若已有有效范围批准则直接复用，否则进入模块授权流程，实际展示前再检查宿主前提与宿主界面状态。
3. 按安装 owner、账号、权限、声明版本及规范化目标合并同项请求；同一 owner 同时只展示一个模块授权流程，不同项并发可返回 busy，由调用方显式顺序重试。记录本模块申请及用户允许、拒绝或取消；取消或拒绝扩大范围均保留原 approvedScope，不自动重试或排队重弹。
4. 回调完成后重查 Session、安装实例/账号、声明版本、策略、授权修订和宿主系统前提；新批准可靠写入后再次检查这些条件，才更新活动 Session 并交付。存储完成不等于仍有效，不满足条件不发布迟到批准；普通 rebuild 不产生同意记录。
5. 返回与 query 相同的最新有效状态，申请结束不等于 granted。明确的模块拒绝可按宿主管理规则再次申请或在模块设置修改，不自动循环弹窗；固定宿主拒绝不能借重复 request 绕过。

宿主自己申请系统权限时，也在宿主级协调并发、原生依赖和分阶段规则，不能仅在单个 FlaxView 排队。Android 实现会拒绝尚有请求运行时再次申请；Dart 链式回调保存在静态字段中，可能被其他调用覆盖。适配层优先等待列表接口返回值，按原请求归属处理，不将链式回调绑定到模块：

```dart
// Host-only request from trusted host UI, never JS permissions.request().
final results = await [Permission.camera].request();
final status = results[Permission.camera];
```

结果只更新宿主系统状态，不直接写任何模块 granted，也不广播为所有模块批准。[Dart 实现][permission-handler-dart]与
[Android 申请实现][permission-handler-android-source]说明了这些共享状态边界。

### 3.5 授权刷新、设置与生命周期

query 必须无弹窗副作用。不能盲目查询库里所有 serviceStatus，例如 iOS
bluetooth.serviceStatus 未授权时可能弹系统框；不安全的探测跳过并保留 unknown，不以 query 之名代为申请。[服务状态说明][permission-handler-service]

| 事件                                     | 处理                                                                                                               |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| 模块 query、request、实际能力调用        | 使用当前模块决定与宿主前提；query/request 可以异步刷新，同步 handler 只检查维护中的状态和范围。                    |
| 宿主系统申请完成、App 回前台、设置页返回 | 异步刷新相关安全可查询状态，必要时先使过期快照失效，再重算受影响 Session；不自动申请模块权限。                     |
| 宿主系统撤权或范围缩小                   | 停止不再满足条件的访问，取消相关流、连接、图片加载和后台操作；保留模块用户决定，但不再视为有效授权。               |
| 模块撤权、清单/账号/来源变化             | 先使授权修订与活动令牌失效，再更新记录并清理关联资源；不撤销整个主 App 的系统权限。                                |
| Session 开始关闭或申请期间失效           | 先停止接纳新申请及新受控资源，移除关闭者的等待并释放资源；共享流程的其他合法等待者不受影响，迟到结果不能复活资源。 |

不能在同步 handler 内阻塞等待原生异步状态，也不能永久缓存系统 granted。刷新中的未知必要状态不沿用旧批准放行；实际服务处理原生权限错误并使缓存失效，避免一次查询通过成为永久通行证。只刷新受影响状态，不为每个普通 binding 调用增加一次平台通道查询。

初始化加载、query、申请、原生刷新及存储完成都捕获可信安装/账号、声明/策略与模块决定修订；发布结果前检查仍然匹配。原生刷新另有代次，较早查询晚返回不能覆盖较新系统状态。撤权、账号切换、卸载或关闭在等待清理之前先失效相应代次；不能只校验授权弹窗回调，遗漏普通查询和读取。

现有 Session 的 active 在 closing 阶段仍可能为 true，供清理既有资源使用。新申请和新资源必须要求 open，不能用 active 代替这个准入条件；清理回调只释放既有资源，不创建新授权。上述修订与代次属于内部生命周期规则，不增加 JS 令牌 API。

模块授权与宿主系统授权是两个设置入口。模块管理界面修改该模块决定；进入主 App 系统设置由可信宿主界面和用户明确操作触发，不能直接向 JS 导出 openAppSettings。其 true 只表示页面成功打开，返回 App 后仍需重查，不表示已经授权。[设置接口][permission-handler-settings]

有效状态由当前条件计算，不持久化为永久 granted。Future/Stream、选中文件、图片缓存、持久原生访问记录和后台任务继续遵守第 3.1 节及各服务生命周期；关闭一个模块不能取消其他模块合法持有的共享宿主能力。

## 4. 标准能力候选目录

共
**47 项候选权限**，按能力而非系统常量或 API 插槽计数。ID 和 I/R/U 为建议约定，是插件可采用的目录，不要求 Core 现在提供全部类型、实现或依赖。数据类型、精度、设备集合和操作范围优先用参数约束，不为每种健康记录或蓝牙特征创建 ID。

### 4.1 基础、网络与代码执行：5 项

| 权限 ID / 能力                      | 方式 | iOS 对应                                  | Android 对应                           | Flax 范围与限制                                                                      |
| ----------------------------------- | ---- | ----------------------------------------- | -------------------------------------- | ------------------------------------------------------------------------------------ |
| `flax.network`：业务请求            | I    | 普通互联网请求，系统网络/TLS 规则仍适用。 | INTERNET，不包含所有网络相关系统许可。 | Fetch/WebSocket 共用；可选 origins；未声明拒绝，声明后不填 origins 才不限目标。      |
| `flax.module.remote`：远程模块      | I    | 宿主加载器，无独立 ESM 系统权限。         | 同左。                                 | 独立来源名单；静态/动态远程 import、JSON/Wasm 和缓存命中均检查，不继承业务 origins。 |
| `flax.wasm`：Wasm 执行              | I    | 引擎解释能力，无普通 Wasm 系统授权框。    | 引擎能力。                             | 未声明禁用；覆盖模块导入及直接编译、实例化，不只检查后缀。                           |
| `flax.clipboard.read`：主动读剪贴板 | I    | 系统粘贴保护仍生效。                      | 系统剪贴板规则仍生效。                 | getData、hasStrings 共用；不加 Flax 弹窗；不冒充禁止用户在原生文本框主动粘贴。       |
| `flax.clipboard.write`：写剪贴板    | I    | 系统剪贴板。                              | 系统剪贴板。                           | setData 等共用，安装页明确说明用途。                                                 |

业务网络与远程模块分别授权。远程 Wasm 同时满足模块来源和执行许可。
`requiredCapabilities` 只表示引擎支持，不能代替权限。These restrictions replace the
earlier sandbox proposal’s permissive network and Wasm defaults and are implemented; see
the [permission architecture](../architecture/permissions.md).

平台依据：[Android 网络][android-network]、[Apple 剪贴板][apple-pasteboard]。

### 4.2 相机、声音、定位和运动：7 项

| 权限 ID / 能力                          | 方式 | iOS 对应                                              | Android 对应                                        | Flax 范围与限制                                                                   |
| --------------------------------------- | ---- | ----------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------------------------------------- |
| `flax.camera`：相机采集                 | R    | Camera 授权、用途说明。                               | CAMERA。                                            | 拍照、视频帧、相机控制共用；录音另需麦克风；不开放主 App 活动控制器。             |
| `flax.microphone`：录音                 | R    | Microphone 授权、用途说明。                           | RECORD_AUDIO。                                      | 录音/实时输入共用，不自动允许后台长期采集。                                       |
| `flax.speech.recognition`：系统语音识别 | R    | SFSpeechRecognizer 授权，并非所有本地识别实现都需要。 | 所用识别服务及其要求，无同名通用权限。              | 实时录音另需麦克风，说明是否发送服务端；纯内存本地算法不自动纳入。                |
| `flax.location`：前台定位               | R    | 使用期间授权和精度限制。                              | 粗略/精确定位权限。                                 | 单次/持续前台定位共用；限制精度、频率；宿主在前台但模块不可见不自动视为前台使用。 |
| `flax.location.background`：后台定位    | R    | 后台定位能力及实际需要的授权级别。                    | ACCESS_BACKGROUND_LOCATION 及执行规则。             | 另需 location，分阶段申请，不合成一个普通定位开关。                               |
| `flax.motion`：原始运动传感器           | I    | 按具体 Core Motion API 和隐私要求适配。               | 多数基础加速度/陀螺仪无运行时授权，采样限制仍适用。 | 限采样率和运行阶段，不包含活动识别、健康数据或普通触摸/滚动事件。                 |
| `flax.activity`：活动识别               | R    | Motion & Fitness 对应能力。                           | ACTIVITY_RECOGNITION 等 API 要求。                  | 行走/跑步分类；计步按真实数据来源映射，不自动获得健康库读取权。                   |

平台依据：[Apple 受保护资源][apple-protected]、[Apple 语音识别][apple-speech]、
[Apple 定位][apple-location]、[Android 定位][android-location]、[Android 传感器][android-sensors]。主 App 已获精确定位而模块只获粗略许可时，提供者必须限制实际返回精度，不能只改状态标签。

### 4.3 照片、文档、联系人和日历：15 项

照片的原始位置元数据属于额外 scope，不等于当前位置定位。Android 的未脱敏媒体位置可能需要 ACCESS_MEDIA_LOCATION；不承诺这类数据时，提供者也不能把含 GPS 的原始字节作为“已去除位置”返回。资源类型、位置元数据、字段和记录范围使用参数约束，不继续增加权限 ID。

| 权限 ID / 能力                               | 方式 | iOS 对应                                       | Android 对应                                     | Flax 范围与限制                                                                              |
| -------------------------------------------- | ---- | ---------------------------------------------- | ------------------------------------------------ | -------------------------------------------------------------------------------------------- |
| `flax.media.pick`：选择照片/视频             | U    | PhotosPicker/PHPicker。                        | Photo Picker。                                   | 仅选中内容；限制类型、数量，不要求整库读取。                                                 |
| `flax.photos.read`：读照片/视频库            | R    | PhotoKit，含 limited 范围。                    | 相应媒体或所选媒体授权，按版本适配。             | 媒体类型和允许资源集合受限，不继承宿主全库访问范围。                                         |
| `flax.photos.add`：向图库添加                | R    | add-only Photos 授权。                         | 添加自有 MediaStore 媒体通常无需旧式全盘写权限。 | 仅添加当前应用内容，不读取或删除原图库。                                                     |
| `flax.photos.modify`：修改/删除图库          | R    | 对应 PhotoKit 访问范围。                       | MediaStore 修改流程，可能需逐项确认。            | 与读取、添加分开，不能用永久批准绕过原生确认。                                               |
| `flax.audio.library.read`：读系统音乐/音频库 | R    | Media Library / Apple Music 的相关授权与 API。 | 读取其他应用共享音频的相应媒体权限。             | 不获得 DRM 文件、订阅权益或任意路径；自有内存/包内音频不属于此项。                           |
| `flax.contacts.pick`：选择联系人             | U    | 系统联系人选择器。                             | 系统选择流程，Android 17 提供新 Contact Picker。 | 仅选定联系人和所需字段，不枚举整本通讯录。                                                   |
| `flax.contacts.read`：读联系人库             | R    | Contacts，含 limited 范围。                    | READ_CONTACTS。                                  | 限联系人集合和字段，搜索/详情 API 可共用。                                                   |
| `flax.contacts.write`：写联系人库            | R    | Contacts 对应访问范围。                        | WRITE_CONTACTS。                                 | 限创建/修改/删除，不因系统权限较粗而隐含授予读取。                                           |
| `flax.calendar.add`：通过界面添加事件        | U    | EventKitUI 编辑器。                            | 日历插入 Intent。                                | 用户编辑并保存，不读取日历，与程序化写入分开。                                               |
| `flax.calendar.read`：读日历                 | R    | 系统需要 EventKit full access。                | READ_CALENDAR。                                  | Flax 仍只提供读取，系统较宽授权不扩展模块能力。                                              |
| `flax.calendar.write`：程序化写日历          | R    | 新增可用 write-only，编辑/删除按实际级别。     | WRITE_CALENDAR。                                 | 限操作及目标，不自动对 JS 导出所有日历内容。                                                 |
| `flax.reminders.read`：读系统提醒事项        | R    | EventKit reminders full access。               | 无统一等价系统库，需具体宿主服务。               | 不伪造跨平台可用性；模块自己存储的待办无需此项。                                             |
| `flax.reminders.write`：写系统提醒事项       | R    | EventKit reminders full access。               | 同上，不等于通知或精确闹钟许可。                 | 限修改目标和数据范围。                                                                       |
| `flax.documents.open`：打开外部文档          | U    | 系统文档选择器及受限原文档访问。               | Storage Access Framework 等选择流程。            | 选择器返回受限 File，read/readWrite 分别检查；Image.file 保留授权，copy 到 data 才显式复制。 |
| `flax.documents.export`：导出文档            | U    | 系统导出界面。                                 | 系统创建文档界面。                               | 宿主写入用户所选目标，普通 File 仍不能写到沙箱外。                                           |

平台依据：[Apple 照片选择器][apple-photo-picker]、[Android Photo
Picker][android-photo-picker]、
[Android 共享媒体][android-media]、[Apple 音乐库][apple-music]、
[Apple 联系人 limited][apple-contacts]、[Android Contact Picker][android-contacts]、
[Apple EventKit][apple-calendar]、[Android Calendar Provider][android-calendar]、
[Apple 文档选择器][apple-documents]、[Android 文档访问][android-documents]。

选择一张照片、一个联系人或打开一个文件均不升级为整库/整盘授权。打开外部文件默认直接访问，不隐式复制到 data；显式导入副本才复制。持久访问记录由宿主按应用管理，不共享主 App 的记录。iOS 没有 EventKit 日历/提醒事项的系统只读授权，Flax 的读取接口仍保持只读。

### 4.4 附近设备、通知和外部操作：16 项

| 权限 ID / 能力                           | 方式 | iOS 对应                                  | Android 对应                                                   | Flax 范围与限制                                                        |
| ---------------------------------------- | ---- | ----------------------------------------- | -------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `flax.network.local`：受管局域网设备访问 | R    | Local Network 隐私控制。                  | Android 17、target SDK 37 起 ACCESS_LOCAL_NETWORK 等版本规则。 | 已接入的发现/连接及受管目标；公网业务许可不能自动授予。                |
| `flax.bluetooth.scan`：扫描蓝牙          | R    | Core Bluetooth 授权。                     | BLUETOOTH_SCAN 等版本要求。                                    | 限设备、过滤条件、扫描阶段；推导位置时另核对定位要求。                 |
| `flax.bluetooth.connect`：连接蓝牙       | R    | Core Bluetooth 授权。                     | BLUETOOTH_CONNECT。                                            | 限设备、服务和操作，不接管主 App 的已有连接。                          |
| `flax.bluetooth.advertise`：蓝牙广播     | R    | Core Bluetooth 对应能力。                 | BLUETOOTH_ADVERTISE。                                          | 广播数据和生命周期受限，扫描/连接不自动包含广播。                      |
| `flax.wifi.connect`：请求连接指定 Wi-Fi  | U    | 支持范围内的 Hotspot Configuration。      | 系统连接建议/选择 API 及其权限。                               | 不静默改写整机网络配置，不等于扫描全部热点。                           |
| `flax.wifi.info`：读受支持 Wi-Fi 信息    | R    | SSID 等受 entitlement 和使用条件限制。    | 按字段/API 检查 Wi-Fi、附近设备、定位要求。                    | 不提供密码、永久设备标识或平台不支持的数据。                           |
| `flax.nfc`：前台 NFC 标签操作            | U    | Core NFC 会话及所需 capability。          | NFC 硬件/API 权限。                                            | 限协议和读写范围，不含支付卡模拟、安全元件或任意后台监听。             |
| `flax.ranging`：附近设备测距             | R    | Nearby Interaction、用途说明和硬件支持。  | Ranging/UWB/Wi-Fi RTT 等 API 对应权限。                        | 限对端和技术，对端发现所用蓝牙/网络能力另行检查。                      |
| `flax.notifications`：本模块通知         | R    | 通知授权和提醒/声音/角标等设置。          | Android 13 起 POST_NOTIFICATIONS 等规则。                      | 发送/预约/取消共用；仅自己的记录，角标由宿主聚合，不暴露宿主推送凭据。 |
| `flax.biometrics`：发起本地认证          | U    | LocalAuthentication，Face ID 等用途说明。 | BiometricPrompt / 设备凭据。                                   | 针对明确操作逐次认证，不返回生物模板、宿主凭据或长期登录授权。         |
| `flax.external.open`：打开外部链接       | U    | 受控 URL 打开流程。                       | 受控 Intent/链接处理。                                         | 限目标与 scheme，tel/sms/mailto 不得绕过专用权限。                     |
| `flax.share`：系统分享                   | U    | 系统分享界面。                            | Sharesheet。                                                   | 仅本模块字节或合法资源，不能借宿主读取任意路径。                       |
| `flax.dialer.open`：拨号界面/确认        | U    | 系统电话链接流程。                        | ACTION_DIAL 等用户发起流程。                                   | 不含后台/直接拨号或读取通话记录。                                      |
| `flax.sms.compose`：短信编辑             | U    | 系统短信编辑界面。                        | ACTION_SENDTO 等流程。                                         | 用户确认发送，不读短信、不静默发送。                                   |
| `flax.mail.compose`：邮件编辑            | U    | 系统邮件编辑/受控链接。                   | 受控邮件 Intent。                                              | 不读取收件箱、账号或宿主凭据。                                         |
| `flax.print`：打印当前内容               | U    | 系统打印流程。                            | 系统打印服务。                                                 | 内容来自当前模块，设备由用户选择，不能打印任意宿主文件。               |

平台依据：[Apple Local Network][apple-local-network]、[Android Local
Network][android-local-network]、 [Android 蓝牙][android-bluetooth]、[Android
Wi-Fi 权限][android-wifi]、[Apple Wi-Fi 配置][apple-wifi]、 [Apple Core
NFC][apple-nfc]、[Android NFC][android-nfc]、 [Apple Nearby
Interaction][apple-ranging]、[Android Ranging][android-ranging]、
[Apple 通知][apple-notifications]、[Android 通知][android-notifications]、 [Apple
LocalAuthentication][apple-biometrics]、[Android 生物认证][android-biometrics]。外部链接、分享和编辑器的检查是 Flax 模块边界，不表示两平台都有同名系统权限。

局域网不能仅检查域名字符串，提供者需要约束实际连接目标、解析和重定向，并明确出口覆盖。当前网络图片按原范围保留，不能承诺整个模块断网或禁止全部局域网访问；若以后提供全局保证，网络图片等入口必须同时纳管。已批准的 Flax 权限也不能代替硬件、版本和宿主 capability 条件。

### 4.5 健康数据：4 项

| 权限 ID / 能力                         | 方式 | iOS 对应                                  | Android 对应                                | Flax 范围与限制                                        |
| -------------------------------------- | ---- | ----------------------------------------- | ------------------------------------------- | ------------------------------------------------------ |
| `flax.health.read`：读健康记录         | R    | HealthKit 按类型和实际可读范围授权。      | Health Connect 等按记录类型授权。           | 限类型、时间和来源，不提供无范围的“全部健康数据”许可。 |
| `flax.health.write`：写健康记录        | R    | HealthKit share/write 授权。              | 对应类型的写权限。                          | 只写获准类型，修改/删除还检查记录归属。                |
| `flax.health.background`：后台健康任务 | R    | 支持的 HealthKit 后台能力和宿主执行条件。 | 对应后台读取许可和执行条件。                | 还需读权限，不表示 JS runtime 可以常驻后台。           |
| `flax.health.live`：实时身体指标       | R    | 可用健康/运动硬件和原生服务。             | 身体传感器或 health 权限，按系统/API 适配。 | 限指标、频率、硬件和采集阶段，不自动获得历史健康库。   |

平台依据：[Apple HealthKit 授权][apple-health]、[Android Health
Connect 读取][android-health-read]、 [Android
16 身体传感器变化][android-body-sensors]。旧 BODY_SENSORS 不能写死为所有版本的映射。

HealthKit 不完整暴露每种数据的读取授权结果。`query()`
不能把请求成功或查询为空伪造成“全部已授予”或“用户已拒绝”；需要区分 Flax 批准状态、系统可确认状态和实际返回范围。具体记录类型和历史范围属于 scope，不继续拆出几十个 Flax
ID。

通用适配不能为不可确认的读取范围声明宿主前提已经满足。此类能力需要专用服务提供可确认的具体资源或范围；无法确认时维持unknown，不提前批准未知范围的模块申请。

## 5. 平台专属或高影响能力

技术可调用与发行许可分别确认。iOS 小程序开放原生技术和逐软件的数据同意还受
[Apple 4.7.2/4.7.3](https://developer.apple.com/app-store/review/guidelines/#mini-apps-mini-games-streaming-games-chatbots-plug-ins-and-game-emulators)
约束，权限清单不能替代这些条件。

共 **18 类宿主专用能力**，不作为仅凭 `flax.json`
声明就开放的标准权限。确有业务需求时，宿主提供用途明确的服务、自定义定义和参数边界，平台不支持时拒绝。破坏既有沙箱保证的操作不能用扩展权限直接放开原始入口。

| 能力                                        | 平台情况                                              | 建议边界                                                                        |
| ------------------------------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------- |
| 直接拨号、静默短信、短信/通话记录和电话状态 | Android 有权限、角色和限制，iOS 无通用等价开放接口。  | 优先拨号/编辑界面，不提供全局读取和操作权限。                                   |
| 全屏录制、截屏、系统/其他应用音频采集       | ReplayKit、MediaProjection 等有专门流程。             | 逐次选择和确认，不把主 App 其他页面当成本模块画面。                             |
| 精确闹钟、关键/全屏通知、打扰模式例外       | 特殊访问、entitlement、角色或使用限制。               | 区别普通通知，宿主管理模块记录及用户任务。                                      |
| 后台任务、前台服务、常驻连接、忽略电池优化  | 两平台后台机制不同，不是一项通用 runtime permission。 | 宿主管理生命周期与调度，设备许可不包含后台执行资格。                            |
| 通知监听、跨应用辅助功能控制                | Android 专用设置/服务，iOS 无任意跨应用控制能力。     | 不向通用小程序开放；普通 Widget 无障碍语义不属于此项。                          |
| 悬浮窗、系统设置、使用情况、全盘文件        | Android Special App Access 等高影响能力。             | 不作通用模块权限，全盘访问不能解除数据沙箱。                                    |
| 本机应用列表、原生包安装/卸载、管理员/MDM   | 平台、角色、分发条件不同。                            | 宿主专门业务处理，不给模块任意设备管理入口。                                    |
| VPN、代理、网络配置、流量拦截               | 系统同意、capability 和平台限制。                     | 仅专门宿主产品，不凭网络权限改变主 App/整机流量。                               |
| 任意 Wi-Fi 扫描、热点/AP 管理               | iOS 无等价通用热点枚举，Android API 条件各异。        | 不伪造跨平台能力，与指定连接和受支持信息读取分开。                              |
| NFC 卡模拟、支付、安全元件、数字钥匙        | 额外 capability、地区/设备和业务条件。                | 与前台标签分开，由业务宿主服务提供。                                            |
| HomeKit / 家庭配置与控制                    | 各平台家庭服务有独立授权模型。                        | App 定义读取/控制及设备范围，不假定 Android 有同名系统许可。                    |
| 音乐订阅服务、播放控制、播放列表写入        | 不同于读本地音频，涉及具体媒体服务。                  | 插件定义账号和服务范围，不继承订阅凭据或主 App 播放器控制权。                   |
| Siri、Shortcuts、Assistant、Live Activities | 与宿主注册和平台生命周期相关。                        | 宿主注册具体动作与展示，不任意替换行为或冒用身份。                              |
| 广告标识、跨应用跟踪、归因服务              | iOS ATT、Android 广告/隐私服务规则不同。              | 不提供通用跟踪许可，由具体宿主服务处理授权。                                    |
| 电话号码、SIM、IMEI、序列号等身份           | 差异大，部分标识不对普通 App 开放。                   | 优先应用隔离标识，不设读取永久标识的总开关。                                    |
| Keychain/Keystore、密码、Passkey、凭据      | 有账号、RP/域名和安全存储边界。                       | 只给本模块认证/签名结果或隔离存储，不导出宿主密码、私钥和任意凭据。             |
| 支付、购买、登录、手机号、账号资料          | 具体业务/平台服务，系统允许不等于交易或账号授权。     | 自定义 namespaced 权限，敏感操作逐次确认、后端校验，不暴露全局登录态/商户密钥。 |
| 亮度、常亮、方向、系统栏、宿主路由和退出    | 往往作用于宿主窗口或进程。                            | 宿主接受明确请求并管理恢复，不开放原始全局操作；导航隔离仍待实现。              |

平台依据：[Android 特殊权限][android-special]、[Android 权限参考][android-permission-reference]、
[Android MediaProjection][android-capture]、[Apple ReplayKit][apple-capture]、
[Apple 跟踪授权][apple-tracking]、[Apple 受保护资源][apple-protected]。原生特殊权限和 capability 不能被 Flax 批准记录替代。

## 6. 固定沙箱边界与普通能力

Apple 的
[Screen Time / Family Controls](https://developer.apple.com/documentation/familycontrols)、
[SensorKit 研究数据](https://developer.apple.com/documentation/sensorkit/configuring-your-project-for-sensor-reading)
和
[Focus 状态](https://developer.apple.com/documentation/bundleresources/information-property-list/nsfocusstatususagedescription)
也应作为有专项原生条件的宿主服务处理，不能从普通活动识别、运动传感器或设备信息中隐含获得。

### 6.1 固定边界，不提供解锁权限

| 边界                                                 | 处理                                                                                       |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| 主 App/其他应用文件、data 外路径、原始句柄和任意链接 | 普通路径仍限 data；选择器只能签发选中文件的受限 File，不开放目录、原始句柄或其他宿主路径。 |
| 主 App/其他应用 localStorage、任意宿主 AssetBundle   | 按应用和选定包隔离，不提供读主 App 存储的通用权限。                                        |
| JS 直接 FFI、原始平台消息通道                        | 沙箱下固定禁止，不能通过声明重新安装或绕过保护。                                           |
| 修改权限表、冒用 appId、伪造安装确认                 | 仅可信宿主管理，JS 不能写批准记录或给自己增加权限。                                        |
| 任意宿主对象、根导航和全局状态                       | 不能靠“宿主访问”宣称隔离；未完成的导航等边界仍是当前限制。                                 |

### 6.2 普通 API，不逐项新增权限

| 能力                                                                         | 处理                                                  |
| ---------------------------------------------------------------------------- | ----------------------------------------------------- |
| 普通 Widget、样式、布局、主题、触摸、滚动、文本输入                          | 沿用 binding，不把全部 UI 成员变成权限检查。          |
| Canvas、内存图片/音频、Blob、编码及普通算法                                  | 处理已有合法数据，不因内存计算增加设备权限。          |
| 当前 data 的文件、Image.file、localStorage                                   | 使用固定沙箱，不要求外部存储/图库权限。               |
| 包内 JS/JSON、选定资源包、基础 ESM、顶层 await                               | 基础能力，不能借此读其他应用资源或开放远程模块/Wasm。 |
| 定时器、signal、Future/Stream 算子、console、基础设备/窗口信息、普通震动反馈 | 保持原范围，不含后台常驻、永久设备标识和健康传感器。  |

普通网络图片继续沿用之前范围，没有纳入
`flax.network`。它的拒绝只描述已接入业务请求，不表示整个 VM 或所有原生 Widget 的网络出口被关闭。

## 7. 单 JS 与执行前边界

| 入口                                 | 有效权限来源                                            |
| ------------------------------------ | ------------------------------------------------------- |
| bundle、directory、package           | 已校验并批准的 flax.json 声明，结合本次宿主限制和授权。 |
| source、本地 JS、远程 JS             | 空集合，受控权限全拒绝，不能通过 request() 补声明。     |
| 已有 Session 的 View/页面及 ESM 依赖 | 继承本 Session，不创建更高权限。                        |

是否单文件不由产物数量决定。一个 app.js 加经批准的 flax.json 可以是完整应用；无清单入口不扫描邻近配置、不信任 JS 自报权限，也不因宿主允许策略补声明。

可信宿主下载入口和安装包属于加载流程，不授权执行后的业务网络。入口后的远程依赖必须先有许可再连接。加载早于 Session 时，加载器也须收到已批准声明和宿主策略，不能等到 binding 才检查。模块、字节缓存、Application 复用不复用其他应用授权。

不可信单 JS 仍需沙箱和宿主确认的执行身份；空权限不代替文件、资源和 FFI 隔离。底层宿主 bootstrap 不能把无权限应用降级成“可信执行”来绕过检查。

## 8. 实现次序与验收范围

第一批只接入第 4.1 节的 5 项已有能力入口：Fetch/WebSocket、远程模块、Wasm、剪贴板读写。其余 42 项作为插件目录，随真实服务引入，不创建空 API、占位插件或全部原生依赖。业务扩展示例用订单读取证明多个 API 共用定义，不提前实现完整订单权限系统。

| 范围               | 必须证明的行为                                                             |
| ------------------ | -------------------------------------------------------------------------- |
| 声明、安装、单 JS  | 未声明拒绝；无默认用途拒绝；未批准不授权；宿主允许项不能补无清单入口权限。 |
| 复用、扩展、国际化 | 多 API 共用，不同应用不共用；未知/冲突定义报错；语言切换不改变权限。       |
| 网络和执行         | Dart 实际请求、重定向/握手、远程 import、缓存和直接 Wasm 都不能跳过检查。  |
| 异步和生命周期     | 同步签名不变；Future/Stream 保留错误；无迟到复活；撤销清理活动及持久操作。 |
| 资源和宿主         | 文件/图片/存储隔离不变；业务权限不能开放 FFI 或主 App 通道。               |

系统适配接入时必须验证：宿主未获权限时模块不能申请且不弹框，宿主已有权限不能自动授权模块；JS
query/request 不调用原生申请或设置入口；limited/provisional/restricted 及未知状态保留真实范围和原因；回前台、撤权、范围变化和迟到结果不能复活过期访问。模块撤权不能撤销主 App 或其他模块的系统权限，模块申请历史不能被系统申请历史替代。

外部文件插件引入时，还需逐项验证第 3.1 节的方法表：选择器签发对象可复用 File/Image.file，伪造对象和普通宿主 File 被拒绝，父目录/相邻文件/目标越界不可访问；read 不可写，write 返回受限原对象，copy 只返回 data 文件。大文件读取与复制必须保持有界分块、背压及取消，测试不能只覆盖小文件整份读取。

图片回归覆盖同一有效授权的缓存复用、不同应用/Session/授权的缓存隔离、ResizeImage 尺寸缓存、写入后失效、缓存键取得后撤权、缓存命中前拒绝及迟到解码结果不交付。生命周期回归覆盖选择期间关闭、延迟订阅、读取中撤权、原生失败、后台操作结束后的资源释放，以及原生提供者不支持大小或写入模式时的明确错误。这些是验收边界；已完成的测试与平台覆盖见
[权限验证覆盖与平台限制](../architecture/permissions.md#verification)。

目录不是实现或移动端验收结果。每个插件后续需要核对真实原生入口、系统版本、target
SDK、硬件、授权范围和资源生命周期，不能把存在一个 ID 当成已经实现保护。

## 9. 宿主如何记录、管理和保护模块授权

本节的记录与管理机制已实现，实际接口见[权限契约](../architecture/permissions.md#management-and-persistence)。权限记录通过[通用安全存储接口](secure-storage.md)保存，由宿主注入实现；Flax 另行提供可选平台 package，Core 不依赖 Keychain/Keystore 插件，也不自带普通文件回退。安全目标是防止不可信模块伪造批准，既有文件、平台通道和 FFI 边界仍须保持，不把可信宿主代码视为另一个已隔离主体。

### 9.1 记录用户决定，计算有效权限

由一个宿主侧权限管理组件统一读取、写入和撤销记录，再向活动 Session 提供受控快照。模块 JS 只能 query/request 自己的权限，不能传入另一个 appId，不能调用批准、写账本或修改系统状态的接口。管理界面读取的模块名称和用途来自已经批准的静态清单，不使用运行中 JS 自报身份。

持久身份使用宿主确认的应用身份：appId、已批准来源/发布者绑定及宿主生成的安装实例；应用 owner 绑定这次安装，账号相关权限在记录中再按宿主账号分区。同次可信安装的普通更新和多个 Session 可复用仍有效的决定，重装使用全新 owner，不以 Session
ID、namespace、页面或 JS 自报账号作为持久授权键。当前安装实例从可信宿主注册表或宿主 owner 下的安全安装记录解析，不能根据普通目录或包内字段恢复。当前项目没有因此新增已实现的签名认证；可信来源与升级身份连续性需要宿主确认，不能信任包内自报发布者。

| 记录组         | 内容与作用                                                                                                                                                      |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 身份与格式     | 格式版本、可信应用身份、宿主生成的安装实例标识和可选账号分区；防止另一来源、重装或其他账号直接继承批准。                                                        |
| 声明与安装批准 | 对应权限 ID 的用途、scope 和定义语义摘要，以及用户确认的声明范围；不拿当前包内容或一个普通哈希当授权来源。                                                      |
| 最近申请       | 当前权限/声明版本的 requested，以及最近一次规范化目标、时间和 allow/deny/cancel；用于解释状态，不作为批准来源或完整审计历史。                                   |
| 当前模块决定   | 申请型保存唯一的当前 approvedScope 和整项撤销标记；没有批准时 approvedScope 缺省。新批准替换当前范围，整项撤销清空它，缩小范围明确替换，不回看历史 allow 恢复。 |
| 修订           | 宿主管理的修订号，供并发写入、Session 快照和申请回调校验；它是生命周期版本，不是单独的防文件回滚机制。                                                          |

系统 permission_handler 状态不写成永久授权事实。当前有效权限始终取已批准声明、宿主策略、当前宿主系统范围、本模块决定、当前账号与实际资源条件的交集。安装型模块范围来自安装批准；申请型还必须有显式 approvedScope，新增批准同时清除整项撤销标记。持久记录不能跳过宿主前置条件。

例如已批准 A，再申请 A+B 被拒绝：approvedScope 仍是 A，最近申请记为 A+B/deny；查询 A 仍可使用，查询 A+B 返回 moduleDenied，其他未批准范围仍需申请。取消只更新最近申请，不撤销 A。整项撤销则清空 A 并标记撤销，之后宿主系统权限恢复也不能让 A 复活。这样不用维护多条相互覆盖的 allow/deny 规则。

handler 始终按本次 API 参数检查有效范围，不能把一次范围查询的 denied 缓存成整项撤销。I/U 没有运行时 approvedScope，其撤销或缩小直接更新该项安装批准；重新启用也须可信宿主确认，permissions.request() 不自动补回安装批准。

每个权限的声明摘要关联其用途、范围及定义语义，不直接以整个包内容哈希作为批准版本。普通代码更新不要求全部权限重申；用途、授权模式、范围或语义不兼容变化只使受影响批准失效。不同来源冒用相同 appId 不能继承数据和授权；卸载重装使用新的宿主安装实例，不能仅凭旧目录或旧安全存储条目恢复批准。

### 9.2 管理与活动 Session 同步

第一版只保留必要的最新申请/决定记录，不引入完整审计平台或逐 API 授权副本。宿主管理界面按模块列出已声明权限、用途、模块决定、宿主系统前提及当前有效范围，并明确区分“模块拒绝”和“宿主尚未取得系统权限”。

| 操作                 | 处理                                                                                                                                        |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| 允许或扩大范围       | 仍校验批准清单、宿主策略与宿主系统前提；用户在可信宿主界面确认并持久化后，再发布给活动 Session。                                            |
| 撤销或缩小范围       | 先失效修订和资源令牌、停止受影响操作；R 清空或替换 approvedScope，I/U 取消或缩小安装批准，再清理关联活动及持久任务；不撤销主 App 系统权限。 |
| 关闭一个 Session     | 只结束其活动资源，不删除应用的持久批准。合并申请有其他合法等待者时只移除关闭者，不能取消其他 Session 的申请或交付。                         |
| 清理 data 或重置权限 | 删除 data 不修改 data 外的授权；“重置权限”单独清理批准与申请记录，使之后需重新确认。宿主若提供“完整重置”，明确同时执行两者。                |
| 卸载模块             | 禁用安装 owner，按安全存储提案排空各功能写入后删除其安全记录及原生访问记录，再删除管理目录；不移除其他主体的共享密钥或系统权限。            |

记录在启动时通过安全存储加载并校验，handler 使用受控内存快照，不逐 API 访问存储。写入按安装 owner 串行并校验修订，账号分区也不能各自读改写整个 state；旧读取、申请和写入完成不能覆盖新撤销。新增批准必须可靠保存且完成后仍通过生命周期校验，才能回复 granted，不能采用 localStorage 那种先同步接受、之后异步写入失败的语义。

若旧批准写入已经发出且无法取消，撤权先在内存失效，队列等旧写入结束后保存最新撤销，旧完成回调不发布授权。Session/声明/账号失效发生在批准提交期间时，也不能只丢弃返回值：按最新修订写入不包含这次迟到新增批准的纠正记录，不能把刚落盘的旧批准留给下次加载。合并申请仍有合法等待者时按其有效上下文决定，不回退其他已确认批准。

撤销或纠正写入失败时，当前进程保持受影响授权禁用并报告失败；宿主须重试写入或可靠移除旧批准后，才能确认跨重启生效。存储异常后的重读不能自行恢复本次已失效批准。多进程同时管理时需要额外锁或事务，不将单进程原子写当成跨进程协调。

### 9.3 通过通用安全存储保存

Core 不规定权限账本的物理文件位置，也不默认在应用根目录创建普通 JSON 作为授权来源。具体位置、原生机制和认证保护由宿主实现或可选平台 package 负责；JSON 仍可作为安全存储内部的记录编码，但编码本身不是安全措施。单独放在 data 外、隐藏文件名或哈希目录名都不足以替代安全存储契约。

权限消费者统一使用以下逻辑地址，接口和其他功能模块的复用见[安全存储提案](secure-storage.md)：

| 地址部分 | 权限模块约定                                                                                            |
| -------- | ------------------------------------------------------------------------------------------------------- |
| module   | flax.permissions，表示 Flax 内部权限功能，不是 Flax 应用的 appId 或 Session.namespace。                 |
| owner    | 由宿主确定的应用安装主体；同次安装稳定、重装全新，来源及账号继续按第 9.1 节验证，不能使用 JS 自报身份。 |
| key      | state，保存版本化声明批准、当前 approvedScope、最近申请及修订；不为每个 binding API 建副本。            |

宿主在安装/加载和 Session 使用前配置共享的 FlaxSecureStorage。可实现自己的后端，也可显式依赖 flax_secure_storage 包；Core 不反向依赖该包，不要求宿主更换已有安全存储。未配置时管理组件抛明确的安全存储异常，已运行实例的存储失败会禁用受影响 owner，并使权限返回 unavailable/secureStorageUnavailable；不自动退回普通文件、localStorage 或内存批准。

该接口只面向可信 Dart 宿主，不生成 JS
binding。若后端使用文件或辅助索引，第 3.1 节的选择器、分享、AssetBundle、原生通道和业务 binding 都不能将其重新暴露给模块。临时文件和恢复路径同样受保护，不能因存储从模块管理目录移走就放宽原有边界。

### 9.4 安全保证、错误与恢复

存储实现保证记录的保密性、真实性/完整性、地址绑定与单记录可靠写入；权限模块再验证语义和身份。认证或解密失败不能变成已批准内容；读取返回 null 只表示不存在，锁定、密钥失效、损坏、不可用及 IO 错误必须保留，不自动清空或重建后继续。系统安全存储的主体仍是宿主 App，不自动替代模块隔离。[Keychain 可访问性][apple-keychain-access]与[Android
Keystore][android-keystore]说明了原生能力。

新批准可靠保存后才发布；撤权先失效活动访问，再保存结果。单记录原子写不是多记录事务或并发读改写保护，权限管理组件仍需串行及修订校验；不确定的存储结果须重读确认。临时不可读时不覆盖原决定，失败时也不把用户状态改成拒绝或允许。

清理 data 不修改安全存储中的权限。卸载由宿主协调先禁用安装 owner，可信记录标记待卸载，停止新任务并排空权限、安装、证书等跨功能写入，再 deleteOwner 和清理原生访问记录、普通文件。旧任务不得在删除后重新写入；安装索引放在独立宿主 owner 下，不随应用 owner 删除而失去清理状态。只删除 apps 目录不能视为已清理 Keychain 等独立记录。deleteOwner 只清理专用存储范围内的该主体记录，不调用宿主全局 deleteAll，不删除其他主体或其共享根密钥；失败保持禁用并报告，重装用全新 owner，不继承残留批准。

授权决定、原生 URI/bookmark 等持久访问记录默认不云同步，不随普通 data 备份自动恢复为批准。后端负责相应备份/迁移策略，恢复时重新核对身份、宿主系统权限和记录有效性。[Android 备份范围][android-backup]与
[Apple 备份排除][apple-backup-exclusion]是平台实现需要处理的原生条件。

安全存储不自动防止删除、有效旧记录回放或宿主进程被控制；本地修订号也不是完整抗回滚措施。有更强要求时由宿主后端另提供受保护版本锚点或服务端校验，不宣称仅接入 Keychain/Keystore 就覆盖全部攻击。

### 9.5 验收要求

需要验证宿主自有实现和可选平台实现使用同一契约、缺失或失败时无普通文件回退、存储范围/功能模块/owner 隔离、篡改报错而非批准。同 appId 的不同可信来源、安装实例与账号不能继承批准；用途和 scope 变更不会扩大旧记录，拒绝扩大范围保留原 approvedScope，requested 不代表本次 scope 已批准。

并发查询、原生刷新和持久写入晚于撤权完成时不得复活批准；closing 不接纳新申请或资源，关闭者不破坏共享流程的其他合法等待者。另需覆盖跨功能写入排空后再删除 owner、重装不复用 owner、写入不确定结果与纠正失败、备份恢复、暂不可读，以及文件/选择器/资源包/通道不能访问后端数据。上述为整体安全边界，实际实现及尚未覆盖的平台场景见
[权限验证覆盖与平台限制](../architecture/permissions.md#verification)。

[permission-handler]: https://pub.dev/packages/permission_handler/versions/13.0.2
[permission-handler-status]:
  https://pub.dev/documentation/permission_handler/latest/permission_handler/PermissionStatus.html
[permission-handler-android]:
  https://pub.dev/packages/permission_handler_android/changelog
[permission-handler-apple]: https://pub.dev/packages/permission_handler_apple/changelog
[permission-handler-dart]:
  https://github.com/Baseflow/flutter-permission-handler/blob/main/permission_handler/lib/permission_handler.dart
[permission-handler-android-source]:
  https://github.com/Baseflow/flutter-permission-handler/blob/main/permission_handler_android/android/src/main/java/com/baseflow/permissionhandler/PermissionManager.java
[permission-handler-service]:
  https://pub.dev/documentation/permission_handler/latest/permission_handler/ServicePermissionActions/serviceStatus.html
[permission-handler-settings]:
  https://pub.dev/documentation/permission_handler/latest/permission_handler/openAppSettings.html
[android-keystore]: https://developer.android.com/privacy-and-security/keystore
[android-backup]: https://developer.android.com/identity/data/autobackup
[apple-keychain-access]:
  https://developer.apple.com/documentation/security/restricting-keychain-item-accessibility
[apple-backup-exclusion]:
  https://developer.apple.com/documentation/foundation/urlresourcevalues/isexcludedfrombackup
[apple-protected]:
  https://developer.apple.com/documentation/bundleresources/protected-resources
[apple-pasteboard]: https://developer.apple.com/videos/play/wwdc2022/10068/?time=1423
[apple-speech]:
  https://developer.apple.com/documentation/speech/asking-permission-to-use-speech-recognition
[apple-location]:
  https://developer.apple.com/documentation/corelocation/requesting-authorization-to-use-location-services
[apple-photo-picker]:
  https://developer.apple.com/documentation/photokit/selecting-photos-and-videos-in-ios
[apple-music]:
  https://developer.apple.com/documentation/storekit/requesting-access-to-apple-music-library
[apple-contacts]:
  https://developer.apple.com/documentation/contacts/cnauthorizationstatus/limited
[apple-calendar]:
  https://developer.apple.com/documentation/eventkit/accessing-the-event-store
[apple-documents]:
  https://developer.apple.com/documentation/uikit/uidocumentpickerviewcontroller
[apple-shared-documents]:
  https://developer.apple.com/documentation/uikit/providing-access-to-directories
[apple-local-network]:
  https://developer.apple.com/documentation/technotes/tn3179-understanding-local-network-privacy
[apple-wifi]:
  https://developer.apple.com/documentation/networkextension/wi-fi-configuration
[apple-nfc]: https://developer.apple.com/documentation/corenfc
[apple-ranging]:
  https://developer.apple.com/documentation/nearbyinteraction/initiating-and-maintaining-a-session
[apple-notifications]:
  https://developer.apple.com/documentation/usernotifications/asking-permission-to-use-notifications
[apple-biometrics]: https://developer.apple.com/documentation/localauthentication
[apple-health]:
  https://developer.apple.com/documentation/healthkit/authorizing-access-to-health-data
[apple-capture]: https://developer.apple.com/documentation/replaykit
[apple-tracking]: https://developer.apple.com/documentation/apptrackingtransparency
[android-network]:
  https://developer.android.com/develop/connectivity/network-ops/connecting
[android-location]:
  https://developer.android.com/develop/sensors-and-location/location/permissions
[android-sensors]:
  https://developer.android.com/develop/sensors-and-location/sensors/sensors_overview
[android-photo-picker]:
  https://developer.android.com/training/data-storage/shared/photo-picker
[android-media]: https://developer.android.com/training/data-storage/shared/media
[android-contacts]:
  https://developer.android.com/about/versions/17/features/contact-picker
[android-calendar]: https://developer.android.com/identity/providers/calendar-provider
[android-documents]:
  https://developer.android.com/training/data-storage/shared/documents-files
[android-document-streams]:
  https://developer.android.com/reference/android/content/ContentResolver
[android-local-network]:
  https://developer.android.com/privacy-and-security/local-network-permission
[android-bluetooth]:
  https://developer.android.com/develop/connectivity/bluetooth/bt-permissions
[android-wifi]: https://developer.android.com/develop/connectivity/wifi/wifi-permissions
[android-nfc]: https://developer.android.com/develop/connectivity/nfc/nfc
[android-ranging]: https://developer.android.com/develop/connectivity/ranging
[android-notifications]:
  https://developer.android.com/develop/ui/compose/notifications/notification-permission
[android-biometrics]: https://developer.android.com/identity/sign-in/biometric-auth
[android-health-read]:
  https://developer.android.com/health-and-fitness/health-connect/read-data
[android-body-sensors]:
  https://developer.android.com/about/versions/16/behavior-changes-16
[android-special]: https://developer.android.com/training/permissions/requesting-special
[android-permission-reference]:
  https://developer.android.com/reference/android/Manifest.permission
[android-capture]: https://developer.android.com/media/grow/media-projection
