import { RouterProvider } from 'react-router-dom';
import './App.css'

import router from './routes/route';





function App() {

  return (

    <div className='font-firaSans  bg-base-100'>
          <RouterProvider router={router} />
    </div>
  )
}

export default App
