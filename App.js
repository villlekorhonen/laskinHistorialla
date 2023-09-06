import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList } from 'react-native';
import React, { useState, useRef } from 'react';

export default function App() {

  const [result, setResult] = useState('');
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [data, setData] = useState([]);

  const initialFocus = useRef(null);

  const calculate = operator => {
    const [number1, number2] = [Number(num1), Number(num2)];

    if (isNaN(number1) || isNaN(number2)) {
      setResult(0);
    }else{
      let result = 0;
    

    switch (operator) {
      case '+':
        result= number1 + number2;
        break;

      case '-':
        result=number1 - number2;
        break;
    }
    setResult(result);

    const text = `${number1} ${operator} ${number2} = ${result}`;
    setData([...data, text]);
  }
    setNum1('');
    setNum2('');
    initialFocus.current.focus();
  }


  return (

    <View style={styles.container}>

      <Text style={styles.text2}> Result: {result}  </Text>

      <TextInput style={styles.textbox} ref={initialFocus}
        keyboardType='numeric'
        onChangeText={text => setNum1(text)}
        value={num1}>
      </TextInput>
      <TextInput style={styles.textbox}
        keyboardType='numeric'
        onChangeText={text => setNum2(text)}
        value={num2}>
      </TextInput>
      <View style={styles.operators}>

        <TouchableOpacity style={styles.TouchableOpacity} title="+" onPress={() => calculate("+")}>
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.TouchableOpacity} title="-" onPress={() => calculate('-')}>
          <Text style={styles.text}>-</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.heading}> History: </Text>
      <FlatList  
      data={data}
      keyExtractor={ (item, index) => index }
      renderItem={({ item }) => {
        return <Text style={styles.heading2}>{item}</Text>
      }
    }
    />

  

      <StatusBar style="auto" />

    </View>

  );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
    

  },

  textbox: {

    borderColor: 'black',
    borderWidth: 3,
    padding: 10,
    width: '50%',
    margin: 5,
    backgroundColor: 'lightblue',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20
    
    


  },

  operators: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',

  },
  TouchableOpacity: {
    width: '20%',
    height: '35%',
    borderColor: 'black',
    borderWidth: 3,
    margin: 30,
    borderRadius: 50,
    backgroundColor: 'yellow',
    textAlign: 'center',
    justifyContent: 'center'


  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 35,
    

  },
  text2: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 70,
    textDecorationLine: 'underline'
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    backgroundColor: 'yellow'
    
  },
  heading2: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 17
  }
});