import uniqid from 'uniqid';

const rackShift_v = 227;
const ipad6thBSC_v = {
    height: 133,
    width: 203,
    x: 157,
    y: 613.7
}

const ipad6thRackBottom_v = {
    height: 37,
    width: 215.5,
    x: 848.7,
    y: 667.4
}

const ipad6thRackTop_v = {
    height: 37,
    width: 215.5,
    x: 850,
    y: 104.17
}
export const verticalInventory = [
    {
        type: 'item',
        _id: uniqid(),
        name: 'Class II BSC',
        label: 'Class II BSC',
        description: 'Demo BSC. Does not necessarily reflect room inventory.',
        orders: [],
        style: {
            left: ipad6thBSC_v.x - (ipad6thBSC_v.width / 2),
            top: ipad6thBSC_v.y - (ipad6thBSC_v.height / 2),
            height: ipad6thBSC_v.height,
            width: ipad6thBSC_v.width,
            opacity: .5,
            backgroundColor: 'red',
            position: 'absolute',
            zIndex: 101,

        }
    },
    {
        type: 'item',
        _id: uniqid(),
        name: 'Alternative Design IVC Mouse Rack',
        label: 'Rack 1',
        description: 'Rack 1',
        orders: [],
        style: {
            left: ipad6thRackBottom_v.x - (ipad6thRackBottom_v.width / 2),
            top: ipad6thRackBottom_v.y - (ipad6thRackBottom_v.height / 2),
            height: ipad6thRackBottom_v.height,
            width: ipad6thRackBottom_v.width,
            opacity: .5,
            backgroundColor: 'red',
            position: 'absolute',
            zIndex: 101,

        }
    },
    {
        type: 'item',
        _id: uniqid(),
        name: 'Alternative Design IVC Mouse Rack',
        label: 'Rack 2',
        description: 'Rack 2',
        orders: [],
        style: {
            left: ipad6thRackBottom_v.x - (ipad6thRackBottom_v.width / 2) - rackShift_v,
            top: ipad6thRackBottom_v.y - (ipad6thRackBottom_v.height / 2),
            height: ipad6thRackBottom_v.height,
            width: ipad6thRackBottom_v.width,
            opacity: .5,
            backgroundColor: 'red',
            position: 'absolute',
            zIndex: 101,

        }
    },
    {
        type: 'item',
        _id: uniqid(),
        name: 'Alternative Design IVC Mouse Rack',
        label: 'Rack 3',
        description: 'Rack 3',
        orders: [],
        style: {
            left: ipad6thRackBottom_v.x - (ipad6thRackBottom_v.width / 2) - 2 * rackShift_v,
            top: ipad6thRackBottom_v.y - (ipad6thRackBottom_v.height / 2),
            height: ipad6thRackBottom_v.height,
            width: ipad6thRackBottom_v.width,
            opacity: .5,
            backgroundColor: 'red',
            position: 'absolute',
            zIndex: 101,

        }
    },
    {
        type: 'item',
        _id: uniqid(),
        name: 'Alternative Design IVC Mouse Rack',
        label: 'Rack 4',
        description: 'Rack 4',
        orders: [],
        style: {
            left: ipad6thRackTop_v.x - (ipad6thRackTop_v.width / 2) - 3 * rackShift_v,
            top: ipad6thRackTop_v.y - (ipad6thRackTop_v.height / 2),
            height: ipad6thRackTop_v.height,
            width: ipad6thRackTop_v.width,
            opacity: .5,
            backgroundColor: 'red',
            position: 'absolute',
            zIndex: 101,

        }
    },
    {
        type: 'item',
        _id: uniqid(),
        name: 'Alternative Design IVC Mouse Rack',
        label: 'Rack 5',
        description: 'Rack 5',
        orders: [],
        style: {
            left: ipad6thRackTop_v.x - (ipad6thRackTop_v.width / 2) - 2 * rackShift_v,
            top: ipad6thRackTop_v.y - (ipad6thRackTop_v.height / 2),
            height: ipad6thRackTop_v.height,
            width: ipad6thRackTop_v.width,
            opacity: .5,
            backgroundColor: 'red',
            position: 'absolute',
            zIndex: 101,

        }
    },
    {
        type: 'item',
        _id: uniqid(),
        name: 'Alternative Design IVC Mouse Rack',
        label: 'Rack 6',
        description: 'Rack 6',
        orders: [],
        style: {
            left: ipad6thRackTop_v.x - (ipad6thRackTop_v.width / 2) - rackShift_v,
            top: ipad6thRackTop_v.y - (ipad6thRackTop_v.height / 2),
            height: ipad6thRackTop_v.height,
            width: ipad6thRackTop_v.width,
            opacity: .5,
            backgroundColor: 'red',
            position: 'absolute',
            zIndex: 101,

        }
    },
    {
        type: 'item',
        _id: uniqid(),
        name: 'Alternative Design IVC Mouse Rack',
        label: 'Rack 7',
        description: 'Rack 7',
        orders: [],
        style: {
            left: ipad6thRackTop_v.x - (ipad6thRackTop_v.width / 2),
            top: ipad6thRackTop_v.y - (ipad6thRackTop_v.height / 2),
            height: ipad6thRackTop_v.height,
            width: ipad6thRackTop_v.width,
            opacity: .5,
            backgroundColor: 'red',
            position: 'absolute',
            zIndex: 101,

        }
    },
]

