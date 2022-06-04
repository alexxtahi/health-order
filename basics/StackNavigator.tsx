import { createStackNavigator } from '@react-navigation/stack';
import HomeView from '../views/HomeView';
import NotifsView from '../views/NotifsView';

const Stack = createStackNavigator();

export function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="AccueilStack" component={HomeView} />
      <Stack.Screen name="Notifications" component={NotifsView} />
    </Stack.Navigator>
  );
}