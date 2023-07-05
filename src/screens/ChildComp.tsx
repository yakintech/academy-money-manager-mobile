import { View, Text } from 'react-native'
import React, { useMemo } from 'react'

const ChildComp = () => {

    const expensiveCalc = () => {

        const date2 = new Date();
        //
        //
        return date2
    }

    console.log('Child component rendered!! ');
    const result = useMemo(() => expensiveCalc(), []);



    const date = new Date();

    return (
        <View>
            <Text>ChildComp</Text>
            <Text>{result.toTimeString()}</Text>
            <Text>Result2: {date.toTimeString()} </Text>
        </View>
    )
}

export default ChildComp