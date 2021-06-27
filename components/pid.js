import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
// import { colors } from '../config/Colors';
const Feed = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <View style={styles.headerLeftWrapper}>
          <Image
            style={styles.profileCircle}
            source={require('../src/assets/Ulogo.png')}
          />
          <Image
            style={styles.profileThumb}
            source={require('../src/assets/Ulogo.png')}
          />
          <Text style={styles.headerTitle}> Catherine</Text>
        </View>
        <Image
          style={styles.feedicon}
          source={require('../src/assets/Ulogo.png')}
        />
      </View>
      <View>
        <Image
          style={styles.feedImage}
          source={require('../src/assets/Ulogo.png')}
        />
      </View>
      <View style={styles.feedImageFooter}>
        <View style={styles.feddimageFooterLeftWrapper}>
          <Image
            style={styles.icon}
            source={require('../src/assets/Ulogo.png')}
          />
          <Image
            style={styles.icon}
            source={require('../src/assets/Ulogo.png')}
          />
          <Image
            style={styles.icon}
            source={require('../src/assets/Ulogo.png')}
          />
        </View>
        <Image
          style={styles.icon}
          source={require('../src/assets/Ulogo.png')}
        />
      </View>
      {/* <View style={styles.underLineWRapper}>
        <View style={styles.underLine} />
      </View> */}
      <View style={styles.likesAndCommentsWrapper}>
        <Text style={styles.likesTitle}> 1,124 Likes</Text>
        <View style={styles.feedtitle}>
          <Text style={styles.postTitle}> Catherine</Text>
          <Text style={styles.likesTitle}> Missing Summary  Missing Summary </Text>
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
  profileCircle: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  profileThumb: {
    position: 'absolute',
    marginLeft: 5,
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  headerWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 3,
    borderTopColor: 'gray',
    borderTopWidth: 1,
    marginTop: 5,
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 10,

  },
  feedicon: {
    width: 25,
    height: 25,
    marginVertical: 10,
    marginRight: 10,
  },
  headerLeftWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
  },
  headerTitle: {
    fontSize: 14,
    fontWeight: '700',
  },
  postTitle: {
    fontSize: 14,
    fontWeight: '700',
  },
  feedImage: {
    width: '100%',
  },
  feedImageFooter: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  feddimageFooterLeftWrapper: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  underLine: {
    height: 1,
    backgroundColor: 'gray',
  },
  underLineWRapper: {
    marginLeft: 10,
    marginRight: 10,
  },
  likesImage: {
    width: 25,
    height: 25,
  },
  likesAndCommentsWrapper: {
    flexDirection: 'column',
    paddingVertical: 5,
    paddingHorizontal: 5,

  },
  likesTitle: {
    fontSize: 14,
    fontWeight: '600',
  },
  feedtitle: {
    flexDirection: 'row',
  }
});
