import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer  } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'

import Home from './screens/home'
import Calc from './screens/calc'

export default function App() {

  const Tab = createBottomTabNavigator()
  const setBarIcon = (route, focused, color, size) => {
    let name
    if (route.name === 'Home') {
      name = focused? 'ios-home': 'ios-home-outline'
    } else {
      name = focused? 'ios-calculator': 'ios-calculator-outline'
    }

    return <Ionicons name={name} size={size} color={color}/>
  }

  return (
    <NavigationContainer style={styles.container}>
      <Tab.Navigator
      initialRouteName='Home'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => setBarIcon(route, focused, color, size),
        headerStyle: {backgroundColor: '#492d49'},
        headerTintColor: '#d1b68d',
        tabBarStyle: {backgroundColor: '#492d49', },
        tabBarActiveTintColor: '#d1b68d',
        tabBarInactiveTintColor: '#999'
      })}>
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Calc' component={Calc}/>
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
