# Flax 沙箱与宿主权限设计：选择性拦截与同步 handler

> 实现范围更新（2026-10-27）：本次落地文件系统、资源包、localStorage、binding
> guard 与 JS FFI 隔离。**导航隔离按最新决定暂缓**；业务权限、Fetch/WebSocket
> origins、remoteOrigins 和 Wasm 开关也留待权限设计。本提案中相关配置仍是后续设计，当前不提供
> `isolateNavigation`、`FlaxNavigationPolicy`、`FlaxPermissions`
> 或网络/模块 policy。已实现契约以[沙箱架构](../architecture/sandbox.md)为准。嵌套 Navigator 和 binding
> handler 无法拦截所有原生 Widget 内部的根导航调用，当前数据沙箱不保证主项目路由隔离。

状态：**资源隔离已实现，权限与导航仍为后续提案**。实现基线为 main
`8f123f3b9eec2bb60ec9e652f72d679478ce5189`。本次已提供类型化同步 guard、受限文件后端、应用资源包、localStorage 隔离、统一异常、主目录查询和 JS
FFI 禁用。验证方式及平台限制见[实现契约](../architecture/sandbox.md#verification)。旧 API 统计仍保留其原始采集基线。

当前接入方式：

```dart
final sandbox = await FlaxSandbox.create(appId: 'com.example.notes');
final view = FlaxView(
  sandbox: sandbox,
  createRuntime: FlaxEngine.createRuntime,
  source: source,
);
```

主目录默认是 `ApplicationSupport/flax/apps/sha256(appId)/data`；可用 `appsDirectory`
替换共同父目录。JS 用 `await getHomePath()`
获取真实绝对路径。内置文件与资源包 policy 由 Session 提供，App 扩展使用
`policies: {NotesPolicy: const NotesPolicy()}`。注解用 `policyType`、`handler` 和可选
`replace: true`；直接拒绝用 `@FlaxSandboxGuard.deny()` 或 YAML 的
`deny`。源字符串、文件与远程 JavaScript 入口默认 ESM，包入口仍由清单确定；模块共享当前 Session 的同一沙箱。

**下文保留完整设计讨论，其中权限、导航、配额与策略对象布局是后续设计，不是可直接编译的当前配置。**
实际接口和示例以[已实现的架构契约](../architecture/sandbox.md)为准。[拦截范围清单](sandbox-api-inventory.md)记录能力范围与旧统计的边界。当前没有网络白名单、远程模块来源限制或 Wasm 禁用开关，Fetch/WebSocket 和远程模块继续沿用宿主已安装能力。

## 1. 当前范围与结论

**本方案区分应用资源隔离、宿主能力权限与普通 API。沙箱防止越权触达主程序或其他应用资源；权限决定宿主开放哪些受控能力及目标。用户授权询问、角色权限和按业务数据 ID 授权留到后续。**
以后 App 可以提前异步询问权限，再在实际操作时同步判断结果；本方案不定义这套业务流程。

普通主工程集成默认不启用沙箱，也可以独立配置宿主能力权限。只有显式标记的 binding 操作进入沙箱适配；Fetch/WebSocket 检查业务网络权限，ESM 加载检查独立模块策略。ESM 和包内模块作为基础能力默认支持，Wasm 默认允许、宿主可关闭。普通 Widget、样式、集合、controller 等沿用原 binding，不建立全 SDK 白名单。

项目仍处于开发初期，方案只支持当前契约：binding 统一按当前生成器重新生成，应用入口统一默认 ESM，不保留旧 provider、旧清单或旧 Script 入口的兼容与迁移分支。普通模式是当前仍需支持的可信主工程集成方式，与历史版本兼容无关。

| 情况                                  | 调用行为                                                                                                                  |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| 未启用 sandbox                        | 沙箱 binding 规则不执行；独立配置的宿主能力权限仍生效。                                                                   |
| 启用 sandbox，操作未标记              | 保持现有调用、转换和生命周期行为。                                                                                        |
| 操作标记为检查，`replace: false`      | 根据声明的 policy 类型查配置，执行同步 void handler；正常返回后调用原 API。                                               |
| 操作标记为替换，`replace: true`       | 根据 policy 类型查配置，执行同步 handler，以其返回值代替原调用；可直接转交受限后端的 Future/Stream，原 API 不再自动执行。 |
| 显式 deny、缺少所需 policy 或规则无效 | 拒绝对应操作或报告配置/构建错误，不能回退原 API。                                                                         |

文件采用“查询主目录 + 真实绝对路径”，实际 IO 限制在主目录内；业务网络权限为内置 Fetch/WebSocket 提供可选 origins，默认不限目标。远程模块使用独立 remoteOrigins：沙箱下默认拒绝，普通模式保留现有不限来源行为；显式配置优先。开发者自有网络 binding 自行接入边界。导航通过应用自己的嵌套 Navigator 和统一目标边界隔离，不逐个配置 push/pop
handler。启用沙箱还固定禁用 JS 直接 FFI，复用 runtime 安装边界，不增加 FFI
policy 或逐函数规则，见[第 11.1 节](#111-js-ffi在安装前固定禁用)。

### 1.1 保证范围

这是指定入口的资源隔离与访问控制，不是任意宿主代码的全面隔离。Image.network 等网络图片按本轮需求保持原行为，origins 不代表整个小程序所有网络出口的白名单。未接入的 App/native 服务不会自动受控；若它绕过已承诺的文件或导航边界，需要补具体入口，或收窄保证。

FileImage/Image.file 使用受限 File 与原生缓存；直接接收字符串文件路径的加载器另行处理，见[第 6.6 节](#66-imagefile-复用受限读取和原生图片缓存)。普通嵌套 Navigator 不能独自阻止 root 查找和原生弹窗越界，见[第 8 节](#8-路由嵌套-navigator-加统一边界)。

Canvas 现有图片与像素 API 处理内存数据，不新增文件 handler；实际文件读写沿用文件边界，字体等包资源由 Session 的 AssetBundle 确定可读范围。禁用 JS 直接 FFI 不禁用 Canvas 内部的 Dart
FFI，见[第 11.2 节](#112-canvas文件读写与-assetbundle-的边界)。

<a id="current-architecture"></a>

### 1.2 对齐当前 binding 结构

| 当前结构                         | 已有职责                                                    | 沙箱接入位置                                                                                                  |
| -------------------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| FlaxExport / 原 YAML 选取        | 决定导出哪些声明，FlaxIgnore 排除声明。                     | FlaxSandboxGuard 标记已选操作；scope 不作为应用身份或边界配置。                                               |
| flax_codegen 的 CLI / Builder    | 共用选取、provider 归属、Dart/TS 和 manifest 生成。         | 归属确定后合并注解/YAML，验证 policyType、handler 和 replace。                                                |
| FlaxBindingPlugin / View.plugins | 决定 Session 安装的原生 binding 与 JS 模块；Core 自动加入。 | 插件与描述符保持不可变，不捕获某个 Session 的 policy。                                                        |
| 类型 SDK / Flax.moduleAssets     | 提供编译期声明和已准备的模块资产。                          | 不提供或覆盖 Session 的沙箱配置。                                                                             |
| Session / 手工 host 入口         | 持有真实调用者、对象和生命周期。                            | 向标记调用传入隔离上下文；Fetch/WebSocket 检查 FlaxNetworkPolicy，模块加载及 Wasm 执行检查 FlaxModulePolicy。 |

当前依据：[注解](../../packages/flax_annotations/lib/flax_annotations.dart)、[共用生成管线](../../packages/flax_codegen/lib/src/package_pipeline.dart)、[插件](../../packages/flax/lib/src/ui/host.dart)、[独立 SDK 决策](../decisions/0050-independent-binding-sdks-and-project-setup.md)。上述结构已经存在，沙箱适配尚未实现。

<a id="application-session"></a>

### 1.3 默认一应用一 Session

默认模型是**一个运行中的 Flax 模块应用对应一个 Session，应用内部多个页面复用它**。Session 的主要价值是共享同一个 JS
runtime、模块实例、全局状态和 signal，同时统一管理请求、插件及关闭清理。不围绕多个独立实例增加应用运行管理层或跨 Session 模块共享。

| 概念            | 归属与生命周期                                                                                                                |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| appId           | 可信宿主确认的稳定应用身份，决定文件和 localStorage 的持久归属；包中 manifest.id 只能作为经宿主核验的输入，不能自行冒用身份。 |
| FlaxApplication | 已加载的代码、资源及模块来源描述，可供运行实例使用；不承担活动 runtime 的生命周期。                                           |
| Session         | 应用当前一次运行，持有实际生效的不可变配置、JS 模块/状态和临时资源。关闭不删除持久数据。                                      |
| FlaxView / 页面 | 展示所属 Session 的内容；应用内部切换页面通常不创建新的 Session。                                                             |
| namespace       | 可保留为同一应用内部的存储分区，不能代替跨应用身份和物理存储隔离。                                                            |

同一应用关闭后重开，或 ESM 更新后重启，使用相同 appId、新的 Session，模块重新初始化而持久数据保留。即使宿主另外创建同 appId 的 Session，也只共享明确的持久数据，不共享 JS 对象、桥接句柄或关闭状态；这只是必须保持的生命周期正确性，不是默认使用方式。

<a id="isolation-permissions"></a>

### 1.4 沙箱、权限与普通 API

| 分类               | 本方案的处理                                                                                                                                                     |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 沙箱资源边界       | 文件主目录、导航目标、localStorage 的应用归属、模块/AssetBundle 资源范围；固定禁用 JS 直接 FFI，关闭能绕过这些承诺的原始宿主入口。                               |
| 宿主能力权限       | Fetch/WebSocket 的 origins；模块独立的 remoteOrigins 和 allowWasm。两份来源名单互不继承；是否提供可选 API 优先由现有插件/模块选择决定，不重复增加 enabled 开关。 |
| 可扩展的权限候选   | 剪贴板读取/写入，以及 App 后续提供的定位、相册选择、分享等具体受控服务；本轮记录分类，不新增逐项 policy 类型、默认值或授权弹窗。                                 |
| 普通 API           | 普通 UI、Canvas 绘制、内存图片、Blob、集合及 Promise/Stream 算子等继续正常使用，不全部转成权限工作项。                                                           |
| 同一能力的两个问题 | 是否提供 localStorage 属于能力开放选择；提供后只读写当前 appId 的区域属于沙箱保证。权限通过不能解除已经启用的隔离边界。                                          |

“影响主程序”在这里指越权访问、修改主程序资源或控制其生命周期，不能按任何 CPU/内存消耗或可观察副作用机械分类。通用 MethodChannel、主程序退出等原始能力与用途明确的授权服务不同，具体处理见[宿主旁路](#114-原始宿主入口与受控服务)。

<a id="configuration"></a>

## 2. 隔离配置与独立的权限配置

继续使用真实 Dart
Type 作为配置键，不定义能力 token 或字符串 ID。隔离扩展仍在 sandbox.policies 登记；可选能力策略放入 Session/View 的拟议 permissions，不再要求开启沙箱才能限制网络。两者职责分开，内部复用现有同步检查/执行方式，不建立两套通用 handler 框架。

```dart
// 拟议接口；主目录和同步 handler 契约保持不变。
final class FlaxSandbox {
  static Future<FlaxSandbox> create({
    required String appId,
    Directory? appsDirectory,
    bool isolateNavigation = true,
    Map<Type, Object> policies = const {}, // 自定义隔离策略。
  });

  String get applicationPath; // 可信宿主管理整个应用，JS 不因此获得根目录访问权。
  String get homePath; // applicationPath/data。
}

final sandbox = await FlaxSandbox.create(
  appId: 'com.example.reader',
  // 默认父目录：ApplicationSupport/flax/apps。
);

FlaxView.bundle(
  prefix: 'applications/reader',
  createRuntime: FlaxEngine.createRuntime,
  plugins: [const FlaxWebSocketPlugin()],
  sandbox: sandbox,
  permissions: {
    FlaxNetworkPolicy: FlaxNetworkPolicy(
      origins: {'https://api.example.com', 'wss://socket.example.com'},
    ),
    FlaxModulePolicy: FlaxModulePolicy(
      remoteOrigins: {'https://modules.example.com'},
      allowWasm: true,
    ),
  },
);
```

permissions 是新拟议参数，显式 FlaxSession /
.application 同样接收；普通模式可省略 sandbox 而保留 permissions。借用 .session /
.page 只能使用所属 Session 的配置。FlaxView 的 bindings 已可省略；显式 Session 的 bindings 仍必填。配置不自动安装可选插件或加载缺失的模块。上例允许 Fetch 访问业务 API、模块加载器从模块服务器获取代码；两者不因此获得对方名单中的来源。模块策略的字段、默认值和首次下载前的配置传递见[第 11.3 节](#113-esm源码来源与执行权限)。

| 规则       | 契约                                                                                                                                                                                                                                       |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 精确类型键 | 按声明 Type 精确查找，不以类名字符串、父类扫描或实例 runtimeType 猜键；类型别名不创造身份。隔离与权限各自查所属配置，不跨表兜底。                                                                                                          |
| 类型校验   | 配置值必须匹配声明类型，内置配置在准备时验证；自定义隔离策略最迟在首次解析时验证。错误不能回退原调用。                                                                                                                                     |
| 配置快照   | Session 冻结两份 Map；策略负责其内部集合不可变，不深拷贝任意对象。共享模块不保存某次运行的配置或批准结果。                                                                                                                                 |
| 内置默认   | Session 沙箱准备自动提供且禁止覆盖 FlaxFilePolicy 与 FlaxAssetBundlePolicy；缺 FlaxNetworkPolicy 时补 origins:null；缺 FlaxModulePolicy 时按沙箱/普通模式分别补 remoteOrigins:空集合/null，allowWasm 均为 true。显式配置不能被默认值覆盖。 |
| 自定义策略 | FlaxSandboxGuard 的 policyType 从 sandbox.policies 取值，缺少所需策略拒绝；业务权限扩展先在具体宿主 API 检查，不新增通用权限注解/生成模式。                                                                                                |

appsDirectory 只覆盖公共 apps 父目录；applicationPath 追加 sha256(appId)，homePath 再追加 data。appId 由可信宿主决定；普通模式 getHomePath 返回宿主 ApplicationSupport。create 异步准备目录并检查平台支持，临时检查句柄当次释放；返回的配置不持有活动后端或长期句柄。Session 启动时重新核对根目录，打开自己独占的受限后端并提供两份内置隔离策略，失败则在执行 JS 前终止并清理。配置应沿应用入口获取、Session 创建、插件和模块加载完整传递；普通 File 只受主目录边界限制，代码/资产使用各自的只读来源边界。

main 8f123f3b9 当前已有 `bool sandbox = false`
预留项，true 会在副作用前抛 UnsupportedError；本文的 FlaxSandbox? 与 permissions 仍是提案。实现时直接采用新接口并更新项目调用处；在隔离完整实现前继续拒绝启用，不能删除拒绝分支就宣称已支持沙箱。

### 2.1 配置切换必须切换 Session

| 变化                                        | 拟议行为                                                               |
| ------------------------------------------- | ---------------------------------------------------------------------- |
| 同一不可变 sandbox 与权限配置，普通 rebuild | 复用当前 Session，不因 rebuild 重新初始化模块。                        |
| 切换沙箱、appId、目录或权限配置             | 关闭并重建自有 Session，不在原 runtime 中改身份或放宽旧对象的边界。    |
| 加载中切换配置                              | 取消旧加载，迟到结果不得挂到新 Session；入口下载也使用对应配置。       |
| HMR / 借用 View                             | 保持所属 Session 的有效配置；ESM 更新或配置变更通过重建 Session 应用。 |

按不可变配置身份/明确更新入口判断变更；不递归比较任意 policy 对象。旧任务保持原调用归属。namespace 与 AssetBundle 的既有普通模式行为保留，沙箱 localStorage 和来源范围的新要求见后文。

<a id="binding"></a>

## 3. binding 声明：显式 policyType、handler 与 replace

### 3.1 最小规则

自有 API 用 FlaxSandboxGuard；无法修改源码的 SDK/第三方入口用所属 provider 的 YAML。两种来源表达同一规则，不因标记而自动导出 API。

```dart
@FlaxSandboxGuard(
  policyType: FlaxFilePolicy,
  handler: createSandboxFile,
  replace: true,
)
```

普通构造要求 policyType 和 handler 非空，replace 默认 false；另保留
`@FlaxSandboxGuard.deny()`
表达沙箱下无条件拒绝，不需要 policy 或 handler。注解包保持纯 Dart，元数据分别使用 Type、Function、bool，不依赖 Flutter/runtime；生成器验证真实类型、符号和签名。

固定禁止的操作直接使用 deny，无需编写一个只抛异常的函数。配置和冲突规则见[直接拒绝](#36-直接-deny不需要-handler)，统一错误与 JS 捕获见[拒绝异常](#45-统一沙箱拒绝异常与-js-捕获)。

### 3.2 YAML 等价规则

在原 provider 配置增加拟议 sandbox.version:
1。这里合并展示多个 provider 的目标，实际应写回拥有各原始声明的配置，不由 App 复制并重新发布 SDK
binding。

```yaml
sandbox:
  version: 1
  classes:
    File:
      constructors:
        '':
          policyType: package:flax/sandbox_io.dart#FlaxFilePolicy
          handler: package:flax/sandbox_io.dart#createSandboxFile
          replace: true
        fromUri:
          policyType: package:flax/sandbox_io.dart#FlaxFilePolicy
          handler: package:flax/sandbox_io.dart#createSandboxFileFromUri
          replace: true
        fromRawPath: deny
      instanceMethods:
        readAsString:
          policyType: package:flax/sandbox_io.dart#FlaxFilePolicy
          handler: package:flax/sandbox_io.dart#checkFileRead
        open: deny
        openSync: deny
    FileStat:
      methods:
        stat:
          policyType: package:flax/sandbox_io.dart#FlaxFilePolicy
          handler: package:flax/sandbox_io.dart#sandboxStat
          replace: true
    FileImage:
      constructors:
        '':
          policyType: package:flax/sandbox_io.dart#FlaxFilePolicy
          handler: package:flax/sandbox_io.dart#createFileImage
          replace: true
```

readAsString 的检查 handler 不读文件；通过后由 binding 调用 receiver 的原方法，receiver 必须是受限 File。File 构造的替换 handler 则直接创建受限实现，不再自动调用普通 File 构造。stat 的同步 handler 直接返回受限后端的 Future。fromRawPath、open 和 openSync 在第一版明确 deny；完整决定见[文件入口表](sandbox-api-inventory.md#21-替代文件入口第一版逐项决定)，本段不是全部规则。

选择器继续使用原 Dart 名称：

| 容器                 | 选择器                                                                                                                       |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| classes              | constructors、getters/setters、staticGetters/staticSetters、instanceMethods、methods（静态）、operators；无名构造键为 `""`。 |
| functions / topLevel | 顶层函数；顶层 getters/setters 分别控制读写。                                                                                |
| extensions           | getters/setters、methods（实例）、staticGetters/staticSetters/staticMethods、operators。                                     |
| 枚举与常量           | 必须限制的访问器可显式标记，其他值沿用原规则。                                                                               |

### 3.3 原始声明与当前契约

生成器通过 Analyzer 解析 policy 类型和 handler 函数。policyType 必须是可明确表示的非空 Dart 类型，不接受 dynamic、Object 或未绑定类型参数；别名先解析到真实类型。handler 必须符合第 4 节，并按真实声明身份比较，不能只看名字。

继承投影、重导出、JS 改名、泛型实例化和 operator 别名复用同一原始操作的规则；真正 override 或不同函数体另行处理。标记方法的 receiver 仍需检查，不能因基类有规则而相信任意虚调用实现。super 按实际目标声明处理。

不同来源对同一操作声明的 policyType、handler 和 replace 全部一致时合并；任一不同均报构建错误，没有隐式覆盖。已选特殊工厂不能正确适配时明确失败，不扩大为全部工厂拒绝，也不静默丢规则。

可信 Dart 描述符保存类型和函数引用，manifest/JS 只记录契约及审计信息，不承载可修改的 Session 配置。provider 与调用处统一采用当前生成契约，不提供旧规则降级或缺元数据的兼容放行。未标记的普通 API 仍沿用原调用；文件、资源包、导航等已承诺边界必须完整接通后才开放沙箱。已有 requiredCapabilities 仍只是桥接特性版本要求，与沙箱 policy 注册无关。

<a id="sandbox-annotations"></a>

### 3.4 注解与 scope 发现

```dart
// 自有顶层 API；普通模式创建普通 File，沙箱模式返回受限 File。
@FlaxExport(scope: 'app')
@FlaxSandboxGuard(
  policyType: FlaxFilePolicy,
  handler: createSandboxFile,
  replace: true,
)
File createAppFile(String path) => File(path);
```

该示例复用内置文件边界，不引入按业务 ID 授权。FlaxIgnore 表示根本不导出，不能替代沙箱 deny。沙箱标记支持具体构造、方法、函数、显式 getter/setter、扩展成员和 operator；第一版不做类级批量拦截，也不在字段、参数或枚举值上猜测操作。

纯注解项目保留默认 scope 发现与聚合输出，不必为沙箱增加 YAML。若选择 YAML，现有规则仍然适用：任何显式 flax_*.yaml 都会切换到显式 scope 配置，需要配置其他正在使用的 scope 和对应 Builder 输出。无需为了标记一个成员再写一份 classes 选取表。

最终由本 provider 生成的选中声明，不论通过何种方式选中，都要读取其沙箱注解；annotations 开关只控制导出发现，不能用来关闭已选声明的安全标记。未选声明上的标记不会自动暴露 API。

### 3.5 生成管线与 App 扩展归属

处理顺序：现有选取/覆盖合并 → 确定最终声明和 provider → 合并注解/YAML
→ 验证 policyType、handler 和 replace → 生成适配与契约元数据。

规则留在所属 provider。复用第三方已有 binding 时保留身份，由提供方发布规则；没有 binding 的依赖可由本方显式 library
scope 或 facade 适配，不引入全局依赖覆写。配置指向未选中、忽略或其他 provider 拥有的声明时给出可定位错误。

CLI 与 Builder 共用解析与生成；handler/policy 文件通过现有 Analyzer
resolver 与 BuildStep 追踪，包括未导出的 handler 文件。config.copyWith、选择合并、provider 投影和序列化必须保留完整规则。沙箱字段不进入 pubspec、flax_overrides.yaml、build.yaml 或 JS 模块清单；复用现有输出，不新增构建阶段。

<a id="direct-deny"></a>

### 3.6 直接 deny：不需要 handler

自有 API 可以单独标记；原有 FlaxExport 或 YAML 导出选择保持原职责：

```dart
// 拟议注解：放在需要固定拒绝的已选 API 上。
@FlaxSandboxGuard.deny()
```

SDK/第三方 API 在所属 provider 的配置中写 deny：

```yaml
sandbox:
  version: 1
  classes:
    File:
      instanceMethods:
        open: deny
        openSync: deny
```

deny 不查 policy、不调用 handler，也不执行原 API；不需要 policyType、handler 或 replace。它只在当前 Session 启用沙箱时生效，普通模式继续原调用。不能同时为同一操作设置 deny 和检查/替换规则；注解与 YAML 重复 deny 可以合并，不同规则按既有冲突规则构建失败，不能用后一条配置静默覆盖。

运行时由框架构造统一 FlaxSandboxException，operation 来自受控操作声明，默认 message 说明该操作被沙箱禁止。无需为 File.open、openSync 等逐项实现拒绝函数，也不新增配置异常工厂或默认放行回退。Future/Stream
API 的拒绝交付遵守[第 4.5 节](#45-统一沙箱拒绝异常与-js-捕获)，不能直接把所有目标都改成同步 JS
throw。

<a id="handler"></a>

## 4. handler：同步检查与同步替换

### 4.1 参数按目标 API 适配

固定前缀是上下文和注解指定类型的 policy；实例操作再传 receiver，然后完整保留原参数。顶层/静态函数与构造执行前没有当前实例，不传空 receiver 占位。

| 原 API                   | 检查 handler（replace 为 false）                                   |
| ------------------------ | ------------------------------------------------------------------ |
| 实例方法 `R obj.f(A a)`  | `void h(Context c, P p, Receiver receiver, A a)`                   |
| 顶层/静态函数 `R f(A a)` | `void h(Context c, P p, A a)`                                      |
| 构造 `C(A a)`            | `void h(Context c, P p, A a)`                                      |
| 实例 getter / setter     | `void h(Context c, P p, Receiver receiver)`；setter 再接原属性值。 |
| 扩展 / operator          | 传入对应扩展目标/左操作数，再接原参数。                            |

表中的 Context 指 FlaxSandboxContext，P 必须与 policyType 一致。替换模式使用相同参数排列，将 void 改为目标操作的返回类型 R；R 可以是普通值、Future<T>、FutureOr<T>
或 Stream<T>。目标本来返回 void 时仍可显式选择替换，不通过返回类型猜测模式。

保留泛型顺序/边界、可空、required、命名/位置参数和默认值/省略语义。不能忠实适配时构建失败。检查 handler 正常返回表示通过，抛异常中止操作，不返回 bool，也不自动重试。明确的沙箱拒绝使用第 4.5 节的统一异常；普通参数、IO 或实现错误不因此全部改成拒绝异常。

### 4.2 同步契约

**同步约束的是检查和执行路径的选择：handler 返回前必须完成放行或拒绝，再决定调用哪个受限实现。**
两种 handler 都禁止 async、async*、sync*，async
void 同样拒绝；不得启动后台校验后提前放行。生成器检查函数体或可验证的源码元数据，无法验证时构建失败。函数体检查不能证明任意可信 Dart 辅助函数的行为，App/提供方仍须遵守契约。

检查 handler 固定返回 void，不能返回 Future/Stream。替换 handler 保持普通同步函数，但允许直接返回受限对象/后端产生的 Future<T>、FutureOr<T>
或 Stream<T>，其类型和形态必须与目标 API 一致。原来返回普通值的 API 不能通过 Object 等宽类型偷偷改成异步 API。返回 Future 不表示异步鉴权：它只表示已经获准的 IO 尚未完成。

生成适配器不 await、不额外包装或订阅这些结果，直接复用现有
[Future/FutureOr/Stream 转换](../../packages/flax/lib/src/ui/members.dart)。handler 不在 then、回调或流事件里补做第一次授权，不把原始宿主对象事后改装成受限对象；后端从开始执行就绑定当前 scope 和边界，负责异步结果、懒订阅、迟到资源与取消清理。

检查通过后原调用与结果转换保持既有形态；替换则跳过原调用。拒绝也遵守目标的错误交付契约：Future
API 经原 Promise 拒绝路径交付，不能因为同步检查而意外变成同步 JS 异常；Stream 保留原创建/订阅错误语义。检查结束和实际启动 IO 时仍需确认 Session 未关闭。

因此 FileStat.stat 等无 receiver 的异步静态入口可同步选择受限后端并直接返回 Future。尚无安全执行实现的明确入口仍 deny，不能只检查路径后交回普通原生实现，也不增加通用异步结果过滤管线。

<a id="context"></a>

### 4.3 Session 上下文

```dart
// 拟议执行接口；与 FlaxSandbox 配置对象分开。
abstract interface class FlaxSandboxContext {
  String get appId;
  String get homePath;
  FlaxSandboxScope get scope;
  P requirePolicy<P extends Object>();
}

abstract interface class FlaxSandboxScope {
  bool get isActive;
  void requireActive();
}
```

公开 Context 只提供本次调用归属、scope 和策略查询。policy 已由生成适配器传入，handler 通常不再查一次；requirePolicy 用于确需另一种边界配置的情况。scope 是当前 Session 独有且稳定的身份，关闭后失活；同一 appId 重开的新 Session 不复用它，同一运行内的多个页面则复用它。

homePath 只读地转交本次运行已准备的 FlaxSandbox.homePath，不再定义另一份目录配置。宿主插件据此选择本应用资源，不通过 JS 参数或全局当前应用推断身份。

不公开通用 requireResource、exportBorrowed、exportOwned，也不增加通用资源注册表。File/Directory 保存创建时的 scope，内置 FlaxFilePolicy.requireFile(scope,
receiver) / requireDirectory(scope,
receiver) 统一检查真实受限类型、scope 身份和存活；主目录也必须属于该策略。只比较 appId 不够，普通宿主对象或另一 Session 的对象仍拒绝。只读资源包通过 FlaxAssetBundlePolicy 核对本次 Session 选定的 bundle。

实际句柄由 Session 文件后端持有；请求、流及其他插件资源复用各自现有关闭/销毁流程。确需登记清理时使用所属实现的内部辅助，保持单一清理责任。异步清理属于资源实现，handler 不等待它，也不获取需要自己 await 才能处理失败清理的新资源。

### 4.4 分派与缓存

当前
[成员分派](../../packages/flax/lib/src/ui/members.dart)的 invoke 不接收 Session，[描述符](../../packages/flax/lib/src/ui/definitions.dart)也没有本方案的规则。实现需为已标记操作增加可选适配和模式，分派处显式传入 Session 上下文，不把它塞进用户参数 Map。

```text
无沙箱或未标记 → 原 invoke
显式 deny → 拒绝
有规则 → 校验 scope → requirePolicy<P>() → 转换/校验原参数
       → replace:false：调用同步检查 handler → 原 invoke
       → replace:true：调用同步替换 handler → 使用返回值，跳过原 invoke
       → 复用原结果转换与生命周期
```

生成模块/插件与共享描述符只保存固定规则，不捕获 Session 配置或缓存某次检查结果。一个 Session 复用自己的轻量上下文，普通未标记调用不创建专用包装，也不增加 JS/原生往返。需要核对延迟 Widget 工厂、泛型、native
function、super、常量/访问器缓存等实际执行位置，不能只修改一个分派函数就宣称覆盖。

任何 handler 或配置错误都不能回退原 API。同步检查调用原操作一次；替换不自动再调用原操作。替换 handler 确需复用安全原构造时可以显式调用，例如 FileImage，但不得再次进入生成 binding 形成递归。

<a id="sandbox-errors"></a>

### 4.5 统一沙箱拒绝异常与 JS 捕获

**本节定义拟议错误契约，尚未实现。**
直接 deny、文件路径越界和受限资源归属不匹配等明确拒绝，统一使用 Dart
FlaxSandboxException；可信 handler 或安全后端可抛出同一类型，不要求另写一个拒绝 handler。不要捕获任意异常后统一改成沙箱拒绝。

```dart
// 拟议类型的使用示意；无需为直接 deny 编写这段函数。
throw FlaxSandboxException(
  operation: 'File.open',
  message: '沙箱不允许随机访问文件',
);
```

| 字段              | 契约                                                                                    |
| ----------------- | --------------------------------------------------------------------------------------- |
| code              | JS 固定为 `FLAX_SANDBOX_DENIED`，由桥接层识别 Dart 异常类型后添加，不依赖解析 message。 |
| operation         | 被拒绝的原始操作名，例如 File.open；显式 deny 从声明取得，不由业务 JS 指定。            |
| message           | 可读的拒绝原因；不能依赖具体文案做程序判断，不为了说明范围而附带主 App 私有数据。       |
| stack / Dart 引用 | 沿用现有 JS Error 诊断与原始 Dart 异常/StackTrace 引用，不换成普通结果对象。            |

仅为这一明确类型增加稳定字段，不为所有 Dart 错误新增 code，也不要求导出一套 JS 异常类。普通 FileSystemException、网络错误、参数/配置错误和 handler 实现错误保留原有类别与交付；Session 已关闭也保留既有关闭错误，不能全部映射成 FLAX_SANDBOX_DENIED。宿主网络权限是另一职责，本节不顺带规定其错误码或用户授权流程。

现有 main 8f123f3b9 的 `streams.dart` 中 errorResult/exceptionResult 与 JS
`runtime/bindings.ts`
的 dartError 主要转换 message/stack 并保留引用，没有本节的 code/operation。后续在这条既有错误转换路径显式识别 FlaxSandboxException，保证同步失败、Future 拒绝和流错误使用同一规则，不受普通值/nominal 类型转换分支影响。不另加全局异常拦截器、业务结果 envelope 或 JS
instanceof
FlaxSandboxException 的要求；修改 JS 诊断字段也不能改变原始 Dart 异常与堆栈引用。

| 原 API 形态                    | 拒绝如何交付与捕获                                                                                                                                       |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 同步值、void、构造、同步访问器 | 同步失败，通过 JS try/catch 捕获。                                                                                                                       |
| Future                         | 走原 Promise 拒绝通道，使用 await + try/catch 或 .catch；即使 handler 同步判断，也不能因此意外同步抛到 JS。                                              |
| FutureOr                       | 保留目标原有同步/异步交付规则，不因为拒绝强制改变返回形态。                                                                                              |
| Stream                         | 保留目标的创建/订阅错误契约；取得流时的失败由相应调用处理，订阅/实际 IO 时的源错误走原 onError。适配器不为检查额外订阅，不把所有流拒绝机械变成同步异常。 |

JS 示例中的 File/getHomePath 与[文件示例](#63-filepath同步替换构造读写进入受限后端)使用相同导入；稳定字段是未来实现后的契约：

```javascript
try {
  const home = await getHomePath();
  const file = File(`${home}/note.txt`); // 构造阶段的同步失败也在 try 内。
  await file.open(); // 配置为 deny；Future 通过 Promise 拒绝交付。
} catch (error) {
  if (error?.code === 'FLAX_SANDBOX_DENIED') {
    console.warn('操作被沙箱拒绝：', error.operation, error.message);
  } else {
    throw error;
  }
}
```

异步操作需要 await 或 .catch；仅把 file.open() 放在 try 中、却不等待其 Promise，不能捕获后续拒绝。已有 Stream 的异步源错误在其订阅错误回调中用相同 code 判断，不靠围住 listen 的 try/catch 捕获后续事件。拒绝处理不触发原操作重试，也不能解除沙箱边界。

<a id="lifetime"></a>

## 5. 只管理实际受限资源

普通 String、数值、集合、Future 算子等沿用现有行为。File、请求和源流等持续操作能力，必须由受限实现保留 scope 和边界；它们经 Future、集合、Record、回调或类型视图传递时，仍是同一受限引用，不得解包为 raw 对象。

| 结果                          | 约束位置                                                                                           |
| ----------------------------- | -------------------------------------------------------------------------------------------------- |
| File 路径对象                 | 同步构造替换为携带当前 scope 的受限 File；沿用已有 Dart 引用桥接，对象内部和实际文件后端继续检查。 |
| writeAsString 的 Future<File> | 受限 File 的原方法/后端执行写入，完成后返回 this；handler 不 await。                               |
| 文件句柄、请求、订阅          | 实际拥有它们的资源层登记并幂等 close/abort/cancel；共享宿主服务不被销毁。                          |
| 懒 Stream                     | 源在订阅和实际 IO 时保持约束，取消/关闭停止后续受控 IO，不给 map/take 等算子增加规则。             |

异步操作属于发起 Session，关闭后不能启动新受控 IO 或向已销毁 runtime 交付迟到结果。资源层负责迟到句柄清理，不能假设 JS 还能执行 finally。Promise 拒绝不等于 IO 已取消或写入已回滚；已交付数据和图片像素也不会自动撤回。第一版不为这些需求建立通用异步 handler/结果适配管线。

<a id="filesystem"></a>

## 6. 文件：每个应用一个主目录

**启用沙箱就为该应用确定一个可读写主目录。应用查询此目录后使用真实绝对路径；受控文件 API 只能访问目录内的内容，不配置每个文件、扩展名或子目录的 allowlist。**
binding 仍需标记实际文件入口，但这些入口共用同一个目录边界，不是要求接入 App 逐个填写文件权限。

### 6.1 主目录的位置和归属

默认位置为：

```text
<ApplicationSupport>/flax/apps/<sha256(appId)>/
  .flax-install.json               安装完成记录，保存包 SHA-256 与清单摘要
  bundle/                          Flax 安装的代码、清单和资源，直接放解包内容
  downloads/                       当前应用及远程模块的下载缓存
  data/                            该应用唯一的文件沙箱主目录
    note.txt                       应用自行创建的普通文件
    images/avatar.png              应用自行组织的子目录
    tmp/                           应用自行创建的临时目录
    local_storage/                 该应用的 Hive CE 文件
```

每个独立 Flax 应用的文件集中在自己的 applicationPath 下；安装内容命名为
`bundle`，比 source 更准确，因为它包含打包后的 JS、清单和资源，不一定是源码。create 只准备应用根与
`data`；非 Flax 安装的模块可以没有 `bundle`，没有下载时也不建立
`downloads`。内置 assets 和宿主传入的目录继续原地读取，不强制复制。

包内容哈希只保存在应用根目录的 `.flax-install.json`
安装记录中，与 bundle 并列，不再作为 bundle 下的目录层，也不在包内容中添加安装器文件。内容与记录分别暂存，bundle 就位后最后原子发布安装记录；缺失或不匹配的记录不能作为已安装依据。相同包校验后复用；已有 bundle 的摘要与新包不一致时明确报错，不自动覆盖。更换包由宿主先关闭所有相关 Session，再移除旧 bundle 并安装新包；data 保留。更新后重新加载 FlaxApplication 和 AssetBundle，不能复用旧对象缓存的源代码或资源。这里不增加自动升级、版本激活或回滚管理器。

`data` 是应用唯一可读写的沙箱主目录，`getHomePath()` 只返回它。同级 `bundle` 和
`downloads`
由可信宿主管理，不能通过 File 访问；代码与资源仍由只读模块加载器和 AssetBundle 提供。`FlaxApplication`
各入口与 `FlaxPackage.install(..., sandbox: sandbox)`
使用当前应用目录；显式安装/缓存目录仍可由宿主覆盖，无沙箱入口保留原有共享目录。目录名称不承担安全隔离，实际文件操作仍按主目录范围约束。

清数据时删除 data，卸载时可删除整个 applicationPath，但必须先关闭该应用所有 Session、flush/shutdown 对应 localStorage，并等待下载和 IO 结束。外部目录或显式覆盖到其他位置的缓存仍由宿主管理。不提供自动迁移、自动删除旧目录或新的卸载接口。

`ApplicationSupport`
由现有 path_provider 获取；路径拼接和 SHA-256 可复用项目已有的 path、crypto 依赖。物理目录名使用完整的小写 SHA-256 十六进制，输入是可信 appId 的 UTF-8 字节。appId 必须非空、使用有效 Unicode，精确区分大小写，不自动 trim 或改写；哈希仅用于稳定且安全的路径组件，不负责认证应用身份。

| 设计点                 | 规则                                                                                                              |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------- |
| 默认位置               | `<ApplicationSupport>/flax/apps/<sha256(appId)>/data/`。                                                          |
| 自定义位置             | 主工程可给 `appsDirectory`，最终目录为 `<appsDirectory>/<sha256(appId)>/data/`；小程序不能指定这个物理位置。      |
| 相同 appId、相同父目录 | 使用同一份持久文件，跨 Session、重启和应用版本保留；不同 Session 的句柄和关闭状态仍独立。                         |
| 不同 appId             | 分配不同主目录。不要直接使用未校验的 appId 拼路径，也不要把整个 ApplicationSupport/flax 当成应用主目录。          |
| 账号区分               | 若业务要求不同账号的数据分开，由可信宿主为“账号 + 应用”分配稳定且不混淆的 appId；第一版不增加另一套账号权限配置。 |

自定义父目录还有一个约束：**不同应用的实际应用根不能相同，也不能互为父子目录**。例如把 B 的 appsDirectory 设为 A 的 data、bundle 或 downloads，都会把一个应用嵌进另一个应用的管理范围，应拒绝。宿主必须保证分配不重叠；准备阶段规范化真实目录，并拒绝已知冲突及安装/下载缓存中的位置。比较采用平台文件系统语义，不能只比较原始字符串。这里不新增全盘目录扫描或一套路径授权配置。

`tmp/`
只是同一主目录中的普通子目录，不是另一份权限。其他子目录由应用自行组织，第一版不强制 data/cache/documents 分层，也不配置多个可访问根。不能因为目录叫 tmp 就认为系统会自动清理它；它仍位于 ApplicationSupport 中。

现有
[安装缓存](../architecture/applications.md#resource-and-cache-locations)按包内容哈希分目录，更新内容就可能换位置，且当前 Session 的资源目录要求保持不变。因此**不复用安装目录作为可写主目录**，避免应用改写脚本/资源，也避免升级后找不到旧文件。

静态资源继续通过当前应用的 AssetBundle 和资源 key 读取，不把宿主安装/下载目录挂进文件主目录。这里取消的是 FilePolicy 的 assetRoot/dataRoot 双根配置；原有资源加载机制不需要复制一份。如果业务需要编辑内置资源，可以读取资源字节后写一份到自己的主目录。主目录规则不自动约束 App 另行暴露的 AssetBundle、平台通道或其他资源服务。Canvas 字体加载也遵循这一边界；资源包由宿主管理并保持应用不可改写，详见[Canvas 与 AssetBundle](#112-canvas文件读写与-assetbundle-的边界)。

<a id="home-api"></a>

### 6.2 查询主目录，使用真实绝对路径

采用方案一：提供通用的当前应用主目录查询 API，业务自行构造绝对路径。是否启用沙箱只影响返回哪个目录以及文件访问的范围检查，不需要业务改用另一个查询函数。不开设虚拟根，不自动为 File 入参补上主目录，也不改变宿主进程的工作目录。

```typescript
// 拟议 @flax/core 的公开声明，尚未实现。
export declare function getHomePath(): Promise<string>;
```

| 查询情况                                       | 契约                                                                                                                        |
| ---------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| 当前 Session 启用了 sandbox                    | Promise 返回启动前准备好的 sandbox.homePath，即当前沙箱应用主目录；不回退宿主目录。                                         |
| 当前 Session 未启用 sandbox                    | Promise 返回宿主 App 的数据主目录，本方案明确使用 path_provider 的 getApplicationSupportDirectory()，不返回 null。          |
| 没有 FlaxSession、Session 已关闭或路径取得失败 | Promise 拒绝；不退回进程 current、系统用户 HOME 或脚本所在目录。                                                            |
| 借用页面、多 Session 或异步回调                | 查询绑定函数所属 Session；不接受 appId/Session 参数，不通过全局可变“当前应用”查找。等待后仍按原 Session 投递结果。          |
| 路径与授权                                     | 成功结果是真实、规范化的绝对路径，同一 Session 内稳定；路径字符串不授予权限，沙箱模式始终检查范围，普通模式保持原 IO 权限。 |

这里的“宿主主目录”指主 App 的持久应用数据目录，不是系统登录用户目录，也不要求取得整个操作系统 App 容器的根。普通模式下它就是 ApplicationSupport；沙箱默认目录位于其下的
`flax/apps/<sha256(appId)>/data/`。查询宿主目录不会将普通模式变成只允许该目录的沙箱，也不会把这项查询当作进入沙箱的开关。

入口归 Core，复用现有 [getAssetBundle](../../packages/flax/js/src/runtime/assets.ts)
的 Session
host 查询方式与已有 Future/Promise 桥接：模块实例和原生回调绑定具体 Session，不依赖 BuildContext，不增加可选插件或新的公开模块路径。实现时同步交付 Core 根入口函数及公开类型、Session 原生查询入口；当前文件只定义契约。

采用 Promise 是因为普通模式首次取得平台目录需要异步调用。沙箱模式复用 FlaxSandbox.create 已准备好的路径；普通模式首次查询时取得、确保目录存在并规范化，成功结果缓存在所属 Session，并合并同 Session 的并发查询。失败报错且不固化失败结果；关闭后不继续向 JS 交付结果。这样不要求所有现有 FlaxSession 启动都改成异步，也不增加宿主必须调用的全局初始化方法。成功路径去掉不必要的末尾分隔符，平台根路径保留必要分隔符。

```typescript
// 拟议用法。File 来自 dart:io 绑定，不是 host 环境的 File 数据容器。
import { getHomePath } from '@flax/core';
import { File } from '@flax/dart/io';

async function saveNote() {
  const home = await getHomePath();
  // 当前 macOS 示例；跨平台业务按目标平台规则拼接路径。
  const file = File(`${home}/note.txt`);
  await file.writeAsString('hello');
  return file.readAsString();
}
```

这段业务代码在两种模式下相同：普通模式访问宿主应用数据目录中的 note.txt，沙箱模式访问当前沙箱主目录中的 note.txt；只有后者启用本方案的文件范围限制。查询用于异步业务逻辑；初始 runApp 仍遵循现有同步挂载契约，需要路径后再展示的内容可在查询完成后更新。

沙箱启用时，所有选中受控入口的路径参数都要求真实绝对路径。下表的 `<home>`
表示查询所得路径，不是字面量；`/` 示例采用当前 macOS 路径规则。

| 传入路径                                                | 处理                                                                   |
| ------------------------------------------------------- | ---------------------------------------------------------------------- |
| `<home>/note.txt`                                       | 检查后允许；返回的 File.path 为对应真实绝对路径。                      |
| `<home>/draft/../note.txt`                              | 只有经过同一后端检查、实际目标仍在主目录内时才允许。                   |
| `note.txt`、`../note.txt`                               | 拒绝相对路径；不补主目录，也不按宿主 current 解析。                    |
| `<home>/../other-app/note.txt`、`<home>-other/note.txt` | 越界或只是字符串前缀相同，拒绝。                                       |
| `/note.txt`、其他宿主/应用的绝对路径                    | 按其真实含义检查，位于主目录之外就拒绝；不能改写为 `<home>/note.txt`。 |

路径解析使用当前平台的规则，不建立跨平台的虚拟路径语法。`File.fromUri`
只接受可转换为当前平台绝对文件路径的 URI，使用标准转换后进入同一检查；拒绝相对 URI、非文件 scheme、NUL 及平台不支持的形式，不做额外的重复解码或补前缀。未启用沙箱时保留 Dart 原有的相对路径行为。

File/Directory 的 path、absolute、uri、目录枚举结果和 resolveSymbolicLinks 的结果均保留真实绝对路径/文件 URI。parent 指向真实父目录；若取得的父目录已在主目录之外，则拒绝此次访问，不把 parent 伪装成主目录自身。返回 File/Directory 等资源时仍保留受限实现，不能因路径已通过检查就返回 raw 对象。

若 Directory.current/systemTemp 已被选中，其返回目录也检查范围：真实目录在主目录外则拒绝，不重定向到主目录；current
setter 显式拒绝，避免影响整个进程。应用需要临时文件时，自行在 `<home>/tmp/`
创建目录。未暴露的入口不用为此新增绑定。

主目录本身禁止被小程序 rename/delete；应用可以管理根内的普通文件和子目录，清空内容后主目录仍由宿主管理。该设计允许应用知道自己的真实目录结构，不承诺隐藏路径。业务记录应保存
`images/avatar.png`
这样的相对文件标识，每次启动结合当前 home 构造绝对路径；不要把安装位置相关的绝对路径长期固化到业务数据中。

<a id="file-fetch-example"></a>

### 6.3 File(path)：同步替换构造，读写进入受限后端

```text
create 异步准备 apps/<appIdHash>/data 与不可变配置 → Session 打开自己的后端并取得 FlaxFilePolicy
JS getHomePath() 得到真实绝对路径 → File(path) 的同步替换 handler
→ 受限 File → 原读写方法的虚调用 → 受限后端执行实际 IO
```

FlaxFilePolicy 的只读 homePath 与 sandbox.homePath 相同，并关联已准备的根边界。checkPath 只做同步的绝对路径/目录组件检查；后端在真正 IO 时继续限制目标，不用一次字符串检查代替链接及竞态防护。

```dart
File createSandboxFile(
  FlaxSandboxContext c, FlaxFilePolicy p, String path,
) {
  final absolutePath = p.checkPath(path);
  return FlaxSandboxFile(c.scope, p, absolutePath);
}

void checkFileRead(
  FlaxSandboxContext c, FlaxFilePolicy p, File receiver,
  {Encoding encoding = utf8},
) {
  p.requireFile(c.scope, receiver);
}
```

第 3.2 节已列出两者的 YAML：构造 replace 为 true，readAsString 默认 false。后者检查后，由 binding 调用受限 receiver.readAsString，不需要返回 Future 的 handler。普通 File 本身尚未打开句柄，构造 handler 不需要等待或关闭它；实际句柄由后端的 Session 资源层管理。

```dart
// FlaxSandboxFile 的内部关键路径；不是 handler，省略其他 File 成员。
Future<String> readAsString({Encoding encoding = utf8}) {
  _scope.requireActive();
  return _backend.readAsString(_scope, path, encoding: encoding);
}

Future<File> writeAsString(
  String contents, {
  FileMode mode = FileMode.write,
  Encoding encoding = utf8,
  bool flush = false,
}) {
  _scope.requireActive();
  return _backend.writeAsString(
    _scope, path, contents, mode: mode, encoding: encoding, flush: flush,
  ).then((_) {
    _scope.requireActive();
    return this;
  });
}
```

后端必须绑定受限根和 scope，负责真正打开/读写时的范围与生命周期检查。同步变体用同一后端的同步入口，不为了适配而改变 API 形态；openRead 等懒读取在订阅前和读取过程中继续检查。copy/rename 同时核对两端，返回对象仍受限。其他公开入口要明确接入或 deny，不能假定只有 File(path) 会产生 File。

```typescript
import { getHomePath } from '@flax/core';
import { File } from '@flax/dart/io';

const home = await getHomePath();
const file = File(`${home}/note.txt`); // 当前 macOS 路径拼接示例。
await file.writeAsString('hello');
console.log(await file.readAsString());

const response = await fetch('https://api.example.com/profile');
console.log(await response.json());
```

当前 dart:io File binding 是可调用工厂，明确拒绝 JS
new；上述 File(path) 写法与普通模式一致，不改变现有构造约定。

#### 6.3.1 无 receiver 的 Future 与懒 Stream

以下仍是设计片段。_backend 是当前 Session 独占、在同一沙箱库内由 FlaxFilePolicy 引用的受限后端，已绑定主目录；不新增公共 backend 配置项，也不放进可跨 Session 复用的 FlaxSandbox 配置。

```dart
// 对应 FileStat.stat(path) 的 replace:true；没有 receiver。
Future<FileStat> sandboxStat(
  FlaxSandboxContext c, FlaxFilePolicy p, String path,
) {
  c.scope.requireActive();
  final target = p.checkPath(path);
  return p._backend.stat(c.scope, target);
}

// 展示 Stream 返回契约；Directory.list 也可用检查模式调用受限 receiver。
Stream<FileSystemEntity> sandboxList(
  FlaxSandboxContext c, FlaxFilePolicy p, Directory receiver,
  {bool recursive = false, bool followLinks = true},
) {
  final directory = p.requireDirectory(c.scope, receiver);
  return p._backend.list(
    c.scope, directory.path,
    recursive: recursive, followLinks: followLinks,
  );
}
```

两者都在返回前完成检查和选路，没有 async/await。stat 的实际 IO 不再调用普通 FileStat.stat(path)；list 在订阅和枚举时继续验证 scope，不跟随链接，输出携带同一 scope 的受限 File/Directory，遇到不支持的链接报错。Future/Stream 只负责既有结果交付，不是权限校验的延后执行器。

上面的宿主配置见[第 2 节](#2-隔离配置与独立的权限配置)，Fetch 的实际入口检查见[第 7.2 节](#72-fetch同步检查后继续现有请求)。文件在普通模式保留原范围，启用沙箱后根外路径拒绝；Fetch 无论是否启用沙箱，都按显式 origins 集合限制目标，缺省或 null 不限目标。

### 6.4 主目录与 Session 的生命周期

| 事件                         | 处理                                                                                                                                                                                  |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 首次启动                     | create 准备目录和不可变描述；Session 核对实际根并打开自己的后端，准备成功后才执行 JS；失败清理已取得的句柄，不回退宿主文件系统。                                                      |
| 同应用再次启动或升级         | 使用相同 appId 对应的目录，不因包哈希、版本或 Session id 变化而换目录；数据格式迁移由业务管理。                                                                                       |
| 同应用多个 Session           | 可复用同一 FlaxSandbox 配置与磁盘目录，每个 Session 独立打开后端和根句柄；普通文件并发语义仍存在，不额外承诺多次写入的事务。                                                          |
| 页面退出 / Session.close     | 先使 scope 失活、停止新 IO，再取消/收束本后端已接受的操作并释放迟到资源，最后关闭自己的文件及根句柄；数据及 tmp 保留，不关闭另一 Session 或应用 Hive store 的句柄。                   |
| 清数据 / 卸载 / 更换存储位置 | 由可信宿主明确处理；停止相关 Session，按应用 flush/shutdown 对应 Hive store 等持久资源，并等待 IO 结束后才能删除或搬移。改变 appId/父目录会选择另一份数据，不会自动搬迁或删除原数据。 |

主目录只定义这一组受控文件 API 的数据位置。现有 localStorage 仍按
[namespace 和共享 Hive box](../architecture/local-storage.md)工作，不会因建立主目录自动迁入其中，删除主目录也不等于清除了 localStorage。它不是本轮文件系统改造的隐式附带任务。

宿主清数据后若在同一路径重新写入图片，还要按 Flutter 原规则淘汰相关图片缓存；删除文件不等于撤回已经解码的像素。不因此新增 Session
ImageCache，也不在普通关闭时清空全局图片缓存。

### 6.5 文件能力的边界

若要承诺“无法读写宿主重要文件”，必须把同一能力的替代入口纳入清单：File/Directory 的 fromUri/fromRawPath、Link、静态 FileSystemEntity/FileStat、raw
handle，以及直接读本地文件的图像、证书/私钥入口。第一版逐项替换/拒绝决定见[文件入口表](sandbox-api-inventory.md#21-替代文件入口第一版逐项决定)：File/Directory 的普通与 URI 构造返回受限对象；原始字节路径、Link 构造、宿主 current/systemTemp、open/openSync 和原始句柄入口拒绝；静态查询与四个证书路径方法替换为受限后端执行。不能只标记示例里的几个方法。

未标记 File.readAsBytes 等入口仍走原 binding，当前模型不会兜底拒绝；若 receiver 已是受限 File，其方法内部仍会检查，但不能假定任意入口取得的 File 都受限。没有完整覆盖的阶段，只能声明“这些指定方法及受限对象受到限制”。

安全文件后端也不能只是 normalize +
startsWith。主目录的父级由宿主选择并规范化，appId 对应的子目录不能接受指向其他位置的链接替身。第一版拒绝小程序创建/跟随符号链接及其他链接逃逸，不提供外部目录挂载；检查后再按绝对字符串打开文件仍存在路径替换竞态。

所有选中入口共用同一个检查流程：确认当前 Session 有效、输入为平台绝对路径，按路径组件判断范围，再由受限后端约束真正打开/修改的目标。rename/copy 同时检查两端，新建文件检查父目录，递归枚举和字符串文件加载器也须使用同一边界；没有安全实际执行实现时明确 deny。不存在的越界目标同样拒绝，不能先创建文件再检查。

对外使用真实绝对路径，不妨碍后端以已绑定的根目录句柄和相对定位执行安全 IO。仍需要平台适用的句柄约束和竞态验证，不能改成“检查完字符串，再直接用普通 File 打开”的实现。无法安全执行的已标记操作应明确拒绝；一次 resolveSymbolicLinks 检查也不能充当完整的可写沙箱后端。此要求只针对所承诺的文件隔离，不要求改造一般 Flutter 对象。

如果当前平台没有所需安全后端，create 的支持检查或 Session 的实际后端准备必须在执行 JS 前失败；不能只创建一个目录就报告文件沙箱可用。配置不持有长期句柄，关闭 Session 也不销毁可复用配置；启动中途失败沿相同清理顺序释放已取得资源，不增加公开 dispose 配置接口。目录范围限制也不等于磁盘配额或 CPU/内存隔离：第一版不增加这些配置，不承诺应用无法写满自己的可用磁盘。

<a id="file-images"></a>

### 6.6 Image.file 复用受限读取和原生图片缓存

此前已核对 Flutter revision `183508ece44ae312a7339bd2ede245e16cf485f3`
的实现：`packages/flutter/lib/src/widgets/image.dart:545`
中 Image.file 创建 FileImage，后者在
`packages/flutter/lib/src/painting/image_provider.dart:1635–1655`
按以下逻辑读取和比较缓存键。本轮保留这份版本明确的源码依据，不将其表述为对任意新版 Flutter 的验证：

```dart
// 当前 Flutter 源码的关键逻辑，省略空文件处理和其他成员。
final int lengthInBytes = await file.length();
return (file.runtimeType == File)
    ? decode(await ui.ImmutableBuffer.fromFilePath(file.path))
    : decode(await ui.ImmutableBuffer.fromUint8List(await file.readAsBytes()));

// FileImage 的相同运行时类型实例，按 path 和 scale 比较。
return other is FileImage && other.file.path == file.path && other.scale == scale;
```

因此 `FlaxSandboxFile implements File`
可以直接承接读取：保留自己的真实 runtimeType，length/readAsBytes 在对象内部检查主目录和 Session，Flutter 会走读取字节的分支。原生内部调用不会再次经过 JS
binding，所以这些方法本身必须受限；不能只在 binding 外围检查一次，也不能把受限对象解包为普通宿主 File。

FileImage 的相等判断对相同运行时类型比较 file.path 与 scale。现在 File.path 返回真实绝对路径，不同沙箱的同名文件自然具有不同的键：

```text
应用 A：<ApplicationSupport>/flax/apps/<A-key>/data/avatar.png
应用 B：<ApplicationSupport>/flax/apps/<B-key>/data/avatar.png
路径不同，原生 FileImage 缓存键也不同。
```

**不再增加 Session 缓存键、自定义图片 provider 或独立 ImageCache。**
同一应用、同一真实路径允许按 Flutter 原规则复用缓存；缓存命中本身不是新的文件 IO，不要求再次读取磁盘。文件内容改变时仍遵循 Flutter 原有的缓存更新/evict 语义，不额外做文件监听或自动刷新。

范围检查仍需在接纳文件参数时完成，不能拿“绝对路径不串缓存”代替授权。最小处理如下，继续共用 FlaxFilePolicy，不新增图片权限。下例构造 handler 返回 FileImage，故规则使用 replace:true；Image.file 同理：

| 位置                                      | 拟议处理                                                                                                                                                                                       |
| ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| FileImage 构造                            | 校验传入的是当前 Session、当前主目录的受限 File，然后调用原 FileImage 构造。拒绝原始宿主 File 或其他 Session 的文件引用。                                                                      |
| Image.file 构造                           | 对 file 参数做同样校验，再调用原 Image.file，保留尺寸、scale、ResizeImage、回调等全部参数语义。其内部创建 FileImage 不经过 binding，所以外层也要校验。                                         |
| 读取与关闭                                | length/readAsBytes 的目录检查、异步 scope 和资源清理由受限 File 完成。Session 关闭阻止新的受控文件 IO；已解码图片按原生缓存规则保留，不承诺按 Session 撤回缓存像素或清空主 App 缓存。          |
| ImmutableBuffer.fromFilePath 等字符串入口 | 第一版明确 deny：现有原生路径加载未接入受限文件后端，不能只检查后继续加载。允许 handler 直接返回 Future 不会自动使原生路径读取安全；本轮不新增该加载适配，Image.file/FileImage 仍走受限 File。 |

```dart
// 拟议 FileImage handler：仅检查参数，不自定义 provider 或缓存键。
FileImage createFileImage(
  FlaxSandboxContext c, FlaxFilePolicy p, File file, {double scale = 1.0},
) {
  c.scope.requireActive();
  final restricted = p.requireFile(c.scope, file);
  return FileImage(restricted, scale: scale);
}
```

Image.file 的 handler 采用同一检查并完整转发原参数。知道另一个应用的真实文件路径不代表能创建它的受限 File，也不能将普通宿主 File 直接塞进这两个入口获取已缓存的图片。未标记的自定义图片/平台服务仍按第 1.1 节的边界处理，不能宣称改两个构造就接管了任意原生图片源。

此结论来自源码分析，尚未实现或运行验证。落地时验证不同主目录的同名图片不串缓存、同路径保留正常缓存复用、根外路径/原始宿主 File 被拒绝、关闭后不再发起文件 IO，以及 Image.file 的尺寸缓存和直接 FileImage 用法正常工作。Flutter 升级时复核 File 读取分支；本方案不改变 Image.network 或普通内存图片。

<a id="certificate-files"></a>

### 6.7 容易漏掉的文件入口：证书和私钥

当前
[SecurityContext binding](../../packages/flax/js/src/dart/generated/libraries/io/_bindings/sdk_dependencies_SecurityContext.ts)
已暴露四个接收文件路径的方法。核对上述 Flutter revision 的 Dart
SDK：`lib/_internal/vm/bin/secure_socket_patch.dart:249–280` 内部直接执行
`File(file).readAsBytesSync()`，再调用对应的 Bytes 方法。它不会重新经过 JS 的 File
binding，因此只拦 File 构造和方法无法覆盖它。

这四个入口使用同一个 FlaxFilePolicy 主目录策略，不新增“证书目录”或逐文件授权：

```yaml
sandbox:
  version: 1
  classes:
    SecurityContext:
      staticGetters:
        defaultContext: deny
      instanceMethods:
        usePrivateKey:
          {
            policyType: 'package:flax/sandbox_io.dart#FlaxFilePolicy',
            handler: 'package:flax/sandbox_io.dart#usePrivateKeyFile',
            replace: true,
          }
        setTrustedCertificates:
          {
            policyType: 'package:flax/sandbox_io.dart#FlaxFilePolicy',
            handler: 'package:flax/sandbox_io.dart#setTrustedCertificatesFile',
            replace: true,
          }
        useCertificateChain:
          {
            policyType: 'package:flax/sandbox_io.dart#FlaxFilePolicy',
            handler: 'package:flax/sandbox_io.dart#useCertificateChainFile',
            replace: true,
          }
        setClientAuthorities:
          {
            policyType: 'package:flax/sandbox_io.dart#FlaxFilePolicy',
            handler: 'package:flax/sandbox_io.dart#setClientAuthoritiesFile',
            replace: true,
          }
```

这四项显式配置 replace:true，使用返回 void 的同步替换 handler，不再自动执行原路径方法。handler 保持 password 等原参数：检查 scope，通过同一受限文件后端同步读取，再调用对应 Bytes 方法。例如 usePrivateKeyFile 的效果是“受控读取路径 →
receiver.usePrivateKeyBytes(bytes, password:
password)”。不能检查字符串后又调用原 usePrivateKey(path)，否则仍会重新按路径打开文件。安全同步读取未实现的平台，对这些已标记方法明确拒绝，不改成 Future 或回退原生路径方法。

这里还发现一个独立的共享风险：SDK 的 `SecurityContext.defaultContext` 是同一 Dart
isolate 共用、可修改的对象。第一版对这个 getter 显式 deny，避免小程序改变宿主的默认 TLS 配置；普通模式保留原行为。应用仍可创建自己的 SecurityContext，Bytes 方法本身不读取文件，不为它们添加文件权限规则。路径 handler 也拒绝拿宿主 defaultContext 作为 receiver；宿主扩展不能另行把正在共享使用的安全上下文交给不可信代码。无需为所有普通对象引入归属包装。

<a id="local-storage"></a>

### 6.8 localStorage：按 appId 物理存储

**安装 localStorage 插件是能力开放选择；启用沙箱后，其所有持久文件必须位于当前应用主目录内。**
继续使用 Hive CE，默认目录为
`<homePath>/local_storage/`，包含数据、锁和其他辅助文件；不能继续与其他应用共用一个物理 box。此要求不是只给键或 namespace 加前缀。

当前 main 的 `flax_local_storage.dart` 使用静态单一 _store，`src/store.dart`
使用固定 boxName；同 namespace 共享同一 box。后续只改这些现有选择与初始化落点，不建立新的数据库抽象：

1. 按宿主确认的 appId 和规范化实际存储目录选择应用 store。同一应用的页面复用当前 Session；关闭后重开可以继续使用同一份数据。
2. 同时隔离 Hive
   box 名称和目录。Hive 在同一 isolate 按名称复用 box；名称应由确定的应用存储身份生成，例如实际应用目录的稳定哈希，并验证 box.path，避免同名不同目录混用。不能只更换 path 或继续使用固定常量。
3. 从本 Session 的沙箱归属取 homePath，安全准备真实目录与文件位置，防止链接/路径替换越界；JS 不传 appId、boxName 或任意目录。namespace 只在应用 store 内分区，即使与主 App 同名也不能访问主 App 数据。
4. 沿用先 await 初始化、再同步 install 的顺序，按应用准备 store；准备逻辑由 localStorage 插件所有者负责，不让 Core 依赖 Hive，不要求异步 handler 或所有插件都改成异步安装。
5. Session 关闭只解除自己的监听/使用引用，不能删除持久数据、关闭其他应用的 box，或调用全局 Hive.init/Hive.close。flush/shutdown 按实际应用 store 管理并等待已接受写入；保留现有配额、回滚处理和 storage 事件，事件不能跨应用分发。

普通模式使用宿主选择的目录和 namespace，沙箱模式使用按 appId 隔离的 store；不设计历史共享数据的兼容或迁移。文件位于应用自身范围不等于可以安全绕过 Hive 直接改写其数据库；本方案不为这种改写承诺数据库一致性，也不额外引入逐文件权限表。Hive
store 的实际句柄归该应用 store，独立于每个 Session 的文件后端；关闭 Session 只解除自己的使用关系。

异步初始化使用宿主已准备的同一份 FlaxSandbox 归属；同步 install 再以 context.sandbox 的 appId/homePath 选择已经就绪的 store，不在 install 中首次异步打开 Hive。具体初始化签名在现有插件入口扩展，不新增一层全局应用管理器。

<a id="network"></a>

## 7. 宿主网络权限：默认放行，可选 origins

**FlaxNetworkPolicy 属于可独立配置的宿主能力权限，覆盖内置 Fetch 与 WebSocket。** ESM
HTTP(S) 源码下载改用 FlaxModulePolicy.remoteOrigins，见[第 11.3 节](#113-esm源码来源与执行权限)。开启文件/导航沙箱不强制配置业务网络名单；普通模式也可配置网络权限。策略仍只有
`Set<String>? origins`：null 不限目标、空集合拒绝、非空集合精确匹配协议/主机/有效端口。不增加 allowAll、socketOrigins、模式枚举、请求方法白名单或额外配额。

```dart
// 拟议：登记于 Session/View 的 permissions，而非 sandbox.policies。
FlaxNetworkPolicy(); // origins == null：不限 Fetch/WebSocket 的目标。
FlaxNetworkPolicy(origins: <String>{}); // 拒绝 Fetch/WebSocket 的网络目标。
FlaxNetworkPolicy(origins: {
  'https://api.example.com',
  'wss://socket.example.com',
});
```

### 7.1 简单配置与来源语义

参考微信小程序的[网络说明](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html)，Flax 保留适合当前需求的可选 origins，不照搬后台、业务域名、下载/上传拆分和完整浏览器 CORS。配置集合时 localhost、IP、非默认端口也按实际 origin 匹配；不新增内网地址分类策略。条目格式、类型或协议错误报配置错误，不当作未配置。

未配置 FlaxNetworkPolicy 时，在准备 Session.permissions 时补入 origins:null；requirePolicy 的缺配置拒绝规则仍用于隔离扩展，不用它代替网络默认值。是否提供 Fetch/WebSocket 继续由插件选择；不新增重复的 enableFetch/enableWebSocket 字段。

<a id="fetch"></a>

### 7.2 Fetch：同步检查后继续现有请求

Fetch 是手工 host API，在 Dart `_open`
的真实建连位置执行权限检查，不给它伪造一份生成 binding 注解。以下是拟议同步检查形态，字段和接入尚未实现：

```dart
void checkFetchOrigin(FlaxNetworkPolicy policy, Uri url) {
  final origins = policy.origins;
  if (origins != null && !origins.contains(normalizedOrigin(url))) {
    throw StateError('Network origin denied');
  }
}

// _networkPolicy 来自当前 Session 冻结后的 permissions，非全局当前应用。
checkFetchOrigin(_networkPolicy, url);
// 在原 _client.openUrl 前完成现有 URL、存活及请求头校验。
```

权限检查在任何连接前完成，重定向逐跳重查；默认不限目标时也保留 URL/协议、TLS、Session 生命周期及传输校验。Dart 在 openUrl 前拒绝任意大小写的 Host，由实际 URL 决定 authority；直接 __flaxFetchCall 同样受控，不能只依赖可修改的 JS
facade。

Promise、Response、Web
Streams、上传/读取、AbortSignal 和 Session 关闭沿用原流程。检查函数保持同步，网络 Future 表示已获准 IO 的完成，不是异步鉴权。普通响应和字节不额外包装。沙箱下不复用主 App 的活动 client、凭据或可修改的共享 TLS 上下文。

### 7.3 内置范围与宿主扩展

ESM 下载使用本次运行独立的模块来源策略，不要求同时命中业务网络 origins，也不能因为业务目标已允许就放行 import，见[模块来源边界](#113-esm源码来源与执行权限)。两者可复用来源规范化、HTTP 传输和缓存实现，但不合并名单或授权结果。原生 HttpClient、Socket、DNS 和开发者自有网络 binding 仍不生成内置 deny/包装；是否复用业务网络策略及如何约束真实 IO 由提供者负责。网络图片保持本轮原范围，origins 不代表整个应用所有网络出口的白名单。

原四份 SDK
manifest 的历史分析基线包含相关原生网络导出；本次没有重算最新 main 的导出或调整 SDK。不能把该历史事实当成最新 API 数，也不能把范围排除表述为所有原生网络类从未有 binding。开发者仍需对实际提供的入口负责，范围见[清单](sandbox-api-inventory.md#31-开发者网络-binding-的责任范围)。

<a id="websocket"></a>

### 7.4 WebSocket：同一份权限，在握手前检查

[FlaxWebSocketPlugin](../../packages/flax_websocket/lib/flax_websocket.dart)
独立于 Fetch；Dart
open 在客户端工厂/握手前取得当前 Session 的权限，检查规范化后的 ws/wss
origin、URL、协议和请求头。http/https 输入仍按现有规则转成 ws/wss，集合中匹配对应 ws/wss 条目，不另要求配置握手内部的 HTTP
origin。

Dart 拒绝任意大小写的 Host、Connection、Upgrade、Content-Length、Transfer-Encoding 和 Sec-WebSocket-*，实际只写入已验证的头；直接 __flaxWebSocketCall 也走这条路径。控制头由传输生成，不新增普通请求头白名单。当前传输拒绝重定向，继续保持。

连接绑定获准目标与 Session 后，send/message/close 不重复查询域名，也不为每条消息配置 handler。原队列限制、handshakeTimeout、pingInterval、maxPayload、取消和关闭保留。createHttpClient 属于可信宿主扩展；沙箱下必须提供连接独占的资源，不能带入主 App 的活动连接或隐含凭据。

<a id="navigation"></a>

## 8. 路由：嵌套 Navigator 加统一边界

### 8.1 已有能力与需要新增的配置

当前已支持真实 Flutter 的共享/嵌套 Navigator，但**没有 FlaxView 导航模式参数可以直接搬过去**。
[view.dart](../../packages/flax/lib/src/ui/view.dart)
明确不自动插入 Navigator；[导航契约](../architecture/navigation.md)要求应用自行选择共享或嵌套。
[测试 fixture](../../packages/flax_material_ui/js/test/fixtures/navigation.ts)通过
`nestedNavigation`
自行创建 Navigator 和 NavigatorPopHandler；它是测试开关，不是 FlaxView 的公开配置。

因此这里是把已有嵌套能力整合为沙箱宿主配置，不是迁移一个已经实现的参数：

```dart
// 拟议配置，尚未实现。
final sandbox = await FlaxSandbox.create(
  appId: 'com.example.reader',
  isolateNavigation: true,
  policies: {}, // 主目录策略自动提供；网络权限在 Session.permissions 配置。
);

FlaxView(
  sandbox: sandbox,
);
```

启用时，Flax 的应用根挂载宿主创建一个内部 Navigator，把应用初始内容放在它的初始 route 下。已有应用若还需要自己的子 Navigator，可以继续创建，它仍位于同一个沙箱导航范围内。不开 sandbox 时不改变现有挂载结构。

```text
主项目 Navigator（App 管理）
└─ 小程序容器 / FlaxView
   └─ 沙箱 Navigator（由启用的导航配置建立）
      ├─ 小程序首页
      ├─ 小程序详情页
      └─ 小程序弹窗及内部子导航
```

policy 归 Session，实际 Navigator 归该应用根的挂载宿主。借用同一 Session 的 View 不各建一个平行根，不在挂载边界外复用其 JS 页面以获得主项目 Context。命名页面入口若没有 runApp 根，也必须由同一个沙箱导航宿主承接；不能在无法确定边界时退回主项目导航。改变模式要按现有所有权规则重建自有 Session/挂载。

### 8.2 应用看到的行为

| 操作                                                             | 拟议行为                                                                             |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| 普通 of(context)、push/pop、pushNamed、替换、内部 pages/Router   | 在沙箱根或其内部子 Navigator 中按 Flutter 语义执行，不做逐动作授权。                 |
| 内部再嵌套 Navigator                                             | 正常工作；作用域涵盖应用根及其内部导航，不局限于唯一一个 State。                     |
| rootNavigator: true                                              | root 的语义限定为沙箱根 Navigator，不能解析成主项目根。                              |
| showDialog 等带 useRootNavigator 的帮助函数                      | 默认或显式 root 均在沙箱内选择目标；保留内部 builder、结果 Future 和主题等正常行为。 |
| 主项目 NavigatorState、宿主祖先 Context/key/Route 导出的导航目标 | 不允许作为应用可操作的外部导航目标；不能换个返回路径就取得主项目导航能力。           |
| 内部初始 route 已无法退出                                        | 不把 JS 的 pop/maybePop 自动转发给父 Navigator；请求关闭小程序由宿主明确处理。       |

系统返回键可优先交给内部 Navigator 的 maybePop，尊重 PopScope；内部已经不能返回时，由宿主决定是否关闭小程序容器。这是主工程的返回策略，不是给 JS 授权 pop 主工程。不能把 PopScope 当成对恶意直接 pop 的安全拦截器。

关闭 Session 保留现有取消结果投递、排空挂载内容与回调的契约，不自动 pop 主项目页面。App 仍负责小程序容器的打开、移除与退出策略；内部 Navigator 随自身挂载按 Flutter 生命周期清理。

### 8.3 普通嵌套还缺少什么

**普通嵌套仅把正常路由分到不同栈，不能独自保证不操作主项目。**
当前 SDK 的 Navigator.of(rootNavigator:
true) 会调用 findRootAncestorStateOfType，继续找到外层根；当前 Material
showDialog 和 Flutter showGeneralDialog 的 useRootNavigator 默认 true。

已有
[nested navigation 测试](../../packages/flax_material_ui/test/ui/navigation_test.dart)验证了内部返回优先于宿主，没有证明 root 查找、弹窗和任意原生调用无法越界。[现有桥接导航代码](../../packages/flax/lib/src/ui/navigation.dart)保存真实 State 引用；它也没有实现这个沙箱边界。

因此采用容器方案后，仍有三个集中的实现责任：

1. **限定导航目标的取得与使用**：在 Flax 导出/解析导航相关 Context、NavigatorState 等边界上统一核对所属导航范围，处理 root 查找和宿主引用；不建立所有 State/Element 成员的权限白名单。
2. **适配会自行选择 root 的入口**：弹窗、静态导航 facade 或原生回调可能直接在 Dart 内查找目标。它们必须使用同一个范围解析，或在产生导航效果前检查真实目标；结果返回后再拒绝已经太晚。
3. **验证原生路径确实尊重范围**：只包一个 InheritedWidget、改一次 Navigator.of 的返回值、安装 Observer 或共享一个 resolver，都不会自动改变 Flutter 内部调用。若原生入口不能接入范围，需要针对该入口适配，或在支持列表中明确不支持；不能默许越界后仍称隔离成功。

这里取消的是**按 push/pop 等动作逐个写业务规则或 handler**。统一边界的实现仍可能需要少量 Flax 内部绑定适配或原生导航改造；目前不能承诺完全不触碰 binding。具体落点以支持路径的验证结果决定，不为此扩大全 SDK 审查。

在这些路径未覆盖前，只能称为“嵌套导航模式”，不能将它作为已经实现的“无法操作主项目路由”安全保证。本文中的 isolateNavigation 是目标契约；实现无法满足时不能把它静默降级成单纯包一层 Navigator。

<a id="extension"></a>

## 9. App 扩展方式与本轮范围

App 的隔离扩展可复用内置文件策略，或在 sandbox.policies 按 Type 登记自己的不可变边界策略，并在自有 API 的 FlaxSandboxGuard 注解显式填写 policyType。网络等可选能力策略放在 Session.permissions，由真实宿主入口同步检查，不依赖开启沙箱。handler 仍按第 4 节保持同步，遵循检查/替换语义；相同模块在不同 Session 使用各自配置，不需要定义能力 token 或单独注册 handler 表。

[第 3.4 节](#34-注解与-scope-发现)的 createAppFile 展示自有顶层 API 的注解写法；[File 与 Fetch 示例](#63-filepath同步替换构造读写进入受限后端)展示完整的配置、同步 handler 与实际执行路径。SDK/第三方源码不便修改时，由拥有 binding 的 provider 用等价 YAML 标记。

本轮不设计文档/笔记 ID 授权、账号角色、用户授权弹窗、权限状态存储或异步申请流程。以后权限可由 App 在调用前异步询问，实际判断同步完成，不要求在沙箱 handler 中等待。

App 的可信 Dart 实现须遵守自己声明的边界；生成标记不会拦截它内部任意 native 调用。扩展文件服务应复用同一受限文件后端，而不是检查后重新使用不受控路径访问宿主文件。

## 10. 各种 binding 类型的适配要求

普通类型保持现有转换；只有标记操作生成适配，只有实际受限对象保持 scope 和资源管理。

| 形态                                                                   | 要求                                                                                                                                                                |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 普通对象、Widget、members、context/state、widgetInterface、枚举        | 未标记原样；标记目标遵循同步检查/替换，特殊工厂不支持时明确报错。                                                                                                   |
| primitive、void/Never、可空、Type、常量                                | 保留原转换、错误与省略语义；void 替换通过 replace 明确区分，缓存不能绕过规则。                                                                                      |
| 静态、顶层、扩展、operator、泛型                                       | 按真实声明归一；receiver 只在有实例时出现，泛型边界/参数保持。                                                                                                      |
| proxy、override、super、State 变体、延迟工厂                           | 在真实执行位置检查，不破坏 JS peer 身份；不能安全替换时构建失败。                                                                                                   |
| Record、集合、typed array、Future/FutureOr、Stream、callback、原生函数 | 原机制保留；受限引用不得解包为 raw。检查 handler 同步返回 void；替换 handler 可直接返回受限后端的 Future/Stream，后续 IO/清理由后端负责，函数引用必须保留受控实现。 |

原有八类 class 模型沿用这些规则，不为普通对象增加全量传播项目。同步签名不等于所有执行点已经接通：顶层/静态、普通对象构造/属性、Stream、context/state、延迟 Widget 工厂、proxy/super 和 native
function 都有各自分派。标记须跟随真实声明到实际执行位置；缓存只能缓存适配器，不能缓存某次检查结果。同步替换不能改变 JS
peer、Widget 身份或原参数形态，不能正确适配时构建失败。

## 11. 插件与原生内部行为

拟在 FlaxHostContext 增加 `FlaxSandboxContext? get sandbox` 与
`Map<Type, Object> get permissions`，分别提供隔离归属与当前 Session 的不可变能力策略；不增加全局“当前应用”或通用权限上下文层。FlaxBindingPlugin 仍只提供不可变模块描述符，不保存某个 Session 的 policy 或连接资源；策略在插件安装和 JS 执行前就绪。

插件决定模块是否可用，policy 决定对应受控入口的执行边界，两者独立。类型 SDK 和准备好的模块资产不改变这个判断。Core 自动加入，不能因省略 bindings/plugins 就认为 Core 文件入口已经移除。

getHomePath 归 Core；Fetch/WebSocket 从本 Session 的 permissions 取 FlaxNetworkPolicy；ESM 和 Wasm 使用独立 FlaxModulePolicy，在实际加载和执行入口检查。localStorage 按应用准备独立物理存储，见[第 6.8 节](#68-localstorage按-appid-物理存储)。timer/rAF、console、普通网络图片和其他普通未标记入口沿用原契约。Canvas 保留现有字节处理与生命周期，文件及 AssetBundle 边界见[第 11.2 节](#112-canvas文件读写与-assetbundle-的边界)。标记不能自动深入任意 MethodChannel 或宿主 native 服务，具体旁路另行明确覆盖。

<a id="ffi-disable"></a>

### 11.1 JS FFI：在安装前固定禁用

**sandbox 非 null 时禁用 JS 直接 FFI；普通模式保留现有按需安装。**
这是 runtime 的固定准备规则，独立于选择性 binding 标记和可选网络 origins，不添加 allowFfi、FFI
policy、库白名单或逐函数 handler。宿主 Dart/native 内部实现继续使用原生能力；需要向沙箱提供的业务功能，通过已有受控 binding 暴露。

FFI 可以直接调用文件/网络原生函数、查找进程符号并访问原始内存，这些调用不会经过 File
binding。只限制库路径或 import 名称不能保持本方案的文件边界。main 的
`packages/flax/lib/src/ui/host.dart` 还提供直接的 `__flaxBaseCall('ffiInstall')` 与
`ffiAsset`；必须拦住真实安装与路径解析。

以下源码位置以本节标明的 main 提交为准；本节只记录设计，不表示基础统计已重采集或代码已实现。最小接入分为三处：

1. **复用 runtime 的可空 FFI 引用。** `native_runtime.dart` 当前已有
   `final FlaxEngineFfiApi? _ffi`。改为仅允许启动准备阶段清空的字段，在同库
   `native_ffi.dart` 增加内部方法；不另存一份 enable/disable 标记。

   ```dart
   // 拟议内部方法；只用于新 runtime 的 Session 启动准备。
   void disableNativeFfi() {
     _ensureAlive();
     if (_ffiPort != null) {
       throw StateError('Cannot sandbox a runtime with FFI already installed');
     }
     _ffi = null;
   }
   ```

   原 installNativeFfi 已在 `_ffi == null` 时拒绝安装，继续复用该检查；错误文案统一为
   `Native FFI is unavailable for this runtime`，同时适用于未提供扩展和主动禁用。禁用后不提供重新赋回接口。正常关闭仍走现有退役/清理流程，不在关闭阶段调用此准备方法。

2. **新 runtime 创建后立即准备一次。** main 8f123f3b9 已有 Script 的
   `_prepareSession/prepareSources` 和 ESM 的 `_load/loadModule`
   两条启动路径；不能只在旧 `_Session.load`
   加判断。两处 runtime 创建分支均在现有 try/失败清理范围内、任何后台源码准备、插件或业务模块执行前做同一禁用动作，不增加原生调用热路径检查。

   ```dart
   // 拟议接入；sandbox 为前述 Session 配置，尚未实现。
   final runtime = createRuntime();
   if (sandbox != null && runtime is FlaxNativeJsRuntime) {
     runtime.disableNativeFfi();
   }
   // 然后才允许 prepareSources，或创建 _Session 并进入 loadModule。
   ```

   沙箱使用创建工厂产生的新 runtime，不支持把使用过 FFI 的旧 VM 降级后复用。有现存 FFI 安装时明确拒绝；不能通过退役或删除全局变量来宣称旧函数、指针和借用视图已安全撤回。模式切换沿用[重建 Session](#2-隔离配置与独立的权限配置)的规则，并创建新的 runtime。自定义 runtime 也必须满足不导出直接原生 FFI 的同一保证。

3. **独立拒绝 ffiAsset。** 在 Core `__flaxBaseCall`
   的 ffiAsset 分支中，先判断所属 Session 是否启用沙箱，再解析资产 ID 或访问文件。沙箱下拒绝，不返回宿主原生库路径；普通模式保持原逻辑。ffiInstall 继续走上述 runtime 判空检查，不重复配置规则。

因此 @flax/ffi、node:ffi、CommonJS、生成的 FFI 包装及直接 ffiInstall 都不能在该 runtime 安装原生接口；原生内存入口也不会被创建。不改引擎/C
ABI、FFI npm API、binding 生成器或每次 native call，不靠扫描业务源码封锁调用。纯 JS
Buffer/Uint8Array 字节处理保留；需要原生地址的 Buffer 扩展仍不可用。

实现后仅需针对直接 ffiInstall/ffiAsset 拒绝且不产生原生状态、预装 FFI 的 runtime 被拒绝、普通模式 FFI 与沙箱纯 JS
Buffer 不回归做聚焦验证。当前没有执行这些验证，不能据此声明隔离已生效。

<a id="canvas-boundary"></a>

### 11.2 Canvas：文件读写与 AssetBundle 的边界

**当前 Canvas 不增加专用 policy、沙箱注解或文件 handler。**
本节按上述 main 提交复核 JS 图片入口、Dart 插件与编解码调用；这些入口接收或返回内存字节及已有图片/画布，不直接按路径读写文件。以下是现有行为及沙箱接入约束，不表示文件隔离或 JS
FFI 禁用已经实现。

| 现有入口                                                 | 实际行为                                                                                                                                  | 沙箱边界                                                                                                  |
| -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| createImageBitmap                                        | 接收 Blob、带 arrayBuffer() 的对象、ImageData、ImageBitmap 或 OffscreenCanvas；Dart 向编解码器传字节，不接受直接的文件路径或 URL 字符串。 | 获取字节的 File / Fetch 等入口各自负责限制；自定义 arrayBuffer() 不因传给 Canvas 就绕过其底层入口的规则。 |
| drawImage / createPattern                                | 使用已有图片、像素或画布内容，不按文件路径加载。                                                                                          | 保留原有资源引用与类型校验，不重复检查文件权限。                                                          |
| getImageData / getImageDataAsync / transferToImageBitmap | 读取指定画布的像素或生成位图，不是主 App 页面截图接口。                                                                                   | 保留当前资源归属；宿主主动交付的外部图片/画布引用属于显式共享，不能据此宣称所有宿主对象已隔离。           |
| convertToBlob                                            | 将画布编码为内存 Blob，不创建文件。                                                                                                       | 真正保存时进入受限 File 的写入流程。                                                                      |
| registerFont / Canvas 文字绘制                           | Core 从 Session 的 AssetBundle 读取字体清单和字节；Canvas 使用该 Session 的字体集合及公共字体回退。                                       | 资源包范围由宿主提供的 AssetBundle 约束；不为每次文字绘制增加文件 handler。                               |

接入既定文件方案后，加载和保存的职责如下；箭头中的文件检查仍是待实现的受限后端行为：

```text
File.readAsBytes() → Blob → createImageBitmap → drawImage
      文件边界检查              内存处理

convertToBlob() → Blob.arrayBuffer() → File.writeAsBytes()
            内存处理                      文件边界检查
```

全局 `new File(parts, name)`
是 Blob 的内存子类，name 只是元数据，不能凭文件名读取磁盘；它与生成 binding 的
`dart:io File(path)`
不同。Canvas 返回的 Blob、ImageData 或 ImageBitmap 不携带新的文件访问能力，无需给这些结果再套路径权限。现有插件实例维护自己的图片/画布资源，异步完成后会处理 Session 关闭与迟到资源释放，沿用这些生命周期逻辑，不新增通用 Promise 过滤器。

**AssetBundle 是独立的只读资源通道。** 可写文件主目录是
`<ApplicationSupport>/flax/apps/<sha256(appId)>/data/`；安装包资源可以位于另一个宿主管理的目录，通过资源 key 读取。这不是给 FilePolicy 增加第二个可访问根，也不允许 JS 用 File 直接读取安装目录。

Core 的字体注册使用 Session.assetBundle，清单和字体 key 已拒绝绝对路径、`..`、反斜线等无效形式，并校验字体摘要。默认 FlaxPrefixedAssetBundle 读取指定前缀；目录型 FlaxDirectoryAssetBundle 校验资源 key、解析符号链接并检查目录范围。宿主仍需按应用允许的资源范围选择 AssetBundle；沙箱的 FlaxAssetBundlePolicy 自动取这份 bundle，约束直接加载和图片 provider 的替代入口，详见[第 11.5 节](#115-assetbundle补齐直接加载与图片-provider-入口)。JS 不能自行换成宿主 rootBundle，自定义 bundle 内部的文件/网络访问仍由其可信提供者负责，FilePolicy 和 Fetch
origins 不会自动深入其中。

目录型资源包必须由宿主管理，并与应用可写的 data 目录分开。现有目录 bundle 的路径校验与实际读取分成两步，不能将它宣称为抵抗并发路径替换的可写文件沙箱；保持包目录及路径组件不可被应用改写。需要修改内置资源时，先读取字节，再通过受限 File 写入自己的主目录。宿主明确提供的公共资源和公共字体可以继续共享，不新增 Canvas 资源白名单。

**禁用 JS 直接 FFI 不影响 Canvas 的既有原生调用路径。** CanvasDecoder 在宿主 Dart 中用
`DynamicLibrary.process()` 调用固定的 `flax_canvas_dispatch`，不依赖 JS `ffiInstall` 或
`@flax/ffi`。第 11.1 节只关闭 JS
runtime 的直接 FFI 安装与 ffiAsset 查询，不禁用宿主 Dart
FFI、不移除 Canvas 引擎扩展，也不要求业务额外开启 FFI。主目录检查与沙箱注解同样不应误拦截资源 bundle 内部已经选定范围的可信 Dart 调用。

复核路径包括 main 的
`packages/flax_canvas/js/src/canvas.ts`、`packages/flax_canvas/lib/src/plugin.dart`、`packages/flax_canvas/lib/src/decoder.dart`、Core 的
`ui/session.dart`、`ui/fonts.dart`
与两种 AssetBundle；具体来源记录于摘要 canvasDesign。若后续增加直接按路径加载/保存图片的 API，再将该具体入口接入同一 FlaxFilePolicy，不能只复用当前“Canvas 无需文件拦截”的结论。

<a id="esm-boundary"></a>

### 11.3 ESM：源码来源与执行权限

main 8f123f3b9 已实现原始 ESM、JSON、Wasm、动态 import 和 top-level
await，但现有入口默认仍是 Script，bool
sandbox:true 仍提前拒绝。下述 ESM 默认使用方式与 FlaxModulePolicy 均是提案，不能表述为当前实现。

#### 默认支持与当前契约

ESM、包内 JS/JSON、静态/动态 import 和顶层 await 作为基础能力默认支持，不增加 enableEsm、enableJson 或逐模块授权。应用入口、构建产物和示例统一默认 module；直接更新项目调用处，不保留旧 Script 入口或旧清单的兼容分支。底层 evaluate 仍可用于宿主 bootstrap 和运行时脚本，不以此承担应用入口迁移。包内模块仍只能读取声明范围，代码安装目录由宿主管理且应用不可改写。

顶层 await 的入口初始化由现有 Session.ready 等待，加载/失败展示和关闭清理保持原契约；不把 Widget 同步回调或 binding
handler 改成异步。支持顶层 await 不需要开放远程模块。

#### 独立模块策略

远程模块来源回答“允许从哪里加载模块”，Fetch/WebSocket 的业务 origins 回答“允许向哪里请求数据”。二者独立登记于 permissions，不放入 sandbox.policies，不共用名单，不自动取并集，也不要求模块下载同时命中业务名单。允许业务 API 不自动允许从那里 import；允许模块服务器也不自动允许 Fetch/WebSocket 连接它。模块策略仍属于宿主能力权限，不能解除文件、存储、导航或 JS
FFI 的隔离规则。

```dart
// 拟议接口；内置策略实现须校验、规范化并冻结来源集合。
final class FlaxModulePolicy {
  const FlaxModulePolicy({
    this.remoteOrigins = const <String>{},
    this.allowWasm = true,
  });

  final Set<String>? remoteOrigins;
  final bool allowWasm;
}
```

remoteOrigins 仅接受合法 HTTP(S)
origin，按协议、主机和有效端口精确匹配；null 不限远程来源，空集合拒绝，非空集合只允许匹配来源。条目或类型错误报配置错误，不回退默认。是否允许 Wasm 是另一维度，与二进制来自包内、文件或网络分开判断。

| 配置情况                          | remoteOrigins                                      | allowWasm                                      |
| --------------------------------- | -------------------------------------------------- | ---------------------------------------------- |
| 沙箱模式，未提供 FlaxModulePolicy | 空集合：默认拒绝远程模块。                         | true：包内 Wasm 默认可用。                     |
| 普通模式，未提供 FlaxModulePolicy | null：可信主工程默认不限远程来源。                 | true：默认允许 Wasm。                          |
| 显式 FlaxModulePolicy()           | 空集合，两种模式都拒绝远程模块。                   | true。                                         |
| 显式填写字段                      | 使用原配置，null/空集合/非空集合不能被默认值覆盖。 | false 关闭 Wasm；不影响 JS/JSON 和顶层 await。 |

默认值按当前信任模式选择，不是历史版本兼容分支。显式构造策略时遵守构造函数默认值，不引入“未设置”和 null 的第三种字段状态。只关闭 Wasm 且保持不限远程来源时，明确写出两项：

```dart
// 拟议：允许远程模块目标，同时关闭所有 Wasm 编译/实例化入口。
FlaxModulePolicy(remoteOrigins: null, allowWasm: false);
```

在宿主应用加载准备阶段补齐并冻结有效配置，首次入口获取也使用它；Session 接收本次运行的同一快照。普通模式也可显式限制模块能力，不新增一套权限上下文或单独的 handler 注册表。配置示例见[第 2 节](#2-隔离配置与独立的权限配置)。

#### 首次下载前传入同一份策略

当前 FlaxApplication.network 会在 Session 创建前下载远程入口，因此仅给 FlaxView/FlaxSession 传 permissions 太晚。提供远程 ESM 入口的该工厂拟增加显式必传 modulePolicy；不根据尚未创建的 Session 猜默认值。入口和后续请求均在各自 IO 前检查：

```dart
// 拟议参数；当前 FlaxApplication.network 尚未接收 modulePolicy。
final modulePolicy = FlaxModulePolicy(
  remoteOrigins: {'https://modules.example.com'},
  allowWasm: true,
);
final application = await FlaxApplication.network(
  uri: Uri.parse('https://modules.example.com/reader/main.js'),
  format: FlaxRemoteFormat.javascript,
  modulePolicy: modulePolicy,
);
FlaxView.application(
  application: application,
  createRuntime: FlaxEngine.createRuntime,
  sandbox: sandbox,
  permissions: {FlaxModulePolicy: modulePolicy},
);
```

FlaxApplication.network 在创建入口请求前校验并冻结此策略；Session 从 permissions 取得本次有效策略，并在链接/执行已取得的入口前重新核对请求 URI、实际来源和模块类型。复用 Application 时使用当前 Session 的配置，不缓存“以前允许”的结果，也不要求策略对象必须是同一实例。若入口不满足本次策略，拒绝执行；后置拒绝不能撤销已经发生的下载，所以首次工厂检查不能省略。

拟在 FlaxModuleRequest 增加必传的
`FlaxModulePolicy modulePolicy`：入口请求使用工厂的有效策略，静态/动态依赖请求使用当前 Session 的有效策略，Core 下载器据请求在连接前校验。FlaxModuleSourceLoader 的回调形态不变，复用的 loader 从每次 request 取策略，不捕获创建 Application 时某个 Session 的权限；自定义下载器也须收到并执行本次来源约束。Session、入口下载及依赖下载使用同一套规范化与校验逻辑，不新增加载上下文类。

#### 实际来源与检查位置

模块加载不是生成 binding，检查落在实际源码解析/读取/下载层；Wasm 开关同时约束运行时直接入口。执行后的 API 继续受同一 Session 的隔离和权限约束。

| 来源                      | 拟议边界                                                                                                                                           |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| 应用包 / AssetBundle 模块 | 仅从宿主选定应用根加载清单声明的模块；代码/资产安装目录只读，与可写 home 分开，不增加 FilePolicy 的可读根。                                        |
| 散文件入口                | 当前以入口真实父目录为模块根；沙箱必须由宿主选定可信应用目录并保持不可由应用改写，不能把任意主程序目录设为入口根。保留 key、符号链接与范围检查。   |
| HTTP(S) 模块              | 入口下载、静态依赖、动态 import、JSON/Wasm 依赖及共享字节缓存命中均检查 FlaxModulePolicy.remoteOrigins；不依赖 Fetch 插件或业务网络 origins。      |
| 宿主 SDK / imports 映射   | 只能解析宿主配置的精确映射或当前 Session 已安装的 SDK 导出，不提供运行时 npm 查找，也不因 import 路径不同生成更高权限。                            |
| JSON / Wasm               | 均遵守实际来源边界；Wasm 另须 allowWasm:true，远程 Wasm 同时满足 remoteOrigins。engine requiredCapabilities 仅表示引擎功能要求，不能覆盖宿主策略。 |

```text
模块：解析目标 URI → 同步检查本地范围或 remoteOrigins → 异步读取/下载
     → 校验实际来源与模块类型 → 检查 allowWasm → 链接与执行
执行后的 File → 当前 Session 文件隔离；Fetch / WebSocket → 当前 FlaxNetworkPolicy
```

模块来源检查必须在实际请求前完成，不能下载后才按 finalUri 拒绝。当前默认下载器的同源重定向、HTTPS 不降级、远程不导入本地文件、MIME、字节/请求预算及仅向入口同源依赖传递凭据的规则继续保留；实际连接目标按 remoteOrigins 检查。来源规范化、下载和缓存实现可与业务网络复用，但授权结果保持独立。入口获取早于 Session 创建时也要收到宿主选定的有效模块策略，不能等进入 binding 才准备权限。

Wasm 默认允许，无需像 JS 直接 FFI 那样固定禁用：其宿主访问依赖嵌入环境提供的接口，见
[WebAssembly 安全模型](https://webassembly.org/docs/security/)。当前 Flax 不提供 WASI，传入的宿主函数仍须保持原隔离边界。allowWasm:false 必须在新 runtime 的任何 Script 后台准备、插件或 ESM 执行前生效，同时覆盖 Wasm 模块导入和 WebAssembly.compile/instantiate、Module/Instance 等直接字节或已编译对象入口；只按 .wasm 后缀拒绝不够，模块实际类型也须在编译前核对。main 的 startup_runtime_test.dart 已直接通过字节编译 Wasm，具体运行时禁用接入点仍需验证；无法完整关闭时拒绝启动该配置，不能静默保留直接入口。

FlaxModuleSourceLoader 可以异步返回源码，但同步判断先于 IO，不变成异步授权。自定义 loadModule/download 是可信宿主实现：外围可检查请求与返回 URI，但不能追回其内部已发生的越界 IO，提供者必须保持同一真实读取/连接边界。复用已有加载器即可，不引入通用权限代理。

共享下载缓存只复用不可变字节，不缓存其他应用的授权结果；每个 Session 保留独立模块实例、JSON 对象、Wasm 内存及待处理导入。remoteOrigins 和 allowWasm 检查不能被共享缓存命中跳过。入口/来源描述可复用，但不能让 FlaxApplication 中共享的 loader 闭包捕获某个旧 Session 的可变权限。关闭继续取消下载、未完成 import 和 top-level
await 的等待并释放迟到结果；更新代码或配置按一应用一 Session 模型重建运行。

远程模块执行后使用当前应用已有能力，不因来源获得更高权限，也不按每个 ESM 文件创建新沙箱。remoteOrigins 约束模块加载器的来源；若仍提供 eval/new
Function 等字符串执行能力，不能据此承诺“禁止执行所有外部代码”。本轮不扩展成所有 JS 字节的执行来源追踪。

<a id="host-boundary"></a>

### 11.4 原始宿主入口与受控服务

以下分类按新 main 的 services 导出复核，尚未生成对应规则，也没有逐项重审整个 SDK：

| 入口                                                        | 沙箱设计决定                                                                                                                                                                                                         |
| ----------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MethodChannel / OptionalMethodChannel 等通用 messenger 入口 | 不能只配置一个允许开关后任意调用宿主插件。首版拒绝可绕过文件/导航边界的原始调用与处理器注册路径，审查到达同一 messenger 的替代入口；宿主需要开放能力时提供用途明确的受控 API。                                       |
| dart:ui.channelBuffers / ChannelBuffers / onPlatformMessage | 同样按原始宿主消息入口拒绝：全局 buffers getter、构造与消息操作，以及 PlatformDispatcher / SingletonFlutterWindow 的旧消息回调读写均 deny。这些入口能直接触发或替换主 App 已注册的监听器，不需要构造 MethodChannel。 |
| SystemNavigator.pop 及主程序导航控制                        | 不能让模块关闭主程序或操作外部栈；应用内部返回走导航边界，退出请求由宿主处理。                                                                                                                                       |
| SystemChrome 等应用级状态修改                               | 不直接放行整组全局操作；宿主确需提供时，通过明确的请求服务控制其作用与恢复，不以普通 UI 无需权限为由放开主程序状态。                                                                                                 |
| getRootBundle / rootBundle 及资源替代入口                   | 使用 Session 自动提供的 FlaxAssetBundlePolicy，getter 替换为选定 bundle；PlatformAssetBundle、图片 provider 和直接资产缓冲入口逐项处理，见[第 11.5 节](#115-assetbundle补齐直接加载与图片-provider-入口)。           |
| Clipboard 与 App 的定位/相册/分享等具体服务                 | 分类到可选能力权限；不在本轮新增所有权限类型或授权 UI，也不能借这些服务自动放开通用平台通道。                                                                                                                        |

通用调用入口的关闭是为了维持已承诺的资源边界，不能靠网络 origins 或单个文件构造检查补救。具体提供者仍负责其真实宿主调用；不把普通 Context/State/Widget 的全部成员纳入权限白名单，也不据此声称完成全宿主对象隔离。

<a id="asset-bundle-boundary"></a>

### 11.5 AssetBundle：补齐直接加载与图片 provider 入口

当前 Session 已用 DefaultAssetBundle 包装 Widget 树，这足以让普通 Image.asset 选中应用资源，但不能限制所有无 Context 的调用。main
8f123f3b9 同时导出了 PlatformAssetBundle 构造、AssetImage/ExactAssetImage、AssetBundleImageKey.bundle 和 ImmutableBuffer.fromAsset。Flutter 的 AssetImage.obtainKey 在 bundle 与 configuration.bundle 都为空时直接回退到 rootBundle，再把它放进返回的 key；只替换 JS
getRootBundle 无法覆盖这条 Dart 内部路径。

复用现有 guard：Session 根据自己选定的 assetBundle 自动提供不可覆盖的 FlaxAssetBundlePolicy，只有只读 bundle 归属，不增加 App 要填写的资源目录、图片权限或资源白名单。普通模式不执行这些隔离规则；沙箱模式的第一版决定如下：

| 入口                                                                                                               | 拟议规则与执行                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| getRootBundle / rootBundle；DefaultAssetBundle.of                                                                  | 替换为当前 Session 选定的 bundle，不因传入外部 Context 而返回主程序 bundle；保留 Widget 树现有的 Session 资源作用域。                                                                              |
| PlatformAssetBundle 的普通构造、proxy/super 构造                                                                   | 直接 deny，不能重新取得宿主平台资源加载器；宿主 bundle 内部使用它的可信 Dart 实现保持正常。                                                                                                        |
| AssetBundle 的 load/loadBuffer/loadString/loadStructuredData/loadStructuredBinaryData，以及 clear/evict 的可达投影 | 同步检查 receiver 为本次选定 bundle 后调用原方法，拒绝从其他引用路径取得的宿主 bundle；原生 override、继承投影和 tear-off 不能绕过。                                                               |
| AssetImage / ExactAssetImage 构造，以及 Image.asset                                                                | 同步替换：未传 bundle 时注入选定 bundle，显式传入时核对归属，并完整转发其他参数；Image.asset 内部不会再次经过生成 binding，故外层也要适配。                                                        |
| AssetImage / ExactAssetImage 的 obtainKey                                                                          | 同步检查 receiver 已绑定选定 bundle，再执行原方法，拒绝从其他路径取得的原始宿主 provider；不能先在 Dart 内加载宿主清单，再过滤返回 key。                                                           |
| ImmutableBuffer.fromAsset                                                                                          | 同步替换 handler 直接返回选定 bundle.loadBuffer(assetKey) 的 Future；资源 key 沿用包规则校验，不再调用按宿主根加载的原静态入口。fromFilePath 仍按文件入口表 deny，fromUint8List 仍是普通内存操作。 |

FlaxAssetBundlePolicy.requireBundle(null) 返回选定 bundle；非空参数或 receiver 只有与它属于同一选定资源范围时才通过，首版以同一 bundle 实例为准。需要公共资源时，由可信宿主组合进该 Session 选定的 bundle；JS 不通过任意 AssetBundle 或 provider 反向扩大范围。所标记 API 的 proxy/super 等形式遵守同一规则，不能安全适配的入口明确拒绝或构建失败，不能退回原构造。这里只约束明确的资源加载入口，不追踪所有普通对象。

例如 AssetImage 的构造规则使用 policyType:FlaxAssetBundlePolicy、replace:true，handler 保持同步：

```dart
// 拟议 handler；ExactAssetImage 和 Image.asset 完整转发各自原参数。
AssetImage createSandboxAssetImage(
  FlaxSandboxContext c, FlaxAssetBundlePolicy p, String assetName,
  {AssetBundle? bundle, String? package},
) {
  c.scope.requireActive();
  final selectedBundle = p.requireBundle(bundle);
  return AssetImage(assetName, bundle: selectedBundle, package: package);
}
```

检查发生在原生资源 IO 前。通过正确构造获得的 AssetBundleImageKey.bundle 仍是选定 bundle，保持原生图片 provider 和缓存语义；不靠过滤 key
getter 或清空全局缓存补救已经发生的加载。Canvas 字体继续直接使用同一 Session.assetBundle，不为绘制增加检查。宿主自定义 bundle 内部的真实 IO、只读安装目录与路径安全仍由提供者保证。

源码依据分别为 main 的
`ui/assets.dart`、`sdk_services_PlatformAssetBundle.ts`、`sdk_painting_AssetImage.ts`、`sdk_painting_ExactAssetImage.ts`、`sdk_painting_AssetBundleImageKey.ts`
和 `sdk_dart_ui_ImmutableBuffer.ts`；本地 Flutter
image_resolution.dart 的 obtainKey 回退逻辑已复核。规则尚未实现，不将源码分析表述为运行时隔离验证。

## 12. 实施范围与验证

后续实现按五组落点推进：

1. **配置与生成**：纯 Dart 注解加入 policyType、handler、replace 与 deny；YAML 等价。验证同步函数体、类型/签名，保留 config.copyWith、provider 投影和序列化；CLI/Builder 共用 resolver 与依赖追踪。
2. **目录 / View / Session
   / 导航宿主**：create 准备 data 目录与配置，Session 独占实际后端及根句柄；localStorage
   store 保持自己的生命周期，交付 Core
   getHomePath。不可变隔离配置和独立 permissions 绑定 Session，处理配置替换、异步加载和借用模式，导航集中处理内部 root/目标。网络应用工厂在首次下载前显式取得模块策略，每个 FlaxModuleRequest 携带当前策略；新 runtime 在任何源码准备或插件执行前禁用直接 FFI、应用 allowWasm:false，并拒绝 ffiAsset 路径解析。
3. **标记调用分派**：检查一次后执行原操作一次；替换直接使用返回值（含受限 Future/Stream），不 await、不再自动执行原操作。各调用形式和缓存不丢规则，错误不回退。
4. **受限资源**：File/Directory 保存 scope，由文件策略统一核对归属；实际后端、请求和源流在各自所有者中保持约束及幂等清理。公开 Context 只保留归属、scope 和策略查询，复用既有桥接与插件清理，不增加通用资源注册或结果适配管线。
5. **具体入口覆盖**：按文件及资源包入口表生成检查、替换或 deny；Fetch/WebSocket 接入业务 origins，ESM 接入独立 remoteOrigins、Wasm 接入运行时开关，使用明确默认值；保留 Host/握手头校验，开发者网络 binding 自行接入。导航保持目标边界，普通网络图片保持原行为；localStorage 按应用存储，原始宿主旁路明确处理，不引入业务授权系统或旧版本兼容分支。

| 验证            | 应证明的行为                                                                                                                                                                                                                                                                                         |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 模式与调用语义  | 全部 binding 使用当前生成契约，应用默认 ESM；普通模式不执行隔离规则，但已配置 permissions 生效；未标记普通 API 沿用原调用；检查执行一次，替换不自动执行原操作；deny/错误不会回退。                                                                                                                   |
| policy 注册     | Type 精确匹配，同名不同库不混淆；Session 自动提供不可覆盖的文件及资源包策略，permissions 分别补齐网络与模块默认策略，其他缺隔离配置拒绝，键值错配报错。显式策略不能被默认值覆盖；集合不可变，两份来源名单不串用。                                                                                    |
| 同步契约与生成  | 拒绝 async（含 async void）、async*、sync* 和异步鉴权；检查 handler 只能 void，替换可直接转交匹配原类型的受限 Future/FutureOr/Stream，不额外 await/订阅。参数/返回及模式错误可定位，注解/YAML 合并和 scope 发现保持一致。                                                                            |
| 直接拒绝与异常  | deny 不需要 policy/handler/replace，不调用原 API；普通模式原行为，冲突规则构建报错。明确拒绝统一 FlaxSandboxException，JS code/operation 可捕获；同步、Future/FutureOr、Stream 交付形态与原始 Dart 异常/堆栈引用保持，普通 IO/配置/关闭错误不误标为拒绝。                                            |
| Session 与异步  | 默认一应用一 Session，多页面共享模块/状态；重开保留同 appId 数据，旧运行对象不复活；替换 policy/模式正确重建，迟到加载不复活；原 Future/Stream、取消和资源清理继续工作，handler 不等待结果。                                                                                                         |
| 后端与资源归属  | 同一 FlaxSandbox 配置可用于先后或同时的 Session，每个实际后端和根句柄独立；启动失败或关闭按停止新 IO、收束在途操作、释放句柄的顺序清理；不误关另一个 Session 或 Hive store，也不泄漏配置阶段的临时句柄。                                                                                             |
| 文件范围        | data 目录稳定且不同应用不重叠；普通/URI 构造和静态查询使用受限后端；fromRawPath、Link、current/systemTemp、open/openSync 按表拒绝。验证穿越、相似前缀、链接/路径替换、复制/重命名双端、枚举和根保护；后端不支持则启动前失败。                                                                        |
| 主目录查询      | 普通模式 ApplicationSupport、沙箱模式自己的 home；Promise、错误和 Session 归属明确，普通模式不改变原 IO 范围。                                                                                                                                                                                       |
| 文件返回与图片  | write 返回受限 this，子资源不泄漏 raw；Image.file/FileImage 保留原缓存，根外/其他 Session/原始宿主 File 被拒绝。尚无安全路径的字符串加载器明确 deny。                                                                                                                                                |
| 证书 / 私钥     | 同步替换用安全后端读取后调用 Bytes 方法，原路径方法不再执行；defaultContext 沙箱下 deny，普通模式原样。                                                                                                                                                                                              |
| 网络权限        | 有无 sandbox 均检查配置；Fetch/WebSocket 未配置策略/显式 null 允许目标，空集合拒绝，非空集合逐跳精确匹配；不因模块名单而放行或拒绝。Dart Host/握手头检查两种模式均生效，直接 host 调用也不能跳过。开发者网络 binding 不自动受控；插件收发/关闭保留，无新配额。                                       |
| JS FFI          | Script 后台准备和 ESM 执行前均清空新 runtime 的 FFI 引用，直接 ffiInstall/别名/生成包装均不能安装；ffiAsset 不读文件或返回路径。预装 FFI 的 runtime 拒绝，普通模式 FFI 和沙箱纯 JS Buffer 保持原行为。                                                                                               |
| Canvas 与资源包 | JS FFI 被禁用后，Canvas 内存绘制、导出和字体加载仍工作；文件加载/保存受根约束。PlatformAssetBundle 构造拒绝，直接 AssetBundle 加载、Image.asset、AssetImage/ExactAssetImage.obtainKey 及 ImmutableBuffer.fromAsset 不能到达未选宿主资源；支持的 proxy/super 和其他引用路径也不绕过，原图片缓存保持。 |
| localStorage    | 两个应用即使 namespace 相同也不共享文件、数据或事件；所有 Hive 辅助文件在各自 home 下，box 名称与路径一致；关闭/重开及普通模式语义明确，不能关闭主 App 或其他应用的 box。                                                                                                                            |
| ESM 来源        | 应用统一默认 module，包内 JS/JSON 与顶层 await 默认支持；沙箱缺模块策略拒绝远程，普通模式默认不限。网络应用工厂在首个请求前检查显式策略，依赖 request 使用本 Session 策略，复用入口/缓存仍重新校验；不与业务名单互相授权或求交集，关闭/重启无迟到复活，隔离实现完整前继续拒绝启用。                  |
| Wasm 开关       | 默认允许包内 Wasm；远程 Wasm 同时满足 allowWasm 与 remoteOrigins。关闭在用户代码前生效，模块导入、直接编译/实例化和缓存均不能绕过，实际类型不能伪装后缀；JS/JSON/顶层 await 保持可用，requiredCapabilities 不覆盖宿主策略。                                                                          |
| 宿主原始入口    | 通用通道、退出/全局状态及 rootBundle 不绕过承诺边界；明确受控服务不自动解锁原始通道。                                                                                                                                                                                                                |
| 导航与旁路      | 内部跳转、root=true、弹窗、外部引用与原生回调不越界；关闭/系统返回不误操作主项目，未覆盖路径不能宣称已隔离。                                                                                                                                                                                         |

不为普通 getter 增加机械测试；实施时运行相关生成器、静态、类型及实际 runtime 检查，验证未标记调用成本未被无谓扩大。

## 13. 清单与文档状态

此前 7,649 项、2,607 项与 5,042 项来自广义能力/对象图审查，**不再作为本方案需要拦截的 API 数或实施任务量**。原始声明去重事实仍可用，明细保留作来源查询；当前选择性拦截范围见[清单](sandbox-api-inventory.md)。不拿“文件、网络、导航”三个旧类别机械相加充当新结论。

本方案以已复核的注解、Builder、binding 插件和独立 SDK 结构为基础，当前收敛为类型键策略、显式 policyType 与同步检查/替换；用户与业务授权流程不在本轮范围。四份 SDK
manifest 的 SHA-256 与历史统计完全一致，因此保留旧去重证据；新宿主示例及业务 scope 不在旧统计内，也没有重新解析全部 696 个来源文件。具体基线和检查范围记录于[统计摘要](sandbox-api-census-summary.json)的 designReview，原始 flaxRevision 保持不变。

早先 JS
FFI 与 Canvas 专项保留原复核基线；本次 Session/权限分工、localStorage、ESM 和宿主入口记录于摘要的 applicationSessionDesign、permissionDesign、localStorageDesign、esmDesign 和 hostBoundaryDesign，统一源码基线见 securityScopeReview。FFI 启动接入同步修正到新路径；FFI 安装边界和 Canvas 内存处理不计入旧 binding
API 的拦截数量。基础统计仍对应原 manifest，不将专项复核表述为整个方案已重新对齐最新 main。

直接 deny 与拒绝异常专项记录于摘要 denialDesign；错误桥接源码基线仍为 main
8f123f3b9。新增字段不是当前 JS
Error 已有能力，也没有用文档校验代替同步/Future/Stream 的运行时验证。

ESM 默认使用方式、独立模块来源与 Wasm 开关统一记录于摘要 esmDesign 和 permissionDesign；业务 networkDesign 不再包含 ESM 下载。保留 main 的 Script 默认与直接字节编译 Wasm 作为现状，具体 Wasm 禁用接入点尚未验证。

当前契约收敛、最小 Context、Session 独占文件后端、首次下载前的模块策略接口和资源包替代入口另记录于摘要 currentContractDesign、applicationSessionDesign、handlerDesign、esmDesign 与 assetBundleDesign。新增资产规则没有重新采集 SDK
census，也没有按旧版本兼容增加实现分支。

仅调整设计文档与摘要，未改运行时代码、生成器或 binding 输出。示例 YAML 检查的是语法，当前生成器尚不支持新字段；Dart/JS 片段未编译或执行，文件/localStorage/网络权限/模块策略/资源包/导航、FFI 保护及统一拒绝异常均未经过运行时验证，尚未执行禁用 JS
FFI 后的 Canvas 功能验证。落实前仍需解决安全文件后端及关闭、所有已标记调用形式的分派、错误桥接、导航实际目标边界、localStorage 按应用存储、模块策略传递与 Wasm 禁用、资源包替代入口和 FFI 准备，不能用新插件结构代替这些保护。
