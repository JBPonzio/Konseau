//
// import { BarChart} from "react-native-chart-kit";
// import * as React from 'react';
// import {Dimensions} from "react-native";
//
// const screenWidth = Dimensions.get('window').width;
// const dataYear =  {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aou', 'Sep', 'Oct', 'Nov', 'Dec'],
//     datasets: [
//         {
//             data: [20, 45, 28, 80, 99, 43, 12, 5, 6, 30, 45, 36],
//         },
//     ],
// };
//
// const date = new Date();
// const dataByDays =  {
//     labels: getDays(date.getMonth(), date.getFullYear()),
//     datasets: [
//         {
//             data: [20, 45, 28, 80, 99, 43, 12, 5, 6, 30, 45, 36],
//             strokeWidth: 1, // optional
//         },
//     ],
// };
//
// function byYear() {
//     console.log(screenWidth);
//
//     return (
//         <BarChart
//             data={dataYear}
//             width={screenWidth} // from react-native
//             height={220}
//             yAxisLabel={'$'}
//             fromZero={true}
//             verticalLabelRotation={50}
//             withInnerLines={false}
//             showValuesOnTopOfBars={true}
//             chartConfig={{
//                 decimalPlaces: 0, // optional, defaults to 2dp
//                 color: (opacity = 0) => `#FFFFFF`,
//                 backgroundGradientTo: '#09374c',
//                 backgroundGradientFrom: "#0b0f1e",
//                 style: {
//                     borderRadius: 16,
//                     marginRight:0
//                 },
//             }}
//             style={{
//                 borderRadius: 16,
//                 marginRight:0
//             }}
//         />
//     )
// }
//
// function byDays() {
//     return (
//         <LineChart
//             data={dataByDays}
//             width={300} // from react-native
//             height={220}
//             yAxisLabel={'$'}
//             paddingTop={5}
//             chartConfig={{
//                 backgroundColor: '#e26a00',
//                 backgroundGradientFrom: '#fb8c00',
//                 backgroundGradientTo: 'rgba(0,0,0,0.5)',
//                 decimalPlaces: 1, // optional, defaults to 2dp
//                 color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//                 style: {
//                     borderRadius: 16
//                 }
//             }}
//             bezier
//             style={{
//                 marginVertical: 1,
//                 borderRadius: 10
//             }}
//         />
//     )
// }
//
// function byWeeks() {
//
// }
//
// function getDays(month, year) {
//     let date = new Date(year, month, 1);
//     let days = [];
//     while (date.getMonth() === month) {
//         days.push((new Date(date)).getDay().toLocaleString());
//         date.setDate(date.getDate() + 1);
//     }
//
//     return days;
// }
//
//
// export {
//     byYear,
//     byDays,
//     byWeeks
// }