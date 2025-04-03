import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SearchCard = ({ item }) => {
    const nav = useNavigation();

    const handlePress = () => {
        nav.navigate('Loading', { message: 'AI 분석중...' });

        setTimeout(() => {
            nav.replace('Summary', {item});
          }, 1500);
    };

  return(
    <TouchableOpacity
        style={styles.container}
        onPress={handlePress}
        >
    <View style={styles.header}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.rating}>★ {item.rating}</Text>
    </View>
    <Text style={styles.professor}>{item.professor}</Text>
    <Text style={styles.timeTable}>{item.timeTable_1}</Text>
    <Text style={styles.timeTable}>{item.timeTable_2}</Text>
  </TouchableOpacity>
  );
  
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 7,
    marginBottom: 5,
    width: '100%',
    height: 105,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  professor: {
    fontSize: 15,
    color: '#4B5563',
    marginBottom: 5,
  },
  rating: {
    fontSize: 14,
    marginBottom: 5,
  },
  timeTable: {
    fontSize: 14,
    color: '#4B5563',
  },
});

export default SearchCard;