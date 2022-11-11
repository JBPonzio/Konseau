import {VictoryPie} from "victory-native";

export default function getPie() {

    return (
        <VictoryPie
            padAngle={({ datum }) => datum.y}
            innerRadius={100}
            data={[
                { x: "Cats", y: 35 },
                { x: "Dogs", y: 40 },
                { x: "Birds", y: 55 }
            ]}>

        </VictoryPie>
    )
}

