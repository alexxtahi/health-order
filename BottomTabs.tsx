import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icons from './Icons';
import ActusView from './views/ActusView';
import HomeView from './views/HomeView';
import ProfileView from './views/ProfileView';
import SettingsView from './views/SettingsView';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "#16c2d5",
        }}>
            <Tab.Screen name="Accueil" component={HomeView} options={{
                tabBarIcon: ({ size, color }) => (<Icons framework={"Octicons"} name={"home"} color={color} size={size} />)
            }} />
            <Tab.Screen name="Actus" component={ActusView} options={{
                tabBarIcon: ({ size, color }) => (<Icons framework={"FontAwesome"} name={"newspaper-o"} color={color} size={size} />)
            }} />
            <Tab.Screen name="Profil" component={ProfileView} options={{
                tabBarIcon: ({ size, color }) => (<Icons framework={"Feather"} name={"user"} color={color} size={size} />)
            }} />
            <Tab.Screen name="Réglages" component={SettingsView} options={{
                tabBarIcon: ({ size, color }) => (<Icons framework={"Ionicons"} name={"settings-outline"} color={color} size={size} />)
            }} />
        </Tab.Navigator>
    );
}