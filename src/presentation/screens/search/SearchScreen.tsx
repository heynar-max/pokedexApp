import { View } from "react-native"
import { ActivityIndicator, TextInput } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { globalTheme } from "../../../config/theme/global-theme";
import { FlatList } from "react-native-gesture-handler";
import { PokemonCard } from "../../components/pokemons/PokemonCard";
import { Pokemon } from "../../../domain";
import { useQuery } from "@tanstack/react-query";
import { getPokemonNamesWithId } from "../../../actions";


export const SearchScreen = () => {

    const {top} = useSafeAreaInsets();

    const {isLoading, data: pokemonNameList = []} = useQuery({
        queryKey: ['pokemons', 'all'],
        queryFn: () => getPokemonNamesWithId(),
    });

    return (
        <View style={[ globalTheme.globalMargin, {paddingTop: top}]}>
            <TextInput
                placeholder="Buscar Pokémon"
                mode="flat"
                autoFocus
                autoCorrect={false}
                onChangeText={value => console.log(value)}
                value={''}
            />
        <ActivityIndicator style={{ paddingTop: 20}}/>

        <FlatList
            data={[] as Pokemon[]}
            keyExtractor={(pokemon, index) => `${pokemon.id}-${index}`}
            numColumns={2}
            style={{paddingTop: top + 20}}
            renderItem={({item}) => <PokemonCard pokemon={item} />}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={ <View style={{ height: 150 }} />}
        />

        </View>
        
    )
}
