class GuitarString { // Represent a guitar string:
    // First note (0th fret), # of frets, corresponding DOM element,
    // and initialize its HTML element
    constructor(note, container) {
        this.container = container;
        this.fretContainer= container.querySelectorAll(".string-fret");
        this.note = note;
        // Fill in the HTML initially
        this.writeNotes("C");
    }
    //  Take root as a parameter to determine which scale to use
    //  to the HTML objects (sharps  or flats)
    writeNotes(root) {
        if(sharpRoots.includes(root)) {
            for(let i = chromaticSharps.indexOf(this.note), j = 0; j < this.fretContainer.length; j++, i = (i + 1) % chromaticSharps.length) {
                let noteHTML = this.fretContainer[j].querySelector(".fret-note");
                noteHTML.innerHTML = chromaticSharps[i];
                this.fretContainer[j].classList.add(chromatic[i]);  // classList.add() ignores existing classes in subsequent calls
            }
        } else {
            for(let i = chromatic.indexOf(this.note), j = 0; j < this.fretContainer.length; j++, i = (i + 1) % chromatic.length) {
                let noteHTML = this.fretContainer[j].querySelector(".fret-note");
                noteHTML.innerHTML = chromatic[i];
                this.fretContainer[j].classList.add(chromatic[i]); 
            }
         }
    }
    // Takes scale intervals  as its  argument
    scalify(scale, root) {
        // Clear up the notes
        let allFrets = document.querySelectorAll(".fret-note");
        allFrets.forEach(function(fret) {
            fret.style.opacity = "0";
        });
        this.writeNotes(root);
        // Enable the relevant notes
        for(let i = 0; i < scale.length; i++) {
            let noteFrets = document.querySelectorAll("." + scale[i] + " .fret-note"); // Select all note HTML objects for the current note
            noteFrets.forEach(function(fretHTML) {
                fretHTML.style.backgroundColor = bgColors[i];
                fretHTML.style.opacity = "1";               
            });
        }
    }
};

class Guitar {
    constructor() {
        this.tuning = ["E", "B", "G", "D", "A", "E"]; // Tuning is "backwards" to make array iteration cleaner
        this.strings = []; // An array of string objects
        this.domStrings = document.querySelectorAll(".string");
        // Pass each string the parent element and tonic. Its constructor handles the rest
        for(let i = 0; i < this.tuning.length; i++) {
            this.strings.push(new GuitarString(this.tuning[i], this.domStrings[i]));
        }
        this.key = "C";
        this.scale = []; // Holds the built out scale
        this.createScale("Major"); // Diatonic scale intervals will be represented as an array
        this.scalify();
    }
    createScale(scaleName) { // Iterate through the chromatic scale with our intervals to create a scale
        this.scale = []; // Clear the scale
        for(let i = chromatic.indexOf(this.key), j = 0; j < scaleIntervals[scaleName].length + 1; 
        i = (i + scaleIntervals[scaleName][j++]) % chromatic.length) {
            this.scale.push(chromatic[i]);
        }
    }
    scalify() { // Update the markup to show the notes of the scale
        this.strings.forEach(function(st) {
            st.scalify(this.scale, this.key);
        }, this); // Need to specify "this" explicitly in a foreach method
    }
};
