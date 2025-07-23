import 'react-native-gesture-handler';
import { Navigation } from "./presentation/navigation/StackNavigation";
import { ThemeContextProvider } from "./presentation/context/ThemeContext";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

export const pokedexApp = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContextProvider>
        <Navigation/>
      </ThemeContextProvider>
    </QueryClientProvider>
    
  )
}

