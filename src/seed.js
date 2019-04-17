import moment from 'moment'
import inventory from './inventory';
import { generateHumidData, generateTempData } from './helpers'

const SARs = [
    {
        dateFound: new Date(),
        description: "",
        numInCage: "5",
        numSick: "1",
        observations: "Moribund",
        placement: "Rack 2, col C, row 8",
        protocol: "M005160",
        reportedBy: "Nate",
        species: "Mouse",
        vetCardNum: "12345",
    },
    {
        dateFound: moment().subtract(3, 'hours').toDate(),
        description: "",
        numInCage: "3",
        numSick: "1",
        observations: "Fighting",
        placement: "Rack 2, col C, row 8",
        protocol: "M005160",
        reportedBy: "Nate",
        species: "Mouse",
        vetCardNum: "513117",
    }
]

const DARs = [{
    age: "Pup",
    comments: "Number in cage consists of two adults, ten pups including the one found dead.",
    dateFound: moment().subtract(45, 'minutes').toDate(),
    numDead: "1",
    numInCage: "10",
    placement: "Rack 4",
    protocol: "M005160",
    reportedBy: "Nate",
    species: "Mouse",
}]

const OCRs = [{
    comments: "",
    dateFound: moment().toDate(),
    deadline: moment().add(1, 'h').toDate(),
    placement: "Rack 2",
    protocol: "M005160",
    reason: "3+ Adults and a Litter",
    reportedBy: "Nate W",
}]

const workOrders = [
    {
        end: "21:30",
        start: "07:30",
        title: "Update Light Schedule",
        type: "lightSchedule",
    },
    {
        dateRequested: moment().subtract(2, 'weeks').toDate(),
        dueDate: moment().add(2, 'weeks').toDate(),
        itemId: inventory.filter(x => x.name.includes('BSC'))[0]._id,
        itemName: "Class II BSC",
        request: "Replace the HEPA filter in B1451 BSC",
        title: "Replace HEPA Filter",
        type: "maintenance",
    }
]

const alerts = [
    {
        dateFound: moment().subtract(3, 'days').toDate(),
        message: "Protocol M005160 has been approved to have up to three adults with a litter at a time. Please evaluate overcrowded cages accordingly.",
        postedBy: "Demo PI",
        priority: "Moderate",
        subject: "Overcrowded Cage Exception Added",
        targets: "Husbandry Staff",
    },
]

const tasks = [
    {
        dateFound: moment().toDate(),
        description: "An animal has clogged its water spigot with food and it is now dripping. Cages cannot be placed on or below that slot until the drip is fixed.",
        postedBy: "Demo Researcher",
        priority: "High",
        targets: "Husbandry or facility staff",
        taskName: "Fix Watering Spigot",
    }
]


const hazards = [];


const temps = generateTempData();
const temperature = temps[temps.length - 1]

const humids = generateHumidData();
const humidity = humids[humids.length - 1]

const seed = {
    inventory,
    SARs,
    DARs,
    OCRs,
    workOrders,
    alerts,
    hazards,
    tasks,
    temperature,
    humidity,
    temps,
    humids,
}
export default seed;

