import React, { useEffect, useState} from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { DataTable } from 'react-native-paper';
import { getAllCountry } from '../actions';

const perPage = 10
export default function TableScreen() {
    const [allData, setAllData] = useState([{}])
    const [pageData, setPageData] = useState([{}])
    const [loading,setLoading] = useState(false)
    const [page, setPage] = useState(0)
    const from=page*perPage
    const to = (page + 1) * perPage
    
    useEffect(() => {
        if (allData.length <= 1) {
            setLoading(true)
            getAllCountry(data => {
                setAllData(data)
                setPageData([...data].splice(from, perPage))

            })
            .then(()=>setLoading(false))
        }
        setPageData([...allData].splice(from,perPage))
    }, [page])



    return (
        <View>
            <View style={{height:150,justifyContent: 'center', alignItems: 'center',backgroundColor:'yellow'}}>
                {
                    loading ?
                        <ActivityIndicator color='black' size={40}/>:
                    <Text style={{ fontSize: 40 }}>Live Updates</Text>}
            </View>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Region</DataTable.Title>
                    <DataTable.Title numeric>new Cases</DataTable.Title>
                    <DataTable.Title numeric>Total Cases</DataTable.Title>
                    <DataTable.Title numeric>Recovered</DataTable.Title>
                    <DataTable.Title numeric>Deaths</DataTable.Title>
                </DataTable.Header>
                {
                    pageData.map((item, index) => (
                    <DataTable.Row key={index+'rfre'}>
                        <DataTable.Cell>{item.Country}</DataTable.Cell>
                            <DataTable.Cell numeric>+{item.NewConfirmed || 0 }</DataTable.Cell>
                        <DataTable.Cell numeric>{item.TotalConfirmed||0}</DataTable.Cell>
                            <DataTable.Cell numeric>{item.TotalRecovered||0}</DataTable.Cell>
                            <DataTable.Cell numeric>{item.TotalDeaths||0}</DataTable.Cell>
                    </DataTable.Row>
        ))}
                <DataTable.Pagination
                    page={page}
                    numberOfPages={Math.floor(allData.length/perPage)}
                    onPageChange={pg => setPage(pg)}
                    label={`${from}-${to} of ${allData.length}`}
                />
            </DataTable>
        </View>
    )
}
