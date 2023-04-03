import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get('window')
const buttonWidth = width / 5
const buttonHeight = height / 10
export default StyleSheet.create({
    mainContainer: {
        borderWidth: 1,
        borderColor: '#fff',
        width: buttonWidth + 10,
        height: buttonHeight + 10,
        borderRadius: width / 3,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#9FC088'
    },
    container: {
        borderWidth: 1,
        borderColor: '#fff',
        width: buttonWidth,
        height: buttonHeight,
        borderRadius: width / 3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#446A46',
        borderColor: '#9FC088'
    },
    title: {
        color: '#B3FFAE'
    },
    disabledContainer: {
        borderWidth: 1,
        borderColor: '#fff',
        width: buttonWidth,
        height: buttonHeight,
        borderRadius: width / 3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#576F72',
        borderColor: '#B2B2B2'
    },
    disabledTitle: {
        color: '#B2B2B2'
    },
})