# Flax 选择性 API 拦截清单

状态：**历史范围清单**。当前已实现部分见[实现契约](../architecture/sandbox.md)；导航和权限配置仍暂缓。本文的历史统计与后续策略不代表当前已提供的开关。基础设计复核基线：`dbe6c3372345b2c245babcc2eec87356e2400218`，更新日期：2026-10-26。JS
FFI 与 Canvas 专项另按 main `a6ea2404b8ff0754f55de3b77d64e4888bcb003b`
复核；Session/权限、localStorage、ESM 和宿主入口另按 main
`8f123f3b9eec2bb60ec9e652f72d679478ce5189`
复核；未 rebase 基础工作区。历史去重统计的采集基线仍为
`c3603d910b6e4257368f58c1d7207d2fa5a41f76`。配套阅读：[沙箱方案](sandbox.md)、[历史广义审查明细](sandbox-api-census.csv)、[统计来源摘要](sandbox-api-census-summary.json)。

**文件等资源边界采用选择性沙箱适配；Fetch/WebSocket 使用业务网络权限，ESM 远程来源和 Wasm 使用独立模块策略，路由使用嵌套导航及统一边界。**
包内 ESM 默认支持。导航不再列为逐个配置 push/pop
handler 的工作。其他未标记 API 沿用原 binding，不把普通对象、Widget、图片、集合和 controller 全部变成沙箱工作项。

<a id="counts"></a>

## 1. 当前范围与旧统计的区别

| 当前范围           | 执行边界                                                                                                                             | 不自动扩大到                                                              |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------- |
| 文件与持久存储隔离 | File 等实际 IO 限制在应用 home；localStorage 所有 Hive CE 文件按 appId 在 home/local_storage 内存储。                                | 逐文件授权、普通内存容器；namespace 不能代替物理隔离。                    |
| 宿主能力权限       | permissions 独立于 sandbox；Fetch/WebSocket 使用 origins，模块单独使用 remoteOrigins/allowWasm；是否提供 API 优先使用插件/模块选择。 | 全应用网络出口白名单、原生网络 binding 自动拦截、额外配额或用户授权系统。 |
| 导航与原始宿主入口 | 内部导航保持边界；通用通道、退出/全局状态、完整宿主 rootBundle 明确拒绝或安全替换。                                                  | 全 SDK 默认拒绝、所有 Context/State 成员白名单或主程序页面管理。          |
| JS 直接 FFI        | 新 runtime 在 Script 后台准备或 ESM 执行前固定禁用安装能力，并拒绝 ffiAsset。                                                        | 库白名单、逐原生函数 handler；宿主 Dart/native 内部实现保持。             |
| App 扩展与普通 API | 自有隔离 API 使用 policyType 与同步检查/替换；用途明确的服务可扩展权限，普通 UI/Canvas/集合保持。                                    | 通用权限注解框架、所有普通对象的权限传播、角色/业务数据授权与询问 UI。    |

