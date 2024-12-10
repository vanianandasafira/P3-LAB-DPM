import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header, Footer } from '../components';
import MenuList from '../components/MenuList';  // Import MenuList

class MenuScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: [
        { id: '1', name: 'Rendang' },
        { id: '2', name: 'Ayam Penyet' },
        { id: '3', name: 'Sate Padang' },
        { id: '4', name: 'Gulai Ikan' },
      ],
    };
  }

  // Lifecycle Method - componentDidMount
  componentDidMount() {
    console.log('MenuScreen Loaded');
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Text style={styles.title}>Menu Rumah Makan Padang</Text>
        {/* Menggunakan MenuList untuk menampilkan daftar menu */}
        <MenuList menuItems={this.state.menuItems} />
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default MenuScreen;
