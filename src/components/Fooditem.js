import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>© 2024 Rumah Makan Padang</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    padding: 20,
    backgroundColor: '#ff6600',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  footerText: {
    fontSize: 14,
    color: '#fff',
  },
});

export default Footer;
