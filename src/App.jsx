import { useLayoutEffect } from 'react'
import Home from './pages/Home.jsx'
import Project from './pages/Project.jsx'
import Privacy from './pages/Privacy.jsx'
import NotFound from './pages/NotFound.jsx'
import HoodyProject from './pages/HoodyProject.jsx'
import Services from './pages/Services.jsx'
import { getProject, getRealProject } from './data/projects.js'
import useTextReveal from './hooks/useTextReveal.js'

export default function App() {
  useTextReveal()
  useLayoutEffect(() => {
    const id = window.location.hash.slice(1)
    if (!id) return
    let active = true
    let frame
    const scrollToTarget = () => {
      document.getElementById(id)?.scrollIntoView({ block: 'start', behavior: 'instant' })
    }
    frame = window.requestAnimationFrame(scrollToTarget)
    document.fonts?.ready.then(() => {
      if (active) frame = window.requestAnimationFrame(scrollToTarget)
    })
    return () => {
      active = false
      window.cancelAnimationFrame(frame)
    }
  }, [])
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  if (path === '/') return <Home />
  if (path === '/privacidade') return <Privacy />
  if (path === '/servicos') return <Services />
  const match = path.match(/^\/projetos\/([^/]+)$/)
  if (match) {
    const realProject = getRealProject(match[1])
    if (realProject?.slug === 'hoody') return <HoodyProject project={realProject} />
    const project = getProject(match[1])
    if (project) return <Project project={project} />
  }
  return <NotFound />
}
