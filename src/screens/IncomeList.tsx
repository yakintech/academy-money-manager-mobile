import { View, Text, FlatList, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getAllOperations } from '../services/sql/operationServices';
import { Operation } from '../models/Operation';
import moment from 'moment';

const IncomeList = () => {

  const [operations, setoperations] = useState<Operation[]>([]);
  const [totalPrice, settotalPrice] = useState<number>(0)

  useEffect(() => {

    getAllOperations()
      .then(res => {
        let data = res.filter(q => q.type == 'Income')
        setoperations(data);

        let total = 0;
        data.forEach(element => {
          total = total + element.amount;
        });

        settotalPrice(total)

      })

  }, [])

  const renderItem = ({item}:any) => {
   return <>
    <Text>{item.category}  -  {moment(item.addDate).format('MMM Do YY')}  -   {item.amount.toFixed(2)}</Text>
   </>
  }


  return (
    <SafeAreaView>
      <Text style={{fontSize:35}}>Total Price: {totalPrice.toFixed(2)}</Text>
      <FlatList
        data={operations}
        renderItem={renderItem}
      />
    </SafeAreaView>
  )
}

export default IncomeList