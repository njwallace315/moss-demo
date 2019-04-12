
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import ReactEcharts from 'echarts-for-react';
import moment from 'moment'
import echarts from 'echarts'
import { ClickAwayListener, Card } from '@material-ui/core';

export default class Humidity extends PureComponent {
    getOption = () => {
        // TODO: add color-coded boundaries
        let { room = 'B1451', values, times, building = 'WIMR' } = this.props
        let timeGen = moment()
        if (!values) {
            values = [20, 22, 25, 23, 20, 15, 12]
            times = []
            for (let i = 0; i < values.length; i++) {
                times.unshift(timeGen.subtract(1, 'm').toDate())
            }
        } else if (!times) {
            times = []
            for (let i = 0; i < values.length; i++) {
                times.unshift(timeGen.subtract(1, 'm').toDate())
            }
        }
        let data = [];
        for (let i = 0; i < values.length; i++) {
            data.push([times[i], values[i]])
        }

        return {
            title: {
                text: room && building ? `Humidity in ${room} ${building} vs Time` : 'Humidity vs Time',
                x: "center",
                align: "right"
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
            xAxis: {
                name: "Time",
                axisTick: {
                    alignWithLabel: true
                },
                axisLabel: {
                    formatter: function (value, index) {
                        return moment(value).format('h:mm a \n MM/DD')
                    }
                },
                nameTextStyle: {
                    align: 'center'
                },
                type: "time"
            },

            yAxis: [
                {
                    type: 'value',
                    name: 'Humidity (%)',
                    min: 0,
                    max: 100
                }
            ],
            series: [
                {
                    type: 'line',
                    data,

                    showSymbol: false,
                    smooth: true,
                    lineStyle: {
                        color: "rgb(62, 5, 205)"
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: "rgba(62, 5, 205, 1)"
                                },
                                {
                                    offset: 1,
                                    color: "rgba(62, 5, 205, 0)"
                                }
                            ])
                        }
                    }

                },
            ]
        };
    };
    render() {
        const { onClose } = this.props;
        return (
            <ClickAwayListener onClickAway={onClose}>
                <Card raised>
                    <ReactEcharts
                        option={this.getOption()}
                        style={{ height: '350px', width: '100%' }}
                        className='react_for_echarts' />
                </Card>
            </ClickAwayListener>
        );
    }
}

Humidity.propTypes = {
    room: PropTypes.string,
    building: PropTypes.string,
    onClose: PropTypes.func.isRequired,
}
