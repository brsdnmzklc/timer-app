import React from 'react';
import { TouchableOpacity, Text, Vibration, View } from 'react-native';
import styles from './StopButton.style';

const StopButton = ({

    onPress,
    isDisabled,
}: {
    title: string;
    onPress: Function;
    isDisabled: boolean;
}) => {


    return (
        <View style={isDisabled ? { ...styles.mainContainer, borderColor: '#576F72' } : styles.mainContainer}>
            <TouchableOpacity
                disabled={isDisabled}
                onPress={onPress}
                style={isDisabled ? styles.disabledContainer : styles.container}>
                <Text style={isDisabled ? styles.disabledTitle : styles.title}>
                    Vazgeç
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default StopButton;
