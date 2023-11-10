import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const Login = () => {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState('Ket Qua hien thi tai day');
  const [ketqua, setKetqua] = useState('')
  const predictResults = () => {
    let ranNumber = Math.floor((Math.random() * 100) + 1);
    console.log(ranNumber);
    setKetqua(ranNumber);
    if(ranNumber === number) setResult(`Chuc mung ban da trung giai nhat ${ranNumber}`)
    else setResult(`Chuc ban may man lan sau `)
  }
  return (
    <View>
      <Text style={styles.Header}>Xổ số kiến thiết!!!!!</Text>
      <Text style={styles.InputForm}>Nhập một số từ 1 đến 100 : </Text>
      <TextInput style={styles.InputNumber} placeholder='nhập số ở đây' onChangeText={text => setNumber(text)} />
      <Pressable style={styles.buttonResult} onPress={predictResults}>
        <Text style={{color:'white', textAlign:'center'}}>Dự đoán</Text>
      </Pressable>
      <Text>Kết quả : {ketqua}</Text>
      <Text style={styles.ptResult}>{result}</Text>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  Header: {
    textAlign: 'center',
    marginTop: 10,
    color: 'blue',
    fontSize: 40,
  },
  InputForm: {
    textAlign: 'center',
    marginTop: 10,
    color: 'green',
    fontSize: 20,
    fontWeight: 'bold',
  },
  InputNumber: {
    height: 40, 
    margin: 12, 
    borderWidth: 1,
    paddingLeft: 10,
  },
  buttonResult: {
    backgroundColor: 'red', 
    padding: 10, 
    margin: 10
  },
  ptResult: {
    textAlign: 'center',
    marginTop: 10,
    color: 'violet',
    fontSize: 14,
    fontWeight: 'bold',
  }
})