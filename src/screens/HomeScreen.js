import React, { Component } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { Header, Footer } from '../components';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: 'Selamat Datang di Rumah Makan Padang!',
    };
  }

  // Lifecycle Method - componentDidMount
  componentDidMount() {
    console.log('HomeScreen Loaded');
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Image source={require('../assets/images/logo.png')} style={styles.logo} />
        <Text style={styles.greeting}>{this.state.greeting}</Text>
        <Button
          title="Lihat Menu"
          onPress={() => this.props.navigation.navigate('Menu')}
        />
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f8f8',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  greeting: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
