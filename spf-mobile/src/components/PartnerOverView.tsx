import { colors } from '../constants/colors';
import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const PartnerOverView: React.FC = ({ activeCount = 10, pendingCount = 10 }: any) => {
  return (
    <ImageBackground
      source={require('../assets/images/bg_card.jpg')}
      imageStyle={styles.backgroundImage}
    >
      <View style={styles.card}>
        <Text style={{ color: colors.pink, fontSize: 18, fontWeight: 'bold',marginTop:10 }}>Partners</Text>
        <View style={styles.countContainer}>
          <CountView count={activeCount} label="Active" />
          <VerticalDivider />
          <CountView count={pendingCount} label="Pending" />
          <VerticalDivider />
          <CountView count={activeCount} label="Hold" />
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
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
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
    fontWeight:'600'
  },
  backgroundImage: {
    resizeMode: 'cover',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop:20,
  },
  verticalDivider: {
    width: 1.5,
    backgroundColor: '#FFF',
    marginHorizontal: 8,
    opacity:0.5
  },
});

export default PartnerOverView;
