import {useEffect, useRef, useState} from 'react';
import {
    ActivityIndicator,
    Animated,
    ImageStyle,
    StyleProp,
    StyleSheet,
    View,
} from 'react-native';
import {useAnimation} from '../../hooks/useAnimation';

interface Props {
    uri: string;
    style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({uri, style}: Props) => {
    const {animatedOpacity, fadeIn} = useAnimation();
    const [isLoading, setIsLoading] = useState(true);

    const isDisposed = useRef(false);

    useEffect(() => {
        return () => {
        isDisposed.current = true;
        };
    }, []);

    const onLoadEnd = () => {
        if (isDisposed.current) return;
        fadeIn({});
        setIsLoading(false);
    };

    return (
        <View style={styles.container}>
        {isLoading && (
            <ActivityIndicator
            style={styles.activityIndicator}
            color="grey"
            size={30}
            />
        )}

        <Animated.Image
            source={{uri}}
            onLoadEnd={onLoadEnd}
            style={[style, styles.image, { opacity: animatedOpacity }]}
        />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    activityIndicator: {
        position: 'absolute',
    },
    image: {
        resizeMode: 'contain',
    },
});