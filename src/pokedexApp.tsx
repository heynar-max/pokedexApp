import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler';
import { Navigation } from "./presentation/navigation/StackNavigation";
import { PaperProvider } from "react-native-paper";


export const pokedexApp = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Navigation/>
      </NavigationContainer>
    </PaperProvider>
    
  )
}

