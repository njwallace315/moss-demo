import React from 'react';
import bottom from './B1451_bottom.png'
import top from './B1451_top.png'
import left from './B1451_left.png'
import right from './B1451_right.png'
import middle from './B1451_middle.png'


const styles = {
    img: {
        display: 'block',
        width: '100%',
        height: '100%'
    }
}


export const Top = ({ style }) => <img src={top} style={style || styles.img} alt='top' />;
export const Bottom = ({ style }) => <img src={bottom} style={style || styles.img} alt='bottom' />;
export const Left = ({ style }) => <img src={left} style={style || styles.img} alt='left' />;
export const Middle = ({ style }) => <img src={middle} style={style || styles.img} alt='middle' />;
export const Right = ({ style }) => <img src={right} style={style || styles.img} alt='right' />;