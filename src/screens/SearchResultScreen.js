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
      <Text style={styles.title}>"{searchQuery.length > 8 ? searchQuery.substring(0, 8) + '...' : searchQuery}"에 관련된 강의
        <Text style={styles.colortitle}> {classList.length}</Text>건을 픽했어요</Text>

      <FlatList
        data={classList}
        renderItem={({ item }) => <SearchCard item={item} />}
        keyExtractor={(item) => item.id.toString()}
        style={{ width: '100%'}}
        />
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
});

export default SearchResultScreen;