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
        // <VictoryPie data={data} x={data.x} y={data.y}
        //     labels={data.x}
        //     theme={VictoryTheme.material} ></VictoryPie>
        <VictoryPie
            padAngle={5}
            innerRadius={100}
            data={data}
            padding={{ top: 20, bottom: 60 }}
            style={{
                data: {
                    fill: ({datum}) => datum.color
                }
            }}
        />
    )
}