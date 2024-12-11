import placeHolderImage from '../../assets/image-holder.jpg'
import { BASE_URI } from '../../config'

import style from './Card.module.css'
import { Link } from 'react-router-dom'

export default function Card({ post = {} }){

    const { id, title, image , content, tags, category, published } = post

    return (
        <div className={`${style.card} `}>
        <div className={style.image}>
          {/* <img className={style.thumb} src={image} alt="" /> */}
          <img className={style.thumb} src={image ? `${BASE_URI}/${image}` : placeHolderImage} alt="" />
          {/* <img className={style.thumb} src={image ? image : placeHolderImage} alt="" /> */}
        </div>
        <div className={style.body}>
          <div className={style.header}>
            <h3>
              {title}
            </h3>
            
          </div>
          <p>{content}</p>
          <p>
            <strong>Category: </strong>{category}
          </p>
          <p>
            <strong>Tags: </strong>{tags}
          </p>

          <div> Pubblicato: {published}</div>
          
          <div className={style.actions}>
          </div>
          <Link className='link' to={`/pizzas/${id}`}>Vai alla pagina del post </Link>
        </div>
      </div>
    )
}