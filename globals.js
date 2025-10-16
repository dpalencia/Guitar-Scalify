let scaleIntervals =  {
    // Diatonic intervals: 2 2 1 2 2 2 1
    Major: [2, 2, 1, 2, 2, 2],
    Dorian: [2, 1, 2, 2, 2, 1],
    Phrygian: [1, 2, 2, 2, 1, 2],
    Lydian: [2, 2, 2, 1, 2, 2],
    Mixolydian: [2, 2, 1, 2, 2, 1],
    Minor: [2, 1, 2, 2, 1, 2],
    Locrian: [1, 2, 2, 1, 2, 2],
    MinorPentatonic: [3, 2, 2, 3],
    BluesMajor: [2, 1, 1, 3, 2],
    BluesMinor: [3, 2, 1, 1, 3],
    // Blues Minor: 1-b3-4-b5-5-b7
    
    // Melodic Minor and its modes
    MelodicMinor: [2, 1, 2, 2, 2, 2], // 1-2-b3-4-5-6-7
    DorianFlat2: [1, 2, 2, 2, 2, 1], // 1-b2-b3-4-5-6-b7 (Dorian b2)
    LydianAugmented: [2, 2, 2, 2, 1, 2], // 1-2-3-#4-#5-6-7
    LydianDominant: [2, 2, 2, 1, 2, 1], // 1-2-3-#4-5-6-b7
    MixolydianFlat6: [2, 2, 1, 2, 1, 2], // 1-2-3-4-5-b6-b7
    LocrianNatural2: [2, 1, 2, 1, 2, 2], // 1-2-b3-4-b5-b6-b7
    AlteredDominant: [1, 2, 1, 2, 2, 2], // 1-b2-b3-b4-b5-b6-b7 (Super Locrian)
    
    // Harmonic Minor and its modes
    HarmonicMinor: [2, 1, 2, 2, 1, 3], // 1-2-b3-4-5-b6-7
    LocrianNatural6: [1, 2, 2, 1, 3, 1], // 1-b2-b3-4-b5-6-b7
    IonianAugmented: [2, 2, 1, 3, 1, 2], // 1-2-3-4-#5-6-7
    RomanianMinor: [2, 1, 3, 1, 2, 1], // 1-2-b3-#4-5-6-b7
    PhrygianDominant: [1, 3, 1, 2, 1, 2], // 1-b2-3-4-5-b6-b7
    LydianSharp2: [3, 1, 2, 1, 2, 2], // 1-#2-3-#4-5-6-7
    UltraLocrian: [1, 2, 1, 2, 2, 1], // 1-b2-b3-b4-b5-b6-bb7
    
    HarmonicMajor: [2, 2, 1, 2, 1, 3]  // 1-2-3-4-5-b6-7
};
let sharpRoots = ["G", "D", "A", "E", "B", "Gb", "Db"];
let chromatic = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
let chromaticSharps = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
let bgColors = [
    "#ff0000",
    "#FFA500",
    "#ffff00",
    "#008000",
    "#0000ff",
    "#0093FF",
    "#ff00ff"
];
let tuning = ["E", "B", "G", "D", "A", "E"];
let scale = [];

// Chord qualities for different scale types
let chordQualities = {
    // Diatonic scale chord qualities
    Major: ["MAJ", "min", "min", "MAJ", "MAJ", "min", "dim"],
    Dorian: ["min", "min", "MAJ", "MAJ", "min", "dim", "MAJ"],
    Phrygian: ["min", "MAJ", "MAJ", "min", "dim", "MAJ", "min"],
    Lydian: ["MAJ", "MAJ", "min", "dim", "MAJ", "min", "min"],
    Mixolydian: ["MAJ", "min", "dim", "MAJ", "min", "min", "MAJ"],
    Minor: ["min", "dim", "MAJ", "min", "min", "MAJ", "MAJ"],
    Locrian: ["dim", "MAJ", "min", "min", "MAJ", "MAJ", "min"],
    
    // Harmonic Minor and its modes
    HarmonicMinor: ["min", "dim", "aug", "min", "MAJ", "MAJ", "dim"],
    LocrianNatural6: ["dim", "MAJ", "min", "dim", "MAJ", "min", "MAJ"],
    IonianAugmented: ["MAJ", "min", "min", "aug", "MAJ", "min", "dim"],
    RomanianMinor: ["min", "dim", "MAJ", "min", "min", "MAJ", "dim"],
    PhrygianDominant: ["MAJ", "aug", "min", "min", "dim", "MAJ", "min"],
    LydianSharp2: ["MAJ", "MAJ", "min", "dim", "min", "MAJ", "dim"],
    UltraLocrian: ["dim", "dim", "MAJ", "MAJ", "MAJ", "min", "min"],
    
    // Melodic Minor and its modes
    MelodicMinor: ["min", "min", "aug", "MAJ", "MAJ", "dim", "dim"],
    DorianFlat2: ["min", "MAJ", "MAJ", "min", "min", "dim", "MAJ"],
    LydianAugmented: ["MAJ", "MAJ", "min", "min", "dim", "dim", "MAJ"],
    LydianDominant: ["MAJ", "MAJ", "min", "dim", "min", "min", "MAJ"],
    MixolydianFlat6: ["MAJ", "min", "dim", "min", "min", "MAJ", "MAJ"],
    LocrianNatural2: ["min", "dim", "min", "min", "MAJ", "MAJ", "MAJ"],
    AlteredDominant: ["MAJ", "dim", "dim", "dim", "dim", "MAJ", "MAJ"],
    
    // Harmonic Major
    HarmonicMajor: ["MAJ", "min", "min", "MAJ", "min", "aug", "dim"],
    
    // Pentatonic and Blues scales
    MinorPentatonic: ["min", "min", "MAJ", "min", "min"],
    BluesMajor: ["MAJ", "min", "min", "min", "MAJ"],
    BluesMinor: ["min", "min", "min", "min", "min"]
};

// Roman numeral representation for chord degrees
let romanNumerals = ["I", "II", "III", "IV", "V", "VI", "VII"];

// Arpeggio patterns (scale degree indices)
let arpeggioPatterns = {
    // Triad arpeggios (1-3-5)
    majorTriad: [0, 2, 4],
    minorTriad: [0, 2, 4],
    dimTriad: [0, 2, 4],
    augTriad: [0, 2, 4],
    
    // Seventh arpeggios (1-3-5-7)
    majorSeventh: [0, 2, 4, 6],
    dominantSeventh: [0, 2, 4, 6],
    minorSeventh: [0, 2, 4, 6],
    halfDiminished: [0, 2, 4, 6],
    diminishedSeventh: [0, 2, 4, 6]
};

// Flag to track if arpeggio mode is active
let arpeggioMode = false;
let currentArpeggio = 0; // Index of the current chord in the scale (0-based)

// Initialize the guitarstrings
let allStrings = document.querySelectorAll(".string");
let scaleSelect = document.querySelector("#scale-select")
let formKey = document.querySelector("#key");
let formScale = document.querySelector("#scale");
let heading = document.querySelector(".scale-heading");
let key = formKey.value;
let scaleName = formScale.value;
strings = []; // An array of guitarstring objects
for(let i = 0; i < tuning.length; i++) {
    strings.push(new GuitarString(tuning[i], allStrings[i]));
}

