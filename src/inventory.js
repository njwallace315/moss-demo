import uniqid from 'uniqid';
import moment from 'moment'

const bump = 8; // accounts for margin on html body
const rackShift = 227;
const shift_ipad_p_bottom = 222;
const shift_ipad_l_bottom = 227;
const shift_ipad_p_top = 224;
const shift_ipad_l_top = 227;
const ipad6thBSC_v = {
    height: 200,
    width: 129,
    x: 150 + bump,
    y: 162
}

const ipad6thRackBottom_v = {
    width: 37,
    height: 215.5,
    x: 100 + bump,
    y: 830 + bump
}

const ipad6thRackTop_v = {
    width: 39,
    height: 219,
    x: 650 + bump,
    y: 835 + bump
}

const ipad6thBSC_h = {
    height: 133,
    width: 203,
    x: 157 + bump,
    y: 613.7 + bump
}

const ipad6thRackBottom_h = {
    height: 37,
    width: 215.5,
    x: 848.7 + bump,
    y: 667.4 + bump
}

const ipad6thRackTop_h = {
    height: 39,
    width: 219,
    x: 848 + bump,
    y: 105 + bump
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
                left: ipad6thBSC_v.x - (ipad6thBSC_v.width / 2),
                top: ipad6thBSC_v.y - (ipad6thBSC_v.height / 2),
                height: ipad6thBSC_v.height,
                width: ipad6thBSC_v.width,
                opacity: .5,
                backgroundColor: 'red',
                position: 'absolute',
                zIndex: 101,

            },
            ipad_h: {
                left: ipad6thBSC_h.x - (ipad6thBSC_h.width / 2),
                top: ipad6thBSC_h.y - (ipad6thBSC_h.height / 2),
                height: ipad6thBSC_h.height,
                width: ipad6thBSC_h.width,
                opacity: .5,
                backgroundColor: 'red',
                position: 'absolute',
                zIndex: 101,

            }
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
                left: ipad6thRackBottom_v.x - (ipad6thRackBottom_v.width / 2),
                top: ipad6thRackBottom_v.y - (ipad6thRackBottom_v.height / 2),
                height: ipad6thRackBottom_v.height,
                width: ipad6thRackBottom_v.width,
                opacity: .5,
                backgroundColor: 'red',
                position: 'absolute',
                zIndex: 101,

            },
            ipad_l: {
                left: ipad6thRackBottom_h.x - (ipad6thRackBottom_h.width / 2),
                top: ipad6thRackBottom_h.y - (ipad6thRackBottom_h.height / 2),
                height: ipad6thRackBottom_h.height,
                width: ipad6thRackBottom_h.width,
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
                left: ipad6thRackBottom_v.x - (ipad6thRackBottom_v.width / 2),
                top: ipad6thRackBottom_v.y - (ipad6thRackBottom_v.height / 2) - shift_ipad_p_bottom,
                height: ipad6thRackBottom_v.height,
                width: ipad6thRackBottom_v.width,
                opacity: .5,
                backgroundColor: 'red',
                position: 'absolute',
                zIndex: 101,

            },
            ipad_l: {
                left: ipad6thRackBottom_h.x - (ipad6thRackBottom_h.width / 2) - shift_ipad_l_bottom,
                top: ipad6thRackBottom_h.y - (ipad6thRackBottom_h.height / 2),
                height: ipad6thRackBottom_h.height,
                width: ipad6thRackBottom_h.width,
                opacity: .5,
                backgroundColor: 'red',
                position: 'absolute',
                zIndex: 101,

            }
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
                left: ipad6thRackBottom_v.x - (ipad6thRackBottom_v.width / 2),
                top: ipad6thRackBottom_v.y - (ipad6thRackBottom_v.height / 2) - 2 * shift_ipad_p_bottom,
                height: ipad6thRackBottom_v.height,
                width: ipad6thRackBottom_v.width,
                opacity: .5,
                backgroundColor: 'red',
                position: 'absolute',
                zIndex: 101,

            },
            ipad_l: {
                left: ipad6thRackBottom_h.x - (ipad6thRackBottom_h.width / 2) - 2 * shift_ipad_l_bottom,
                top: ipad6thRackBottom_h.y - (ipad6thRackBottom_h.height / 2),
                height: ipad6thRackBottom_h.height,
                width: ipad6thRackBottom_h.width,
                opacity: .5,
                backgroundColor: 'red',
                position: 'absolute',
                zIndex: 101,

            }
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
                left: ipad6thRackTop_v.x - (ipad6thRackTop_v.width / 2),
                top: ipad6thRackTop_v.y - (ipad6thRackTop_v.height / 2) - 3 * shift_ipad_p_top,
                height: ipad6thRackTop_v.height,
                width: ipad6thRackTop_v.width,
                opacity: .5,
                backgroundColor: 'red',
                position: 'absolute',
                zIndex: 101,

            },
            ipad_l: {
                left: ipad6thRackTop_h.x - (ipad6thRackTop_h.width / 2) - 3 * shift_ipad_l_top,
                top: ipad6thRackTop_h.y - (ipad6thRackTop_h.height / 2),
                height: ipad6thRackTop_h.height,
                width: ipad6thRackTop_h.width,
                opacity: .5,
                backgroundColor: 'red',
                position: 'absolute',
                zIndex: 101,

            }
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
                left: ipad6thRackTop_v.x - (ipad6thRackTop_v.width / 2),
                top: ipad6thRackTop_v.y - (ipad6thRackTop_v.height / 2) - 2 * shift_ipad_p_top,
                height: ipad6thRackTop_v.height,
                width: ipad6thRackTop_v.width,
                opacity: .5,
                backgroundColor: 'red',
                position: 'absolute',
                zIndex: 101,

            },
            ipad_l: {
                left: ipad6thRackTop_h.x - (ipad6thRackTop_h.width / 2) - 2 * shift_ipad_l_top,
                top: ipad6thRackTop_h.y - (ipad6thRackTop_h.height / 2),
                height: ipad6thRackTop_h.height,
                width: ipad6thRackTop_h.width,
                opacity: .5,
                backgroundColor: 'red',
                position: 'absolute',
                zIndex: 101,

            }
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
                left: ipad6thRackTop_v.x - (ipad6thRackTop_v.width / 2),
                top: ipad6thRackTop_v.y - (ipad6thRackTop_v.height / 2) - shift_ipad_p_top,
                height: ipad6thRackTop_v.height,
                width: ipad6thRackTop_v.width,
                opacity: .5,
                backgroundColor: 'red',
                position: 'absolute',
                zIndex: 101,

            },
            ipad_l: {
                left: ipad6thRackTop_h.x - (ipad6thRackTop_h.width / 2) - shift_ipad_l_top,
                top: ipad6thRackTop_h.y - (ipad6thRackTop_h.height / 2),
                height: ipad6thRackTop_h.height,
                width: ipad6thRackTop_h.width,
                opacity: .5,
                backgroundColor: 'red',
                position: 'absolute',
                zIndex: 101,

            }
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
                left: ipad6thRackTop_v.x - (ipad6thRackTop_v.width / 2),
                top: ipad6thRackTop_v.y - (ipad6thRackTop_v.height / 2),
                height: ipad6thRackTop_v.height,
                width: ipad6thRackTop_v.width,
                opacity: .5,
                backgroundColor: 'red',
                position: 'absolute',
                zIndex: 101,

            },
            ipad_l: {
                left: ipad6thRackTop_h.x - (ipad6thRackTop_h.width / 2),
                top: ipad6thRackTop_h.y - (ipad6thRackTop_h.height / 2),
                height: ipad6thRackTop_h.height,
                width: ipad6thRackTop_h.width,
                opacity: .5,
                backgroundColor: 'red',
                position: 'absolute',
                zIndex: 101,

            }
        },
    },
]

export default inventory