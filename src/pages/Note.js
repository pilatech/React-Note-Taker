import { useNavigate } from 'react-router-dom'
export default function Note({title, content, id}) {
 const navigate = useNavigate()
  return (
    <div className="note" onClick={() => navigate(`/${id}`)}>
     <h3 className="note-title">{title}</h3>
     <p className="note-subtitle">{content.slice(0, 10)}...</p>
    </div>
  )
}
