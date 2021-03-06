import React from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import { styles } from './styles';
import { CarItem } from '../carItem';
import cars from './cars';


const CarsList = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={cars}
                renderItem={({ item }) => <CarItem car={item} />}
               
            />
        </View>
    )
}

export default CarsList;
