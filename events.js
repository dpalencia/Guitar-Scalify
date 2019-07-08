// Initialize the fretboard
scale = createScale(scaleName);
writeHeading(key + " " + formScale[formScale.selectedIndex].innerHTML);
createHeadingNotes(scale);
strings.forEach(function(st) {
    st.scalify();
});

// Then add the events
formKey.addEventListener("change", function() {
    key = this.value;
    scale = createScale(scaleName);
    writeHeading(key + " " + formScale[formScale.selectedIndex].innerHTML);
    createHeadingNotes(scale);
    strings.forEach(function(st) {
        st.scalify()
    });
});

formScale.addEventListener("change", function() {
    scaleName = this.value;
    scale = createScale(scaleName);
    writeHeading(key + " " + this[this.selectedIndex].innerHTML);
    createHeadingNotes(scale);
    strings.forEach(function(st) {
        st.scalify()
    });
});
