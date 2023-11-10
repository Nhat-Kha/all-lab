import React, { useState } from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const TinhToan = () => {
    const [number1, setNumber1] = useState(1);
    const [number2, setNumber2] = useState(2);
    const [result, setresult]   = useState(0);

    const select = isTrue => {
        let Result = number1 + number2;
        if ((isTrue && Result == result) || (!isTrue && Result != result)) {
            alert("Ban da tra loi dung")
        } else {
            alert("Ban da tra loi sai")
        }

        let randNum1 = Math.round(Math.random() * 2)
        let randNum2 = Math.round(Math.random() * 2)
        let randResult = Math.round(Math.random() * 5)

        setNumber1(randNum1);
        setNumber2(randNum2);
        setresult(randResult);
    }
    return (
        <View>
            <Text style={styles.Header}>Bạn Giỏi Phép Cộng??</Text>
            <Text style={styles.Question}>{number1} + {number2}</Text>
            <Text style={styles.Question}>=</Text>
            <Text style={styles.Question}>{result}</Text>
            <Pressable 
                style={styles.ButtonTrue}
                onPress={() => select(true)}
            >
                <Text style={{color: 'white', textAlign: 'center'}}>Đúng</Text>
            </Pressable>
            <Pressable 
                style={styles.ButtonFalse}
                onPress={() => select(false)}
            >
                <Text style={{color: 'white', textAlign: 'center'}}>Sai</Text>
            </Pressable>
        </View>
    );
}

export default TinhToan

const styles = StyleSheet.create({
    Header: {
        textAlign: 'center',
        marginTop: 10,
        color: 'red',
        fontSize: 30,
    },
    Question: {
        textAlign: 'center',
        marginTop: 10,
        color: 'blue',
        fontSize: 50,
        fontWeight: 'bold',
    },
    ButtonTrue: {
        backgroundColor: 'green', 
        padding: 10, 
        margin: 10
    }, 
    ButtonFalse: {
        backgroundColor: 'grey', 
        padding: 10, 
        margin: 10
    }
})

