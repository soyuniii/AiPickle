
import React from 'react';
import { TouchableOpacity, Image, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import SearchResultScreen from './src/screens/SearchResultScreen';
import LoadingScreen from './src/screens/LoadingScreen';
import SummaryScreen from './src/screens/SummaryScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
         screenOptions={{
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#F9FAFB',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerShadowVisible: false, // iOS 헤더 그림자 제거
          headerBackImage: () => (
            <Image source={require('./assets/images/back.png')} style={{ width: 9, height: 17, marginHorizontal: 13, }}/>),
          headerTintColor: '#000000',
          headerBackTitleStyle: {
            color: '#000000',
          },
        }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="SearchResult" component={SearchResultScreen} options={{headerBackTitle: '홈'}} />
        <Stack.Screen name="Loading" component={LoadingScreen} options={{ headerBackTitle: '홈'}}/>
        <Stack.Screen name="Summary" component={SummaryScreen} options={{ headerBackTitle: ''}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;