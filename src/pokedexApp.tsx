import 'react-native-gesture-handler';
import { Navigation } from "./presentation/navigation/StackNavigation";
import { ThemeContextProvider } from "./presentation/context/ThemeContext";


export const pokedexApp = () => {
  return (
    <ThemeContextProvider>
      <Navigation/>
    </ThemeContextProvider>
    
  )
}

