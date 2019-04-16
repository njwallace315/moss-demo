import uniqid from 'uniqid';
import moment from 'moment'

const bump = 8; // accounts for margin on html body
const shift_ipad_p_bottom = 222;
const shift_ipad_l_bottom = 227;
const shift_ipad_p_top = 224;
const shift_ipad_l_top = 227;
const shift_pro_p_bottom = 305.5;
const shift_pro_p_top = 306;
const shift_pro_l_bottom = 305.5;
const shift_pro_l_top = 306;

const ipad_BSC_p = {
    height: 200,
    width: 129,
    x: 150 + bump,
    y: 162
}

const ipad_rack_bottom_p = {
    width: 37,
    height: 215.5,
    x: 100 + bump,
    y: 830 + bump
}

const ipad_rack_top_p = {
    width: 39,
    height: 219,
    x: 650 + bump,
    y: 835 + bump
}

const ipad_BSC_l = {
    height: 133,
    width: 203,
    x: 157 + bump,
    y: 613.7 + bump
}

const ipad_rack_bottom_l = {
    height: 37,
    width: 215.5,
    x: 848.7 + bump,
    y: 667.4 + bump
}

const ipad_rack_top_l = {
    height: 39,
    width: 219,
    x: 848 + bump,
    y: 105 + bump
}

const pro_BSC_l = {
    width: 273.5,
    height: 177.8,
    x: 211 + bump,
    y: 819 + bump
}

const pro_rack_bottom_l = {
    width: 290,
    height: 49,
    x: 1141.7 + bump,
    y: 890.5 + bump,
}

const pro_rack_top_l = {
    width: 295,
    height: 51,
    x: 1143.2 + bump,
    y: 139 + bump,
}

const pro_BSC_p = {
    height: 273.5,
    width: 177.8,
    x: 205 + bump,
    y: 211 + bump
}

const pro_rack_bottom_p = {
    height: 290,
    width: 49,
    x: 133.5 + bump,
    y: 1141.6 + bump,
}

const pro_rack_top_p = {
    height: 297,
    width: 53,
    x: 885 + bump,
    y: 1143 + bump,
}

const bsc = uniqid()
const rack1 = uniqid()
const rack2 = uniqid()
const rack3 = uniqid()
const rack4 = uniqid()
const rack5 = uniqid()
const rack6 = uniqid()
const rack7 = uniqid()

