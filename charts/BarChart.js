import {VictoryBar, VictoryLabel, VictoryChart, VictoryAxis, VictoryTheme} from "victory-native";

function getbar() {
    return (
        <VictoryChart>
            <VictoryBar
                style={{
                    labels: {
                        fill: "white",
                        fontSize: 11,
                    },
                    data: {
                        fill: "#20A7E2",
                    }
                }}
                labels={({ datum }) => datum.y + '€'}
                alignment="middle"
                animate={{
                    duration: 1000,
                    onLoad: { duration: 1000 }
                }}
                barRatio={1}
                data={[
                    { x: "Janvier", y: 18 },
                    { x: "Février", y: 20 },
                    { x: "Mars", y: 5 },
                    { x: "Avril", y: 20 },
                    { x: "Mai", y: 10},
                    { x: "Juin", y: 20 },
                    { x: "Juillet", y: 14 },
                    { x: "Août", y: 4 },
                    { x: "Septembre", y: 32 },
                    { x: "Octobre", y: 16 },
                    { x: "Novembre", y: 20 },
                    { x: "Décembre", y: 10 }
                ]}
            />
            <VictoryAxis
                //x
                tickValues={[1, 2, 3, 4, 5, 6, 7 ,8 ,9, 10, 11, 12]}
                tickLabelComponent={<VictoryLabel angle={45} />}
                style={{
                    axis: {stroke: 'transparent'},
                    ticks: {stroke: 'transparent'},
                    tickLabels: {fontSize: 9, padding: 10, marginLeft:0, stroke:"white", verticalAnchor: "right", textAnchor:'start'},
                }}
            />
        </VictoryChart>
    )
}

export {
    getbar
}