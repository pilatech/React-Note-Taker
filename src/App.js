import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import NotesList from './pages/NotesList';
import Note from './pages/Note'
import Template from './components/Template';
import './css/app.css'

function App() {
  return (
  <main className="container">
     <Routes>
      <Route element={<Template/>}>
       <Route index element={<Home/>}/>
       <Route path="/notes" element={<NotesList/>}/>
       <Route path="/notes/:id" element={<Note/>}/>
      </Route>
     </Routes>
  </main>
  )
}

export default App;
