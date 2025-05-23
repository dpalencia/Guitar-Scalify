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
    HarmonicMinor: [2, 1, 2, 2, 1, 3], // 1-2-b3-4-5-b6-7
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

