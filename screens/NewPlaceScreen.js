import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const NewPlaceScreen = props => {
  return (
    <View>
      <Text>NewPlaceScreen</Text>
    </View>
  )
};

NewPlaceScreen.navigationOptions = navData => {
  return {
    headerTitle: 'New place',
  }
};

const styles = StyleSheet.create({

});

export default NewPlaceScreen