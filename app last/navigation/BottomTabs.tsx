import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // یا از react-native-vector-icons استفاده کن
import AccountScreen from '../screens/AccountScreen';
import SearchScreen from '../screens/SearchScreen';
import WriterScreen from '../screens/WriterScreen';
import LibraryScreen from '../screens/LibraryScreen';
import CafeScreen from '../screens/CafeScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: '#6C63FF',
                tabBarInactiveTintColor: '#999',
                tabBarStyle: {
                    backgroundColor: '#fff',
                    borderTopWidth: 0,
                    elevation: 4,
                },
                tabBarIcon: ({ color, size }) => {
                    let iconName: keyof typeof Ionicons.glyphMap = 'home';

                    switch (route.name) {
                        case 'Account':
                            iconName = 'person';
                            break;
                        case 'Search':
                            iconName = 'search';
                            break;
                        case 'Writer':
                            iconName = 'create';
                            break;
                        case 'Library':
                            iconName = 'book';
                            break;
                        case 'Cafe':
                            iconName = 'cafe';
                            break;
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen name="Cafe" component={CafeScreen} options={{ title: 'کافه' }} />
            <Tab.Screen name="Library" component={LibraryScreen} options={{ title: 'کتابخانه' }} />
            <Tab.Screen name="Writer" component={WriterScreen} options={{ title: 'نگارنده' }} />
            <Tab.Screen name="Search" component={SearchScreen} options={{ title: 'جستجو' }} />
            <Tab.Screen name="Account" component={AccountScreen} options={{ title: 'حساب کاربری' }} />
        </Tab.Navigator>
    );
}