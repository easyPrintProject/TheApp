import React, { Component } from 'react';
import { Text, View, Button, TouchableOpacity, TextInput} from 'react-native';

class Option extends Component<any, any>  {
  constructor(props: any) {
    super(props);
    this.state = {
      activeOption: this.props.options[0],
    };
  }
  updateActiveOption = (activeOption: any) => {
    this.setState({
      activeOption,
    });
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginTop:50
        }}
      >
        {this.props.options.map((option: React.ReactNode) => (
          <TouchableOpacity
            style={{
              height: 30,
              margin: 3,
              borderRadius: 5,
              backgroundColor: this.state.activeOption === option ? '#8098db' : 'white',
              borderWidth: 1,
              borderColor: this.state.activeOption === option ? '#8098db' : '#8098db',
            }}
 
            onPress={() => {
              this.props.onChange(option);
              this.updateActiveOption(option);
            }}
          >
  
            <Text
              style={{
                textAlign: 'center',
                width: 150,
                height: 50,
                color: 'black',
              }}
            >
          
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

export default class PrintingOption extends Component {
  render() {
    return (
            <View>
            <View><Text style={{ marginTop:50, marginBottom:-30, textAlign: 'right' }}>حجم الورق</Text>
      < Option 
        options={['A5', 'A4', 'A3', 'A2', 'A1', 'A0']}
        onChange={(option: any) => {
          console.log(option);
        }}/></View>

            <View><Text style={{ marginTop:120, marginBottom:-30, textAlign: 'right' }}> نوع الورق </Text>
        < Option
        options={['عادي', 'مقوى', 'لماع', 'معاد استخدامه']}
        onChange={(option: any) => {
          console.log(option);
        }}/></View>

            <View><Text style={{ marginTop:90, marginBottom:-30, textAlign: 'right' }}>لون الطباعة</Text>
        < Option
        options={['أسود وأبيض', 'ملون' ]}
        onChange={(option: any) => {
          console.log(option);
        }}/></View>

            <View><Text style={  { marginTop:50, marginBottom:-30,  textAlign: 'right' }}>نوع الطباعة</Text>

< Option
        options={['وجه', 'وجهين' ]}
        onChange={(option: any) => {
          console.log(option);
        }}/></View>
<View><Text style={  { marginTop:60, marginBottom:-30, textAlign: 'right' }}>تحديد الصفحات</Text>
<View style= {{  flexDirection: 'row', justifyContent: 'center'
}}>
  <TextInput style={{ height:45, width:45, borderColor:'#8098db', borderWidth:0.5,  borderRadius: 5,  margin:3,marginTop: 30, 
 } }/>

  <TextInput style={{ height:45, width:45, borderColor:'#8098db', borderWidth:0.5 , borderRadius: 5, margin: 3, marginBottom: 9, marginTop: 30, 
 }}/></View>
</View>
 </View>
   // button goes here to deliver time page *********
    );
  }
}             