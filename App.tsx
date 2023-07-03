import { View, Text, TextInput, Button, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getAllOperations, saveOperation } from './src/services/sql/operationServices'
import { Operation } from './src/models/Operation'
import DateTimePickerModal from "react-native-modal-datetime-picker";


const App = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();



  const [addDate, setaddDate] = useState('')
  const [category, setcategory] = useState('')
  const [type, settype] = useState('')
  const [amount, setamount] = useState('0')
  const [note, setnote] = useState('')

  const [selectedDate, setSelectedDate] = useState<any>(null);
  const [datePickerVisible, setDatePickerVisible] = useState<boolean>(false);

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleConfirm = (date:Date) => {
    setSelectedDate(date);
    hideDatePicker();
  };


  const addNewOperation = () => {


    let newOperation: Operation = {
      note: note,
      amount: Number(amount),
      type: 'Income',
      category: category,
      addDate: Date.now() && selectedDate
    }
  }

  return (
    <SafeAreaView>
      <View>

      </View>
      <View>
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 5 }}>
          {selectedDate ? selectedDate.toLocaleDateString() : 'No date selected'}
        </Text>
        <TouchableOpacity onPress={showDatePicker}>
          <Text>Select Date</Text>
        </TouchableOpacity>
        
        <DateTimePickerModal
          isVisible={datePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>

      <View>
        <Text>Category: </Text>
        <TextInput style={styles.input} value={category} onChangeText={setcategory} />
      </View>

      <View>
        <Text>Type: </Text>
        <TextInput style={styles.input} value={type} onChangeText={settype} />
      </View>

      <View>
        <Text>Note: </Text>
        <TextInput style={styles.input} value={note} onChangeText={setnote} />
      </View>


      <View>
        <Text>Amount: </Text>
        <TextInput style={styles.input} value={amount} onChangeText={setamount} />
      </View>

      <Button title='Add' onPress={() => addNewOperation()}></Button>
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