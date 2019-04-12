import uniqid from 'uniqid';

const rackShift = 227;
const ipad6thBSC = {
    height: 133,
    width: 203,
    x: 157,
    y: 613.7
}

const ipad6thRackBottom = {
    height: 37,
    width: 215.5,
    x: 848.7,
    y: 667.4
}

const ipad6thRackTop = {
    height: 37,
    width: 215.5,
    x: 850,
    y: 104.17
}
const inventory = [
    {
        type: 'item',
        _id: uniqid(),
        name: 'Class II BSC',
        label: 'Class II BSC',
        description: 'Demo BSC. Does not necessarily reflect room inventory.',
        orders: [],
        style: {
            left: ipad6thBSC.x - (ipad6thBSC.width / 2),
            top: ipad6thBSC.y - (ipad6thBSC.height / 2),
            height: ipad6thBSC.height,
            width: ipad6thBSC.width,
            opacity: 0,
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
            left: ipad6thRackBottom.x - (ipad6thRackBottom.width / 2),
            top: ipad6thRackBottom.y - (ipad6thRackBottom.height / 2),
            height: ipad6thRackBottom.height,
            width: ipad6thRackBottom.width,
            opacity: 0,
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
            left: ipad6thRackBottom.x - (ipad6thRackBottom.width / 2) - rackShift,
            top: ipad6thRackBottom.y - (ipad6thRackBottom.height / 2),
            height: ipad6thRackBottom.height,
            width: ipad6thRackBottom.width,
            opacity: 0,
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
            left: ipad6thRackBottom.x - (ipad6thRackBottom.width / 2) - 2 * rackShift,
            top: ipad6thRackBottom.y - (ipad6thRackBottom.height / 2),
            height: ipad6thRackBottom.height,
            width: ipad6thRackBottom.width,
            opacity: 0,
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
            left: ipad6thRackTop.x - (ipad6thRackTop.width / 2) - 3 * rackShift,
            top: ipad6thRackTop.y - (ipad6thRackTop.height / 2),
            height: ipad6thRackTop.height,
            width: ipad6thRackTop.width,
            opacity: 0,
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
            left: ipad6thRackTop.x - (ipad6thRackTop.width / 2) - 2 * rackShift,
            top: ipad6thRackTop.y - (ipad6thRackTop.height / 2),
            height: ipad6thRackTop.height,
            width: ipad6thRackTop.width,
            opacity: 0,
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
            left: ipad6thRackTop.x - (ipad6thRackTop.width / 2) - rackShift,
            top: ipad6thRackTop.y - (ipad6thRackTop.height / 2),
            height: ipad6thRackTop.height,
            width: ipad6thRackTop.width,
            opacity: 0,
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
            left: ipad6thRackTop.x - (ipad6thRackTop.width / 2),
            top: ipad6thRackTop.y - (ipad6thRackTop.height / 2),
            height: ipad6thRackTop.height,
            width: ipad6thRackTop.width,
            opacity: 0,
            position: 'absolute',
            zIndex: 101,

        }
    },
]

export default inventory