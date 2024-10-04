import React, { useEffect, useState } from "react";
import NotesList from "./Components/NotesList";
import { nanoid } from "nanoid";
import Search from "./Components/Search";
import Header from "./Components/Header";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "this is my first note",
      date: "03/10/2024",
    },
    {
      id: nanoid(),
      text: "this is my second note",
      date: "02/10/2024",
    },
    {
      id: nanoid(),
      text: "this is my thire note",
      date: "01/10/2024",
    },
    {
      id: nanoid(),
      text: "this is my fourth note",
      date: "30/09/2024",
    },
    {
      id: nanoid(),
      text: "this is my Fifth note",
      date: "30/09/2024",
    },
  ]);

  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
    if(savedNotes) {
      setNotes(savedNotes)
    }
   }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);
  

  const addNotes = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNotes}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;
