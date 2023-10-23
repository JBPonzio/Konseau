import CircularProgress from 'react-native-circular-progress-indicator';

function getUsages() {

}

function getProgress(percent, RandomNumber, objectif) {
    // let RandomNumber = Math.floor(Math.random() * 100) + 1 ;
    const color =  percent > 100 ? "red" : (percent > 90 ? "orange" : "#2ecc71");
    console.log(color, RandomNumber);

    return (
        <CircularProgress
            value={RandomNumber}
            radius={50}
            duration={1000}
            progressValueColor={'#ecf0f1'}
            maxValue={objectif}
            valueSuffix={' L'}
            activeStrokeColor={color}
            title={ percent + '%'}
            titleColor={'white'}
            titleStyle={{fontWeight: 'bold'}}
            progressColor={color}
            style={{
                data: {
                    color: color,
                },
            }}
        />
    )
}

export {
    getProgress
}