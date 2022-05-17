import { Routes, Route } from 'react-router-dom';
import { v4 as uuid } from 'uuid'
import Home from './pages/Home'
import NotesList from './pages/NotesList';
import Note from './pages/Note'
import Template from './components/Template';
import './css/app.css'
import { useState, createContext } from 'react';
import FullNote from './pages/FullNote';

export const NotesContext = createContext()

function App() {

 const [notes, setNotes] = useState(sampleData)

 const notesContextValue = {
  notes
 }

  return (
  <main className="container">
   <NotesContext.Provider value = {notesContextValue}>
     <Routes>
      <Route element={<Template/>}>
       <Route index element={<Home/>}/>
       <Route path="/:id" element={<FullNote/>}/>
      </Route>
     </Routes>
    </NotesContext.Provider>
  </main>
  )
}

const sampleData = [
 {id: uuid(), title: 'Hello there', content: 'Some content'},
 {id: uuid(), title: 'Another one', content: 'More coming content'}
]

export default App;
