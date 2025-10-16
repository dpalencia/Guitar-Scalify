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