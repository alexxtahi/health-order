import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icons from './Icons';
import ActusView from '../views/ActusView';
import HomeView from '../views/HomeView';
import ProfileView from '../views/ProfileView';
import SettingsView from '../views/SettingsView';
import { styles } from './Styles';
import { useTheme } from '@react-navigation/native';
import { HomeStack } from './StackNavigator';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
    // Propriétés
    const { colors } = useTheme();
    var style: any = styles();
    // Rendu du composant
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: colors.activeIcon,
            tabBarInactiveTintColor: colors.inactiveIcon,
            tabBarHideOnKeyboard: true,
            tabBarStyle: style.bottomTabs
        }}>
            <Tab.Screen name="Accueil" component={HomeStack} options={{
                tabBarIcon: ({ size, color }) => (<Icons framework={"Octicons"} name={"home"} color={color} size={size} />)
            }} />
            <Tab.Screen name="Actus" component={ActusView} options={{
                tabBarBadge: '99+',
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