import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler';
import { Navigation } from "./presentation/navigation/StackNavigation";


export const pokedexApp = () => {
  return (
    <NavigationContainer>
      <Navigation/>
    </NavigationContainer>
  )
}

