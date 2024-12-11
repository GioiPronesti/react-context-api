import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import About from "./pages/about"
import DefaultLayout from "./layouts/DefaultLayout"
import BlankLayout from "./layouts/BlankLayout"
import NotFound from "./layouts/NotFound"
import PostsIndex from './pages/posts/Index.jsx';
import PostShow from "./pages/posts/Show.jsx"


/*
Creiamo il frontend del nostro Blog e le sue pagine!
Partiamo installando React Router DOM: npm install react-router-dom
Definiamo almeno 3 pagine: una homepage, una pagina “chi siamo” e una pagina con la lista dei post - Implementiamo una navbar in comune a tutte le pagine per poter navigare tra loro
Bonus
Centralizzare la Navbar grazie a un Layout
Gestire la classe active
*/

function App() {
  
  return (
    <>
      <BrowserRouter>
        {/*<Routes>
          <Route element = {<DefaultLayout/>}> 
            <Route path="/" component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/blog" >
              <Route index component={PostsIndex} ></Route>
              <Route path=":id"></Route> 
            <Route />
          </Route> 
          <Route element={<BlankLayout/>}>
            <Route path='*' component={NotFound}></Route>
          </Route> 
        </Routes>*/}
        <Routes> 
          <Route element={<DefaultLayout />}> 
            <Route path="/" component={Home} /> 
            <Route path="/about" component={About} /> 
            <Route path="/blog"> 
              <Route index component={PostsIndex} />
              <Route path=":id" component={PostShow}/> 
            </Route> 
          </Route> 
          <Route element={<BlankLayout />}> 
            <Route path="*" component={NotFound} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  ) 
}  

export default App
