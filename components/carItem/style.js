import { StyleSheet } from "react-native";
import { screenWidth, screenHeight } from '../screenDimensions/screen';



const styles = StyleSheet.create({

  carContainer: {
    width: '100%',
    height: 613
  },

  titles: {
    marginTop: screenHeight*.39,
    width: '100%',
    alignItems: 'center',
  },

  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black'
  },

  subtitle: {
    color: 'gray',
    fontSize: 16
  },
  image: {
    width: '100%',
    height: undefined,
    resizeMode: 'contain',
    position: 'absolute',
    aspectRatio: 1.5
  },

  buttonContainer: {
    position: 'absolute',
    bottom: screenHeight*.10,
    width: '100%'
  },

});

export { styles };