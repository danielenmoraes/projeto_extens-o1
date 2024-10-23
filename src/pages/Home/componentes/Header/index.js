import React from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, } from 'react-native';

import{ Feather } from '@expo/vector-icons'
import Animated from 'react-native-reanimated';
const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header({name}) {
    return (
      <View style={styles.container}>
        
          <Animated.View style={styles.content}
            from={{ 
              translateY : -150,
              opacity : 0,}} 
            animate={{
              translateY : 0,
              opacity : 1, }}
            transition={{
              type: "timing",
              duration: 800,
              delay: 300
            }}
          >
          <Text style={styles.username}>{name}</Text>

          <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
            <Feather name="user" size={20} color="FFF"/>
          </TouchableOpacity>

          </Animated.View>
      </View>
    );
  }

   const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8000ff',
        paddingTop: statusBarHeight,
        flexDirection: 'row',
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44,
      },
      content : {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      username : {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold',
      },
      buttonUser : {
        width: 44,
        height: 44,
        backgroundColor: 'rgba(255,255,255, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 44 / 2,
      }
   }
)