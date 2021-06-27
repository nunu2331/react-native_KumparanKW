import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../screen/dashboard/dashboard';
import Search from '../screen/search/search';
import Trending from '../screen/trending/trending';
import Kumparanplus from '../screen/kumparanplus/kumparanplus';
import Menu from '../screen/menu/menu';
import Notifikasi from '../screen/notifikasi/notifikasi';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import Profile from '../screen/profile';
// import Keranjang from '../screen/cart';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: { borderTopWidth: 0 },
        keyboardHidesTabBar: true,
        activeBackgroundColor: '#051522',
        inactiveBackgroundColor: '#051522'

      }} >
      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Image
              style={[styles.bottomTabIcon, { tintColor: focused ? 'mediumturquoise' : 'white' }]}
              source={focused == true ? require('../assets/home.png') : require('../assets/home.png')
              } />
          ),
          tabBarLabel: ''
        }}
      />
      <Tab.Screen
        name="Trending"
        component={Trending}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Image
              style={[styles.bottomTabIcon, { tintColor: focused ? 'mediumturquoise' : 'white' }]}
              source={focused == true ? require('../assets/clock.png') : require('../assets/clock.png')
              } />
          ),
          tabBarLabel: ''
        }}
      />
      <Tab.Screen
        name="Kumparanplus"
        component={Kumparanplus}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Image
              style={[styles.bottomTabIcon, { tintColor: focused ? 'mediumturquoise' : 'white' }]}
              source={focused == true ? require('../assets/plus.png') : require('../assets/plus.png')
              } />
          ),
          tabBarLabel: ''
        }}
      />
      <Tab.Screen
        name="Notifikasi"
        component={Notifikasi}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Image
              style={[styles.bottomTabIcon, { tintColor: focused ? 'mediumturquoise' : 'white' }]}
              source={focused == true ? require('../assets/notif.png') : require('../assets/notif.png')
              } />
          ),
          tabBarLabel: ''
        }}
      />
      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Image
              style={[styles.bottomTabIcon, { tintColor: focused ? 'mediumturquoise' : 'white' }]}
              source={focused == true ? require('../assets/menu.png') : require('../assets/menu.png')
              } />
          ),
          tabBarLabel: ''
        }}
      />
      {/* <Tab.Screen
        name="Cart"
        component={Keranjang}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Image
              style={styles.bottomTabIcon}
              source={focused==true?require('../assets/cartOn.png'):require('../assets/cartOff.png')
              } />
          ),
          tabBarLabel: 'Keranjang'
        }}
      /> */}
    </Tab.Navigator>
  );
}

const MainStackNavigator = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="DashboardStack" component={BottomTabNavigator} options={{
        headerShown: false
      }} />
      <Stack.Screen name="SearchScreen" component={Search} options={{
        headerShown: false
      }}/>
    </Stack.Navigator>
  )
}

export default MainStackNavigator

const styles = StyleSheet.create({

  bottomTabIcon: {
    display: 'flex',
    width: 24,
    height: 24,
    padding: 5,
    marginVertical: 5,
    marginTop: 25,
    marginBottom: 10,
  },
});