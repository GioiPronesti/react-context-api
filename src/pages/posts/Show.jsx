import axios from 'axios'
import { useEffect, useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom'
import { BASE_URI } from '../../config'
import placeHolderImage from "../../assets/image-holder.jpg";
import DeletePost from '../../components/posts/DeletePost' 

export default function Show() {

  const [post,setPosts] = useState(null)

  const { id } = useParams()
  

  useEffect(() => {
    // fetch della pizza con id: ??
    
    axios.get(`${BASE_URI}/blog/${id}`)
    .then(res => {
      // console.log(res.data)
      setPosts(res.data)
    })
    .catch(err => console.error(err))

  },[id])

  const navigate = useNavigate()

  return (
    <main>
      
      <div className="container">
        <button onClick={() => navigate(-1)}>
          back
        </button>
        {post && <DeletePost id={post.id} onDelete={() => { navigate('/blog') }}/>}
      </div>
      <section>
        
        {post ? 
          <>
            <figure className='hero-post'>
              <img src={post.image ? `${BASE_URI}/${post.image}` : placeHolderImage} alt="" />
            </figure>
            <div className="container">
              <h1 className="title">{ post.title }</h1>
            </div>
            <div className="container">
              <p>{post.content}</p>
            </div>
          </> :
          <div>
            loading
          </div>
        }
      </section>
    </main>
  )
}