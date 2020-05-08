import React, {useState} from 'react'
import * as COLORS from '../../styles/colors'

import { BarChart, YAxis, XAxis, Grid} from 'react-native-svg-charts';
import { Text } from 'react-native-svg'
import * as scale from 'd3-scale'

const ChartInfo = ({history}) => {

    const data = [
        {
            value: 50,
            label: 'One',
        },
        {
            value: 10,
            label: 'Two',
        },
        {
            value: 40,
            label: 'Three',
        },
        {
            value: 95,
            label: 'Four',
        },
        {
            value: 85,
            label: 'Five',
        },
    ]

    const CUT_OFF = 50
    const Labels = ({  x, y, bandwidth, data }) => (
        data.map((value, index) => (
            <Text
                key={ index }
                x={ value > CUT_OFF ? x(0) + 10 : x(value) + 10 }
                y={ y(index) + (bandwidth / 2) }
                fontSize={ 14 }
                fill={ value > CUT_OFF ? 'white' : 'black' }
                alignmentBaseline={ 'middle' }
            >
                {value}
            </Text>
        ))
    )

                            {/* <YAxis
                            data={data}
                            contentInset={{top: 20}}
                            yAccessor={({ index }) => index}
                            svg={{
                                fill: 'grey',
                                fontSize: 10,
                            }}
                            scale={scale.scaleBand}
                            numberOfTicks={10}
                            formatLabel={(days) => `${days}`}
                        /> */}
                        <BarChart 
                            // style={styles.PeriodChart}
                            yAccessor={({ item }) => item.value}
                            
                            data={data}
                            svg={{fill:COLORS.MID_BLUE}}
                            contentInset={{top: 10}}
                            gridMin={0}
                            // horizontal={false}
                            
                        >
                            <Grid direction={Grid.Direction.VERTICAL}/>
                            {/* <Labels/> */}
                        </BarChart>
                        {/* <XAxis
                            data={data}
                            contentInset={{left:10}}
                            xAccessor={({ index }) => index}
                            svg={{
                                fill: 'grey',
                                fontSize: 10,
                            }}
                            scale={scale.scaleBand}
                            numberOfTicks={10}
                            formatLabel={(days) => `${days}`}  
                        /> */}
                        {/* X axis: days/duration, Y axis: start date */}




}