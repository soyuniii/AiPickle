import { View, Text, StyleSheet, FlatList } from 'react-native';
import React, {useState} from 'react';
import { useRoute } from '@react-navigation/native';
import SearchCard from '../components/SearchCard';
import { dummyClass } from '../dummy';

const SearchResultScreen = () => {
  const route = useRoute();
  const searchQuery = route.params?.query || ''; // 검색어 가져오기
  const [classList, setClassList] = useState(dummyClass);

  return (
    <View style={styles.container}>
      

      <FlatList
        data={classList}
        renderItem={({ item }) => <SearchCard item={item} />}
        keyExtractor={(item) => item.id.toString()}
        style={{ width: '100%'}}
        />

      <View style={styles.footer}>
        <Text style={styles.title}>
          "{searchQuery.length > 8 ? searchQuery.substring(0, 8) + '...' : searchQuery}"에 관련된 강의
          <Text style={styles.colortitle}> {classList.length}</Text>건을 픽했어요
        </Text>
      </View>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  colortitle: {
    color: '#16A34A',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
    elevation: 3, // Android 그림자
    shadowColor: '#000', // iOS 그림자
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    alignItems: 'center',
  },
});

export default SearchResultScreen;