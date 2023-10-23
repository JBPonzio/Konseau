import { VictoryChart, VictoryBar, VictoryTheme, VictoryPie } from "victory-native";

export default function getPie() {

    const data =
        [
            {
                x: "Lave-vaisselle",
                y: 20,
                color: "#20A7E2",
            },
            {
                x: "Douche",
                y: 80,
                color: "#20A7E2",
            },
            {
                x: "Lave-linge",
                y: 30,
                color:"#20A7E2",
            },
            {
                x: "wc",
                y: 20,
                color: "#20A7E2",
            },
            {
                x: "Autres",
                y: 15,
                color: "#20A7E2",
            },
        ]

    return (
        <VictoryPie
            standlone={false}
            padAngle={5}
            innerRadius={60}
            data={data}
            x={data.x}
            y={data.y}
            labelRadius={({ data }) => data.x }
            padding={{ top: 80, bottom: 80, right:80, left:80 }}
            style={{
                data: {
                    fill: ({datum}) => datum.color,
                },
                labels: {
                    fontsize: 5,
                    fill: "#FFFFFF"
                }
            }}
        />
    )
}