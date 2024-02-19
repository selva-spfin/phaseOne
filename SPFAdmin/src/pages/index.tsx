import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'services/store';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './auth/Login';
import TabLayout from './app/Layout';
import { images } from '../../constants/images';
import { colors } from '../../constants/colors';
import LeadDetails from './app/LeadDetails';

const StackAuth = createStackNavigator();

const AuthStack: React.FC = () => {
    return (
        <StackAuth.Navigator screenOptions={{headerShown:false}}>
            <StackAuth.Screen name="Login" component={Login} />
        </StackAuth.Navigator>
    );
};

const StackApp = createStackNavigator();

const AppStack: React.FC = () => {
    return (
        <StackApp.Navigator screenOptions={{headerShown:false}}>
            <StackApp.Screen name="Main" component={TabLayout} />
            <StackApp.Screen name="leaddetails" component={LeadDetails} />
        </StackApp.Navigator>
    );
};

const Page: React.FC = () => {
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

    return (
        <NavigationContainer>
            {isAuthenticated ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    );
};

export default Page;
