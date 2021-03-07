import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  Pressable,
} from 'react-native';




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
          marginTop: 50,
        }}>
        {this.props.options.map((option: React.ReactNode) => (
          <TouchableOpacity
            style={{
              height: 30,
              margin: 3,
              borderRadius: 5,
              backgroundColor:
                this.state.activeOption === option ? 'grey' : 'white',
              borderWidth: 1,
              borderColor: this.state.activeOption === option ? 'grey' : 'grey',
            }}
            onPress={() => {
              this.props.onChange(option);
              this.updateActiveOption(option);
            }}>
            <Text
              style={{
                textAlign: 'center',
                width: 150,
                height: 50,
                color: 'black',
              }}>
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

export default class DeliveryTime extends Component {
  render() {
    return (
      <View>
        <View>
          <Text
            style={{ marginTop: 50, marginBottom: -10, textAlign: 'center' }}>
            اختيار وقت التوصيل
          </Text>
          <Option
            options={[
              '1-11 مساءاً',
              '10-8 صباحاً',
              '7-5 مساءاً',
              '4-2 مساءاً',
              '10-8 مساءاً',
            ]}
            onChange={(option: any) => {
              console.log(option);
            }}
          />
        </View>
        <Pressable>
             <Text>المتابعة للدفع</Text>
           </Pressable>
      </View> 
             //button goes to purches ************

    );
  }
}
