import React from 'react';
import { Text, View, Button, Vibration, Platform } from 'react-native';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';


export default class Notification extends React.Component {
  state = {
    expoPushToken: '',
    notification: {},
  };

  registerForPushNotificationsAsync = async () => {
    if (Constants.isDevice) {
      const { status: existingStatus }: any = await Permissions.getAsync(Permissions.NOTIFICATIONS);
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const status = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('يرجى تفعيل الإشعارات');
        return;
      }
      let token = await Notifications.getExpoPushTokenAsync();
      console.log(token);
      this.setState({ expoPushToken: token });
    } else {
      alert('Must use physical device for Push Notifications');
    }

    if (Platform.OS === 'android') {
      Notifications.createChannelAndroidAsync('default', {
        name: 'default',
        sound: true,
        priority: 'max',
        vibrate: [0, 250, 250, 250],
      });
    }
  };

  componentDidMount() {
    this.registerForPushNotificationsAsync();

    // Handle notifications that are received or selected while the app
    // is open. 
    let notificationSubscription = Notifications.addListener(this.handleNotification);
  }

   handleNotification = (notification: any) => {
    Vibration.vibrate();
    console.log(notification);
    this.setState({ notification: notification });
  };

  // حسب التوكن يرسل الاشعارات من التولز اللي توفرها اكسبو ع النت https://expo.io/dashboard/notifications

  sendPushNotification = async () => {  // يرسل الاشعارات من البرنامج
    const message = {
      to: this.state.expoPushToken,
      sound: 'default',
      title: 'العنوان الرئيسي',
      body: 'نص الإشعار',
      data: { data: 'goes here' },
      _displayInForeground: true,
    };
    const response = await fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Accept-encoding': 'gzip, deflate',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        </View>
        <Button title={'Send Notification'} onPress={() => this.sendPushNotification()} />
      </View>
    );
  }
}
