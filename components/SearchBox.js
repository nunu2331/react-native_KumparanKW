import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput,Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }
  textChanged = text => {
    this.setState({ searchText: text });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.contentContainer}>
            <View style={styles.iconWrapper}>
              <Icon
                name='search'
                // source={require('../assets/search.png')}
                style={styles.icon}
                size={18}
                color={'#97a2ad'}
              />

            <TextInput
              placeholder={'Cari di sini...'}
              placeholderTextColor='#5a6673'
              onChangeText={text => this.textChanged(text)}
              style={styles.inputBox}
            />
            </View>
{/* 
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder={'Search'}
              onChangeText={text => this.textChanged(text)}
              style={styles.inputBox}
            />
          </View> */}
          </View>
        </View>
      </View>
    );
  }
}

export default SearchBox;

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  // header: {
  //   display: 'flex',
  //   flexDirection: 'row',
  //   height: 50,
  //   // width: '110%',
  //   borderBottomWidth: 1,
  //   padding: 20,
  // },\

  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    paddingRight: 10,
  },
  contentContainer: {
    // // flexDirection: 'row',
    height: 45,
    width: '100%',
    borderWidth: 1,
    // marginLeft: 5,
    paddingHorizontal: 5,
    backgroundColor: '#072233',
    borderColor: '#97a2ad',
    borderRadius: 25,
  },
  iconWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    marginVertical: 3,
    marginLeft: 3,
  },
  inputWrapper: {
    marginLeft: 40,
  },
  inputBox: {
    padding: 5,
    width: '100%',
    fontWeight: '600',
    color: 'white',
    marginLeft: 5,
  },
  icon: {
    padding: 5,
    // height: 15,
    // width: 15,
    alignSelf: 'center',
    // tintColor: '#B8BEC7'
  },
});
