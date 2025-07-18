import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreens } from '../screens/home/HomeScreens';

import { SearchScreen } from '../screens/search/SearchScreen';
import { PokemonScreen } from '../screens/pokemon/pokemonScreen';

const Stack = createStackNavigator();

export const Navigation = () => {
    return (
        <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreens} />
        <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        </Stack.Navigator>
    );
}