import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

// Página de troféus, não implementada, apenas a nível de demonstração das navtabs
const Achievements = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Achievements</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#9b01af',
  },
});

export default Achievements;