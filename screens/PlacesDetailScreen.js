import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PlacesDetailScreen = props => {
  return (
    <View>
      <Text>PlacesDetailScreen</Text>
    </View>
  )
};

PlacesDetailScreen.navigationOptions = navData => {
  const headerTitle = navData.navigation.getParam('placeTitle');
  return {
    headerTitle: headerTitle
  }

};

const styles = StyleSheet.create({

});

export default PlacesDetailScreen