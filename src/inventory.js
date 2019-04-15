import uniqid from 'uniqid';
import moment from 'moment'

const bump = 8; // accounts for margin on html body
const rackShift_v = 227;
const ipad6thBSC_v = {
    height: 203,
    width: 133,
    x: 154 + bump,
    y: 157 + bump
}

const ipad6thRackBottom_v = {
    width: 37,
    height: 215.5,
    x: 100 + bump,
    y: 848.5 + bump
}

const ipad6thRackTop_v = {
    width: 39,
    height: 219,
    x: 663.6 + bump,
    y: 849 + bump
}

const getInventory = orientation => {
    return [
        {
            type: 'item',
            _id: uniqid(),
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
            style: orientation === 'v' ? {
                left: ipad6thBSC_v.x - (ipad6thBSC_v.width / 2),
                top: ipad6thBSC_v.y - (ipad6thBSC_v.height / 2),
                height: ipad6thBSC_v.height,
                width: ipad6thBSC_v.width,
                opacity: 0,
                position: 'absolute',
                zIndex: 101,

            } : {}
        },
        {
            type: 'item',
            _id: uniqid(),
            name: 'Alternative Design IVC Mouse Rack',
            link: 'https://www.altdesign.com/products/animals/mouse/macs-ultra-air-single-sided-mobile-frame-ventilated-caging-system/',
            label: 'Rack 1',
            description: 'Rack 1',
            orders: [],
            style: orientation === 'v' ? {
                left: ipad6thRackBottom_v.x - (ipad6thRackBottom_v.width / 2),
                top: ipad6thRackBottom_v.y - (ipad6thRackBottom_v.height / 2),
                height: ipad6thRackBottom_v.height,
                width: ipad6thRackBottom_v.width,
                opacity: 0,
                position: 'absolute',
                zIndex: 101,

            } : {}
        },
        {
            type: 'item',
            _id: uniqid(),
            name: 'Alternative Design IVC Mouse Rack',
            link: 'https://www.altdesign.com/products/animals/mouse/macs-ultra-air-single-sided-mobile-frame-ventilated-caging-system/',
            label: 'Rack 2',
            description: 'Rack 2',
            orders: [],
            style: orientation === 'v' ? {
                left: ipad6thRackBottom_v.x - (ipad6thRackBottom_v.width / 2),
                top: ipad6thRackBottom_v.y - (ipad6thRackBottom_v.height / 2) - rackShift_v,
                height: ipad6thRackBottom_v.height,
                width: ipad6thRackBottom_v.width,
                opacity: 0,
                position: 'absolute',
                zIndex: 101,

            } : {}
        },
        {
            type: 'item',
            _id: uniqid(),
            name: 'Alternative Design IVC Mouse Rack',
            link: 'https://www.altdesign.com/products/animals/mouse/macs-ultra-air-single-sided-mobile-frame-ventilated-caging-system/',
            label: 'Rack 3',
            description: 'Rack 3',
            orders: [],
            style: orientation === 'v' ? {
                left: ipad6thRackBottom_v.x - (ipad6thRackBottom_v.width / 2),
                top: ipad6thRackBottom_v.y - (ipad6thRackBottom_v.height / 2) - 2 * rackShift_v,
                height: ipad6thRackBottom_v.height,
                width: ipad6thRackBottom_v.width,
                opacity: 0,
                position: 'absolute',
                zIndex: 101,

            } : {}
        },
        {
            type: 'item',
            _id: uniqid(),
            name: 'Alternative Design IVC Mouse Rack',
            link: 'https://www.altdesign.com/products/animals/mouse/macs-ultra-air-single-sided-mobile-frame-ventilated-caging-system/',
            label: 'Rack 4',
            description: 'Rack 4',
            orders: [],
            style: orientation === 'v' ? {
                left: ipad6thRackTop_v.x - (ipad6thRackTop_v.width / 2),
                top: ipad6thRackTop_v.y - (ipad6thRackTop_v.height / 2) - 3 * rackShift_v,
                height: ipad6thRackTop_v.height,
                width: ipad6thRackTop_v.width,
                opacity: 0,
                position: 'absolute',
                zIndex: 101,

            } : {}
        },
        {
            type: 'item',
            _id: uniqid(),
            name: 'Alternative Design IVC Mouse Rack',
            link: 'https://www.altdesign.com/products/animals/mouse/macs-ultra-air-single-sided-mobile-frame-ventilated-caging-system/',
            label: 'Rack 5',
            description: 'Rack 5',
            orders: [],
            style: orientation === 'v' ? {
                left: ipad6thRackTop_v.x - (ipad6thRackTop_v.width / 2),
                top: ipad6thRackTop_v.y - (ipad6thRackTop_v.height / 2) - 2 * rackShift_v,
                height: ipad6thRackTop_v.height,
                width: ipad6thRackTop_v.width,
                opacity: 0,
                position: 'absolute',
                zIndex: 101,

            } : {}
        },
        {
            type: 'item',
            _id: uniqid(),
            name: 'Alternative Design IVC Mouse Rack',
            link: 'https://www.altdesign.com/products/animals/mouse/macs-ultra-air-single-sided-mobile-frame-ventilated-caging-system/',
            label: 'Rack 6',
            description: 'Rack 6',
            orders: [],
            style: orientation === 'v' ? {
                left: ipad6thRackTop_v.x - (ipad6thRackTop_v.width / 2),
                top: ipad6thRackTop_v.y - (ipad6thRackTop_v.height / 2) - rackShift_v,
                height: ipad6thRackTop_v.height,
                width: ipad6thRackTop_v.width,
                opacity: 0,
                position: 'absolute',
                zIndex: 101,

            } : {}
        },
        {
            type: 'item',
            _id: uniqid(),
            name: 'Alternative Design IVC Mouse Rack',
            link: 'https://www.altdesign.com/products/animals/mouse/macs-ultra-air-single-sided-mobile-frame-ventilated-caging-system/',
            label: 'Rack 7',
            description: 'Rack 7',
            orders: [],
            style: orientation === 'v' ? {
                left: ipad6thRackTop_v.x - (ipad6thRackTop_v.width / 2),
                top: ipad6thRackTop_v.y - (ipad6thRackTop_v.height / 2),
                height: ipad6thRackTop_v.height,
                width: ipad6thRackTop_v.width,
                opacity: 0,
                position: 'absolute',
                zIndex: 101,

            } : {}
        },
    ]
}

