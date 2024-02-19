import React from 'react';
import { View, Text } from 'react-native';
import { ProgressCircle } from 'react-native-svg-charts';

const LoanStatusChart: React.FC = () => {
  const data = [0.7, 0.2, 0.1, 0.5]; // Replace with your loan status data (approve, pending, hold, decline)

  return (
    <View>
      <ProgressCircle
        style={{ height: 200 }}
        progress={data.reduce((acc, val) => acc + val, 0)}
        progressColor={['#4CAF50', '#FFC107', '#FF5722', '#2196F3']}
      />
      <Text>Loan Status</Text>
    </View>
  );
};

export default LoanStatusChart;
