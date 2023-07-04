import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ImageBackground, Alert, Image, View, useWindowDimensions} from 'react-native';
import styled from 'styled-components/native'
import React, { useState } from 'react';
import Draggable from 'react-native-draggable';

export default function App(){

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/fon.png')} resizeMode="stretch" style={styles.image}/>
      <StatusBar style="auto" />
      <View style={styles.footer}>
        <Draggable style={styles.draggable} onShortPressRelease={() => alert('Bahhhxx')} onLongPress={() => Alert.alert('Предмет','Огонь')} onRelease={(e, wasDragging) =>
                                                                                                 console.log(`was dragging is ${wasDragging} ${Object.keys(e)}`)
                                                                                               }>
            <View style={styles.item} >
                <Image source={require('./assets/og.png')} resizeMode="stretch" style={styles.imgIt}/>
                <Text style={styles.text}>Value</Text>
            </View>
        </Draggable>
        <Draggable style={styles.draggable} x={useWindowDimensions().width/2-55} onShortPressRelease={() => alert('$$$')}>
            <View style={styles.item}>
                <Image source={require('./assets/gr.png')} resizeMode="stretch" style={styles.imgIt}/>
                <Text style={styles.text}>Value</Text>
            </View>
        </Draggable>
        <Draggable style={styles.draggable} x={useWindowDimensions().width-120} onShortPressRelease={() => alert('Win')}>
            <View style={styles.item}>
                <Image source={require('./assets/taz.png')} resizeMode="stretch" style={styles.imgIt}/>
                <Text style={styles.text}>Value</Text>
            </View>
        </Draggable>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#454567',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
      flexDirection: 'row',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: '#8BC34A',
      alignItems: 'center',
      justifyContent: 'center',
      height: 120,
      width: '100%'
    },
    image: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        bottom: 100
    },
    imgIt:{
        borderWidth: 1,
        borderColor: "thistle",
        borderRadius: 20,
        height:100,
        width:100,
        margin:10,
    },
    item:{
        backgroundColor: '#00000055',
        color: '#00000055',
        borderRadius: 20,
        height:100,
        width:100,
        margin:10,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
    },
    text: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        backgroundColor: '#00000055',
        },
    draggable: {
        height:100,
        width:100,
        margin:10,
        zIndex: 999,
        alignItems: 'center',
    },
});
