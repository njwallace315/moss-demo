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
        let val = generateDataPoint(i > 0 ? values[i - 1] : 72, 0.5)
        if (val > 78) val = 78;
        if (val < 68) val = 68;
        values.push(val)
    }
    return values;
}
export const generateHumidData = (numPoints = 1000) => {
    let values = []
    for (let i = 0; i < numPoints; i++) {
        let val = generateDataPoint(i > 0 ? values[i - 1] : 50, 1)
        if (val > 52) val = 52
        if (val < 10) val = 10
        values.push(val)
    }
    return values;
}