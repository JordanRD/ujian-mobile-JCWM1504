
import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { Icon } from 'react-native-elements'
import { getAll } from '../actions'

export default function Home() {
    const [loading, setLoading] = useState(false)
    const [allData, setAllData] = useState({})

    useEffect(() => {
        setLoading(true)
        getAll(data => setAllData(data))
            .then(() => setLoading(false))
    }, [])


    return (
        <View style={{ flex: 1, backgroundColor: '#8b64a1', alignItems: 'center' }}>
            <View style={{ height: 300, backgroundColor: 'salmon', padding: 20, alignItems: 'center', borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }}>
                <Text style={{ fontSize: 27, fontWeight: 'bold', marginBottom: 40, color: 'black' }}>Coronna virus live updates</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
                    <View style={{ height: 150, backgroundColor: '#c4c4c4', width: 100, justifyContent: 'space-evenly', borderRadius: 20, alignItems: 'center' }}>
                        {
                            loading ?
                                <ActivityIndicator color='black' size={30} />
                                :
                                <>
                                    <Text style={{ paddingVertical: 20, fontWeight: 'bold', borderBottomWidth: 1, width: '80%', textAlign: 'center' }}>Total</Text>
                                    <Text>{allData?.TotalConfirmed || 0}</Text>
                                    <Text>+{allData?.NewConfirmed || 0}</Text>
                                </>
                        }
                    </View>
                    <View style={{ height: 150, backgroundColor: 'lightgreen', width: 100, justifyContent: 'space-evenly', borderRadius: 20, alignItems: 'center' }}>

                        {
                            loading ?
                                <ActivityIndicator color='black' size={30} />
                                :
                                <>
                                    <Text style={{ paddingVertical: 20, fontWeight: 'bold', borderBottomWidth: 1, width: '80%', textAlign: 'center' }}>Recovered</Text>
                                    <Text>{allData?.TotalRecovered || 0}</Text>
                                    <Text>+{allData?.NewRecovered || 0}</Text>
                                </>
                        }

                    </View>
                    <View style={{ height: 150, backgroundColor: '#ff0f0f', width: 100, justifyContent: 'space-evenly', borderRadius: 20, alignItems: 'center' }}>
                        {
                            loading ?
                                <ActivityIndicator color='black' size={30} />
                                :
                                <>
                                    <Text style={{ paddingVertical: 20, fontWeight: 'bold', borderBottomWidth: 1, width: '80%', textAlign: 'center' }}>Deaths</Text>
                                    <Text>{allData?.TotalDeaths || 0}</Text>
                                    <Text>+{allData?.NewDeaths || 0}</Text>
                                </>
                        }
                    </View>
                </View>
            </View>
            <Text style={{ fontSize: 30, width: '90%', marginTop: 20, color: 'white' }}>Health tips :</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', paddingVertical: 30 }}>
                {myIcon.map((item,index) => (
                    <View key={index+'frfrff'} style={{ ...selects, backgroundColor: item.color }}>
                    <Icon name={item.name} type='material' size={35} />
                    </View>
                ))}
            </View>
        </View>
    )
}

const selects = { width: 100, height: 100, borderRadius: 30, margin: 10, justifyContent: 'center', alignItems: 'center' }

const myIcon = [
    {color:'orange',name:'soap'},
    { color:'yellow',name:'bathtub'},
    { color: '#dc00ff', name: 'self-improvement'},
    { color: 'cyan', name:'clean-hands'},
    { color: 'red', name:'roofing'},
]


