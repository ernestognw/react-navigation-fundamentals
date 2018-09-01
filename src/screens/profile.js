import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Name from '../profile/components/name';

class Profile extends Component {
  handlePress = () => {
    this.props.navigation.navigate('Home')
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: `${navigation.getParam('name')} ${navigation.getParam('age')}`
    }
  }

  setParams = () => {
    this.props.navigation.setParams({
      name: 'Christian Contreras'
    })
  }

  render () {
    return(
      <View style={styles.container}>
        <Text>Profile</Text>
        <Button
          title="Ir al Home"
          onPress={this.handlePress}
        />
        <Button
          title="Cambiar nombre"
          onPress={this.setParams}
        />
        <Name />
      </View>
    )
  }
}

const styles =  StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  } 
})

export default Profile;