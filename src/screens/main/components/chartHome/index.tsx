import React from 'react';
import { View } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';


export function ChartHome() {
const lineData = [{value: 340},{value: 380},{value: 360},{value: 486},{value: 505},{value: 460},{value: 460}]

  return (
    <View >
        <LineChart
            areaChart
            curved
            initialSpacing={0}
            data={lineData}
            hideDataPoints
            thickness={2}
            hideRules
            hideYAxisText
            hideAxesAndRules
            startOpacity={0.1}
            endOpacity={0}
            color="#D6EBEB"
            startFillColor="#0AE1EF"
        />
    </View>
  );
}