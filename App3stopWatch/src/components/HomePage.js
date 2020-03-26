import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import HomePageStyle from './HomePageStyles';

const HomePage =  () => {
    return (
        <View style={{flex:1}}> 
            <View style={{flex:1}}>
                <Text style={HomePageStyle.welcomeHeader}>Good Morning!!</Text>
            </View>
            <View style={{flex:2}}>
                <TouchableOpacity 
                onPress={()=>(console.log('Button Pressed'))}
                style={HomePageStyle.buttonAction}>
                    <Text style={HomePageStyle.buttonText}>Start</Text>    
                 </TouchableOpacity>
                
            </View>
        </View>
    )
};

export default HomePage;