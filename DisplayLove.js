import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

function DisplayLove(props) {
    console.log(props)
    if(props.data =='loading'){
        return <Text>Wait AKr Bhai</Text>
    }
    if(props.data.message){
        return <Text style={styles.textWrong}>Something Went Wrong !!! Don't be panic... Try Again!!!</Text>
    }
    else{
        return (
            <View>
                <Text style={styles.textPercentage}>
                    {props.data.percentage}%
                </Text>
                <Text style={styles.textMesage}>
                    {props.data.result}
                </Text>
            </View>
    )
 }
}

const styles = StyleSheet.create(
    {
        textPercentage:{
        color:'#452345',
        fontSize: 50,
        textAlign:'center',
        padding:20,
        fontWeight:'bold',
    },
    textWrong:{
        color:'red',
        fontSize: 40,
        textAlign:'center',
        padding:20,
        margin:10,
        fontWeight:'bold',
    },
    textMesage:{
        color:'green',
        fontSize: 40,
        textAlign:'center',
        padding:20,
        fontWeight:'bold',
    }
}
)

export default DisplayLove
