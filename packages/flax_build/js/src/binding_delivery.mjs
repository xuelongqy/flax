import { expandManifestMembers } from './binding_manifest.mjs';

function uniqueSorted(values) {
  return [...new Set(values)].sort();
}

function enumOperations(type, constants) {
  if (type.kind !== 'enum') return [];
  const split = type.id.indexOf('#type:');
  const moduleId = type.id.slice(0, split);
  const name = decodeURIComponent(type.id.slice(split + '#type:'.length));
  const id = (member, operation, constant) =>
    `${moduleId}#function:${encodeURIComponent(`${name}.${member}:${operation}${constant === null ? '' : `:${constant}`}`)}`;
  const variants =
    (type.typeParameters?.length ?? 0) > 0 ? constants.enumNames : [null];
  return [
    ...(type.getters ?? []).flatMap((member) =>
      variants.map((constant) => id(member.name, 'get', constant)),
    ),
    ...(type.setters ?? []).flatMap((member) =>
      variants.map((constant) => id(member.name, 'set', constant)),
    ),
    ...(type.methods ?? []).flatMap((member) =>
      (member.instance ? variants : [null]).map((constant) =>
        id(member.name, 'call', constant),
      ),
    ),
    ...(type.constructors ?? []).map((member) => id(member.name, 'factory', null)),
  ];
}

export function bindingRequirement(module) {
  const model = module.model;
  // The Dart emitter switches the whole module to host-proxy output as soon as
  // one host proxy is present. Such a module does not produce a
  // FlaxBindingModule, so it must not be projected as a runtime Dart binding
  // requirement even when the model also contains ordinary support types.
  const hostProxyModule = (model.classes ?? []).some(
    (entry) => entry.proxy?.kind === 'host',
  );
  return {
    moduleId: module.moduleId,
    uiProtocol: module.uiProtocol,
    requiredCapabilities: module.requiredCapabilities ?? [],
    types: hostProxyModule
      ? []
      : uniqueSorted([
          ...(model.classes ?? []).map((entry) => entry.id),
          ...(model.types ?? [])
            .filter(
              (entry) =>
                (entry.enumNames?.length ?? 0) > 0 &&
                entry.id.startsWith(`${module.moduleId}#`),
            )
            .map((entry) => entry.id),
        ]),
    functions: hostProxyModule
      ? []
      : uniqueSorted([
          ...(model.functions ?? []).map((entry) => entry.id),
          ...(model.classes ?? [])
            .filter((entry) => entry.id.startsWith(`${module.moduleId}#`))
            .flatMap((entry) => [
              ...enumOperations(
                entry,
                (model.types ?? []).find((named) => named.id === entry.id),
              ),
              ...(entry.staticGetters ?? []).map((member) => member.id),
              ...(entry.staticSetters ?? []).map((member) => member.id),
            ]),
          ...(model.extensions ?? [])
            .filter((entry) => entry.isReference !== true)
            .flatMap((entry) => entry.members.map((member) => member.id)),
          ...(model.topLevel?.setters ?? [])
            .filter((entry) => entry.isReference !== true)
            .map((entry) => entry.id),
          ...(model.topLevel?.getters ?? [])
            .filter(
              (entry) => entry.literal === undefined && entry.isReference !== true,
            )
            .map((entry) => entry.id),
        ]),
  };
}

export function publicRequirements(manifest) {
  if (manifest.formatVersion !== 28) throw new Error('Expected Binding Manifest 28');
  manifest = expandManifestMembers(manifest);
  const result = new Map();
  for (const module of manifest.modules) {
    const requirement = bindingRequirement(module);
    // Match the emitter's install helper owner, which prefers the module entry.
    const publicLibraries = module.model.publicLibraries ?? [];
    const libraries = [
      ...(publicLibraries.length
        ? publicLibraries
        : [{ jsPackage: module.model.jsPackage }]),
    ].sort(
      (a, b) =>
        Number(b.jsPackage === module.model.jsPackage) -
          Number(a.jsPackage === module.model.jsPackage) ||
        a.jsPackage.localeCompare(b.jsPackage),
    );
    if (libraries.length > 0) {
      const specifier = libraries[0].jsPackage;
      let entry = result.get(specifier);
      if (!entry) {
        entry = { bindings: new Map(), helperSubpaths: new Set() };
        result.set(specifier, entry);
      }
      if (publicLibraries.length)
        entry.helperSubpaths.add(`_bindings/${module.name}.__module`);
    }
    if (requirement.types.length === 0 && requirement.functions.length === 0) continue;
    for (const library of libraries) {
      let entry = result.get(library.jsPackage);
      if (!entry) {
        entry = { bindings: new Map(), helperSubpaths: new Set() };
        result.set(library.jsPackage, entry);
      }
      entry.bindings.set(requirement.moduleId, requirement);
    }
  }
  return new Map(
    [...result].map(([specifier, entry]) => [
      specifier,
      {
        bindings: [...entry.bindings.values()].sort((a, b) =>
          a.moduleId.localeCompare(b.moduleId),
        ),
        helperSubpaths: [...entry.helperSubpaths].sort(),
      },
    ]),
  );
}
