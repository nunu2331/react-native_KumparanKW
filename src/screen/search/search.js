import React from 'react';
import { View, Text, ScrollView, StyleSheet, StatusBar, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/EvilIcons';
import SearchBox from '../../../components/SearchBox';
import TrendingCard from '../../../components/trendingCard';
import { useNavigation } from '@react-navigation/native';



const Search = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#051522" />
      <View style={styles.header}>
        <View style={styles.logoWrapper}>
          <Icon
                onPress={()=>navigation.goBack()}
            size={40}
            color='white'
            name='chevron-left' />
        </View>
        <SearchBox />
      </View>
      <ScrollView>

      <View style={styles.headerContent}>
        <View style={{ height: 15, width: 5, backgroundColor: 'red', marginRight: 5, alignSelf: 'center' }}></View>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Pencarian Populer</Text>
      </View>
      <View style={styles.tagContainer}>
        <View style={styles.tagWrapper}>
          <View style={styles.tagCard}>
            <Text style={{color: '#427faf',}}>surat swab palsu di kalbar</Text>
          </View>
          <View style={styles.tagCard}>
            <Text style={{color: '#427faf',}}>george floyd</Text>
          </View>
          <View style={styles.tagCard}>
            <Text style={{color: '#427faf',}}>calon dubes baru</Text>
          </View>
          <View style={styles.tagCard}>
            <Text style={{color: '#427faf',}}>duta besar</Text>
          </View>
          <View style={styles.tagCard}>
            <Text style={{color: '#427faf',}}>mendagri</Text>
          </View>
          <View style={styles.tagCard}>
            <Text style={{color: '#427faf',}}>bakar</Text>
          </View>
          <View style={styles.tagCard}>
            <Text style={{color: '#427faf',}}>amein rais</Text>
          </View>
          <View style={styles.tagCard}>
            <Text style={{color: '#427faf',}}>dolar as</Text>
          </View>
          <View style={styles.tagCard}>
            <Text style={{color: '#427faf',}}>larissa chou gugat cerai kagura selena</Text>
          </View>
          <View style={styles.tagCard}>
            <Text style={{color: '#427faf',}}>senjata tajam</Text>
          </View>
        </View>
      </View>
      
      <TrendingCard title='Riwayat Baca'/>
      </ScrollView>
    </View>
  )
}

export default Search;

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
    marginBottom: 2,
    backgroundColor: '#051522'
  },
  logoWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    // height: 50,
    // width: 50,
    marginLeft: 5,
    // borderWidth: 1,
    // borderColor: 'white'
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    // marginHorizontal: 15,
    // marginVertical: 2,
    marginBottom: 2,
    backgroundColor: '#051522',
    height: 65,
  },
  tagContainer: {
    backgroundColor: '#051522',
    paddingTop: 10,
    paddingBottom: 25,

  },
  tagWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 5,
    marginHorizontal: 5,
    // borderColor: 'white',
    // borderWidth: 1,
  },
   tagCard: {
     borderRadius: 5,
     borderWidth: 1,
     borderColor: '#427faf',
     padding: 10,
     margin: 2,
   }
})