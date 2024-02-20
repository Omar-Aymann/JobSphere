import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Nav from './components/Nav'
const App = () => {
  return (
    <div className='flex flex-col'>
      <Nav />
      <Outlet />
    </div>

  )
}

export default App;