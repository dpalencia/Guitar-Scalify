// Initialize the fretboard
scale = createScale(scaleName);
strings.forEach(function(st) {
    st.scalify();
});

// Then add the events
formKey.addEventListener("change", function() {
    key = this.value;
    scale = createScale(scaleName);
    strings.forEach(function(st) {
        st.scalify()
    });
});

formScale.addEventListener("change", function() {
    scaleName = this.value;
    scale = createScale(scaleName);
    strings.forEach(function(st) {
        st.scalify()
    });
});