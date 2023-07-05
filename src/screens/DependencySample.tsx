import React, { useEffect, useState } from 'react'
import { Button, FlatList, Text } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import { City } from './City';
import { cities } from './data';



function DependencySample() {
 

    const [city, setCity] = useState<City>(cities[0]);
    const [temp, settemp] = useState(0)



    const setCityData = (id:number) => {

        
        let selectedCity = cities.find(q => q.id == id)!;
        setCity(selectedCity);
        
    }

    useEffect(() => {


        
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=6fce019f9bb43a43436e8738b6c5d9fb&units=metric`)
        .then(res => res.json())
        .then(data => {
            
             settemp(data.main.temp)
            
        })
    
    }, [city])


    return (<>
        <Picker
            selectedValue={city.id}
            onValueChange={(itemValue, itemIndex) =>
                setCityData(itemValue)
            }>
                {
                    cities && cities.map((item,key) => <Picker.Item key={key} label={item.name} value={item.id} />)
                }
        </Picker>

        <Text style={{fontSize:35}}>{temp} Celsius</Text>
    </>)
}

export default DependencySample






 //6fce019f9bb43a43436e8738b6c5d9fb