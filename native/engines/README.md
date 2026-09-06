# Engine Adapters

Reserved adapter locations:

- [Hermes](hermes/README.md)
- [QuickJS-NG](quickjs_ng/README.md)
- [V8](v8/README.md)

No adapter is implemented and no default engine has been selected. These directories
contain Flax integration code when implemented; upstream engine source is managed
separately through [third-party inputs](../third_party/README.md).

Engine-specific loading and build requirements remain separate from the shared
JSI-facing runtime. See [packaging](../../docs/architecture/packaging.md).
