import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather'
import IconEvil from 'react-native-vector-icons/EvilIcons'

const CardGrid = (props) => {
    return (
        <View style={[styles.gridCard, { backgroundColor: props.color }]}>
            <View style={{marginRight: 0,}}>
                {props.isEvil === true ? <IconEvil 
                color='white'
                size={props.size}
                name={props.iconName}
                /> : <IconFeather
                    color='white'
                    size={props.size}
                    name={props.iconName} />}
            </View>
            <View style={{width: 5}}></View>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 12, }}>
                {props.title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({

    gridCard: {
        paddingHorizontal: 20,
        width: 105,
        height: 60,
        margin: 5,
        borderRadius: 5,
        backgroundColor: '#e44468',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default CardGrid;
