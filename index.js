/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { pokedexApp } from './src/pokedexApp';

AppRegistry.registerComponent(appName, () => pokedexApp);
