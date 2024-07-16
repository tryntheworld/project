a

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css'
import { faArrowDown, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
   <div className='mt-14 mx-auto max-w-6xl grid grid-cols-[40%_60%]'>
    <div>
      <div className='sticky top-14 grid grid-rows[35%_40%_25%] h-screen'>
        <div>
          <div class="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div class="p-6">
              <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                ที่กำลังจะมาถึง....
              </h5>
              <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                  ประชุมโครงการอบรมบุคลากรเพื่อเพิ่มประสิทธิภาพการตรวจสอบเวชระเบียน สำหรับหน่วยบริการ ในเครือข่ายจังหวัดเลย ปี ๒๕๖๗
              </p>
            </div>
            <div class="p-6 pt-0">
              
                <button
                  class="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  data-ripple-light="true"
                >
                  ลงทะเบียน
                  <span className='rotate-90 inline-block ml-2 text-sm'><FontAwesomeIcon className='animate-bounce' icon={faArrowDown}/> </span>
                </button>
              
            </div>
          </div>
        </div>
        <div>nav</div>
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