const inventory = [
    {
        type: 'item',
        _id: bsc,
        name: 'Class II BSC',
        link: 'https://bakerco.com/products/safegard/sterilgard/sterilgard-e3/',
        label: 'Class II BSC',
        details: [
            {
                label: 'Last filter change',
                value: moment().subtract(5, 'months').format('MM/DD/YYYY')
            },
            {
                label: 'Last calibration',
                value: moment().subtract(51, 'days').format('MM/DD/YYYY')
            },
            {
                label: 'Acceptable pressure range',
                value: '-0.54 ' + String.fromCharCode(0xB1) + ' 0.07'
            },
        ],
        description: 'SterilGard Class II BSC.',
        orders: [],
        style: {
            ipad_p: {
                left: ipad_BSC_p.x - (ipad_BSC_p.width / 2),
                top: ipad_BSC_p.y - (ipad_BSC_p.height / 2),
                height: ipad_BSC_p.height,
                width: ipad_BSC_p.width,
                opacity: .5,
                backgroundColor: 'red',
                position: 'absolute',
                zIndex: 101,

            },
            ipad_l: {
                left: ipad_BSC_l.x - (ipad_BSC_l.width / 2),
                top: ipad_BSC_l.y - (ipad_BSC_l.height / 2),
                height: ipad_BSC_l.height,
                width: ipad_BSC_l.width,
                opacity: .5,
                backgroundColor: 'red',
                position: 'absolute',
                zIndex: 101,

            },
            pro_l: {
                left: pro_BSC_l.x - (pro_BSC_l.width / 2),
                top: pro_BSC_l.y - (pro_BSC_l.height / 2),
                height: pro_BSC_l.height,
                width: pro_BSC_l.width,
                opacity: .5,
                backgroundColor: 'red',
                position: 'absolute',
                zIndex: 101,

            },
            pro_p: {
                left: pro_BSC_p.x - (pro_BSC_p.width / 2),
                top: pro_BSC_p.y - (pro_BSC_p.height / 2),
                height: pro_BSC_p.height,
                width: pro_BSC_p.width,
                opacity: .5,
                backgroundColor: 'red',
                position: 'absolute',
                zIndex: 101,

            },
        }
    },
    {
        type: 'item',
        _id: rack1,
        name: 'Alternative Design IVC Mouse Rack',
        link: 'https://www.altdesign.com/products/animals/mouse/macs-ultra-air-single-sided-mobile-frame-ventilated-caging-system/',
        label: 'Rack 1',
        description: 'Rack 1',
        orders: [],
        style: {
            ipad_p: {
                left: ipad_rack_bottom_p.x - (ipad_rack_bottom_p.width / 2),
                top: ipad_rack_bottom_p.y - (ipad_rack_bottom_p.height / 2),
                height: ipad_rack_bottom_p.height,
                width: ipad_rack_bottom_p.width,
                opacity: .5,
                backgroundColor: 'red',
                position: 'absolute',
                zIndex: 101,

            },
            ipad_l: {
                left: ipad_rack_bottom_l.x - (ipad_rack_bottom_l.width / 2),
                top: ipad_rack_bottom_l.y - (ipad_rack_bottom_l.height / 2),
                height: ipad_rack_bottom_l.height,
                width: ipad_rack_bottom_l.width,
                opacity: .5,
                backgroundColor: 'red',
                position: 'absolute',
                zIndex: 101,

            },
            pro_l: {
                left: pro_rack_bottom_l.x - (pro_rack_bottom_l.width / 2),
                top: pro_rack_bottom_l.y - (pro_rack_bottom_l.height / 2),
                height: pro_rack_bottom_l.height,
                width: pro_rack_bottom_l.width,
                opacity: .5,
                backgroundColor: 'red',
                position: 'absolute',
                zIndex: 101,

            },
            pro_p: {
                left: pro_rack_bottom_p.x - (pro_rack_bottom_p.width / 2),
                top: pro_rack_bottom_p.y - (pro_rack_bottom_p.height / 2),
                height: pro_rack_bottom_p.height,
                width: pro_rack_bottom_p.width,
                opacity: .5,
                backgroundColor: 'red',
                position: 'absolute',
                zIndex: 101,

            }
        },
    },
    {
        type: 'item',
        _id: rack2,
        name: 'Alternative Design IVC Mouse Rack',
        link: 'https://www.altdesign.com/products/animals/mouse/macs-ultra-air-single-sided-mobile-frame-ventilated-caging-system/',
        label: 'Rack 2',
        description: 'Rack 2',
        orders: [],
        style: {
            ipad_p: {
                left: ipad_rack_bottom_p.x - (ipad_rack_bottom_p.width / 2),
                top: ipad_rack_bottom_p.y - (ipad_rack_bottom_p.height / 2) - shift_ipad_p_bottom,
                height: ipad_rack_bottom_p.height,
                width: ipad_rack_bottom_p.width,
                opacity: .5,
                backgroundColor: 'red',
                position: 'absolute',
                zIndex: 101,

            },
            ipad_l: {
                left: ipad_rack_bottom_l.x - (ipad_rack_bottom_l.width / 2) - shift_ipad_l_bottom,
                top: ipad_rack_bottom_l.y - (ipad_rack_bottom_l.height / 2),
                height: ipad_rack_bottom_l.height,
                width: ipad_rack_bottom_l.width,
                opacity: .5,
                backgroundColor: 'red',
                position: 'absolute',
                zIndex: 101,

            },
            pro_l: {
                left: pro_rack_bottom_l.x - (pro_rack_bottom_l.width / 2) - shift_pro_l_bottom,
                top: pro_rack_bottom_l.y - (pro_rack_bottom_l.height / 2),
                height: pro_rack_bottom_l.height,
                width: pro_rack_bottom_l.width,
                opacity: .5,
                backgroundColor: 'red',
                position: 'absolute',
                zIndex: 101,

            },
            pro_p: {
                left: pro_rack_bottom_p.x - (pro_rack_bottom_p.width / 2),
                top: pro_rack_bottom_p.y - (pro_rack_bottom_p.height / 2) - shift_pro_p_bottom,
                height: pro_rack_bottom_p.height,
                width: pro_rack_bottom_p.width,
                opacity: .5,
                backgroundColor: 'red',
                position: 'absolute',
                zIndex: 101,

            },
        },
    },
    {
        type: 'item',
        _id: rack3,
        name: 'Alternative Design IVC Mouse Rack',
        link: 'https://www.altdesign.com/products/animals/mouse/macs-ultra-air-single-sided-mobile-frame-ventilated-caging-system/',
        label: 'Rack 3',
        description: 'Rack 3',
        orders: [],
        style: {
            ipad_p: {
                left: ipad_rack_bottom_p.x - (ipad_rack_bottom_p.width / 2),
                top: ipad_rack_bottom_p.y - (ipad_rack_bottom_p.height / 2) - 2 * shift_ipad_p_bottom,
                height: ipad_rack_bottom_p.height,
                width: ipad_rack_bottom_p.width,
                opacity: .5,
                backgroundColor: 'red',
                position: 'absolute',
                zIndex: 101,

            },
            ipad_l: {
                left: ipad_rack_bottom_l.x - (ipad_rack_bottom_l.width / 2) - 2 * shift_ipad_l_bottom,
                top: ipad_rack_bottom_l.y - (ipad_rack_bottom_l.height / 2),
                height: ipad_rack_bottom_l.height,
                width: ipad_rack_bottom_l.width,
                opacity: .5,
                backgroundColor: 'red',
                position: 'absolute',
                zIndex: 101,

            },
            pro_l: {
                left: pro_rack_bottom_l.x - (pro_rack_bottom_l.width / 2) - 2 * shift_pro_l_bottom,
                top: pro_rack_bottom_l.y - (pro_rack_bottom_l.height / 2),
                height: pro_rack_bottom_l.height,
                width: pro_rack_bottom_l.width,
                opacity: .5,
                backgroundColor: 'red',
                position: 'absolute',
                zIndex: 101,

            },
            pro_p: {
                left: pro_rack_bottom_p.x - (pro_rack_bottom_p.width / 2),
                top: pro_rack_bottom_p.y - (pro_rack_bottom_p.height / 2) - 2 * shift_pro_p_bottom,
                height: pro_rack_bottom_p.height,
                width: pro_rack_bottom_p.width,
                opacity: .5,
                backgroundColor: 'red',
                position: 'absolute',
                zIndex: 101,

            },
        },
    },
    {
        type: 'item',
        _id: rack4,
        name: 'Alternative Design IVC Mouse Rack',
        link: 'https://www.altdesign.com/products/animals/mouse/macs-ultra-air-single-sided-mobile-frame-ventilated-caging-system/',
        label: 'Rack 4',
        description: 'Rack 4',
        orders: [],
        style: {
            ipad_p: {
                left: ipad_rack_top_p.x - (ipad_rack_top_p.width / 2),
                top: ipad_rack_top_p.y - (ipad_rack_top_p.height / 2) - 3 * shift_ipad_p_top,
                height: ipad_rack_top_p.height,
                width: ipad_rack_top_p.width,
                opacity: .5,
                backgroundColor: 'red',
                position: 'absolute',
                zIndex: 101,

            },
            ipad_l: {
                left: ipad_rack_top_l.x - (ipad_rack_top_l.width / 2) - 3 * shift_ipad_l_top,
                top: ipad_rack_top_l.y - (ipad_rack_top_l.height / 2),
                height: ipad_rack_top_l.height,
                width: ipad_rack_top_l.width,
                opacity: .5,
                backgroundColor: 'red',
                position: 'absolute',
                zIndex: 101,

            },
            pro_l: {
                left: pro_rack_top_l.x - (pro_rack_top_l.width / 2) - 3 * shift_pro_l_top,
                top: pro_rack_top_l.y - (pro_rack_top_l.height / 2),
                height: pro_rack_top_l.height,
                width: pro_rack_top_l.width,
                opacity: .5,
                backgroundColor: 'red',
                position: 'absolute',
                zIndex: 101,
            },
            pro_p: {
                left: pro_rack_top_p.x - (pro_rack_top_p.width / 2),
                top: pro_rack_top_p.y - (pro_rack_top_p.height / 2) - 3 * shift_pro_p_top,
                height: pro_rack_top_p.height,
                width: pro_rack_top_p.width,
                opacity: .5,
                backgroundColor: 'red',
                position: 'absolute',
                zIndex: 101,
            },
        },
    },
    {
        type: 'item',
        _id: rack5,
        name: 'Alternative Design IVC Mouse Rack',
        link: 'https://www.altdesign.com/products/animals/mouse/macs-ultra-air-single-sided-mobile-frame-ventilated-caging-system/',
        label: 'Rack 5',
        description: 'Rack 5',
        orders: [],
        style: {
            ipad_p: {
                left: ipad_rack_top_p.x - (ipad_rack_top_p.width / 2),
                top: ipad_rack_top_p.y - (ipad_rack_top_p.height / 2) - 2 * shift_ipad_p_top,
                height: ipad_rack_top_p.height,
                width: ipad_rack_top_p.width,
                opacity: .5,
                backgroundColor: 'red',
                position: 'absolute',
                zIndex: 101,

            },
            ipad_l: {
                left: ipad_rack_top_l.x - (ipad_rack_top_l.width / 2) - 2 * shift_ipad_l_top,
                top: ipad_rack_top_l.y - (ipad_rack_top_l.height / 2),
                height: ipad_rack_top_l.height,
                width: ipad_rack_top_l.width,
                opacity: .5,
                backgroundColor: 'red',
                position: 'absolute',
                zIndex: 101,

            },
            pro_l: {
                left: pro_rack_top_l.x - (pro_rack_top_l.width / 2) - 2 * shift_pro_l_top,
                top: pro_rack_top_l.y - (pro_rack_top_l.height / 2),
                height: pro_rack_top_l.height,
                width: pro_rack_top_l.width,
                opacity: .5,
                backgroundColor: 'red',
                position: 'absolute',
                zIndex: 101,
            },
            pro_p: {
                left: pro_rack_top_p.x - (pro_rack_top_p.width / 2),
                top: pro_rack_top_p.y - (pro_rack_top_p.height / 2) - 2 * shift_pro_p_top,
                height: pro_rack_top_p.height,
                width: pro_rack_top_p.width,
                opacity: .5,
                backgroundColor: 'red',
                position: 'absolute',
                zIndex: 101,

            },
        },
    },
    {
        type: 'item',
        _id: rack6,
        name: 'Alternative Design IVC Mouse Rack',
        link: 'https://www.altdesign.com/products/animals/mouse/macs-ultra-air-single-sided-mobile-frame-ventilated-caging-system/',
        label: 'Rack 6',
        description: 'Rack 6',
        orders: [],
        style: {
            ipad_p: {
                left: ipad_rack_top_p.x - (ipad_rack_top_p.width / 2),
                top: ipad_rack_top_p.y - (ipad_rack_top_p.height / 2) - shift_ipad_p_top,
                height: ipad_rack_top_p.height,
                width: ipad_rack_top_p.width,
                opacity: .5,
                backgroundColor: 'red',
                position: 'absolute',
                zIndex: 101,
            },
            ipad_l: {
                left: ipad_rack_top_l.x - (ipad_rack_top_l.width / 2) - shift_ipad_l_top,
                top: ipad_rack_top_l.y - (ipad_rack_top_l.height / 2),
                height: ipad_rack_top_l.height,
                width: ipad_rack_top_l.width,
                opacity: .5,
                backgroundColor: 'red',
                position: 'absolute',
                zIndex: 101,
            },
            pro_l: {
                left: pro_rack_top_l.x - (pro_rack_top_l.width / 2) - shift_pro_l_top,
                top: pro_rack_top_l.y - (pro_rack_top_l.height / 2),
                height: pro_rack_top_l.height,
                width: pro_rack_top_l.width,
                opacity: .5,
                backgroundColor: 'red',
                position: 'absolute',
                zIndex: 101,
            },
            pro_p: {
                left: pro_rack_top_p.x - (pro_rack_top_p.width / 2),
                top: pro_rack_top_p.y - (pro_rack_top_p.height / 2) - shift_pro_p_top,
                height: pro_rack_top_p.height,
                width: pro_rack_top_p.width,
                opacity: .5,
                backgroundColor: 'red',
                position: 'absolute',
                zIndex: 101,
            },
        },
    },
    {
        type: 'item',
        _id: rack7,
        name: 'Alternative Design IVC Mouse Rack',
        link: 'https://www.altdesign.com/products/animals/mouse/macs-ultra-air-single-sided-mobile-frame-ventilated-caging-system/',
        label: 'Rack 7',
        description: 'Rack 7',
        orders: [],
        style: {
            ipad_p: {
                left: ipad_rack_top_p.x - (ipad_rack_top_p.width / 2),
                top: ipad_rack_top_p.y - (ipad_rack_top_p.height / 2),
                height: ipad_rack_top_p.height,
                width: ipad_rack_top_p.width,
                opacity: .5,
                backgroundColor: 'red',
                position: 'absolute',
                zIndex: 101,

            },
            ipad_l: {
                left: ipad_rack_top_l.x - (ipad_rack_top_l.width / 2),
                top: ipad_rack_top_l.y - (ipad_rack_top_l.height / 2),
                height: ipad_rack_top_l.height,
                width: ipad_rack_top_l.width,
                opacity: .5,
                backgroundColor: 'red',
                position: 'absolute',
                zIndex: 101,

            },
            pro_l: {
                left: pro_rack_top_l.x - (pro_rack_top_l.width / 2),
                top: pro_rack_top_l.y - (pro_rack_top_l.height / 2),
                height: pro_rack_top_l.height,
                width: pro_rack_top_l.width,
                opacity: .5,
                backgroundColor: 'red',
                position: 'absolute',
                zIndex: 101,

            },
            pro_p: {
                left: pro_rack_top_p.x - (pro_rack_top_p.width / 2),
                top: pro_rack_top_p.y - (pro_rack_top_p.height / 2),
                height: pro_rack_top_p.height,
                width: pro_rack_top_p.width,
                opacity: .5,
                backgroundColor: 'red',
                position: 'absolute',
                zIndex: 101,

            },
        },
    },
]

export default inventory