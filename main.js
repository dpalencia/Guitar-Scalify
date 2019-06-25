// Globally scope the chromatic scale
let scaleIntervals =  {
    Major: [2, 2, 1, 2, 2, 2],
    Minor: [2, 1, 2, 2, 1, 2],
    MinorPentatonic: [3, 2, 2, 3],
    BluesMajor: [2, 1, 1, 3, 2],
    BluesMinor: [3, 2, 1, 1, 3]
    // 1-b3-4-b5-5-b7
};
let sharpRoots = ["G", "D", "A", "E", "B", "Fs", "Cs"];
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

let guitar = new Guitar();
let scaleSelect = document.querySelector("#scale-select")
let formKey = document.querySelector("#key");
let formScale = document.querySelector("#scale");

formKey.addEventListener("change", function() {
    guitar.key = this.value;
    guitar.createScale(formScale.value);
    guitar.scalify();
});

formScale.addEventListener("change", function() {
    guitar.createScale(this.value);
    guitar.scalify();
});

