import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class Home extends Component {
  handlePress = () => {
    this.props.navigation.navigate('Login')
  }

  render () {
    return(
      <View style={styles.container}>
        <Text>Home</Text>
        <Button
          title="Ir al login"
          onPress={this.handlePress}
        />
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

export default Home;