import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { styles } from './style';
import { screenWidth, screenHeight } from '../screenDimensions/screen';
import StyledButton from '../styleButton';

const CarItem = (props) => {

    const { name, tagLine, image, tagLineCTA } = props.car;

    return (
        <View style={styles.carContainer} >
            <ImageBackground source={image}
                style={styles.image}
            />
            <View style={styles.titles}>
                <Text style={styles.title} > {name} </Text>
                <Text style={styles.subtitle} > {tagLine} 
                    <Text style={styles.subtitleCTA}> {tagLineCTA} </Text>
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <StyledButton
                    type='öncelikli'
                    content='Hemen Sipariş Et!'
                    onPress={() => {
                        alert('it is clicked')
                    }}
                />
                <StyledButton
                    type='ikincilikli'
                    content='Envantere Göz AT!'
                    onPress={() => {
                        alert('it is clicked')
                    }}
                />
            </View>
        </View>
    )
}

export { CarItem };
