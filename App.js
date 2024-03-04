import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity, ScrollView, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const SplashScreen = () => {
  return (
    <View style={{padding: 0}}>
      <ResponsiveImage source={require('./assets/splash.png')} />
    </View>
  );
};

const ResponsiveImage = ({ source }) => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  return (
    <View style={{ flex: 1, alignItems: "baseline", justifyContent: "flex-start"}}>
      <Image
        source={source}
        style={{ width: screenWidth, height: screenHeight, resizeMode: 'cover' }}
      />
    </View>
  );
};


const MainApp = () => {
  const [value, setValue] = useState('');
  const [lastUniqueInputs, setLastUniqueInputs] = useState([]);

  const handleSaveInput = () => {
    if (value.trim() !== '') {
      if (!lastUniqueInputs.includes(value)){
        setLastUniqueInputs(prevInputs => {
        const updatedInputs = [value + `€ = ${(value * 7.56612).toFixed(2)} HRK`, ...prevInputs.slice(0, 9)];
        return updatedInputs;
        });
      };
      setValue('');
    }
  };
    
  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <View style={styles.container}>
          <LinearGradient colors={['#BA4667', '#60559B']}
          start={{ x:1, y:1}}
          end={{ x:0, y:0}} 
          style={styles.box}>
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
          </LinearGradient>
          <TouchableOpacity style={styles.button} title="Spremi" onPress={handleSaveInput}>
            <Text style={styles.buttonText}>Spremi</Text>
          </TouchableOpacity>
          <LinearGradient colors={['#BA4667', '#60559B']}
            start={{ x:0, y:0}}
            end={{ x:1, y:1}}
            style={styles.lower}>
              <Text style={styles.previousTitle}>Zadnjih 10 konverzija:</Text>
              {lastUniqueInputs.map((input, index) => (
              <Text style={styles.previous} key={index}>{input}</Text>
            ))}
          
          </LinearGradient>
        <StatusBar style="auto" />          
      </View>
    </ScrollView>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

    return <MainApp />;
  }

const MAX_WIDTH = Dimensions.get('window').width;
const MAX_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#E5E5E5',
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4.65,
    elevation: 7,
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
    backgroundColor: '#E73F4E',
    fontWeight: 'bold',
    fontSize: 28,
    borderRadius: 16,
  },
  card: {
    width: '45.5%', 
    height: '44%', 
    backgroundColor: '#E73F4E', 
    borderRadius: 16, 
    shadowColor: 'black', 
    shadowOpacity: 0.5, 
    shadowRadius: 2, 
    shadowOffset: { height: 1, width: 0.5 }, 
    marginTop: 106,
    marginLeft: -158,
    marginRight: 169,
    elevation: 12,
  },
  box: {
    width: '95%',
    height: '26.5%',
    backgroundColor: '#60559b',
    flexDirection: 'row',
    borderRadius: 20,
    marginBottom: 20,
    marginTop: 33,
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4.65,
    elevation: 7,
  },
  lower: {
    width: '95%',
    height: MAX_HEIGHT / 1.63,
    flexDirection: 'column',
    backgroundColor: '#BA4667',
    borderRadius: 20,
    marginBottom: 25,
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4.65,
    elevation: 7,
  },
  h1: {
    paddingTop: 18,
    paddingLeft: 20,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 48,
  },
  previous: {
    padding: 6,
    paddingLeft: 16,
    color: 'white',
    fontSize: 20,
  },
  previousTitle: {
    padding: 20,
    paddingLeft: 16,
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  button: {
    padding: 15,
    marginBottom: 15,
    marginTop: -10,
    backgroundColor: '#E73F4E',
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4.65,
    elevation: 7, 
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }
});