const rackShift_h = 227;
const ipad6thBSC_h = {
    height: 133,
    width: 203,
    x: 160,
    y: 613.7
}

const ipad6thRackBottom_h = {
    height: 37,
    width: 215.5,
    x: 694,
    y: 582
}

const ipad6thRackTop_h = {
    height: 40,
    width: 220,
    x: 691,
    y: 17
}

export const horizontalInventory = [
    {
        type: 'item',
        _id: uniqid(),
        name: 'Class II BSC',
        label: 'Class II BSC',
        description: 'Demo BSC. Does not necessarily reflect room inventory.',
        orders: [],
        style: {
            left: ipad6thBSC_h.x - (ipad6thBSC_h.width * .75),
            top: ipad6thBSC_h.y - (ipad6thBSC_h.height),
            height: ipad6thBSC_h.height,
            width: ipad6thBSC_h.width,
            opacity: .5,
            backgroundColor: 'red',
            position: 'absolute',
            zIndex: 101,

        }
    },
    {
        type: 'item',
        _id: uniqid(),
        name: 'Alternative Design IVC Mouse Rack',
        label: 'Rack 1',
        description: 'Rack 1',
        orders: [],
        style: {
            left: ipad6thRackBottom_h.x,
            top: ipad6thRackBottom_h.y,
            height: ipad6thRackBottom_h.height,
            width: ipad6thRackBottom_h.width,
            opacity: .5,
            backgroundColor: 'red',
            position: 'absolute',
            zIndex: 101,

        }
    },
    {
        type: 'item',
        _id: uniqid(),
        name: 'Alternative Design IVC Mouse Rack',
        label: 'Rack 2',
        description: 'Rack 2',
        orders: [],
        style: {
            left: ipad6thRackBottom_h.x - rackShift_h,
            top: ipad6thRackBottom_h.y,
            height: ipad6thRackBottom_h.height,
            width: ipad6thRackBottom_h.width,
            opacity: .5,
            backgroundColor: 'red',
            position: 'absolute',
            zIndex: 101,

        }
    },
    {
        type: 'item',
        _id: uniqid(),
        name: 'Alternative Design IVC Mouse Rack',
        label: 'Rack 3',
        description: 'Rack 3',
        orders: [],
        style: {
            left: ipad6thRackBottom_h.x - 2 * rackShift_h,
            top: ipad6thRackBottom_h.y,
            height: ipad6thRackBottom_h.height,
            width: ipad6thRackBottom_h.width,
            opacity: .5,
            backgroundColor: 'red',
            position: 'absolute',
            zIndex: 101,

        }
    },
    {
        type: 'item',
        _id: uniqid(),
        name: 'Alternative Design IVC Mouse Rack',
        label: 'Rack 4',
        description: 'Rack 4',
        orders: [],
        style: {
            left: ipad6thRackTop_h.x - 3 * rackShift_h,
            top: ipad6thRackTop_h.y,
            height: ipad6thRackTop_h.height,
            width: ipad6thRackTop_h.width,
            opacity: .5,
            backgroundColor: 'red',
            position: 'absolute',
            zIndex: 101,

        }
    },
    {
        type: 'item',
        _id: uniqid(),
        name: 'Alternative Design IVC Mouse Rack',
        label: 'Rack 5',
        description: 'Rack 5',
        orders: [],
        style: {
            left: ipad6thRackTop_h.x - 2 * rackShift_h,
            top: ipad6thRackTop_h.y,
            height: ipad6thRackTop_h.height,
            width: ipad6thRackTop_h.width,
            opacity: .5,
            backgroundColor: 'red',
            position: 'absolute',
            zIndex: 101,

        }
    },
    {
        type: 'item',
        _id: uniqid(),
        name: 'Alternative Design IVC Mouse Rack',
        label: 'Rack 6',
        description: 'Rack 6',
        orders: [],
        style: {
            left: ipad6thRackTop_h.x - rackShift_h,
            top: ipad6thRackTop_h.y,
            height: ipad6thRackTop_h.height,
            width: ipad6thRackTop_h.width,
            opacity: .5,
            backgroundColor: 'red',
            position: 'absolute',
            zIndex: 101,

        }
    },
    {
        type: 'item',
        _id: uniqid(),
        name: 'Alternative Design IVC Mouse Rack',
        label: 'Rack 7',
        description: 'Rack 7',
        orders: [],
        style: {
            left: ipad6thRackTop_h.x,
            top: ipad6thRackTop_h.y,
            height: ipad6thRackTop_h.height,
            width: ipad6thRackTop_h.width,
            opacity: .5,
            backgroundColor: 'red',
            position: 'absolute',
            zIndex: 101,

        }
    },
]