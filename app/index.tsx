import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Link } from 'expo-router';

export default function Home() {
  return (
    <>
      <View style={styles.header}>{/* You can add header content here */}</View>

      <View style={styles.content}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.title}>Home</Text>
          <Link href={{ pathname: '/details', params: { name: 'Reid' } }} asChild>
            <Text style={styles.button}>Go to Details</Text>
          </Link>
        </View>
      </View>

      <View style={styles.navbar}></View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    height: '10%',
    backgroundColor: 'black', // Example color
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    height: '80%',
    backgroundColor: '#ffffff', // Example color
  },
  navbar: {
    height: '10%',
    backgroundColor: 'black', // Example color
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'blue',
    color: 'white',
    borderRadius: 5,
  },
});
