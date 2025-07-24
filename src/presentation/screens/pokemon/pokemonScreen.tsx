import { StackScreenProps } from '@react-navigation/stack';
import { FlatList, Image, ScrollView, StyleSheet, View } from 'react-native'
import { RootStackParams } from '../../navigation/StackNavigation';
import { useQuery } from '@tanstack/react-query';
import { getPokemonById } from '../../../actions';
import { FullScreenLoader } from '../../components/ui/FullScreenLoader';
import { Chip, Text } from 'react-native-paper';
import { Formatter } from '../../../config/helpers/formatter';
import { FadeInImage } from '../../components/ui/FadeInImage';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {}

export const PokemonScreen = ({navigation, route}: Props) => {

    const {isDark} = useContext(ThemeContext);
    const {pokemonId} = route.params;
    const {top} = useSafeAreaInsets();

    const pokeballImg = isDark
    ? require('../../../assets/pokeball-light.png')
    : require('../../../assets/pokeball-dark.png');

    const {isLoading, data: pokemon} = useQuery({
        queryKey: ['pokemon', pokemonId],
        queryFn: () => getPokemonById(pokemonId),
        staleTime: 1000 * 60 * 60, // 1 hour
    });

    if (!pokemon) {
        return <FullScreenLoader />;
    }

    return (
        <ScrollView
            style={[styles.screen, { backgroundColor: pokemon.color }]}
            bounces={ false }
            showsVerticalScrollIndicator={ false }>
            {/* Header Container */ }
            <View style={ styles.headerContainer }>
                {/* Nombre del Pokemon */ }
                <Text
                style={ {
                    ...styles.pokemonName,
                    top: top + 5,
                } }>
                { Formatter.capitalize( pokemon.name ) + '\n' }#{ pokemon.id }
                </Text>

                {/* Pokeball */ }
                <Image source={ pokeballImg } style={ styles.pokeball } />

                <FadeInImage uri={ pokemon.avatar } style={ styles.pokemonImage } />
            </View>

            {/* Types */ }
            <View
                style={styles.typesContainer}>
                { pokemon.types.map( type => (
                <Chip
                    key={ type }
                    mode="outlined"
                    selectedColor="white"
                    style={styles.typeChip}>
                    { type }
                </Chip>
                ) ) }
            </View>

            {/* Sprites */ }
            <FlatList
                data={ pokemon.sprites }
                horizontal
                keyExtractor={ item => item }
                showsHorizontalScrollIndicator={ false }
                centerContent
                style={styles.spritesList}
                renderItem={({ item }) => (
                    <FadeInImage uri={item} style={styles.spriteImage}
                />
                ) }
            />


            <View style={styles.bottomSpacer} />
            </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    headerContainer: {
        height: 370,
        zIndex: 999,
        alignItems: 'center',
        borderBottomRightRadius: 1000,
        borderBottomLeftRadius: 1000,
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
    pokemonName: {
        color: 'white',
        fontSize: 40,
        alignSelf: 'flex-start',
        left: 20,
    },
    pokeball: {
        width: 250,
        height: 250,
        bottom: -20,
        opacity: 0.7,
    },
    pokemonImage: {
        width: 240,
        height: 240,
        position: 'absolute',
        bottom: -40,
    },
    typesContainer: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 10,
    },
    typeChip: {
        marginLeft: 10,
    },
    spritesList: {
        marginTop: 20,
        height: 100,
    },
    spriteImage: {
        width: 100,
        height: 100,
        marginHorizontal: 5,
    },
    bottomSpacer: {
        height: 100,
    },
});