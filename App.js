import 'react-native-gesture-handler';
import HomeScreen from './src/pages/Home/home';
import Motivacionais from './components/ItemsComponents/MotivacionalComponents/Motivacionais';
import Reflexoes from './components/ItemsComponents/ReflexoesComponents/Reflexoes';
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
        }
      }}>
        <Stack.Screen 
        name="Olá, bem vindo (a)!" 
        component={HomeScreen}
        options={{
          headerTitleStyle: {
            color: "#FFF",
            fontWeight: "700",
            fontSize: 24,
          },
          headerShadowVisible: false,
        }}/>
        <Stack.Screen 
        name="Frases Motivacionais" 
        component={Motivacionais}
        options={{
          headerTitleStyle: {
            color: "#FFF",
            fontWeight: "700",
            fontSize: 24,
          },
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          headerTintColor: "#FFF",
        }}/>
        <Stack.Screen 
        name="Reflexões" 
        component={Reflexoes}
        options={{
          headerTitleStyle: {
            color: "#FFF",
            fontWeight: "700",
            fontSize: 24,
          },
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          headerTintColor: "#FFF",
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
    </>
  )
}
