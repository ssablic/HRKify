import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Dimensions} from 'react-native';

const image = require('./assets/valueBox.png');

export default function App() {
    const [value, setValue] = useState('');
    
  return (
    <View style={styles.container}>
       <View style={styles.box}>
       <Text style={styles.h1}>HRKify</Text>
          <View style={styles.card}>
            <Text style={styles.textLabels}>Iznos u Eurima:</Text>
            <TextInput
            keyboardType = 'numeric'
            style={styles.inputFields}
            onChangeText={text => setValue(text)}
            />
          </View>  
          <View style={styles.card}>
            <Text style={styles.textLabels}>Iznos u Kunama:</Text>
            <Text style={styles.inputFields}>{value ? `${(value * 7.56612).toFixed(2)}` : ''}</Text>  
            </View>
        </View>
        <View style={styles.lower}/>
      <StatusBar style="auto" />          
    </View>
  );
}

const MAX_WIDTH = Dimensions.get('window').width;
const MAX_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  textLabels: {
    paddingLeft: 12,
    paddingTop: 5,
    color: 'white',
    fontWeight: 'bold',
  },
  inputFields: {
    color: 'white',
    padding: 12,
    backgroundColor: '#8d4d81',
    fontWeight: 'bold',
    fontSize: 24,
    borderRadius: 16,
  },
  card: {
    width: 140, 
    height: 60, 
    backgroundColor: '#8d4d81', 
    margin: 24, 
    borderRadius: 16, 
    shadowColor: 'black', 
    shadowOpacity: 0.5, 
    shadowRadius: 2, 
    shadowOffset: { height: 1, width: 0.5 }, 
    marginTop: 110,
    marginLeft: -130,
    marginRight: 160,
  },
  box: {
    width: MAX_WIDTH / 1.05,
    height: MAX_HEIGHT / 3.85,
    backgroundColor: '#60559b',
    flexDirection: 'row',
    borderRadius: 20,
    marginBottom: 20,
  },
  lower: {
    width: MAX_WIDTH / 1.05,
    height: MAX_HEIGHT / 1.45,
    flexDirection: 'column',
    backgroundColor: '#CCCDCC',
    borderRadius: 20,
  },
  h1: {
    padding: 20,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 38,
  }
});
