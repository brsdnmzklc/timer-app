import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
const circleHeight = height / 2;
const circleWidth = width;
export default StyleSheet.create({
    container: {
        borderWidth: 5,
        height: circleHeight - 20,
        width: circleWidth - 20,
        borderRadius: width,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#FE6244',
    },
    timerText: {
        color: '#fff',
        fontSize: 50
    }
});
