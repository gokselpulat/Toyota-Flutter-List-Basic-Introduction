import React from 'react'
import { View, Text, StyleSheet, Dimensions, ImageBackground } from 'react-native'
import CarsList from './components/carsList';
import { CarItem } from './components/carItem';
import { Logo } from './components/logo/logo';

export default function App() {
  return (
    <View style={styles.container} >
      <CarsList />
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  

});


// <CarItem
// name='Sedan Model'
// tagLine='303.000₺ den başlayan fiyatlarla'
// image={require('../toyotahibrit/assets/images/toyotasedan.jpg')}
// />