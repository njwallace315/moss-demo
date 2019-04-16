import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import ReactEcharts from 'echarts-for-react';
import moment from 'moment'
import echarts from 'echarts'
import { withStyles } from '@material-ui/core/styles'
import { Dialog, IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons'

class Temperature extends PureComponent {
    getOption = () => {
        // TODO: add color-coded boundaries
        let { room = 'B1451', temps, times, building = 'WIMR' } = this.props
        let timeGen = moment()
        if (!temps) {
            temps = [74, 72, 73, 74, 72, 68]
            times = []
            for (let i = 0; i < temps.length; i++) {
                times.unshift(timeGen.subtract(1, 'm').toDate())
            }
        } else if (!times) {
            times = []
            for (let i = 0; i < temps.length; i++) {
                times.unshift(timeGen.subtract(1, 'm').toDate())
            }
        }
        let data = [];
        for (let i = 0; i < temps.length; i++) {
            data.push([times[i], temps[i]])
        }

        const yMin = Math.min(...temps);
        const yMax = Math.max(...temps);
        const diff = Math.abs(yMax - yMin);

        return {
            title: {
                text: room && building ? `Temperature in ${room} ${building} vs Time` : 'Temperature vs Time',
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
                name: "Time and Date (MM/DD)",
                nameLocation: 'middle',
                nameGap: 25,
                axisTick: {
                    alignWithLabel: true
                },
                axisLabel: {
                    formatter: function (value, index) {
                        return moment(value).format('h:mm a MM/DD')
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
                    name: 'Temperature (F)',
                    min: Math.round((yMin - (0.2 * diff)) * 100) / 100,
                    max: Math.round((yMax + (0.2 * diff)) * 100) / 100
                }
            ],
            series: [
                {
                    type: 'line',
                    data,

                    showSymbol: false,
                    smooth: true,
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: "rgb(197, 5, 12)"
                                },
                                {
                                    offset: 1,
                                    color: "rgb(107, 5, 80)"
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
            <Dialog open={true} onClose={onClose} fullScreen>
                <IconButton style={{ width: 35, margin: '0px 10px 0px auto' }} onClick={onClose}>
                    <Close style={{ fontSize: 35 }} />
                </IconButton>
                <ReactEcharts
                    option={this.getOption()}
                    style={{ height: '67%', width: '100%', marginBottom: 50 }}
                    className='react_for_echarts'
                />
            </Dialog>
        );
    }
}

const styles = theme => ({
})

Temperature.propTypes = {
    room: PropTypes.string,
    building: PropTypes.string,
    onClose: PropTypes.func.isRequired,
}

export default withStyles(styles)(Temperature)