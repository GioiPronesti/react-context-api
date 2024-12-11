import { Card} from "../../components/Card/Card.jsx"
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from "axios";
import BASE_URI from "../../config.js"

export default function Index(){

    const [posts, setPosts] = useState([])

    function fetchPosts() {
        axios.get(`${BASE_URI}/blog`)
        .then(res => {
          setPosts(res.data)
        })
        .catch(err => {
          console.error(err)
          setPosts([])
        })
      }

      useEffect(() => {
        fetchPosts()
      },[])

    return (

        <main>
        <section>
          <div className='container'>
            <h1 className='title'>i post del blog </h1>
            <Link className='link' to="/posts/create">Nuovo post</Link>
          </div>
          <div className="container">
            <ul className='grid grid-cols-2'>
              {posts.map(post => (
                <li key={post.id}>
                  <Card post={post}/>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    )
}