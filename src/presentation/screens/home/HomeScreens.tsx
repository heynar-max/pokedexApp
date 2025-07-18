import { Text, View } from 'react-native'
import { Button } from 'react-native-paper'

export const HomeScreens = () => {
    return (
        <View>
            <Text>Home screens</Text>

            <Button  mode="contained" onPress={() => console.log('Pressed')}>
                Press me
            </Button>
        </View>
    )
}
