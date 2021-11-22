import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styleButton/style';


const StyledButton = (props) => {
    
    const { type, content, onPress } = props;
    
    const backgroundColor = type === 'öncelikli' ? '#202020' : '#D3D3D3';
    const textColor = type === 'öncelikli' ? '#fff' : 'black';

    

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.button, {backgroundColor: backgroundColor}]}
                onPress={()=> onPress()} >
                <Text style={[styles.text, {color: textColor}]}>{content} </Text>
            </TouchableOpacity>
        </View>
    )
}

export default StyledButton;
