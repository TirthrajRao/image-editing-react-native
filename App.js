import React, {Component} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './screens/dashboard'
import SavedImage from './screens/savedImage'
import ShowImage from './screens/showImage'
import FilterImage from './screens/filterImaage'
import CollageImage from './screens/collageImage'
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="Dashboard">
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }}/>
        <Stack.Screen name="Saved Image" component={SavedImage} />
        <Stack.Screen name="ShowImage" component={ShowImage} options={{ headerShown: false }}/>
        <Stack.Screen name="FilterImage" component={FilterImage} options={{ headerShown: false }}/>
        <Stack.Screen name="Collage" component={CollageImage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
