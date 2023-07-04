import { View, Text, TextInput, Button, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { deleteAllOperations, getAllOperations, saveOperation } from './src/services/sql/operationServices'
import { Operation } from './src/models/Operation'
import DatePicker from 'react-native-date-picker'
import moment from 'moment'

import { Picker } from '@react-native-picker/picker';
import IncomeList from './src/screens/IncomeList'

const App = () => {


  useEffect(() => {


  
  }, [])
  


  const [date, setDate] = useState(new Date())
  const [category, setcategory] = useState('')
  const [type, settype] = useState('')
  const [amount, setamount] = useState('0')
  const [note, setnote] = useState('')

  const addNewOperation = () => {



    let newOperation: Operation = {
      note: note,
      amount: Number(amount),
      type: 'Income',
      category: category,
      addDate: date
    }    

    saveOperation(newOperation)

  }

     return <IncomeList/>

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>Date: </Text>
          <DatePicker date={date} onDateChange={setDate} />
        </View>

        <View>
          <Picker
            selectedValue={category}
            onValueChange={(itemValue, itemIndex) =>
              setcategory(itemValue)
            }>
            <Picker.Item label="Food" value="food" />
            <Picker.Item label="Social Life" value="sociallife" />
            <Picker.Item label="Transport" value="transport" />
          </Picker>
        </View>

        <View>
          <Text>Type: </Text>
          <Picker
            selectedValue={type}
            onValueChange={(itemValue, itemIndex) =>
              settype(itemValue)
            }>
            <Picker.Item label="Income" value="Income" />
            <Picker.Item label="Spending" value="Spending" />
          </Picker>
        </View>


        <View>
          <Text>Amount: </Text>
          <TextInput style={styles.input} value={amount} onChangeText={setamount} />
        </View>

        <View>
          <Text>Note: </Text>
          <TextInput style={styles.input} value={note} onChangeText={setnote} />
        </View>

        <Button title='Add' onPress={() => addNewOperation()}></Button>
      </ScrollView>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default App