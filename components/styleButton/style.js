import { StyleSheet } from "react-native";
import {screenHeight, screenWidth} from "../screenDimensions/screen";

const styles = StyleSheet.create({

    container: {
        width: '100%',
        padding: screenWidth*.0276243093922652,
    },
    button: {
        height: screenWidth * .0648298217179903,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
    },
    text: {
        fontSize: 13,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        
    }
});


export { styles };