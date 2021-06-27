import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';

const Feed = () => {
  return (
    <View style={styles.container}>
      <ScrollView 
      showsHorizontalScrollIndicator= {false}
      horizontal={true} style={styles.topic}>
        <TouchableOpacity style={styles.selectedCategoryItem}>
          <Text style={styles.selectedtopicstyle}>Trending</Text>
          <View style={styles.border} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryItem}>
          <Text style={styles.topicstyle}>My topic</Text>

        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryItem}>
          <Text style={styles.topicstyle}>Local news</Text>

        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryItem}>
          <Text style={styles.topicstyle}>Fast check</Text>

        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryItem}>
          <Text style={styles.topicstyle}>Good news</Text>

        </TouchableOpacity>
      </ScrollView>
      <View style={styles.imageContainer}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <ImageBackground
            style={styles.feedImage}
            source={require('../src/assets/melon.jpg')}
          >
            <View style={{
              backgroundColor: "#00000026",
              height: 360,
              justifyContent: 'flex-end',
            }}>
              <Text style={styles.textImage}>Pernyataan Mas Melon Tentang UMR YK Yang Terlalu Kecil Tidak Sebanding Dengan Biaya Hidup Bikin Gempar</Text>
              
            </View>
            {/* <Text style={styles.logo1}>Berita Kepo</Text> */}
            <Text style={styles.logo}>Berita Kepo</Text>

          </ImageBackground>
          <ImageBackground
            style={styles.feedImage}
            source={require('../src/assets/melon.jpg') }
          >
            <View style={{
              backgroundColor: "#00000026",
              height: 360,
              justifyContent: 'flex-end',
            }}>
              <Text style={styles.textImage}>Mas Juki Tertawa Terhadap Pernyataan Mas Melon: "Baru Sadar Dia"</Text>
              
            </View>
            {/* <Text style={styles.logo1}>Berita Kepo</Text> */}
            <Text style={styles.logo}>Berita Kepo</Text>

          </ImageBackground>
        </ScrollView>
      </View>
      <View style={styles.collection}>
        <View style={styles.collectionWrapper}>
          <View style={styles.collectionHeader}>
            <Text style={styles.textCollection}>Trending Collection</Text>
          </View>
          <View style={styles.gridCollection}>
            <Image style={styles.gridImage} source={require('../src/assets/mark.jpg')}/>
            <Image style={styles.gridImage} source={require('../src/assets/mark.jpg')}/>
            <Image style={styles.gridImage} source={require('../src/assets/mark.jpg')}/>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Feed;

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  imageContainer: {
  },
  feedImage: {
    marginTop: 10,
    marginLeft: 20,
    height: 360,
    width: 280,
    borderRadius: 25,
    overflow: 'hidden',
    // justifyContent: 'flex-end',
    // alignItems: 'flex-end'
  },
  topic: {
    padding: 10,
    flexDirection: 'row',
    // justifyContent: 'space-evenly',
    // alignItems: 'center',
    marginLeft: 5,
  },
  topicstyle: {
    fontWeight: 'bold',
    marginLeft: 10,
    color: 'black',
    // borderBottomWidth: 3,
    // borderColor: '#4948a1',
    padding: 5,
  },
  selectedCategoryItem: {
  },
  selectedtopicstyle: {

    fontWeight: 'bold',
    color: '#4948a1',
    // borderBottomWidth: 3,
    // borderColor: '#4948a1',
    padding: 5,
  },
  border: {
    marginLeft: 5,
    height: 2,
    width: 40,
    backgroundColor: '#4948a1',
    borderWidth: 2,
    borderColor: '#4948a1',
    borderRadius: 25,
  },
  textImage: {
    height: 180,
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
    padding: 20,

  },
  logo:{
    fontSize: 11,
    color: 'white',
    position: 'absolute',
    fontWeight: 'bold',
    padding: 10,
    margin: 20,
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: '#3dadff',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  collection:{

    width: '100%',
    marginTop: 20,
    paddingHorizontal: 15,
  },
  collectionHeader:{

  },
  textCollection: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  gridCollection: {
    marginTop: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  gridImage: {
    width: 154,
    height: 200,
    borderRadius: 15,
    marginRight: 10,
    marginBottom: 10,
  }
});
