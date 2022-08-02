import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "native-base";
import { Input, NativeBaseProvider, Button, Icon, Box, Image, AspectRation } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import {useNavigation } from '@react-navigation/native';

function Login(){
    const navigation = useNavigation();
    return(
        <View style= {styles.container}>
            <View style= {styles.Middle}>
                <Text style= {styles.LoginText}>Login</Text>
            </View>
            <View style ={styles.buttonStyle}>
                <View style= {styles.emailInput}>
                    <Input
                        InputLeftElement={
                            <Icon
                            as={<FontAwesome5 name="user-secret" />}
                            size= "sm"
                            m={2}
                            _light={{
                                color:"black",
                            }}
                            _dark={{
                                color:"gray.300"
                            }}
                            />   
                        }
                        variant= "outline"
                        placeholder="Username or Email"
                        _light={{
                            
                        }}

                        />
                </View>
            </View>
        </View>
    )
}

