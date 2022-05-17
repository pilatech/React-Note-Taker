import NotesList from "./NotesList"

export default function Home() {
  return (
   <>
   <form className="search-form">
    <input 
    className="search-input"
    type="text"
    placeholder="Search Notes"
    />
   </form>
   <NotesList/>
   </>
  )
}
