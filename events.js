// Initialize the fretboard
scale = createScale(scaleName);
writeHeading(key + " " + formScale[formScale.selectedIndex].innerHTML);
createHeadingNotes(scale);
displayChordQualities(scale);
strings.forEach(function(st) {
    st.scalify();
});

// Initialize arpeggio controls
const arpeggioToggle = document.getElementById("arpeggio-toggle");
const arpeggioDegree = document.getElementById("arpeggio-degree");
const arpeggioType = document.getElementById("arpeggio-type");
const stringCount = document.getElementById("string-count");

// Then add the events
formKey.addEventListener("change", function() {
    key = this.value;
    scale = createScale(scaleName);
    writeHeading(key + " " + formScale[formScale.selectedIndex].innerHTML);
    createHeadingNotes(scale);
    displayChordQualities(scale);
    strings.forEach(function(st) {
        st.scalify()
    });
});

formScale.addEventListener("change", function() {
    scaleName = this.value;
    scale = createScale(scaleName);
    writeHeading(key + " " + this[this.selectedIndex].innerHTML);
    createHeadingNotes(scale);
    displayChordQualities(scale);
    
    // Update arpeggio degree options based on scale length
    updateArpeggioDegreeOptions();
    
    strings.forEach(function(st) {
        st.scalify()
    });
});

// Add event listeners for arpeggio controls
arpeggioToggle.addEventListener("change", function() {
    arpeggioMode = this.checked;
    arpeggioDegree.disabled = !arpeggioMode;
    arpeggioType.disabled = !arpeggioMode;
    
    if (arpeggioMode) {
        updateArpeggioDegreeOptions();
    }
    
    strings.forEach(function(st) {
        st.scalify();
    });
});

arpeggioDegree.addEventListener("change", function() {
    currentArpeggio = parseInt(this.value);
    strings.forEach(function(st) {
        st.scalify();
    });
});

arpeggioType.addEventListener("change", function() {
    strings.forEach(function(st) {
        st.scalify();
    });
});

stringCount.addEventListener("change", function() {
    setSeventhString(this.value === "7");
});

// Function to update arpeggio degree options based on scale length
function updateArpeggioDegreeOptions() {
    // Clear existing options
    arpeggioDegree.innerHTML = "";
    
    // Only show options for scales with chord qualities defined
    if (!chordQualities[scaleName]) {
        arpeggioDegree.disabled = true;
        arpeggioType.disabled = true;
        return;
    }
    
    // Create options based on scale length
    for (let i = 0; i < scale.length; i++) {
        const option = document.createElement("option");
        option.value = i;
        
        // Use uppercase/lowercase based on chord quality
        const quality = chordQualities[scaleName][i];
        if (quality === "min") {
            option.textContent = romanNumerals[i].toLowerCase();
        } else {
            option.textContent = romanNumerals[i];
        }
        
        arpeggioDegree.appendChild(option);
    }
    
    // Enable controls if arpeggio mode is active
    arpeggioDegree.disabled = !arpeggioMode;
    arpeggioType.disabled = !arpeggioMode;
}
