class GuitarString { // Represent a guitar string:
    // First note (0th fret), # of frets, corresponding DOM element,
    // and initialize its HTML element
    constructor(note, container) {
        this.container = container;
        this.fretContainer = container.querySelectorAll(".string-fret");
        this.note = note;
        // Fill in the HTML initially
        this.writeNotes();
        this.plus = this.container.querySelector(".plus");
        this.minus = this.container.querySelector(".minus");
        let curString = this;
        this.plus.addEventListener("click", curString.plusClick.bind(curString));
        this.minus.addEventListener("click", curString.minusClick.bind(curString));
    }
    
    plusClick() { // Handler for clicking "-" on tuning
        let noteIndex = (chromatic.indexOf(this.note) + 1) % chromatic.length;
        this.note = chromatic[noteIndex];
        this.scalify(); 
    }

    minusClick() { // Handler for clicking "+" on tuning
        let noteIndex = (chromatic.indexOf(this.note) + chromatic.length - 1) % chromatic.length;
        this.note = chromatic[noteIndex];
        this.scalify();
    }

    //  Use global key variable as initial array index and write out HTML elements
    writeNotes() {
        let innerStringsArray; // Array we will use to write to HTML elements
        if(sharpRoots.includes(key)) 
            innerStringsArray = chromaticSharps; // Get the"sharp" string from the parallel chromaticSharps array
        else 
            innerStringsArray = chromatic;
        this.container.querySelector(".tune-note").innerHTML = innerStringsArray[chromatic.indexOf(this.note)];
        for(let i = chromatic.indexOf(this.note), j = 0; j < this.fretContainer.length; j++, i = (i + 1) % chromatic.length) {
            let noteHTML = this.fretContainer[j].querySelector(".fret-note");
            noteHTML.innerHTML = innerStringsArray[i];
            this.clearNoteClasses(this.fretContainer[j].classList, i);
            this.fretContainer[j].classList.add(chromatic[i]);  // classList.add() ignores existing classes in subsequent calls
        }
    }

    clearNoteClasses(classList, i) {
        classList.remove(chromatic[(i + chromatic.length - 1) % chromatic.length]);
        classList.remove(chromatic[(i + 1) % chromatic.length]);
    }

    // Use global scale intervals to flip on relevant HTML elements
    scalify() {
        // Clear up the notes
        let allFrets = this.container.querySelectorAll(".fret-note");
        allFrets.forEach(function(fret) {
            fret.style.opacity = "0";
        });
        this.writeNotes();
        // Enable the relevant notes
        for(let i = 0; i < scale.length; i++) {
            let noteFrets = this.container.querySelectorAll("." + scale[i] + " .fret-note"); // Select all note HTML objects for the current note
            noteFrets.forEach(function(fretHTML) {
                fretHTML.style.backgroundColor = bgColors[i];
                fretHTML.style.opacity = "1";               
            });
        }
    }
};

