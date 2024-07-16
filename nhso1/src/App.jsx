
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css'
import { faArrowAltCircleRight, faArrowDown, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Header from './sections/header'
function App() {
  return (
   <div className='mt-14 mx-auto max-w-6xl grid grid-cols-[40%_60%]'>
    <div>
      <div className='sticky top-14 grid grid-rows[20%_40%_25%] h-[80vh]'>
        <Header/>
        <div className='flex flex-col gap-3 font-semibold'> 
          <div><FontAwesomeIcon className="mr-2 text-pink-500" icon={faArrowRight}/>ปสน.</div>
          <div>ตารางงาน</div>
          <div>ประชาสัมพันธ์</div>
          <div>โปรแกรม</div>
          <div>สื่อ</div>         
        </div>
        <div>link</div>
      </div>  
    </div>
    <div>
      <div className='mb-96'>ปสน.</div>
      <div className='mb-96'>ตารางงาน</div>
      <div className='mb-96'>ประชาสัมพันธ์</div>
      <div className='mb-96'>โปรแกรม</div>
      <div className='mb-96'>สื่อ</div>
    </div>
   </div>
   
  )
}

export default App
