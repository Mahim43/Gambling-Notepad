// Array to keep track of the last 3 colors
let lastColors = [];

// Function to add a colored note
function addNote(color) {
    // Check if the color has appeared 3 times in a row
    lastColors.push(color);
    if (lastColors.length > 3) {
        lastColors.shift(); // Keep only the last 3 colors
    }

    // If the last 3 colors are the same, trigger an alert with the opposite color
    if (lastColors.length === 3 && lastColors[0] === lastColors[1] && lastColors[1] === lastColors[2]) {
        if (color === 'red' || color === 'black') {
            const oppositeColor = getOppositeColor(color);
            alert(`${oppositeColor} has a high chance of success!`);
        }
    }

    // Add the note with the selected color
    const notepad = document.getElementById('notepad');
    const note = document.createElement('div');
    note.style.color = color;
    note.textContent = `${color.charAt(0).toUpperCase() + color.slice(1)} was gambled`;
    notepad.appendChild(note);

    // Auto-scroll to the bottom of the notepad
    notepad.scrollTop = notepad.scrollHeight;
}

// Function to reset the notepad (adds space between notes)
function resetNotes() {
    const notepad = document.getElementById('notepad');
    
    // Create a "RESET" note in white, all-caps
    const resetNote = document.createElement('div');
    resetNote.style.color = 'white';
    resetNote.style.textTransform = 'uppercase';  // Make text all-caps
    resetNote.style.backgroundColor = '#2c2c2c'; // Same background as regular notes
    resetNote.style.border = '1px solid white';  // White border
    resetNote.style.padding = '10px';  // Add padding for consistent spacing
    resetNote.style.margin = '10px 0';  // Space between notes
    resetNote.style.fontSize = '18px';  // Same font size as other notes
    resetNote.textContent = 'LUCK RESET';  // The text to display
    
    notepad.appendChild(resetNote);

    // Auto-scroll to the bottom of the notepad
    notepad.scrollTop = notepad.scrollHeight;
}

// Function to return the opposite color
function getOppositeColor(color) {
    switch(color) {
        case 'red': return 'black';
        case 'black': return 'red';
        default: return 'unknown'; // In case of green or any unknown color
    }
}
