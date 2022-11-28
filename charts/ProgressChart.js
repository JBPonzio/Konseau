import CircularProgress from 'react-native-circular-progress-indicator';

function getUsages() {

}

function getProgress() {

    return (
        <CircularProgress
            value={60}
            radius={50}
            duration={1000}
            progressValueColor={'#ecf0f1'}
            maxValue={200}
            valueSuffix={' L'}
            title={'30%'}
            titleColor={'white'}
            titleStyle={{fontWeight: 'bold'}}
        />
    )
}

export {
    getProgress
}