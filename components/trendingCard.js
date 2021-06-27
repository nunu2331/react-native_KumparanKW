import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

const TrendingCard = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{ height: 15, width: 5, backgroundColor: 'red', marginRight: 5, alignSelf: 'center' }}></View>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>{props.title}</Text>
            </View>

            <View style={styles.beritaContainer}>
                <View styl={styles.lefBerita}>
                    <View style={{flexDirection: 'row', flex: 1}}>
                    <Text style={styles.textBerita}>
                        Pensiun dari Iron Man, Mas Mark mulai merintis sebagai karyawan Facebook
                    </Text></View>
                    <View style={styles.userBerita}>
                        <Image
                            style={styles.userImage}
                            source={require('../src/assets/ganteng.jpg')} />
                        <Text style={{ fontSize: 12, color: '#97a2ad', marginLeft: 5, }}>penulisHandal</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, justifyContent: 'space-between' }}>

                        <View style={styles.userBerita}>
                            <Icon
                                color='#97a2ad'
                                name='heart'
                                size={18} />
                            <Text style={{ color: '#97a2ad', marginLeft: 3, fontSize: 11, alignSelf: 'center', marginRight: 15, }}>99</Text>
                            <Icon
                                color='#97a2ad'
                                name='comment'
                                size={18} />
                            <Text style={{ color: '#97a2ad', marginLeft: 3, fontSize: 11, alignSelf: 'center', marginRight: 15, }}>99</Text>
                            <Text style={{ color: '#97a2ad', fontSize: 11, alignSelf: 'center', marginRight: 15, }}>5 menit</Text>
                        </View>
                        <Icon
                            style={{}}
                            color='#97a2ad'
                            name='share-google'
                            size={18} />
                    </View>
                </View>
                <View style={styles.rightBerita}>
                    <Image 
                    style={{width: 100, height: 100, borderRadius:5}}
                    source={require('../src/assets/mark.jpg')}/>
                </View>
            </View>
            <View style={styles.beritaContainer}>
                <View styl={styles.lefBerita}>
                    <View style={{flexDirection: 'row', flex: 1}}>
                    <Text style={styles.textBerita}>
                        Pensiun dari Iron Man, Mas Mark mulai merintis sebagai karyawan Facebook
                    </Text></View>
                    <View style={styles.userBerita}>
                        <Image
                            style={styles.userImage}
                            source={require('../src/assets/ganteng.jpg')} />
                        <Text style={{ fontSize: 12, color: '#97a2ad', marginLeft: 5, }}>penulisHandal</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, justifyContent: 'space-between' }}>

                        <View style={styles.userBerita}>
                            <Icon
                                color='#97a2ad'
                                name='heart'
                                size={18} />
                            <Text style={{ color: '#97a2ad', marginLeft: 3, fontSize: 11, alignSelf: 'center', marginRight: 15, }}>99</Text>
                            <Icon
                                color='#97a2ad'
                                name='comment'
                                size={18} />
                            <Text style={{ color: '#97a2ad', marginLeft: 3, fontSize: 11, alignSelf: 'center', marginRight: 15, }}>99</Text>
                            <Text style={{ color: '#97a2ad', fontSize: 11, alignSelf: 'center', marginRight: 15, }}>5 menit</Text>
                        </View>
                        <Icon
                            style={{}}
                            color='#97a2ad'
                            name='share-google'
                            size={18} />
                    </View>
                </View>
                <View style={styles.rightBerita}>
                    <Image 
                    style={{width: 100, height: 100, borderRadius:5}}
                    source={require('../src/assets/mark.jpg')}/>
                </View>
            </View>
        </View>
    )
}

export default TrendingCard;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#051522',

    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        // paddingVertical: 5,
        marginHorizontal: 15,
        borderBottomWidth: 1,
        borderColor: '#052333',
        height: 55,
        // borderWidth: 1, 
        // borderColor: 'white'
    },
    beritaContainer: {
        // borderWidth: 1,
        // borderColor: 'white',
        // height: 150,
        borderBottomWidth: 1,
        borderColor: '#052333',
        paddingVertical: 10,
        marginHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    userBerita: {
        // borderWidth: 1,
        // borderColor: 'white',
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: 5,
    },
    userImage: {
        borderRadius: 50,
        width: 20,
        height: 20,
    },
    imgBerita: {
        borderRadius: 10,
        marginTop: 5,
        height: 160,
        width: '100%',
        resizeMode: 'contain',
    },
    textBerita: {
        marginBottom: 15,
        marginLeft: 5,
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
        // textAlign: 'left',
        // flexShrink: 1,
        // flexWrap: 'wrap',
        flex: 1,
    },
    lefBerita:{
        flex: 1
    },
    rightBerita: {
        // borderWidth: 1,
        borderColor: 'white',
        // justifyContent: 'center'
    }
})