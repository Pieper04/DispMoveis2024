import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Button, Text, View } from 'react-native';

function DetalheScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Oi eu sou detalhes!</Text>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home</Text>
      <Button
        title="Ir para detalhes"
        onPress={() => navigation.navigate('Detalhes')}
      />
    </View>
  );
}

function ConfigScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tela de configuração</Text>
      <Button
        title="Ir para detalhes"
        onPress={() => navigation.navigate('Detalhes')}
      />
    </View>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Detalhes" component={DetalheScreen} />
    </HomeStack.Navigator>
  );
}

const ConfigStack = createNativeStackNavigator();

function ConfigStackScreen() {
  return (
    <ConfigStack.Navigator>
      <ConfigStack.Screen name="Configuração" component={ConfigScreen} />
      <ConfigStack.Screen name="Detalhes" component={DetalheScreen} />
    </ConfigStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="HomeStack" component={HomeStackScreen} />
        <Tab.Screen name="ConfigStack" component={ConfigStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}