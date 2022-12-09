import 'react-native-gesture-handler';
import HomeScreen from './src/pages/Home/home';
import Motivacionais from './components/ItemsComponents/MotivacionalComponents/Motivacionais';
import Reflexoes from './components/ItemsComponents/ReflexoesComponents/Reflexoes';
import DiaDia from './components/ItemsComponents/MotivacionalComponents/DiaDia/DiaDiaItems';
import Trabalho from './components/ItemsComponents/MotivacionalComponents/Trabalho/TrabalhoItems';
import Esporte from './components/ItemsComponents/MotivacionalComponents/Esporte/EsporteItems';
import Estudos from './components/ItemsComponents/MotivacionalComponents/Estudos/EstudosItems';
import AnimoDisposicao from './components/ItemsComponents/MotivacionalComponents/AnimoDisposicao/AnimoDisposicaoItems';
import DiaDiaContent from './components/ItemsComponents/MotivacionalComponents/DiaDia/DiaDiaContent';
import TrabalhoContent from './components/ItemsComponents/MotivacionalComponents/Trabalho/TrabalhoContent';
import EsporteContent from './components/ItemsComponents/MotivacionalComponents/Esporte/EsporteContent';
import EstudosContent from './components/ItemsComponents/MotivacionalComponents/Estudos/EstudosContent';
import AnimoContent from './components/ItemsComponents/MotivacionalComponents/AnimoDisposicao/AnimoDisposicaoContent';
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
        name="Home"
        component={HomeScreen}
        options={{
          headerTitleStyle: {
            color: "#FFF",
            fontWeight: "700",
            fontSize: 24,
          },
          title: "Olá, seja bem vindo (a)!",
          headerShadowVisible: false,
          headerTintColor: "#FFF"
        }}/>
        <Stack.Screen 
        name="Motivacionais" 
        component={Motivacionais}
        options={{
          headerTitleStyle: {
            color: "#FFF",
            fontWeight: "700",
            fontSize: 24,
          },
          title: "Frases Motivacionais",
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
        <Stack.Screen 
        name="Dia a Dia"
        component={DiaDia}d
        options={{
          headerTitleStyle: {
            color: "#FFF",
            fontWeight: "700",
            fontSize: 24,
          },
          title: "Frases Motivacionais",
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          headerTintColor: "#FFF",
        }}/>
        <Stack.Screen 
        name="Trabalho" 
        component={Trabalho}
        options={{
          headerTitleStyle: {
            color: "#FFF",
            fontWeight: "700",
            fontSize: 24,
          },
          title: "Frases Motivacionais",
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          headerTintColor: "#FFF",
        }}/>
        <Stack.Screen 
        name="Esporte" 
        component={Esporte}
        options={{
          headerTitleStyle: {
            color: "#FFF",
            fontWeight: "700",
            fontSize: 24,
          },
          title: "Frases Motivacionais",
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          headerTintColor: "#FFF",
        }}/>
        <Stack.Screen 
        name="Estudos" 
        component={Estudos}
        options={{
          headerTitleStyle: {
            color: "#FFF",
            fontWeight: "700",
            fontSize: 24,
          },
          title: "Frases Motivacionais",
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          headerTintColor: "#FFF",
        }}/>
        <Stack.Screen 
        name="Animo e Disposição" 
        component={AnimoDisposicao}
        options={{
          headerTitleStyle: {
            color: "#FFF",
            fontWeight: "700",
            fontSize: 24,
          },
          title: "Frases Motivacionais",
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          headerTintColor: "#FFF",
        }}/>
         <Stack.Screen 
        name="DiaDiaContent" 
        component={DiaDiaContent}
        options={{
          headerTitleStyle: {
            color: "#FFF",
            fontWeight: "700",
            fontSize: 24,
          },
          title: "Frases Motivacionais",
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          headerTintColor: "#FFF",
        }}/>
        <Stack.Screen 
        name="TrabalhoContent" 
        component={TrabalhoContent}
        options={{
          headerTitleStyle: {
            color: "#FFF",
            fontWeight: "700",
            fontSize: 24,
          },
          title: "Frases Motivacionais",
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          headerTintColor: "#FFF",
        }}/>
        <Stack.Screen 
        name="EsporteContent" 
        component={EsporteContent}
        options={{
          headerTitleStyle: {
            color: "#FFF",
            fontWeight: "700",
            fontSize: 24,
          },
          title: "Frases Motivacionais",
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          headerTintColor: "#FFF",
        }}/>
        <Stack.Screen 
        name="EstudosContent" 
        component={EstudosContent}
        options={{
          headerTitleStyle: {
            color: "#FFF",
            fontWeight: "700",
            fontSize: 24,
          },
          title: "Frases Motivacionais",
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          headerTintColor: "#FFF",
        }}/>
        <Stack.Screen 
        name="AnimoContent" 
        component={AnimoContent}
        options={{
          headerTitleStyle: {
            color: "#FFF",
            fontWeight: "700",
            fontSize: 24,
          },
          title: "Frases Motivacionais",
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          headerTintColor: "#FFF",
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
    </>
  )
}
