import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  return (
    <HeartRateCalculator />
  );
}


const HeartRateCalculator = () => {
  const [age, setAge] = useState('');
  const [lowerLimit, setLowerlimit] = useState(null);
  const [upperLimit, setUpperlimit] = useState(null);
  
  const calculateHeartRateLimits = () => {
    if (age === '' || isNaN(age) || age < 0 || age > 120) {
    alert('Syötä ikäsi numeroina (0-120)');
    setLowerlimit(null);
    setUpperlimit(null);
    return;
  }

  const maxHeartRate = 220 - parseInt(age);
  const lower = maxHeartRate * 0.65;
  const upper = maxHeartRate * 0.85;

  setLowerlimit(Math.round(lower));
  setUpperlimit(Math.round(upper));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Bigtext}>Syötä ikäsi</Text>
      <TextInput 
        style={styles.input}
        placeholder='Ikä'
        keyboardType='numeric'
        value={age}
        onChangeText={text => setAge(text)}
        onEndEditing={calculateHeartRateLimits}
      />
      <TouchableOpacity onPress={calculateHeartRateLimits} style={styles.customButton}>
        <Text style={styles.buttonText}>Laske</Text>
      </TouchableOpacity>
      {lowerLimit !== null && upperLimit !== null && (
        <View>
          <Text style={styles.text}>Tavoitesykealueesi: {lowerLimit} - {upperLimit}</Text>
        </View>
      )}
      <Text style={styles.text}></Text>
      <StatusBar style="auto" />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Bigtext: {
    fontSize: 40,
    color: 'white',
    marginBottom: 30,
  },
  text: {
    fontSize: 25,
    color: 'white',
    marginBottom: 120,
    
  },
  input: {
    height: 40,
    fontSize: 18,
    width: 200,
    borderColor: 'white',
    borderWidth: 1,
    color: 'white',
  },
  buttonText: {
    fontSize: 30,
    color: 'blue',
    marginTop: 10,
  },
});
