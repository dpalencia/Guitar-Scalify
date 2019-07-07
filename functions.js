function createScale() {
    let retScale = [];
    for(let i = chromatic.indexOf(key), j = 0; j < scaleIntervals[scaleName].length + 1; 
    i = (i + scaleIntervals[scaleName][j++]) % chromatic.length) {
        retScale.push(chromatic[i]);
    }
    return retScale;
}

function writeHeading(scaleTitle) {
    heading.innerHTML = scaleTitle;
}