import { View } from 'react-native'
import { Button, Text } from 'react-native-paper'

export const HomeScreens = () => {
    return (
        <View>
            <Text variant='displaySmall'>Home screens</Text>

            <Button  mode="contained" onPress={() => console.log('Pressed')}>
                Press me
            </Button>
        </View>
    )
}
