export const generateDataPoint = (base, multiplier) => {
    let temp;
    if (Math.random() >= .5) {
        temp = base + Math.random() * multiplier
    } else {
        temp = base - Math.random() * multiplier
    }
    return parseFloat(temp.toFixed(2));
}

export const generateTempData = (numPoints = 1000) => {
    let values = []
    for (let i = 0; i < numPoints; i++) {
        values.push(generateDataPoint(i > 0 ? values[i - 1] : 72, 0.5))
    }
    return values;
}
export const generateHumidData = (numPoints = 1000) => {
    let values = []
    for (let i = 0; i < numPoints; i++) {
        let val = generateDataPoint(i > 0 ? values[i - 1] : 50, 1)
        if (val > 100) val = 100
        if (val < 0) val = 0
        values.push(val)
    }
    return values;
}