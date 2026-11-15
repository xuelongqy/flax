/// Shared source fixture for automatic, package and Builder carrier selection.
const publicCarrierLibraries = <String, String>{
  'main.dart': '''
import 'src/types.dart';
import 'declared.dart';
class Consumer {
  Consumer(this.value, this.near, this.tied, this.declared, {this.mode = Mode.normal});
  final CarrierType value;
  final NearType near;
  final TiedType tied;
  final Declared declared;
  final Mode mode;
}
''',
  'src/types.dart': '''
class CarrierType { CarrierType(); }
class NearType { NearType(); }
class TiedType { TiedType(); }
enum Mode { normal }
@Deprecated('Still a selected public declaration')
class Retired { Retired(); }
''',
  'a_legacy.dart': '''
@Deprecated('Use the active public libraries')
library;
export 'src/types.dart';
export 'declared.dart';
''',
  'b_umbrella.dart': "export 'z_active.dart';\n",
  'c_tie.dart': "export 'src/types.dart' show TiedType;\n",
  'd_tie.dart': "export 'src/types.dart' show TiedType;\n",
  'e_hidden.dart': "export 'src/types.dart' hide CarrierType, NearType, TiedType, Mode, Retired;\n",
  'z_active.dart': '''
export 'src/types.dart' show CarrierType, NearType, Mode, Retired;
export 'declared.dart';
''',
  'declared.dart': '''
@Deprecated('The public declaration is still the direct carrier')
library;
class Declared { Declared(); }
''',
  'other.dart': 'class CarrierType { CarrierType(); }\n',
};

Map<String, String> publicCarrierConfigs(String package) => {
  for (final name in [
    'main',
    'a_legacy',
    'b_umbrella',
    'c_tie',
    'd_tie',
    'e_hidden',
    'z_active',
    'declared',
  ])
    'flax_$name.yaml':
        '''
format: 2
name: $name
library: package:$package/$name.dart
automatic: true
jsPackage: '@example/carriers/$name'
dartOutput: lib/generated/$name.g.dart
tsOutput: js/$name.ts
publicLibraries:
  package:$package/$name.dart:
    jsPackage: '@example/carriers/$name'
    tsOutput: js/$name/index.ts
''',
};
