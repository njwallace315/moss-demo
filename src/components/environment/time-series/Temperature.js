import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import ReactEcharts from 'echarts-for-react';
import moment from 'moment'

export default class Temperature extends PureComponent {
    getOption = () => {
        let { room = 'B1451', temps, times, building = 'WIMR' } = this.props
        let timeGen = moment()
        if (!temps) {
            temps = [74, 72, 73, 74, 72, 68]
            times = []
            for (let i = 0; i < temps.length; i++) {
                times.unshift(moment().subtract(i, 'h').toDate())
            }
        }
        let data = [];
        for (let i = 0; i < temps.length; i++) {
            data.push([times[i], temps[i]])
        }

        const yMin = Math.min(...temps);
        const yMax = Math.max(...temps);


        return {
            title: {
                text: `Temperature in ${room} ${building} vs Time`
            },
            tooltip: {
                trigger: 'axis'
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'time',
                }
            ],
            yAxis: [
                {
                    type: 'value',
                }
            ],
            series: [
                {
                    type: 'line',
                    areaStyle: { normal: {} },
                    data
                },
            ]
        };
    };
    render() {
        return (
            <div>
                <ReactEcharts
                    option={this.getOption()}
                    style={{ height: '350px', width: '100%' }}
                    className='react_for_echarts' />
            </div>
        );
    }
}

Temperature.propTypes = {
    room: PropTypes.string.isRequired,
}