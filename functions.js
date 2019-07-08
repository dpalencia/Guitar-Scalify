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

function createHeadingNotes(createdScale) {
    let notesContainer = document.querySelector(".scale-notes-container");
    notesContainer.innerHTML = "";
    createdScale.forEach(function(s) {
        let newNote = document.createElement("div");
        newNote.style.color = bgColors[createdScale.indexOf(s)];
        newNote.innerHTML = s;
        newNote.classList.add("heading-note");
        notesContainer.appendChild(newNote);
    }); 
}