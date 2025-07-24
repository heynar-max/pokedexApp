import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreens } from '../screens/home/HomeScreens';

import { SearchScreen } from '../screens/search/SearchScreen';
import { PokemonScreen } from '../screens/pokemon/pokemonScreen';

export type RootStackParams = {
    HomeScreen: undefined;
    PokemonScreen: { pokemonId: number };
    SearchScreen: undefined;
}

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
        <Stack.Screen name="HomeScreen" component={HomeScreens} />
        <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        </Stack.Navigator>
    );
}