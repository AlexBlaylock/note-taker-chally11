// functions that will import into apiRoutes
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');
// variable for path to just make code more concise
const dbNotesPath = path.join(__dirname, '../db/notes.json');

// this function does as name, reads notes before writing
// from what i understand, you have to essentially re-write all the info when addign to the notes.json
// so you need to read first then ADD to it, otherwise you will only add the most recent note

function readNotesFromJson() {
  try {
    const data = fs.readFileSync(dbNotesPath, 'utf8') //utf8 makes data a string
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading notes data:', error);
    return []; //if there is an error it will return an empty array
  }
};

function writeNotesToJson(data) {
  try {
    fs.writeFileSync(dbNotesPath, JSON.stringify(data), 'utf8');
  } catch (error) {
    console.error('error writing notes:', error)
  }
};

function createNote(title, text) {
  const newNote = {
    id: uuidv4(),
    title,
    text,
  };

  const notes = readNotesFromJson();
  notes.push(newNote);
  writeNotesToJson(notes);

  return newNote;
}
// i put this function here so exporting it is a bit more clean
function getNotes() {
  return readNotesFromJson();
}

// if i wanted to expand so i can delete notes, add a deleteNotesFromJson
// used xpert learning assistant
module.exports = { createNote, getNotes };