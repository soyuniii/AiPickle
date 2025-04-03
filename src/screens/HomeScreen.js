import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {

    const nav = useNavigation();
    const [searchText, setSearchText] = useState();

    const handleSearch = () => {
        if (!searchText.trim()) return;
        nav.navigate('Loading', { message: '검색 중...' });

        setTimeout(() => {
            nav.replace('SearchResult', { query: searchText });
          }, 1500);
      };


  return (
    <View style={styles.container}>
        <Image source={require('../../assets/images/homeicon.png')} style={styles.homeicon} resizeMode="contain"/>
        <Text style={styles.title}>PICK CLASS !</Text>

      <TouchableOpacity style={styles.searchContainer}>
        <Image source={require('../../assets/images/search.png')} style={styles.searchicon} />
        <TextInput
        style={styles.input}
        placeholder="강의명, 교수명으로 검색"
        value={searchText}
        onChangeText={setSearchText}
        onSubmitEditing={handleSearch}
        />
    </TouchableOpacity>

    </View>
  );


};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FAFB',
        padding: 20,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    homeicon: {
        width: '100%',
        height: 45,
        marginTop: '30%',
        marginBottom: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: '500',
        marginBottom: 50,
    },
    searchContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#CCD0D6',
        borderWidth: 1,
        borderRadius: 30,
        paddingHorizontal: 15,
        height: 45,
        marginBottom: 15,
    },
    searchicon:{
        width: 17,
        height: 17,
        marginRight: 10,
    },
    input: {
        width: '85%',
        fontSize: 16,
    },
});


export default HomeScreen;