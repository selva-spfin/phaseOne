// MonthlyTargetsChart.tsx
import React from 'react';
import { View, Text } from 'react-native';
import { BarChart, Grid } from 'react-native-chart-kit';

const MonthlyTargetsChart: React.FC = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

  return (
    <View>
      <BarChart
        data={data}
        width={300}
        height={200}
        yAxisLabel="$"
        chartConfig={{
          backgroundGradientFrom: '#FFF',
          backgroundGradientTo: '#FFF',
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        verticalLabelRotation={30}
        fromZero
        withInnerLines={false}
        withOuterLines={false}
        withVerticalLines={false}
        showBarTops={false}
      />
      <Text>Monthly Partner Targets</Text>
    </View>
  );
};

export default MonthlyTargetsChart;
