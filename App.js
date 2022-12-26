import 'react-native-gesture-handler';
import HomeScreen from './src/pages/Home/home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'
      screenOptions={{
        headerStyle: {
          backgroundColor: "#6B38DE",
        },
        headerTitleStyle: {
          color: "#FFF",
          fontWeight: "700",
          fontSize: 24,
        },
      }}>
        <Stack.Screen 
        name="Home"
        component={HomeScreen}
        options={{
          title: "Início",
          headerShadowVisible: false,
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
    </>
  )
}
