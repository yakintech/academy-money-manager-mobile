import { View, Text, Button, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import ChildComp from './ChildComp'

const ParentComp = () => {

    const [counter, setcounter] = useState(0)

  return (
    <SafeAreaView>
      <Text style={{fontSize:35}}>{counter}</Text>
      <Button title='Increase' onPress={() => setcounter(counter + 1)}></Button>
     
      <ChildComp/>
    </SafeAreaView>
  )
}

export default ParentComp