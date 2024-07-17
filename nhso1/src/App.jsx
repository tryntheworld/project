
import './App.css'
import Meeting from './sections/Meeting'
import Navbar from './sections/Navbar'
import Contact from './sections/contact'
import Content from './sections/rightSection'

function App() {
  return (

      <div className='mt-14 mx-auto max-w-6xl grid grid-cols-[40%_60%]'>
        <div>
          <div className='sticky top-14 grid grid-rows[20%_40%_25%] h-[100vh]'>
            <Meeting/>
            <Navbar/>  
            <Contact/> 
          </div>
        </div>
        <Content/>
      </div>

  )
}

export default App;
