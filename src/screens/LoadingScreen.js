import { View, Text, StyleSheet,Animated, Easing } from 'react-native';
import React, { useEffect, useRef } from 'react';

const LoadingScreen = ({ route }) => {
  const { message } = route.params; // 전달받은 메시지
  const opacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const blinkAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 0, // 투명도 0 (완전 투명)
          duration: 1000, // 1초 동안
          easing: Easing.ease, // 애니메이션 속도 조절
          useNativeDriver: true, // 성능 최적화
        }),
        Animated.timing(opacity, {
          toValue: 1, // 투명도 1 (완전 불투명)
          duration: 1000, // 1초 동안
          easing: Easing.ease, // 애니메이션 속도 조절
          useNativeDriver: true, // 성능 최적화
        }),
      ])
    );

    blinkAnimation.start(); // 애니메이션 시작

    return () => {
      blinkAnimation.stop(); // 컴포넌트 언마운트 시 애니메이션 정지
    };
  }, [opacity]);

  return (
    <View style={styles.container}>
      {/* 애니메이션 적용된 이미지 */}
      <Animated.Image
        source={require('../../assets/images/pickle.png')}
        style={[styles.icon, { opacity }]} // opacity 값 적용
        resizeMode="contain"
      />
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    paddingBottom: '13%',
  },
  icon: {
    height: 45,
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    fontWeight: '500',
    color: '#888888',
  },
  
});

export default LoadingScreen;