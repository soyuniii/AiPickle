import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import { useRoute } from '@react-navigation/native';
import SearchCard from '../components/SearchCard';
import { dummyClass } from '../dummy';
import DropDownPicker from 'react-native-dropdown-picker';

const SearchResultScreen = () => {
  const route = useRoute();
  const searchQuery = route.params?.query || ''; // 검색어 가져오기
  const [classList, setClassList] = useState(dummyClass);
  const [open, setOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('current');
  const [items, setItems] = useState([
    { label: '이번 학기 수강 가능', value: 'current' },
    { label: '전체', value: 'all' },
  ]);

  return (
    <View style={styles.container}>
      {/* 필터 버튼 */}
      <View style={styles.filterWrapper}>
      <TouchableOpacity style={styles.filterButton} onPress={() => setOpen(!open)}>
        <Image source={require('../../assets/images/filter.png')} style={styles.icon} />
        <Text style={styles.buttonText}>정렬</Text>
      </TouchableOpacity>
      </View>

      {/* DropDownPicker (버튼 클릭 시만 열림) */}
      <DropDownPicker
        open={open}
        value={selectedFilter}
        items={items}
        setOpen={setOpen}
        setValue={setSelectedFilter}
        setItems={setItems}
        dropDownContainerStyle={styles.dropdownContainer}
        style={{ display: 'none' }} // 기본 UI 숨김
      />

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
  filterWrapper: {
    alignSelf: 'flex-start',
    zIndex: 1000,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ddd',
    width: 80,
    justifyContent: 'center',
    marginBottom: 10,
  },
  icon: {
    width: 18,
    height: 13,
    marginRight: 7,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  dropdownContainer: {
    width: 180,
    borderColor: '#ddd',
    position: 'absolute',
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
    backgroundColor: '#F9FAFB',
    paddingVertical: 23,
    paddingHorizontal: 15,
    // elevation: 3, // Android 그림자
    // shadowColor: '#000', // iOS 그림자
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 5,
    alignItems: 'center',
  },
});

export default SearchResultScreen;