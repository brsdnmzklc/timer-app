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
        borderColor: '#fff',
        width: buttonWidth,
        height: buttonHeight,
        borderRadius: width / 3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#446A46',

    },
    title: {
        color: '#B3FFAE'
    },
    activeContainer: {
        borderWidth: 1,
        borderColor: '#fff',
        width: buttonWidth,
        height: buttonHeight,
        borderRadius: width / 3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FAAB78',
        borderColor: '#FF8400'
    },
    activeTitle: {
        color: '#FF8400'
    },
     disabledContainer: {
        borderWidth: 1,
        borderColor: '#fff',
        width: buttonWidth,
        height: buttonHeight,
        borderRadius: width / 3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ABC4AA',
        borderColor: '#B2B2B2'
    },
    disabledTitle: {
        color: '#B2B2B2'
    },
})