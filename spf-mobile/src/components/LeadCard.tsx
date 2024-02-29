import { colors } from '../constants/colors';
import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const LeadCard = ({ title = 'Leads', active = 10, pending = 9, hold = 2 }: any) => {
  return (
    <ImageBackground
      source={require('../assets/images/bg_card.jpg')}
      imageStyle={styles.backgroundImage}
    >
      <View style={styles.card}>
        <Text style={{ color: colors.pink, fontSize: 18, fontWeight: 'bold' }}>{title}</Text>
        <View style={styles.countContainer}>
          <CountView count={active} label="Active" />
          <VerticalDivider />
          <CountView count={pending} label="In Progress" />
          <VerticalDivider />
          <CountView count={hold} label="Pending" />
          <VerticalDivider />
          <CountView count={hold} label="Hold" />
        </View>
      </View>
    </ImageBackground>
  );
};

const CountView = ({ count, label }: { count: number, label: string }) => {
  return (
    <View style={styles.countView}>
      <Text style={styles.countText}>{count}</Text>
      <Text style={styles.countLabel}>{label}</Text>
    </View>
  );
};

const VerticalDivider = () => {
  return <View style={styles.verticalDivider} />;
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
  },
  countContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  countView: {
    alignItems: 'center',
  },
  countText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  countLabel: {
    color: '#000',
    fontSize: 14,
    marginTop: 5,
    fontWeight: '600',
  },
  backgroundImage: {
    resizeMode: 'cover',
    justifyContent: 'center',
    borderRadius: 10,
  },
  verticalDivider: {
    width: 1.5,
    backgroundColor: colors.white,
    marginHorizontal: 8,
    opacity:0.5
  },
});

export default LeadCard;
