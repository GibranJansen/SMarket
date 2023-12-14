import { StyleSheet, View, Image, Text,  } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/home';
import Cart from '../pages/cart';
import Login from '../pages/login'
import Profile from '../pages/profile'

import { useCart } from '../context/cart';
import Favorites from '../pages/favorites';

const Tab = createBottomTabNavigator();



const Tabs = () =>{
    const { totalItems } = useCart()

    return(
        <Tab.Navigator 
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 10,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    borderRadius: 15,
                    height: 60,
                    ...styles.shadow,
                },
            }}
        >
            <Tab.Screen name="Home" component={Home} options={{   /* <<<<<PAGE HOME>>>>>  */
                tabBarIcon:({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image
                            source={require('../../assets/icons/home.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#fc953f' : '#748c94'
                            }}
                        />
                        <Text style={{color: focused ? '#fc953f' : '#748c94', fontSize: 12}}>INÍCIO</Text>
                    </View>
                ),
            }} />

            <Tab.Screen name="Cart" component={Cart} options={{  /* <<<<<PAGE CART>>>>>  */
                tabBarBadge: totalItems,
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image
                            source={require('../../assets/icons/cart.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#fc953f' : '#748c94'
                            }}
                        />
                        <Text style={{color: focused ? '#fc953f' : '#748c94', fontSize: 12}}>CARRINHO</Text>
                    </View>
                ),
            }} />

            <Tab.Screen name="Favoritos" component={Favorites} options={{  /* <<<<<PAGE CART>>>>>  */
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image
                            source={require('../../assets/icons/favorites.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#fc953f' : '#748c94'
                            }}
                        />
                        <Text style={{color: focused ? '#fc953f' : '#748c94', fontSize: 12}}>FAVORITOS</Text>
                    </View>
                ),
            }} />

            <Tab.Screen name="Perfil" component={Profile} options={{  /* <<<<<PAGE CART>>>>>  */
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image
                            source={require('../../assets/icons/profile.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#fc953f' : '#748c94'
                            }}
                        />
                        <Text style={{color: focused ? '#fc953f' : '#748c94', fontSize: 12}}>PERFIL</Text>
                    </View>
                ),
            }} />

            <Tab.Screen name="Chat" component={Cart} options={{  /* <<<<<PAGE CART>>>>>  */
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image
                            source={require('../../assets/icons/chat.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#fc953f' : '#748c94'
                            }}
                        />
                        <Text style={{color: focused ? '#fc953f' : '#748c94', fontSize: 12}}>CHAT</Text>
                    </View>
                ),
            }} />

        </Tab.Navigator>
    )
    
}



const styles = StyleSheet.create({
    shadow:{
        shadowColor: '#7F5D70',
        shadowOffset: {
            width: 30,
            height: 20,
        },
        shadowOpacity: 0.40,
        shadowRadius: 5,
        elevetion: 5,
    },
})

export default Tabs;