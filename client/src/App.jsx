import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/proyectos")
    .then((res) => {
      setProjects(res.data)
    })
  });

  return (
    <>
    <h1>Valentin Ermel</h1>
    <h2>Portafolio</h2>
    <div id='proyectos'>
    {projects.map((project) => {
      return(
        <div class='proyecto'>
          <h3>
            {project.nombre}
          </h3>
          <p>
            {project.descripcion}
          </p>
          <a href={project.repositorio} class="links">link del repositorio</a>
        </div>
            )
          })
        }
    </div>
    
    
    </>
  )
}

export default App
