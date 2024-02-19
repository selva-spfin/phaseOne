// MonthlyLoanAmountCard.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MonthlyLoanAmountCard: React.FC = () => {
  const monthlyLoanAmount = 150000; // Replace with your data

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Monthly Loan Amount Progress</Text>
      <Text style={styles.amount}>${monthlyLoanAmount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 8,
    elevation: 3,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  amount: {
    fontSize: 24,
    color: '#4CAF50',
  },
});

export default MonthlyLoanAmountCard;
