
import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import SummaryCard from '../components/SummaryCard';
import PieChart from 'react-native-pie-chart';
import DetailModal from '../components/DetailModal';

const SummaryScreen = () => {
  const series = [
    { value: 4.5, color: '#16A34A' },
    { value: 0.5, color: '#B0B0B0' },
  ];
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible); // 모달 열고 닫기
};

  return (
    <ScrollView style={styles.container}>
      {/* 과목 정보 */}
      <View style={styles.header}>
        <Text style={styles.subject}>데이터베이스 설계</Text>
        <Text style={styles.professor}>김교수</Text>
      </View>

      <View style={styles.headerCard}>
      {/* 평점 정보 */}
      <View style={styles.ratingContainer}>
        <PieChart
          widthAndHeight={50}
          series={series}
          cover={0.7}
        />
        <View style={styles.ratingBox}>
          <Text style={styles.rating}>4.5</Text>
          <Text style={styles.ratingText}>평균 별점</Text>
        </View>
        <View style={styles.reviewBox}>
          <Text style={styles.totalReviewsText}>총 강의평 </Text>
          <Text style={styles.totalReviews}>127</Text>
        </View>
      </View>
      {/* 과목 상세 보기 버튼 */}
      <TouchableOpacity style={styles.button} onPress={toggleModal}>
        <Text style={styles.buttonText}>과목 상세 정보 보기</Text>
      </TouchableOpacity>
      </View>
      

      {/* 상세 정보 카드 */}
      <SummaryCard
        title="출결 관리"
        icon={require('../../assets/images/attendance.png')}
        items={['스마트 출석', '지각 3회시 결석 1회 처리']}
      />
      <SummaryCard
        title="강의 스타일"
        icon={require('../../assets/images/style.png')}
        items={['PPT 위주 수업, 교수님이 귀여우심.', '수업 중간 질문 많이 하시고 팀플 좋아하심']}
      />
      <SummaryCard
        title="시험 정보"
        icon={require('../../assets/images/exam.png')}
        items={['기말고사만 진행.', 'PPT에서 지엽적인 내용까지 나왔음']}
      />
      <SummaryCard
        title="과제 정보"
        icon={require('../../assets/images/assignment.png')}
        items={['팀 프로젝트 1회 (4-5명), 개인 레포트 1회']}
      />
      <SummaryCard
        title="추천해요"
        icon={require('../../assets/images/thumbs-up.png')}
        items={['교수님 강의력 좋아요', '과제 많지만 어렵진 않음']}
      />
      <SummaryCard
        title="비추천해요"
        icon={require('../../assets/images/thumbs-down.png')}
        items={['프로젝트 난이도 높고 SQL 기초 지식 필요.', '과제 많은 편']}
      />
      <SummaryCard
        title="수강 꿀팁"
        icon={require('../../assets/images/pickle.png')}
        items={['프로젝트 팀원 중요해서 같이 들을 사람있으면 좋음', '실습때 열심히 참여하는 모습 보이면 점수 잘 줘요']}
      />
      <DetailModal
                visible={isModalVisible}
                onClose={toggleModal}
                //item={item}
            />
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    padding: 15,
  },
  header: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  subject: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  professor: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  headerCard: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  ratingBox: {
    alignItems: 'center',
    marginRight: 120,
  },
  rating: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#16A34A',
  },
  ratingText: {
    fontSize: 12,
    color: '#444',
  },
  reviewBox: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  totalReviews: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  totalReviewsText:{
    fontSize: 12,
    color: '#444',
  },
  button: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#555555',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SummaryScreen;