import { useContext } from "react"
import { useParams } from "react-router-dom"
import { NotesContext } from "../App"

export default function FullNote() {
 const { id } = useParams()
 const { notes } = useContext(NotesContext)
 const note = notes.find(note => note.id === id)
 return (
   <div className="note">
    <h3 className="note-title">{note.title}</h3>
    <p>{note.content}</p>
   </div>
 )
}
