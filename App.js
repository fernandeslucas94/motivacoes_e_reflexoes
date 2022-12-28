import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import HomeScreen from './src/pages/Home/home';
import DisplayContent from './screens/DisplayContent';

// Content Screens
import MotivacoesContent from './screens/Motivacoes/Motivacoes';
import AutoestimaContent from './screens/Autoestima/Autoestima';
import ReflexoesContent from './screens/Reflexoes/Reflexoes';
import PositividadeContent from './screens/Positividade/Positividade';

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
        headerTintColor: "#FFF"
      }}>
        <Stack.Screen 
        name="Home"
        component={HomeScreen}
        options={{
          title: "Início",
          headerShadowVisible: false,
        }}/>
        <Stack.Screen 
        name="MotivacoesContent"
        component={MotivacoesContent}
        options={{
          headerTitleAlign: 'center',
          title: "Conteúdo",
          headerShadowVisible: false,
        }}/>
        <Stack.Screen 
        name="AutoestimaContent"
        component={AutoestimaContent}
        options={{
          headerTitleAlign: 'center',
          title: "Conteúdo",
          headerShadowVisible: false,
        }}/>
        <Stack.Screen 
        name="ReflexoesContent"
        component={ReflexoesContent}
        options={{
          headerTitleAlign: 'center',
          title: "Conteúdo",
          headerShadowVisible: false,
        }}/>
        <Stack.Screen 
        name="PositividadeContent"
        component={PositividadeContent}
        options={{
          headerTitleAlign: 'center',
          title: "Conteúdo",
          headerShadowVisible: false,
        }}/>
        <Stack.Screen 
        name="DisplayContent"
        component={DisplayContent}
        options={{
          headerTitleAlign: 'center',
          title: "Conteúdo",
          headerShadowVisible: false,
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
    </>
  )
}
