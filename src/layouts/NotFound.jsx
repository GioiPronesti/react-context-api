import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main>
      <section>
        <div className="container">
            <h1>404</h1>
            <p>Pagina non trovata</p>
            <Link to="/" >torna alla home</Link>
        </div>
      </section>
    </main>
  )
}