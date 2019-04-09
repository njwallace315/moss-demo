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
        values.push(generateDataPoint(i > 0 ? values[i - 1] : 25, 0.5))
    }
    return values;
}