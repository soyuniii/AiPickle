import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const SummaryCard = ({ title, icon, items }) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image source={icon} style={styles.icon} />
        <Text style={styles.title}>{title}</Text>
      </View>
      {items.map((item, index) => (
        <Text key={index} style={styles.item}>• {item}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    width: 15,
    height: 15,
    marginRight: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  item: {
    fontSize: 14,
    color: '#444',
    marginBottom: 5,
  },
});

export default SummaryCard;