export const verticalInventory = [
    {
        type: 'item',
        _id: uniqid(),
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
            left: ipad6thBSC_v.x - (ipad6thBSC_v.width / 2),
            top: ipad6thBSC_v.y - (ipad6thBSC_v.height / 2),
            height: ipad6thBSC_v.height,
            width: ipad6thBSC_v.width,
            opacity: 0,
            position: 'absolute',
            zIndex: 101,

        }
    },
    {
        type: 'item',
        _id: uniqid(),
        name: 'Alternative Design IVC Mouse Rack',
        link: 'https://www.altdesign.com/products/animals/mouse/macs-ultra-air-single-sided-mobile-frame-ventilated-caging-system/',
        label: 'Rack 1',
        description: 'Rack 1',
        orders: [],
        style: {
            left: ipad6thRackBottom_v.x - (ipad6thRackBottom_v.width / 2),
            top: ipad6thRackBottom_v.y - (ipad6thRackBottom_v.height / 2),
            height: ipad6thRackBottom_v.height,
            width: ipad6thRackBottom_v.width,
            opacity: 0,
            position: 'absolute',
            zIndex: 101,

        }
    },
    {
        type: 'item',
        _id: uniqid(),
        name: 'Alternative Design IVC Mouse Rack',
        link: 'https://www.altdesign.com/products/animals/mouse/macs-ultra-air-single-sided-mobile-frame-ventilated-caging-system/',
        label: 'Rack 2',
        description: 'Rack 2',
        orders: [],
        style: {
            left: ipad6thRackBottom_v.x - (ipad6thRackBottom_v.width / 2),
            top: ipad6thRackBottom_v.y - (ipad6thRackBottom_v.height / 2) - rackShift_v,
            height: ipad6thRackBottom_v.height,
            width: ipad6thRackBottom_v.width,
            opacity: 0,
            position: 'absolute',
            zIndex: 101,

        }
    },
    {
        type: 'item',
        _id: uniqid(),
        name: 'Alternative Design IVC Mouse Rack',
        link: 'https://www.altdesign.com/products/animals/mouse/macs-ultra-air-single-sided-mobile-frame-ventilated-caging-system/',
        label: 'Rack 3',
        description: 'Rack 3',
        orders: [],
        style: {
            left: ipad6thRackBottom_v.x - (ipad6thRackBottom_v.width / 2),
            top: ipad6thRackBottom_v.y - (ipad6thRackBottom_v.height / 2) - 2 * rackShift_v,
            height: ipad6thRackBottom_v.height,
            width: ipad6thRackBottom_v.width,
            opacity: 0,
            position: 'absolute',
            zIndex: 101,

        }
    },
    {
        type: 'item',
        _id: uniqid(),
        name: 'Alternative Design IVC Mouse Rack',
        link: 'https://www.altdesign.com/products/animals/mouse/macs-ultra-air-single-sided-mobile-frame-ventilated-caging-system/',
        label: 'Rack 4',
        description: 'Rack 4',
        orders: [],
        style: {
            left: ipad6thRackTop_v.x - (ipad6thRackTop_v.width / 2),
            top: ipad6thRackTop_v.y - (ipad6thRackTop_v.height / 2) - 3 * rackShift_v,
            height: ipad6thRackTop_v.height,
            width: ipad6thRackTop_v.width,
            opacity: 0,
            position: 'absolute',
            zIndex: 101,

        }
    },
    {
        type: 'item',
        _id: uniqid(),
        name: 'Alternative Design IVC Mouse Rack',
        link: 'https://www.altdesign.com/products/animals/mouse/macs-ultra-air-single-sided-mobile-frame-ventilated-caging-system/',
        label: 'Rack 5',
        description: 'Rack 5',
        orders: [],
        style: {
            left: ipad6thRackTop_v.x - (ipad6thRackTop_v.width / 2),
            top: ipad6thRackTop_v.y - (ipad6thRackTop_v.height / 2) - 2 * rackShift_v,
            height: ipad6thRackTop_v.height,
            width: ipad6thRackTop_v.width,
            opacity: 0,
            position: 'absolute',
            zIndex: 101,

        }
    },
    {
        type: 'item',
        _id: uniqid(),
        name: 'Alternative Design IVC Mouse Rack',
        link: 'https://www.altdesign.com/products/animals/mouse/macs-ultra-air-single-sided-mobile-frame-ventilated-caging-system/',
        label: 'Rack 6',
        description: 'Rack 6',
        orders: [],
        style: {
            left: ipad6thRackTop_v.x - (ipad6thRackTop_v.width / 2),
            top: ipad6thRackTop_v.y - (ipad6thRackTop_v.height / 2) - rackShift_v,
            height: ipad6thRackTop_v.height,
            width: ipad6thRackTop_v.width,
            opacity: 0,
            position: 'absolute',
            zIndex: 101,

        }
    },
    {
        type: 'item',
        _id: uniqid(),
        name: 'Alternative Design IVC Mouse Rack',
        link: 'https://www.altdesign.com/products/animals/mouse/macs-ultra-air-single-sided-mobile-frame-ventilated-caging-system/',
        label: 'Rack 7',
        description: 'Rack 7',
        orders: [],
        style: {
            left: ipad6thRackTop_v.x - (ipad6thRackTop_v.width / 2),
            top: ipad6thRackTop_v.y - (ipad6thRackTop_v.height / 2),
            height: ipad6thRackTop_v.height,
            width: ipad6thRackTop_v.width,
            opacity: 0,
            position: 'absolute',
            zIndex: 101,

        }
    },
]

