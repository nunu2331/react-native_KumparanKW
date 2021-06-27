import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Alert, onPress, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import Icon1 from 'react-native-vector-icons/MaterialIcons'
import Icon2 from 'react-native-vector-icons/Feather'
import Feed from '../../../components/feed';

import SearchBox from '../../../components/SearchBox';
import CardGrid from '../../../components/cardGrid';
import TrendingCard from '../../../components/trendingCard';
import Search from '../search/search';
import { useNavigation } from '@react-navigation/native';



// var focused = Boolean

const Dashboard = () => {

  const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor="#051522" />
            <View style={styles.header}>
                <View style={styles.logoWrapper}>
                    <Image
                        style={styles.logoheader}
                        source={require('../../assets/Ulogo.png')} />
                </View>
                <TouchableOpacity 
                onPress={()=>navigation.navigate('SearchScreen')}
                style={styles.searchContainer}>
                    <Icon
                        size={22}
                        color='gray'
                        name='search' />
                    <Text style={{ color: 'gray', marginLeft: 20 }}>Cari di sini...</Text>

                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={{
                    marginBottom: 1,
                    backgroundColor: '#051522',
                }}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={styles.category}>
                            <View style={styles.textWrapper}>
                                <Text style={[styles.textCategory,]}>
                                    For You
                                </Text>
                                {/* <View style={styles.borderbot}>

                        </View> */}
                            </View>
                            <View style={styles.textWrapper}>
                                <Text style={[styles.textCategory,]}>
                                    Tekno & Sains
                                </Text>
                            </View>
                            <View style={styles.textWrapper}>
                                <Text style={styles.textCategory}>
                                    Food & Travel
                                </Text>
                            </View>
                            <View style={styles.textWrapper}>
                                <Text style={styles.textCategory}>
                                    News
                                </Text>
                            </View>
                            <View style={styles.textWrapper}>
                                <Text style={styles.textCategory}>
                                    Entertainment
                                </Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>

                <View style={styles.detailCategory}>
                    <ScrollView horizontal={true}>
                        <View style={styles.cardBerita}>
                            <Image
                                source={require('../../assets/melon.jpg')}
                                style={styles.imgBerita} />
                            <Text style={styles.textBerita}>
                                Sudah bukan berbisnis Melon lagi, sekarang Mas Melon berjualan roket
                            </Text>
                            <View style={styles.userBerita}>
                                <Image
                                    style={styles.userImage}
                                    source={require('../../assets/ganteng.jpg')} />
                                <Text style={{ fontSize: 12, color: '#97a2ad', marginLeft: 5 }}>penulisHandal</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, justifyContent: 'space-between'}}>

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
                                    style={{ }}
                                    color='#97a2ad'
                                    name='share-google'
                                    size={18} />
                            </View>
                        </View>
                        <View style={styles.cardBerita}>
                            <Image
                                source={require('../../assets/mark.jpg')}
                                style={styles.imgBerita} />
                            <Text style={styles.textBerita}>
                                Pensiun dari Iron Man, Mas Mark mulai merintis sebagai karyawan Facebook
                            </Text>
                            <View style={styles.userBerita}>
                                <Image
                                    style={styles.userImage}
                                    source={require('../../assets/ganteng.jpg')} />
                                <Text style={{ fontSize: 12, color: '#97a2ad', marginLeft: 5 }}>penulisHandal</Text>
                            </View>
                            
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, justifyContent: 'space-between'}}>

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
                                    style={{ }}
                                    color='#97a2ad'
                                    name='share-google'
                                    size={18} />
                            </View>
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.gridContainer}>
                    <CardGrid
                        color='#e74269'
                        size={20}
                        iconName='trending-up'
                        title='Trending' />
                    <CardGrid
                        color='#36b6b7'
                        size={20}
                        iconName='plus'
                        title='Kumpalan+' />
                    <CardGrid
                        color='#4ba3dc'
                        size={20}
                        iconName='edit-3'
                        title='Opini & Cerita' />
                    <CardGrid
                        color='#186fab'
                        size={20}
                        iconName='camera'
                        title='Galeri Foto' />
                    <CardGrid
                        color='#f18c3c'
                        size={20}
                        iconName='video'
                        title='Video' />
                    <CardGrid
                        color='#dd1641'
                        size={20}
                        iconName='thermometer'
                        title='Pusat Informasi Vaksin' />
                    {/* <View style={styles.gridCard}>
                        <View style={{ padding: 5, borderRadius: 50, borderWidth: 1, borderColor: 'white', marginRight: 5 }}>
                            <Icon2
                                color='white'
                                style={styles.gridIcon}
                                size={14}
                                name='trending-up' />
                        </View>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 12, }}>
                            Trending
                        </Text>
                    </View>
                    <View style={styles.gridCard2}>

                    </View>
                    <View style={styles.gridCard3}>

                    </View>
                    <View style={styles.gridCard4}>

                    </View>
                    <View style={styles.gridCard5}>

                    </View>
                    <View style={styles.gridCard6}>

                    </View> */}
                </View>
                <TrendingCard title='Trending'/>
            </ScrollView>
        </View>
    )
}

export default Dashboard;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#062333',
        display: 'flex',
        flex: 1,
    },
    header: {
        alignItems: 'center',
        flexDirection: 'row',

        // borderBottomWidth: 1,
        marginBottom: 1,
        backgroundColor: '#051522'
    },
    logoWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 50,
        marginLeft: 10,
        // borderWidth: 1,
        // borderColor: 'white'
    },
    logoheader: {
        // position: 'absolute'
        height: 75,
        width: 75,
    },
    category: {
        flexDirection: 'row',
        // borderBottomWidth: 1,
        borderColor: '#052333',
        height: 55,
        // marginVertical: 5,
        alignItems: 'center',
        marginLeft: 5,
        // flex: 1
    },
    textCategory: {
        color: 'white',
        fontWeight: 'bold',
    },
    textWrapper: {
        // borderBottomWidth: 2,
        // borderColor: 'white',
        marginLeft: 15,
        height: 50,
        justifyContent: 'center',

    },
    borderbot: {
        marginTop: 20,
        height: 2,
        width: 40,
        backgroundColor: 'white',
    },
    detailCategory: {
        height: 320,
        // borderWidth: 1,
        // borderColor: 'white',
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#051522',

        marginBottom: 7,
    },
    cardBerita: {
        height: 290,
        width: 280,
        // borderWidth: 1,
        // borderColor: 'white',
        marginLeft: 5,
        paddingLeft: 5,
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
        marginTop: 10,
        marginLeft: 5,
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'left',
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
    gridContainer: {
        height: 160,
        backgroundColor: '#051522',
        marginBottom: 7,
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
    },
    searchContainer: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#072233',
        // paddingLeft: 10,
        padding: 10,
        width: '80%',
        borderWidth: 1,
        borderRadius: 25,
        borderColor: 'white'
    }
})