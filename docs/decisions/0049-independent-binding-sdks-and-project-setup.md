# ADR 0049: Independent binding SDK builds and host setup

Status: accepted.

Date: 2026-10-22

## Context

Types-only SDK consumers previously needed the host's prepared module inventory to
build. First-time hosts also copied JS configuration manually, and advanced Builder
output lists duplicated paths already known to code generation.

## Decision

A declaration package opts into host binding resolution with
`"flax": {"hostBindings": true}` in package.json. With no explicit inventory,
flaxEsbuildPlugin/flaxHostModulesPlugin derive public host module specifiers from the
installed package's ordinary npm exports. Exact exports address modules; public wildcard
subpaths address their declared static parent module. Declaration files must exist
inside the package. Private _bindings paths are rejected. Exports containing executable
JS remain ordinary bundled wrappers. Generated binding implementations cannot be bundled
through a relative source import.

This is an explicit package contract, not an inference from .d.ts contents. It adds no
second module list, native identity projection or runtime payload to the SDK. SDK
versions are not passed as host version requirements. The prepared host inventory still
owns integrity checks; View plugins and native admission still control available APIs.
An explicit inventory retains its existing strict build-time checks for legacy callers.

flax_codegen owns binding discovery, manifests, Dart/TS generation and the binding JS
build plan. Flax CLI owns optional host initialization. Annotation users can invoke
build_runner directly without init/sync or metadata files. With no explicit scope YAML,
all annotation scopes share one generated Dart library and a fixed Builder output graph.
Additional scope TS sources travel in the build plan and are materialized by
@flax/build. This lets watch discover new/removed scopes without modifying build.yaml.
Old explicit output layouts remain supported; Flax CLI offers a legacy output-list sync
helper.

Named annotation scopes use their real Dart source carriers in the manifest, including
lib/src. API selection remains explicit; src is a Dart import convention, not a runtime
access boundary. The fixed app facade remains compatible, while same-named types in
different scopes do not need a shared export namespace. The JS build owns materialized
scope sources and cleans retired generated sources even after cache deletion; binding
checks do not depend on that cache.

The shopping example has one public SDK npm project and one private internal project.
Their generated source stays in the host; files/exports publish declarations only.
Private runtime npm projects are retained under host/modules solely for explicit legacy
delivery verification. Existing third-party provider delivery and Dart identities remain
unchanged.

Optional typesSdk metadata declares an npm name and public scopes, with js/sdk as the
default directory. The normal @flax/build preparation step maintains package.json and
tsconfig.json from the generated plan; new TS projects extend a generated
declaration-only base. Selected scopes use that npm root by default, while explicit
public paths and internal roots remain unchanged. Codegen validates the public
dependency closure; @flax/build maintains generated exports/files without replacing
project-owned npm policy or an existing JSONC tsconfig. Generated allowlists include
only declarations from selected scopes; existing custom additions remain the developer's
publication policy. File/link dependency selectors are rebased when copied from the host
JS project. CLI and Builder share binding generation, while editable SDK setup stays
outside the Builder asset graph.

Setup does not adopt existing matching npm entries. Existing exports without a files
allowlist require the developer to make the publication policy explicit before building.
Required declaration dependencies are installable by consumers, and provider dependency
selection follows the same canonical public route as TypeScript emission. Split-library
SDK exports include declaration helper paths; the application bundler continues to
reject direct imports of private binding helpers.

## Consequences

Independent consumers install types packages and use flaxEsbuildPlugin() without needing
the host's source or module inventory. Missing host plugins/modules still fail when the
application runs. The host prepares and loads module assets explicitly before creating
Views. Node is required only on development and CI machines. No SDK publication command
is added; publication policy remains ordinary npm metadata owned by the project.

Initialization does not edit main.dart or replace custom JS configurations. Existing
custom builds must incorporate module preparation explicitly. Annotation scope changes
require only normal generation and JS building. The Builder never runs Node or edits
project setup. pubspec.flax carries optional metadata; an existing flax_package.yaml
takes precedence for compatibility.

Validation covers packed types-only consumers, public/private export resolution, normal
JS wrappers, package confinement, idempotent setup, preserved custom configuration,
shared CLI/Builder outputs, provider reuse and compatible host upgrades.