const rackShift_h = 227;
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
export const horizontalInventory = [
    {
        type: 'item',
        _id: uniqid(),
        name: 'Class II BSC',
        link: 'https://bakerco.com/products/safegard/sterilgard/sterilgard-e3/',
        label: 'Class II BSC',
        description: 'SterilGard Class II BSC',
        orders: [],
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
        style: {
            left: ipad6thBSC_h.x - (ipad6thBSC_h.width / 2),
            top: ipad6thBSC_h.y - (ipad6thBSC_h.height / 2),
            height: ipad6thBSC_h.height,
            width: ipad6thBSC_h.width,
            opacity: 0,
            position: 'absolute',
            zIndex: 101,

        }
    },
    {
        type: 'item',
        _id: uniqid(),
        name: 'Alternative Design IVC Mouse Rack',
        link: 'https://www.altdesign.com/products/animals/mouse/macs-ultra-air-single-sided-mobile-frame-ventilated-caging-system/',
        label: 'Rack 1',
        description: 'Rack 1',
        orders: [],
        style: {
            left: ipad6thRackBottom_h.x - (ipad6thRackBottom_h.width / 2),
            top: ipad6thRackBottom_h.y - (ipad6thRackBottom_h.height / 2),
            height: ipad6thRackBottom_h.height,
            width: ipad6thRackBottom_h.width,
            opacity: 0,
            position: 'absolute',
            zIndex: 101,

        }
    },
    {
        type: 'item',
        _id: uniqid(),
        name: 'Alternative Design IVC Mouse Rack',
        link: 'https://www.altdesign.com/products/animals/mouse/macs-ultra-air-single-sided-mobile-frame-ventilated-caging-system/',
        label: 'Rack 2',
        description: 'Rack 2',
        orders: [],
        style: {
            left: ipad6thRackBottom_h.x - (ipad6thRackBottom_h.width / 2) - rackShift_h,
            top: ipad6thRackBottom_h.y - (ipad6thRackBottom_h.height / 2),
            height: ipad6thRackBottom_h.height,
            width: ipad6thRackBottom_h.width,
            opacity: 0,
            position: 'absolute',
            zIndex: 101,

        }
    },
    {
        type: 'item',
        _id: uniqid(),
        name: 'Alternative Design IVC Mouse Rack',
        link: 'https://www.altdesign.com/products/animals/mouse/macs-ultra-air-single-sided-mobile-frame-ventilated-caging-system/',
        label: 'Rack 3',
        description: 'Rack 3',
        orders: [],
        style: {
            left: ipad6thRackBottom_h.x - (ipad6thRackBottom_h.width / 2) - 2 * rackShift_h,
            top: ipad6thRackBottom_h.y - (ipad6thRackBottom_h.height / 2),
            height: ipad6thRackBottom_h.height,
            width: ipad6thRackBottom_h.width,
            opacity: 0,
            position: 'absolute',
            zIndex: 101,

        }
    },
    {
        type: 'item',
        _id: uniqid(),
        name: 'Alternative Design IVC Mouse Rack',
        link: 'https://www.altdesign.com/products/animals/mouse/macs-ultra-air-single-sided-mobile-frame-ventilated-caging-system/',
        label: 'Rack 4',
        description: 'Rack 4',
        orders: [],
        style: {
            left: ipad6thRackTop_h.x - (ipad6thRackTop_h.width / 2) - 3 * rackShift_h,
            top: ipad6thRackTop_h.y - (ipad6thRackTop_h.height / 2),
            height: ipad6thRackTop_h.height,
            width: ipad6thRackTop_h.width,
            opacity: 0,
            position: 'absolute',
            zIndex: 101,

        }
    },
    {
        type: 'item',
        _id: uniqid(),
        name: 'Alternative Design IVC Mouse Rack',
        link: 'https://www.altdesign.com/products/animals/mouse/macs-ultra-air-single-sided-mobile-frame-ventilated-caging-system/',
        label: 'Rack 5',
        description: 'Rack 5',
        orders: [],
        style: {
            left: ipad6thRackTop_h.x - (ipad6thRackTop_h.width / 2) - 2 * rackShift_h,
            top: ipad6thRackTop_h.y - (ipad6thRackTop_h.height / 2),
            height: ipad6thRackTop_h.height,
            width: ipad6thRackTop_h.width,
            opacity: 0,
            position: 'absolute',
            zIndex: 101,

        }
    },
    {
        type: 'item',
        _id: uniqid(),
        name: 'Alternative Design IVC Mouse Rack',
        link: 'https://www.altdesign.com/products/animals/mouse/macs-ultra-air-single-sided-mobile-frame-ventilated-caging-system/',
        label: 'Rack 6',
        description: 'Rack 6',
        orders: [],
        style: {
            left: ipad6thRackTop_h.x - (ipad6thRackTop_h.width / 2) - rackShift_h,
            top: ipad6thRackTop_h.y - (ipad6thRackTop_h.height / 2),
            height: ipad6thRackTop_h.height,
            width: ipad6thRackTop_h.width,
            opacity: 0,
            position: 'absolute',
            zIndex: 101,

        }
    },
    {
        type: 'item',
        _id: uniqid(),
        name: 'Alternative Design IVC Mouse Rack',
        link: 'https://www.altdesign.com/products/animals/mouse/macs-ultra-air-single-sided-mobile-frame-ventilated-caging-system/',
        label: 'Rack 7',
        description: 'Rack 7',
        orders: [],
        style: {
            left: ipad6thRackTop_h.x - (ipad6thRackTop_h.width / 2),
            top: ipad6thRackTop_h.y - (ipad6thRackTop_h.height / 2),
            height: ipad6thRackTop_h.height,
            width: ipad6thRackTop_h.width,
            opacity: 0,
            position: 'absolute',
            zIndex: 101,

        }
    },
]
