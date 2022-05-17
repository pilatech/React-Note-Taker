import { useContext } from 'react'
import Note from './Note'
import { NotesContext } from '../App'

export default function NotesList() {

 const { notes } = useContext(NotesContext)

 const notesElements = notes.map(note => <Note key={note.id} {...note}/>)

  return (
    <section className="notes-list">
     {notesElements}
    </section>
  )
}
