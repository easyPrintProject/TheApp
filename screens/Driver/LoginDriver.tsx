import React from 'react'
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { driverStack} from '../../types';

export default function LoginDriver({navigation }: StackScreenProps<driverStack>) {
    const GoToHome = () => {
        navigation.navigate("HomeDriver");
      };
    return (
        <View>
            <Text></Text>


        <Pressable
        onPress={() => GoToHome()} >
        <Text >    تسجيل الدخول    </Text>
      </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({})
