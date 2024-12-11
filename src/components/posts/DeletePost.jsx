import axios from 'axios'
import { BASE_URI } from '../../config'

export default function DeletePost({ onDelete = () => {}, id }) {

    function deletePost() {
      // chiediamo la conferma prima di fare la chiamata al server
      if(confirm('Vuoi davvero eliminare questo post?')) {
        console.log('delete post',id)
        // qui faccio la chiamata con axios all'API destroy
        axios.delete(`${BASE_URI}/blog/${id}`)
        .then(() => {
         
          console.log('invochiamo alla funzione on delete')
          onDelete()
        })
        .catch(err => {
          alert('non è stato possibile eliminare il post desiderato')
          console.err(err)
        })
        // se l'eliminazione va a buon fine
          // invochiamo la callback onDelete
      }
      
    }
  
    return (
      <button onClick={deletePost}>Delete</button>
    )
  
  }