默认[一应用一 Session](sandbox.md#13-默认一应用一-session)，多个页面共享模块和运行状态；appId 决定持久归属，Session 决定运行生命周期。重新打开/ESM 更新使用新 Session、同 appId 数据，不增加应用运行管理层。

项目只支持当前契约：统一重新生成 binding，应用入口统一默认 ESM，不保留旧 provider、旧清单和旧 Script 入口的兼容或迁移分支。普通模式仍是可信主工程的当前使用方式。

上一版将大量普通对象访问和资源范围传播加入统计，偏离了当前需求。**7,649 个广义审查项、2,607 个专项候选、5,042 个传播候选，不再代表本方案需要拦截的数量。**

文件 142、网络 151、导航与浮层 566 也都是旧的类型族统计，包含构造、普通属性、数据和对象传播项；不能将其简单相加作为新方案的 API 数。原始声明去重数据仍可用，但新的拦截数量必须根据明确选中的操作计数，不能由类名推导。

当前不提出新的伪精确总数。文件配置量按选中的实际操作统计；Fetch/WebSocket 与模块来源分别接入各自策略，Wasm 开关接入运行时；导航按容器和边界适配工作统计，不再把旧导航声明数加进 handler 数量。下文明确第一版文件替代入口的替换/拒绝决定，不将原生网络 binding 列入内置 deny 配置。

当前 main 新增了注解选取、CLI/Builder 共用生成、FlaxBindingPlugin 和独立类型 SDK，但这四层均未实现沙箱。新增结构对范围的影响如下，完整流程见[方案第 1.2 节](sandbox.md#12-对齐当前-binding-结构)：

| 结构                     | 对清单的影响                                                                                                                                 |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| 注解选中的公开成员       | 拟用 FlaxSandboxGuard 标记自有操作；未标记仍走原 binding。沙箱注解不负责导出，不因为使用 FlaxExport 就默认受控。                             |
| 显式 scope YAML          | 与沙箱注解生成同一种规则，重复一致合并、冲突报错。纯注解项目无需增加 YAML；若增加，仍会进入显式 scope 模式，需要一并配置其他使用中的 scope。 |
| binding 插件             | 控制 Session 模块可用性，不是调用权限；同一插件可被不同边界配置的 Session 复用。                                                             |
| 独立类型 SDK / 模块资产  | 能编译、能找到资产都不表示已授权；不能用 SDK 发布范围代替 Session 检查。                                                                     |
| 新增宿主示例和业务 scope | 不属于原四份 SDK manifest 的 census；实际 App 只统计自己标记的操作，不计入 SDK 历史数字。                                                    |

隔离策略在 sandbox.policies 按 Type 注册；宿主能力策略在 Session.permissions 按 Type 注册，独立于是否开启 sandbox。不定义能力 token，FlaxSandboxGuard 仍只标记隔离操作并显式指定 policyType。Session 自动提供不可覆盖的 FlaxFilePolicy 与 FlaxAssetBundlePolicy；业务网络和模块默认策略分别补齐，来源名单互不继承。其他缺隔离策略或配置错误拒绝，不回退放行。业务授权与异步询问仍延期。

| 规则形式                   | handler                                                                          | 实际执行                                                                     |
| -------------------------- | -------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| 检查：replace 默认为 false | 同步 void，正常返回表示通过。                                                    | 原 API 执行一次；其 Future/Stream 保持现有流程。                             |
| 替换：replace 为 true      | 普通同步函数返回与原 API 匹配的值，可直接转交受限后端的 Future/FutureOr/Stream。 | 不 await 或额外订阅，复用现有结果转换，不再自动执行原 API。                  |
| deny                       | 不需要 policyType、handler 或 replace。                                          | 沙箱下直接拒绝，不执行原 API；统一 FlaxSandboxException，按原 API 形态交付。 |

禁止 async（含 async
void）、async*、sync* 和异步鉴权；检查/选路在返回前完成。文件构造替换为受限 File，静态查询可直接返回受限后端 Future；懒 Stream 在订阅和实际 IO 时继续限制，Fetch 在 Dart 建连前检查。完整接口见[handler 契约](sandbox.md#4-handler同步检查与同步替换)。

固定拒绝使用[直接 deny](sandbox.md#36-直接-deny不需要-handler)：自有 API 标记 FlaxSandboxGuard.deny()，SDK/provider
YAML 写 deny，无需逐项拒绝函数；普通模式原样，不能与检查/替换冲突规则静默覆盖。明确拒绝使用拟议 FlaxSandboxException，JS
Error 增加 code=FLAX_SANDBOX_DENIED 与 operation，捕获方式见[异常契约](sandbox.md#45-统一沙箱拒绝异常与-js-捕获)。当前桥接尚无这些稳定字段；普通 IO、配置和关闭错误不统一改成拒绝。

## 2. 文件：围绕真实文件访问

采用[每沙箱应用一个主目录](sandbox.md#6-文件每个应用一个主目录)：默认
`<ApplicationSupport>/flax/data/<sha256(appId)>/`，应用持久数据统一使用 data 目录。宿主可覆盖公共父目录，框架仍按可信 appId 分目录。拟议
`await FlaxSandbox.create(...)`
提前准备主目录及不可变描述，不持有活动后端；Session 独立核对根、打开受限后端并提供 FlaxFilePolicy。不配置 assetRoot/dataRoot 或逐文件权限。

通用 [getHomePath(): Promise<string>](sandbox.md#62-查询主目录使用真实绝对路径)
从 @flax/core 导出，沙箱模式返回当前沙箱主目录，普通模式返回宿主 App 的 ApplicationSupport 数据目录。业务自行构造真实绝对路径；沙箱入口统一检查范围并拒绝相对路径，不自动补主目录，不建立虚拟根。普通模式的查询不改变原 IO 权限。

同 appId 的数据跨版本、重启和 Session 保留，Session 关闭只清理自己的资源；安装缓存与可写主目录分开，静态资源使用选定 AssetBundle。沙箱 localStorage 按应用主目录和唯一 box 名称物理存储，namespace 仅用于应用内部；普通模式由宿主选择目录与 namespace，不设计历史数据迁移，见[存储设计](sandbox.md#68-localstorage按-appid-物理存储)。

<a id="file-entry-decisions"></a>

### 2.1 替代文件入口：第一版逐项决定

以下均指启用沙箱时的行为，普通模式保持原 binding。替换使用同一 FlaxFilePolicy，所有实际 IO 都通过绑定根与 scope 的受限后端；缺安全后端时启动失败，不回退普通路径读取。

| 原始入口                                            | 第一版规则 | 实际执行/返回                                                       |
| --------------------------------------------------- | ---------- | ------------------------------------------------------------------- |
| `File(path)`                                        | 替换       | 检查真实绝对路径，返回携带当前 scope 的受限 File。                  |
| `File.fromUri(uri)`                                 | 替换       | 只接受平台绝对文件 URI，按同一目录范围返回受限 File。               |
| `File.fromRawPath(rawPath)`                         | 拒绝       | 不在首版处理平台原始字节路径，避免错误解码绕过。                    |
| `Directory(path)`                                   | 替换       | 返回携带当前 scope 的受限 Directory。                               |
| `Directory.fromUri(uri)`                            | 替换       | 与 File 的 URI 校验一致，返回受限 Directory。                       |
| `Directory.fromRawPath(path)`                       | 拒绝       | 不保留普通 Directory 的字节路径入口。                               |
| `Link(path)`                                        | 拒绝       | 首版不提供受限 Link。                                               |
| `Link.fromUri(uri)`                                 | 拒绝       | 不能绕过普通 Link 构造的拒绝。                                      |
| `Link.fromRawPath(path)`                            | 拒绝       | 不能绕过普通 Link 构造的拒绝。                                      |
| `Directory.current` getter                          | 拒绝       | 不暴露或重定向宿主工作目录，应用使用 getHomePath。                  |
| `Directory.current` setter                          | 拒绝       | JS 的 setCurrent facade 仍对应此原始 setter，禁止修改宿主工作目录。 |
| `Directory.systemTemp` getter                       | 拒绝       | 应用在自己的 home 下创建临时目录。                                  |
| `File.open(...)`                                    | 拒绝       | 首版不向 JS 开放 RandomAccessFile。                                 |
| `File.openSync(...)`                                | 拒绝       | 与异步 open 同时关闭。                                              |
| `FileStat.stat(path)`                               | 替换       | 同步检查后直接返回受限后端 Future<FileStat>。                       |
| `FileStat.statSync(path)`                           | 替换       | 同一后端同步查询，返回普通 FileStat。                               |
| `FileSystemEntity.identical(path1, path2)`          | 替换       | 两端均核对范围，由受限后端返回 Future<bool>。                       |
| `FileSystemEntity.identicalSync(path1, path2)`      | 替换       | 两端均核对范围并同步执行。                                          |
| `FileSystemEntity.type(path, followLinks: ...)`     | 替换       | 受限后端执行，不能跟随链接逃逸。                                    |
| `FileSystemEntity.typeSync(path, followLinks: ...)` | 替换       | 同上，同步返回。                                                    |
| `FileSystemEntity.isFile(path)`                     | 替换       | 返回受限后端 Future<bool>。                                         |
| `FileSystemEntity.isFileSync(path)`                 | 替换       | 同上，同步返回。                                                    |
| `FileSystemEntity.isDirectory(path)`                | 替换       | 返回受限后端 Future<bool>。                                         |
| `FileSystemEntity.isDirectorySync(path)`            | 替换       | 同上，同步返回。                                                    |
| `FileSystemEntity.isLink(path)`                     | 替换       | 通过安全父目录定位查询链接元数据，不跟随目标。                      |
| `FileSystemEntity.isLinkSync(path)`                 | 替换       | 同上，同步返回。                                                    |
| `Image.file(file, ...)`                             | 替换       | 校验受限 File 的当前 Session 归属，再调用原构造。                   |
| `FileImage(file, ...)`                              | 替换       | 同上，保留 Flutter provider/cache。                                 |
| `ImmutableBuffer.fromFilePath(path)`                | 拒绝       | 首版未接入安全文件加载适配；允许 Future 返回不自动开放此入口。      |
| `SecurityContext.usePrivateKey(path, ...)`          | 替换       | 同步受限读取后调用 usePrivateKeyBytes。                             |
| `SecurityContext.setTrustedCertificates(path, ...)` | 替换       | 同步受限读取后调用 setTrustedCertificatesBytes。                    |
| `SecurityContext.useCertificateChain(path, ...)`    | 替换       | 同步受限读取后调用 useCertificateChainBytes。                       |
| `SecurityContext.setClientAuthorities(path, ...)`   | 替换       | 同步受限读取后调用 setClientAuthoritiesBytes。                      |
| `SecurityContext.defaultContext` getter             | 拒绝       | 不向沙箱交付宿主共享、可修改的 TLS 上下文。                         |

表中的文件类入口对照当前
[File](../../packages/flax/js/src/dart/generated/libraries/io/_bindings/sdk_dependencies_File.ts)、[Directory](../../packages/flax/js/src/dart/generated/libraries/io/_bindings/sdk_dependencies_Directory.ts)、[符号链接类型](../../packages/flax/js/src/dart/generated/libraries/io/_bindings/sdk_dependencies_Link.ts)、[FileSystemEntity](../../packages/flax/js/src/dart/generated/libraries/io/_bindings/sdk_dependencies_FileSystemEntity.ts)
与
[FileStat](../../packages/flax/js/src/dart/generated/libraries/io/_bindings/sdk_dependencies_FileStat.ts)；静态 API 即使生成了顶层 facade，也按原始声明保留对应规则。

### 2.2 受限对象上的实例调用

下表为检查模式：文件策略同步验证 receiver 的受限类型、scope 身份与存活，再调用它自己的实现。无需每次替换 Future 或包装普通结果；参数检查与真实 IO 边界在受限实现中保持一致。

| 现有实例操作                                                                                                                                                                    | 受限实现的责任                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| File.readAsBytes/readAsBytesSync、readAsString/readAsStringSync、readAsLines/readAsLinesSync、openRead                                                                          | 全部通过受限后端；openRead 在订阅和读取时保持 scope，不能读取普通宿主 File。                                              |
| File.writeAsBytes/writeAsBytesSync、writeAsString/writeAsStringSync、create/createSync、copy/copySync、setLastAccessed/setLastAccessedSync、setLastModified/setLastModifiedSync | 受限写入，复制同时检查两端；返回 File 仍受限，write 的 Future 返回 this。                                                 |
| File.length/lengthSync、lastAccessed/lastAccessedSync、lastModified/lastModifiedSync                                                                                            | 元数据查询也通过同一后端。                                                                                                |
| FileSystemEntity.exists/existsSync、stat/statSync、rename/renameSync、delete/deleteSync、resolveSymbolicLinks/resolveSymbolicLinksSync 的 File/Directory 投影                   | 基类视图不丢 receiver 校验；重命名两端、删除根保护和链接拒绝保持一致，不信任原始 Link/宿主对象。                          |
| Directory.create/createSync、createTemp/createTempSync、list/listSync                                                                                                           | 临时目录位于当前根内；枚举只交付受限 File/Directory。发现链接时明确报错，不跟随也不静默跳过；懒 list 在订阅和枚举时检查。 |

File/Directory.absolute、parent 返回对象时继续检查范围并携带同一 scope，parent 越界拒绝；path、uri、isAbsolute 保留真实值。FileSystemEntity.parentOf 只计算输入字符串，isWatchSupported 只返回能力值，不访问给定路径，保持原 binding。

Link.create/createSync、update/updateSync、target/targetSync 显式 deny；其余公共文件查询也不能用原始 Link 通过 receiver 校验。RandomAccessFile 首版无可用生产入口；其 path
getter 和当前全部实际句柄操作 close/closeSync、readByte/readByteSync、read/readSync、readInto/readIntoSync、writeByte/writeByteSync、writeFrom/writeFromSync、writeString/writeStringSync、position/positionSync、setPosition/setPositionSync、truncate/truncateSync、length/lengthSync、flush/flushSync、lock/lockSync、unlock/unlockSync 显式 deny。不批量拒绝 Object.toString 等普通继承成员；后端私有句柄由后端清理，不导出给 JS。

FileMode、FileLock、已交付字节和普通元数据沿用原绑定；SecurityContext 的 Bytes 方法仍是内存操作，但不允许拿宿主 defaultContext 作为 receiver 修改。四个路径方法的具体替换见[证书与私钥](sandbox.md#67-容易漏掉的文件入口证书和私钥)。

只标记 readAsString，不会给 readAsBytes 自动生成拦截；后者在 receiver 已是受限 File 时仍受对象自身的检查约束，但不能假定任意入口都只产生受限 File。只标记 File 方法，也不会自动拦住字符串图像加载器或 App 文件插件。这是选择性模型必须明确的边界，而不是恢复全部 API 默认拒绝的理由。

文件 handler 共用主目录策略和受限后端，返回 File/handle/流时再延续约束。Stream.map、集合 getter 不需要各写文件权限规则。路径穿越、符号链接、路径替换竞态的防护由所承诺的文件后端完成；主目录本身不允许被小程序删除或重命名。

本地图片通过受限 File 读取，FileImage 的原生缓存按 provider 类型、真实 file.path 和 scale 区分不同应用的同名文件。取消此前为虚拟路径设计的 Session 缓存身份和自定义 provider；保留文件参数校验。缓存中的既有像素按 Flutter 原规则复用，关闭 Session 约束新的文件 IO，不清空全局缓存。详见[方案第 6.6 节](sandbox.md#66-imagefile-复用受限读取和原生图片缓存)。

现有 4 份 manifest 没有 Process、Platform、Isolate 或 ReceivePort 的 class 记录。当前 File 选取也不是整个 dart:io，例如没有 openWrite/watch，不能把未暴露的 SDK
API 算进本轮实现数量。

## 3. 业务网络权限与模块策略

FlaxNetworkPolicy 仍仅含可选 Set<String>?
origins，登记于拟议 Session/View.permissions，不再放在 sandbox.policies。普通集成也能配置；缺省补入 origins:null，空集合拒绝、非空集合精确匹配协议/主机/有效端口。是否提供 Fetch/WebSocket 使用现有插件选择，不增加重复开关。字段和同步检查见[第 7 节](sandbox.md#7-宿主网络权限默认放行可选-origins)。

| 入口                   | 处理原则                                                                                                                                         |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Fetch                  | Dart 建连前同步检查，重定向逐跳复查；保留 Response/流/取消，不增加字节配额。                                                                     |
| WebSocket              | Dart 客户端工厂/握手前检查 ws/wss 目标，保持拒绝重定向；连接建立后收发/关闭沿用原语义。                                                          |
| ESM HTTP(S) 入口和依赖 | 不属于 FlaxNetworkPolicy；Core 在源码下载前检查独立 FlaxModulePolicy.remoteOrigins。入口、动态 import、JSON/Wasm、共享字节缓存均不能跳过该检查。 |
| Host / 握手头          | Dart 拒绝覆盖目标 authority 或协议控制头，直接底层 host 调用也不能绕过；权限 null 不取消这些校验。                                               |
| 传输资源               | 沙箱下不复用主 App 的活动 client、隐含凭据或共享可修改 TLS 状态；自定义工厂须保持提供方边界。                                                    |

<a id="network-binding-scope"></a>

### 3.1 开发者网络 binding 的责任范围

原生 HttpClient、Socket、DNS 与开发者自有网络 binding 不生成内置 deny/包装；是否复用策略和如何保持实际 IO 边界由提供者负责。历史分析基线的 SDK 存在相关原生生成导出，本次未重算最新导出或调整 SDK；不能把旧证据当成当前统计，也不能把范围排除写成从未有 binding。

普通网络图片保留原范围，因此 origins 不是所有网络出口的统一白名单。FlaxModulePolicy 也登记于 permissions，字段仅 remoteOrigins 和 allowWasm。模块来源与业务网络名单不合并、不互相授权，也不要求模块下载同时命中两份名单；来源匹配和下载实现可以复用。ESM 默认下载器保留既有同源重定向、MIME、HTTPS 不降级和预算，不新增内网分类字段。

### 3.2 Dart 层同步检查

Fetch 在 openUrl 前拒绝任意大小写 Host；WebSocket 在客户端工厂前拒绝 Host、Connection、Upgrade、Content-Length、Transfer-Encoding 与 Sec-WebSocket-*。直接 host 调用遵守同一校验，不能只依赖 JS。网络权限的同步判断与原 API 异步 IO 分开，不新增异步鉴权。

## 4. 路由：收进沙箱导航配置

当前 [FlaxView](../../packages/flax/lib/src/ui/view.dart)
不自动插入 Navigator，也没有公开的导航模式参数。嵌套能力已经存在：[测试 fixture](../../packages/flax_material_ui/js/test/fixtures/navigation.ts)自行创建 Navigator/NavigatorPopHandler，[测试](../../packages/flax_material_ui/test/ui/navigation_test.dart)验证内部返回优先于宿主。因此是把已有能力整合进新配置，不是直接搬一个已有 FlaxView 参数。

拟议 `FlaxSandbox.create(isolateNavigation: true)`
建立配置，挂载时管理小程序的内部 Navigator。无需单独登记导航策略类型，也无需给每个 push/pop 配 handler；完整行为见[方案第 8 节](sandbox.md#8-路由嵌套-navigator-加统一边界)。

| 表面                                                          | 拟议处理                                                                           |
| ------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| 普通内部 push/pop/pushNamed、替换、pages/Router               | 允许在沙箱根及内部子 Navigator 中正常工作。                                        |
| Navigator.of/maybeOf 的普通查找                               | 查找内部目标，沿用正常调用方式。                                                   |
| rootNavigator: true                                           | 将应用所见 root 限定为沙箱根，不能越到主项目。                                     |
| showDialog 等默认使用 root 的入口                             | 由集中边界适配选择内部目标，不能等原生 push 完成后才检查。                         |
| 从祖先 Context、GlobalKey、Route 或其他值取得主项目 Navigator | 统一限制外部导航引用的导出/使用；不因为取得路径不同而放开。                        |
| 初始 route 返回、系统返回和关闭                               | JS 不自动转发 pop 到主项目；系统返回/小程序退出由宿主决定，关闭不自动 pop 主项目。 |

**普通嵌套还不是安全隔离。**
Flutter 的 rootNavigator 查找会继续向外，原生弹窗和回调还可能在 Dart 内选中主项目目标。单加 Navigator、InheritedWidget、Observer 或一个未被调用的 resolver 都不能改变这些路径。

因此这里减少的是业务层的逐 API 权限配置，保留少量围绕导航目标取得和实际效果的统一保护。落地可能需要 Flax 内部绑定适配或原生导航改造，不能预先断言 binding 完全不动。在 root、弹窗、外部引用和原生路径验证通过前，只能认定嵌套栈工作，不能声称已禁止直接操作主项目。

## 5. 普通 API 与固定隔离边界

普通 UI、图像/绘制、焦点与 controller、对象/渲染树、Stream 算子、监听器、恢复状态、全局诊断、Canvas 和其他未标记 host 插件都保持原行为。保留现有类型和生命周期校验，不为它们建立全量权限白名单。

这表示它们未纳入当前访问控制，不表示其中每个能力都不存在安全影响。原始 MethodChannel、退出/全局状态和 rootBundle 的具体决定见[宿主边界](sandbox.md#114-原始宿主入口与受控服务)；Context 仍可能取得其他共享对象。若这样的具体路径能绕过某项已经承诺的文件或路由保护，文件/业务能力需补充对应入口，导航需纳入统一边界，或者收窄对外保证；不按“所有引用都有潜在风险”把整个 Flutter 再列入任务。

只有已拦截操作返回的受限 File、请求、流等需要额外约束与清理。普通 Future/集合/函数不整体包装；受限值经过这些通道时不能变成 raw 对象。公开 Context 仅有 appId/homePath/scope 和 requirePolicy，不公开通用资源注册方法；文件对象携带 scope，由文件策略核对类型、Session 身份和存活，请求及流使用其现有资源所有者。

同一 FlaxSandbox 配置可复用，每个 Session 独占实际文件后端与根句柄。关闭时先使 scope 失活、阻止新 IO，再收束本后端的在途操作并释放句柄；启动失败也按此清理。配置不需要公开 dispose，不关闭其他 Session 或应用 Hive
store 的句柄。

### 5.1 JS FFI 是固定启动约束

启用 sandbox 时固定禁用 JS 直接 FFI，与未标记 binding 的默认放行和网络 origins 为 null 无关。复用 native
runtime 的可空 _ffi：在 `_prepareSession` 和 `_load`
两处创建新 runtime 的分支中、任何 prepareSources/模块/插件执行前准备一次；已安装 FFI 时拒绝使用，不清理旧 VM 后降级复用。现有 installNativeFfi 判空负责拒绝 ffiInstall，Core 的 ffiAsset 另在路径解析或文件查询前拒绝。

不增加 allowFfi/策略类型、引擎 ABI、npm 拦截器或逐调用检查。Buffer/Uint8Array 的纯 JS 字节处理保留，需要原生地址的扩展不可用。宿主 Dart/native 可继续通过受控业务 binding 提供能力；开发者 JS 里的 FFI 生成包装也不能绕过 runtime 安装限制。具体字段、拟议方法和基线见[第 11.1 节](sandbox.md#111-js-ffi在安装前固定禁用)。

### 5.2 Canvas 不新增文件 handler

createImageBitmap、drawImage/createPattern、像素读取与 convertToBlob 使用内存字节或已有资源，没有直接按路径读写文件的入口。文件加载在 File.readAsBytes 等实际 IO 入口检查，保存通过 File.writeAsBytes 等受限写入；Blob/ImageBitmap 不再包装文件权限。全局 File(parts,
name) 是内存容器，与 dart:io File(path) 区分。

字体注册通过 Session.assetBundle 读取包资源；资源范围由宿主选择的 bundle 决定，File 主目录和 Fetch
origins 不自动约束 bundle 内部实现。安装包目录由宿主管理、应用不可改写，与可写 data 目录分开；读取包资源不等于给 FilePolicy 增加另一个根。现有目录 bundle 的解析/范围检查与读取分开，不能作为可写目录下的防竞态保证。公共资源与字体可以按宿主选择继续共享。

Canvas 内部的宿主 Dart FFI 调用固定引擎接口，不依赖 JS
ffiInstall；沙箱禁用 JS 直接 FFI 时保留 Canvas 插件、Dart
FFI 和引擎扩展。当前不新增 Canvas
policy/handler 或计数，后续若增加文件路径 API 再接入同一文件策略。完整入口、异步生命周期及验证要求见[第 11.2 节](sandbox.md#112-canvas文件读写与-assetbundle-的边界)。

### 5.3 localStorage 按应用物理隔离

使用 Hive CE，所有文件位于
`<home>/local_storage/`，应用 store 和 box 名称同时隔离；当前静态单一 _store 与固定 boxName 不满足这一要求。同 appId 的持久数据跨 Session 保留，namespace 只是应用内部区域。保持先 await 初始化、后同步 install，按应用 flush/shutdown；store 的句柄独立于 Session 文件后端，不改主 App
Hive 配置，不设计旧共享数据迁移。

### 5.4 ESM 默认支持，远程来源与 Wasm 单独配置

ESM、包内 JS/JSON、静态/动态 import 和顶层 await 默认支持，不增加 enableEsm 或逐模块授权；应用入口与构建产物统一默认 module，不保留旧 Script/清单兼容分支。当前 main 的默认仍是 Script，统一默认尚未实现。应用包/散文件只读模块根与可写 home 分开，不扩大 FilePolicy 根。

拟议 FlaxModulePolicy 只含 Set<String>? remoteOrigins 与 bool
allowWasm，登记于 permissions。缺策略时沙箱远程来源为空集合、可信普通模式为 null，Wasm 均默认 true；显式 FlaxModulePolicy() 远程来源为空集合。null 不限、空集合拒绝、非空精确匹配，显式配置不被默认值覆盖；只关闭 Wasm 且不限远程来源时明确写 remoteOrigins:null、allowWasm:false，不引入第三种字段状态。

远程 ESM 的 FlaxApplication.network 拟显式必传 modulePolicy，在入口下载前冻结并检查；Session 在执行已下载入口前按当前配置再检查请求/实际来源与类型。拟议 FlaxModuleRequest.modulePolicy 把本次策略传给每个入口/依赖的真实下载器，复用 loader 不捕获旧 Session 权限。静态/动态 import、JSON/Wasm 和缓存均遵守对应请求策略，不能只在 View 配置后置检查，详见[首次下载流程](sandbox.md#113-esm源码来源与执行权限)。

Wasm 默认允许，远程 Wasm 同时满足来源策略与 allowWasm；关闭时在任何用户代码前约束模块加载和 WebAssembly 直接编译/实例化，不能只检查 .wasm 后缀。当前不提供 WASI，requiredCapabilities 是功能要求，不是授权。具体运行时禁用接入点未验证，无法可靠关闭时拒绝该配置；禁用 JS
FFI 不自动禁用 Wasm。

SDK 导出、模块实例和迟到清理由当前 Session 持有，模块不会获得更高权限。自定义 loader 是可信宿主扩展，检查请求/返回 URI 不能追回其内部越界 IO。remoteOrigins 只约束模块加载器；若保留 eval/new
Function，不能承诺阻止所有外部代码执行。完整设计见[模块来源](sandbox.md#113-esm源码来源与执行权限)。

### 5.5 用途明确的权限与原始宿主能力

剪贴板以及 App 后续提供的定位、相册选择、分享等归可选权限，本轮不定义所有策略或询问流程。通用平台通道、关闭主 App、修改全局状态和完整 rootBundle 必须保持沙箱边界，不能只用一个权限布尔开关放行原始能力；由宿主提供明确服务。普通 UI/内存数据不因此全部标记。

### 5.6 资源包替代入口

复用 guard，Session 自动提供 FlaxAssetBundlePolicy，取已选定的只读资源 bundle；App 不增加资源目录或图片权限配置。现有 DefaultAssetBundle
Widget 包装无法约束所有直接调用，以下入口需明确接入：

| 入口                                                                                                       | 第一版决定                                                                                             |
| ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| getRootBundle/rootBundle、DefaultAssetBundle.of                                                            | 替换为当前 Session 选定 bundle，外部 Context 不改变归属。                                              |
| PlatformAssetBundle 构造及其 proxy/super 构造                                                              | deny，避免直接创建宿主平台资源加载器。                                                                 |
| AssetBundle load/loadBuffer/loadString/loadStructuredData/loadStructuredBinaryData、clear/evict 的可达投影 | 检查 receiver 为选定 bundle，不能换个对象获取路径后加载宿主资源。                                      |
| AssetImage/ExactAssetImage、Image.asset 构造                                                               | 替换并注入选定 bundle，显式参数也核对；不能只依赖 Flutter 内部 DefaultAssetBundle 或 rootBundle 回退。 |
| AssetImage/ExactAssetImage.obtainKey                                                                       | 检查 provider 已绑定选定 bundle，再调用原操作；返回 key.bundle 保持同一范围。                          |
| ImmutableBuffer.fromAsset                                                                                  | 替换为选定 bundle.loadBuffer 的 Future；fromFilePath 仍 deny，fromUint8List 保持普通内存行为。         |

公共资源由宿主组合进选定 bundle；首版以同一 bundle 实例核对显式参数，不接受任意 host
bundle。规则覆盖实际 override、投影及支持的 proxy/super，无法安全适配时明确拒绝或构建失败。完整同步 handler 与路径说明见[第 11.5 节](sandbox.md#115-assetbundle补齐直接加载与图片-provider-入口)。不重采集历史 census，也不把这些补充伪称为当前精确 API 总数。

## 6. 标记、实现和数量的对应

| 项目          | 怎样计算/处理                                                                                                     |
| ------------- | ----------------------------------------------------------------------------------------------------------------- |
| 显式拦截操作  | 按原始库、声明者、操作种类、名称计数；别名/继承投影不重复。                                                       |
| 真实独立入口  | 文件/请求的静态 facade、override 等不因内部调用同一函数而自动受控，需要另行决定；导航集中处理 root/目标边界。     |
| handler 数    | 与声明数不等；同一策略/受限后端可以复用，deny 项不需要 handler。                                                  |
| 普通对象/传播 | 不纳入必须拦截的 API 数，只对明确的受限返回链保留必要机制。                                                       |
| 新增 SDK API  | 没有标记就走原行为；维护者检查新增文件/请求入口是否需标记，以及新导航路径是否尊重边界，不能宣称升级自动安全拒绝。 |

当前示例用 File(path)、静态文件 Future、目录 Stream 和 Fetch 串起主目录、policy 与同步 handler，不包含业务权限或导航动作授权。上表已经确定替代文件入口决定；Fetch/WebSocket 使用业务网络权限，ESM/Wasm 使用独立模块策略，其他网络 binding 由开发者负责。实现时按实际声明核对文件规则和投影，导航另按真实越界路径验证，无需把整个 SDK 改成默认拒绝。

自有 API 可用拟议
[FlaxSandboxGuard 注解](sandbox.md#34-注解与-scope-发现)显式指定 policyType、handler 和 replace，SDK/第三方源码使用所属 provider 的 YAML。按原始操作归一后计数，两种来源重复配置不增加 API 数。注解不拦截普通 Dart 直接调用；Fetch/WebSocket、ESM 在各自真实入口同步检查对应策略，Wasm 另接运行时开关，见[File 与 Fetch 示例](sandbox.md#63-filepath同步替换构造读写进入受限后端)和[模块来源](sandbox.md#113-esm源码来源与执行权限)。

JS
FFI 的固定禁用属于 runtime 启动与 Core 资产查询边界，不将 FFI 包中的每个方法追加为 binding
handler 数，也不改历史 CSV 分类。

## 7. 保留的去重证据

以下只说明源码规模和来源，不再代表权限工作量：

| 去重事实                                      |   数量 |
| --------------------------------------------- | -----: |
| 4 份运行时 manifest、17 个模块中的 class 记录 |  2,302 |
| 类成员投影                                    | 61,778 |
| 补齐顶层/扩展/State 变体成员后的操作投影      | 62,323 |
| 原始操作去重后                                | 33,429 |
| 无法解析的投影                                |      0 |
| 历史广义审查 CSV 行数                         |  7,649 |

来源为
[Core manifest](../../packages/flax/bindings/manifest.json)、[Material manifest](../../packages/flax_material_ui/bindings/manifest.json)、[Cupertino manifest](../../packages/flax_cupertino_ui/bindings/manifest.json)
和 [Canvas manifest](../../packages/flax_canvas/bindings/manifest.json)，format
28，不包含作者模板和测试 fixture。

本次对四份 manifest 逐一核对 SHA-256，均与原摘要一致；CSV 文件内容也未改变。这证明既有 SDK 声明清单可继续作为来源查询，不代表已重新统计新宿主 scope，更不证明每个原生实现或运行时安全性质均未变化。

通过 Dart Analyzer 解析原始声明，使用 `library URI + owner + 操作种类 + 原始名称`
去重。泛型实例化和继承投影合并，真实 override、getter/setter、同步/异步不同声明保留。例如 FileSystemEntity.exists 的 4 个投影合成 1 个，Stream.map 的 5 个投影合成 1 个。

使用本地 Flutter revision `183508ece44ae312a7339bd2ede245e16cf485f3` 和 Analyzer
13.3.0；具体版本、manifest 及 696 个来源文件哈希见摘要。CSV 的两列分类已明确标为历史审查信息，**不能直接转成当前 sandbox 规则**。

旧摘要中的广义分类结果移动到 `historicalBroadReview`，新模型标明
`defaultForUnmarked: original_binding`；当前 API 拦截总数未定，不以旧广义数字代填；navigationDesign 另行记录嵌套导航与边界设计，filesystemDesign 记录应用主目录规则。

## 8. 验证边界

文档复核覆盖类型键配置、显式 policyType、同步检查与受限 Future/Stream、逐项文件及资源包入口、Fetch/WebSocket 与独立模块策略、Dart
Host 校验、Session 资源归属及导航边界；检查 YAML、链接、摘要哈希及 File 工厂写法。当前契约统一、最小 Context、独占文件后端、首次下载配置和 Wasm 禁用仍为提案，未运行验证。配置绑定 Session，替换后重建，异步加载与 HMR 不扩大旧运行权限。没有重跑全量 Analyzer 或复核全部 696 个来源文件，也不把旧分类宣称为当前最小拦截集合。

早先 FFI 专项保留原基线；此次按 main
8f123f3b9 修正双启动路径，并核对应用/Session、权限分工、localStorage、ESM 与宿主入口，来源见摘要 securityScopeReview。不代表基础工作区已 rebase 或历史统计已更新。实施时验证直接 ffiInstall/ffiAsset、预装 runtime 拒绝及普通模式/纯 JS
Buffer 的兼容性，本次没有执行这些运行时验证。

Canvas 专项核对图片输入、Blob 导出、Session 字体和 AssetBundle、宿主 Dart
FFI，单独记录于摘要 canvasDesign；不重采集历史统计。禁用 JS
FFI 后的 Canvas 兼容性、文件根外拒绝和资源包边界仍需在沙箱实现后验证。

未改实现或生成 binding，未运行实际隔离测试。选择性 API 拦截和 FFI 禁用仍为设计，只覆盖约定入口和实际资源边界，不是全宿主隔离证明。

直接拒绝专项仅补充规则与错误交付设计，来源见摘要 denialDesign；同步 try/catch、Future
Promise 拒绝和 Stream 错误通道，以及原始 Dart 异常/StackTrace 保留，均待实现后验证。
