const SEVENTH_STRING_NOTE = "B";
const FRET_COUNT = 25;

function setSeventhString(enabled) {
    const existing = document.getElementById("string6");
    if (enabled && existing) return;
    if (!enabled && !existing) return;
    if (enabled) addSeventhString();
    else removeSeventhString();
}

function addSeventhString() {
    const lowE = document.getElementById("string5");
    lowE.classList.remove("string-last");
    const row = buildStringRow("string6");
    document.querySelector(".string-container").appendChild(row);
    const guitarString = new GuitarString(SEVENTH_STRING_NOTE, row);
    strings.push(guitarString);
    guitarString.scalify();
}

function removeSeventhString() {
    const row = document.getElementById("string6");
    if (!row) return;
    row.remove();
    strings.pop();
    document.getElementById("string5").classList.add("string-last");
}

function buildStringRow(id) {
    const row = document.createElement("div");
    row.id = id;
    row.className = "string string-last";

    const plus = document.createElement("button");
    plus.className = "tuner plus";
    plus.type = "button";
    plus.textContent = "+";

    const tuneNote = document.createElement("div");
    tuneNote.className = "tuner tune-note";

    const minus = document.createElement("button");
    minus.className = "tuner minus";
    minus.type = "button";
    minus.textContent = "-";

    row.append(plus, tuneNote, minus);

    for (let fret = 0; fret < FRET_COUNT; fret++) {
        const cell = document.createElement("div");
        cell.className = "string-fret";
        if (fret === 0) cell.classList.add("fret-first");
        if (fret === FRET_COUNT - 1) cell.classList.add("fret-last");
        const note = document.createElement("div");
        note.className = "fret-note";
        cell.appendChild(note);
        row.appendChild(cell);
    }
    return row;
}

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

function displayChordQualities(currentScale) {
    let container = document.querySelector(".chord-qualities-container");
    container.innerHTML = "";
    
    // Only show chord qualities for scales that have them defined
    if (!chordQualities[scaleName]) {
        container.style.display = "none";
        return;
    }
    
    container.style.display = "flex";
    
    // Create chord quality indicators for each scale degree
    for (let i = 0; i < scale.length; i++) {
        let chordDiv = document.createElement("div");
        chordDiv.classList.add("chord-quality");
        chordDiv.style.color = bgColors[i];
        
        // Add Roman numeral - uppercase for major, lowercase for minor
        let numeral = document.createElement("div");
        numeral.classList.add("chord-numeral");
        
        // Get the chord quality for this degree
        const quality = chordQualities[scaleName][i] || "";
        
        // Use uppercase for major, lowercase for minor
        if (quality === "min") {
            // Lowercase for minor
            numeral.textContent = romanNumerals[i].toLowerCase();
        } else {
            // Uppercase for major, dim, aug
            numeral.textContent = romanNumerals[i];
        }
        
        chordDiv.appendChild(numeral);
        
        // Add chord quality
        let qualityDiv = document.createElement("div");
        qualityDiv.classList.add("chord-type");
        qualityDiv.textContent = quality;
        chordDiv.appendChild(qualityDiv);
        
        container.appendChild(chordDiv);
    }
}