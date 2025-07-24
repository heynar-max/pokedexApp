import { useQuery } from '@tanstack/react-query'
import { View } from 'react-native'
import { Button, Text } from 'react-native-paper'
import { getPokemons } from '../../../actions';

export const HomeScreens = () => {
    const {isLoading, data = [] } = useQuery({
        queryKey: ['pokemons'],
        queryFn: () => getPokemons(0),
        staleTime: 1000 * 60 * 60, // 60 minutes
    });

    return (
        <View>
            <Text variant='displaySmall'>Home screens</Text>

            <Button  mode="contained" onPress={() => console.log('Pressed')}>
                Press me
            </Button>
        </View>
    )
}
