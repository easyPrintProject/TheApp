import * as React from 'react';
import { StyleSheet , SafeAreaView} from 'react-native';
import { Text, View } from '../components/Themed';

export default function OrderScreen() {
  return (
      <SafeAreaView>
    <View style={styles.container}>
      <Text style={styles.title}>صفحة الطلب </Text>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color:"red",
    fontSize: 20,
    fontWeight: 'bold',
  }
});
