import { useQuery } from '@tanstack/react-query'
import { StyleSheet, View } from 'react-native'
import { getPokemons } from '../../../actions';
import { PokeballBg } from '../../components/ui/PokeballBg';
import { FlatList } from 'react-native-gesture-handler';
import { Text } from 'react-native-paper';
import { globalTheme } from '../../../config/theme/global-theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PokemonCard } from '../../components/pokemons/PokemonCard';

const HeaderTitle = () => (
    <Text variant="displayMedium">Pokédex</Text>
);

export const HomeScreens = () => {

    const {top} = useSafeAreaInsets();

    const {isLoading, data: pokemons = [] } = useQuery({
        queryKey: ['pokemons'],
        queryFn: () => getPokemons(0),
        staleTime: 1000 * 60 * 60, // 60 minutes
    });

    return (
        <View style={ globalTheme.globalMargin}>
            <PokeballBg style={ styles.imgPositiion}/>

            <FlatList
                data={pokemons}
                keyExtractor={(pokemon, index) => `${pokemon.id}-${index}`}
                numColumns={2}
                style={{paddingTop: top + 20}}
                ListHeaderComponent={HeaderTitle}
                renderItem={({item}) => <PokemonCard pokemon={item} />}
                onEndReachedThreshold={0.6}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    imgPositiion: {
        position: 'absolute',
        top: -100,
        right: -100,
    }
})
