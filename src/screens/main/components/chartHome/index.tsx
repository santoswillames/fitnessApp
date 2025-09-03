import React from 'react';
import { Text, View } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';


export function ChartHome() {



const lineData = [{value: 340, label: 'Mon'},{value: 380, label: 'Tue'},{value: 360, label: 'Wed'},{value: 486, label: 'Thu'},{value: 505, label: 'Fri'},{value: 400, label: 'Sat'},{value: 400, label: 'Sun'}]

  return (
    <View >
        <LineChart
            areaChart
            curved
            initialSpacing={8}
            endSpacing={0}
            spacing={50}
            data={lineData}
            thickness={2}
            disableScroll
            hideDataPoints
            hideRules
            hideYAxisText
            hideAxesAndRules
            startOpacity={0.1}
            endOpacity={0}
            color="#D6EBEB"
            startFillColor="#0AE1EF"
            xAxisLabelTextStyle={{ color: '#FFFFFF52', fontSize: 12, fontFamily: 'MontserratAlternates-SemiBold' }}
            pointerConfig={{
              pointerStripColor: '#f6f3ba',
              pointerStripUptoDataPoint: true,
              pointerLabelWidth: 110,
              autoAdjustPointerLabelPosition: true,
              pointerComponent: () => {
                return (
                  <View className='bg-white border-2 border-[#f6f3ba] h-[15px] w-[15px] rounded-full '/>
                )
              },
              pointerLabelComponent: (items: typeof lineData)  => {
                return (
                  <View
                  className='h-[43px] w-[74px] justify-center z-50 bg-[#F6F3BA] rounded-md'>
                    <Text style={{fontFamily: 'MontserratAlternates-SemiBold',textAlign:'center', color:'#243465'}}>
                      { items[0].value + ' cal'}
                    </Text>
                  </View>
                );
              },
          }}
        />
    </View>
  );
}