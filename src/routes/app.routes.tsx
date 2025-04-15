// libs
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const { Navigator, Screen } = createNativeStackNavigator();

// screens
import { Home } from 'screens/Home';
import { Register } from 'screens/Register';
import { RegisterConfirm } from 'screens/RegisterConfirm';
import { Statistics } from 'screens/Statistics';

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='home' component={Home} />
      <Screen name='statistics' component={Statistics} />
      <Screen name='register' component={Register} />
      <Screen name='registerConfirm' component={RegisterConfirm} />
    </Navigator>
  )
}