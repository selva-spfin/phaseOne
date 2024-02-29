import React from 'react';
import { View } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';

const MonthlyIncomeChart = ({ monthlyData }:any) => {
  // Sample data structure for monthlyData: [{ month: 'Jan', income: 1000 }, { month: 'Feb', income: 1500 }, ...]

  const data = monthlyData.map((item:any) => ({
    x: item.month,
    y: item.income,
  }));

  return (
    <View style={{ flex: 1 }}>
      <BarChart
        data={data}
        width={350}
        height={220}
        barSpacing={5}
        horizontalGridLineColor="#ccc"
        showGrid
        showXAxisLabels
        showYAxisLabels
        yAxisLabelCount={5}
        yAxisSuffix="$"
      />
    </View>
  );
};

export default MonthlyIncomeChart;
