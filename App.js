import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Appbar, Button } from 'react-native-paper';
import DisplayLove from './DisplayLove'


class App extends React.Component{
  state = {
    fname: '',
    sname:'',
    result:'loading'
  }
  submitit(){
   
fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.fname}&sname=${this.state.sname}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "love-calculator.p.rapidapi.com",
		"x-rapidapi-key": "2c5b18280emshfea4ed131271e13p1b10f9jsnb84e93cc4acf"
	}
}).then(data=>data.json()).then(data2=>{
  console.log(data2);
  this.setState(
    {
      result:data2
    }
  )
})
  }
  render(){
    return(
      <View>

        <Appbar.Header>
        <Appbar.Content
          title="Your-Love-Calc"
          style={{alignItems:"center"}}
        />
      </Appbar.Header>

      <TextInput
        label='Your Name'
        value={this.state.fname}
        onChangeText={text => this.setState({ fname:text })}
      />

      <TextInput
        label='Your Parner Name'
        value={this.state.sname}
        onChangeText={text => this.setState({ sname: text})}
      />
      <Button icon="calculator" mode="contained" onPress={() => this.submitit()}>
          Calculate Your Love
      </Button>
      <DisplayLove data={this.state.result}/>
      </View>
     )
  }
}

export default App