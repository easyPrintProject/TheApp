 import React, { FunctionComponent } from 'react'; // importing FunctionComponent
 import { View, Image, Text} from 'react-native';

type CardProps = {
  title: string,
  paragraph?: string
}

export const Card: FunctionComponent<CardProps> = ({ title, paragraph }) => {
  return(<View style={{ height: 130, borderStyle: 'solid', borderWidth: 0.5, margin: 9 }}>
    <Image source={require('../assets/images/printerIcon.jpg')} style={{ height: 90, width: 90, borderRadius: 40, borderWidth: 2, marginTop: "5%", marginHorizontal: 6 }} />
    <Text style={{ flex: 1, backgroundColor: 'white', paddingTop: -100, textAlign: 'center', alignItems: 'center', justifyContent: 'center', marginLeft: 115, fontSize: 20, marginTop: -60 }}>{title}</Text>
  </View>
  )
  }