import { faCircleDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Applications = () => {
 return (     
            <div>
            <div className="relative flex flex-col rounded-xl bg-white bg-opacity-50 text-gray-700 shadow-xl mb-10">
               <div className="p-6">
                  <div className="flex items-center">
                     <div className="flex w-10 h-10 mb-2 mr-2">
                           <img className="w-full h-full animate-bounce" src="../src/assets/income.png"alt="" />
                     </div>
                     <h5 className="mb-2 block text-xl font-semibold leading-snug tracking-normal text-cyan-900 antialiased">
                           โปรแกรมกลุ่มงานประกันสุขภาพ
                     </h5>
                  </div>

                  <div className="pt-1 pr-0 pb-0 pl-0 mt-5 mr-0 mb-0 ml-0">
                     <div className="sm:flex sm:items-center sm:justify-between sm:space-x-5">
                        <div className="flex items-center flex-1 min-w-0">
                           <img
                              src="../src/assets/mrc.jpg" className="flex-shrink-0 object-cover rounded-full w-12 h-12"/>
                           <div className="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
                              <p className="text-lg font-bold text-gray-800 truncate">Monitoring Revenue Collect</p>
                              <p className="text-gray-600 text-md">โปรแกรมติดตามการเรียกเก็บสำหรับผู้บริหาร.</p>
                           </div>
                        </div>
                        <div className="mt-4 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-14 flex items-center sm:space-x-6 sm:pl-0 sm:mt-0">
                           <button className="rounded-2xl bg-sky-400 px-5 py-2  text-sm font-bold text-gray-900
                            hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-gray-700 duration-[500ms,700ms] transition-[color,box-shadow]"
                            onClick={() => window.open('https://jolopo-loei.moph.go.th/mrc/', '_blank', 'noopener,noreferrer')}>
                           <span className='inline-block mr-2 text-sm'><FontAwesomeIcon icon={faCircleDot}/> </span>
                              เข้าใช้งาน 
                           </button>
                        </div>
                     </div>
                  </div>
                  <div className="pt-1 pr-0 pb-0 pl-0 mt-5 mr-0 mb-0 ml-0">
                     <div className="sm:flex sm:items-center sm:justify-between sm:space-x-5">
                        <div className="flex items-center flex-1 min-w-0">
                           <img
                              src="../src/assets/lim41.jpg" className="flex-shrink-0 object-cover rounded-full w-12 h-12"/>
                           <div className="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
                              <p className="text-lg font-bold text-gray-800 truncate">M.41 data collect and monitoring</p>
                              <p className="text-gray-600 text-md">โปรแกรมติดตามสถานะการยื่นคำร้อง ม.41 จังหวัดเลย</p>
                           </div>
                        </div>
                        <div className="mt-4 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-14 flex items-center sm:space-x-6 sm:pl-0 sm:mt-0">
                           <button className="rounded-2xl bg-sky-400 px-5 py-2  text-sm font-bold text-gray-900
                            hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-gray-700 duration-[500ms,700ms] transition-[color,box-shadow]"
                            onClick={() => window.open('https://jolopo-loei.moph.go.th/lim41/', '_blank', 'noopener,noreferrer')}>
                           <span className='inline-block mr-2 text-sm'><FontAwesomeIcon icon={faCircleDot}/> </span>
                              เข้าใช้งาน 
                           </button>

                        </div>
                     </div>
                  </div>

                  <div className="pt-1 pr-0 pb-0 pl-0 mt-5 mr-0 mb-0 ml-0">
                     <div className="sm:flex sm:items-center sm:justify-between sm:space-x-5">
                        <div className="flex items-center flex-1 min-w-0">
                           <img
                              src="../src/assets/pcbp.jpg" className="flex-shrink-0 object-cover rounded-full w-12 h-12"/>
                           <div className="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
                              <p className="text-lg font-bold text-gray-800 truncate">Payment and medical services billing check</p>
                              <p className="text-gray-600 text-md"> โปรแกรมตรวจสอบการเรียกเก็บและการจ่ายค่าบริการทางการแพทย์.</p>
                           </div>
                        </div>
                        <div className="mt-4 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-14 flex items-center sm:space-x-6 sm:pl-0 sm:mt-0">
                           <button className="rounded-2xl bg-sky-400 px-5 py-2  text-sm font-bold text-gray-900
                            hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-gray-700 duration-[500ms,700ms] transition-[color,box-shadow]"
                            onClick={() => window.open('https://jolopo-loei.moph.go.th/pcbp/', '_blank', 'noopener,noreferrer')}>
                           <span className='inline-block mr-2 text-sm'><FontAwesomeIcon icon={faCircleDot}/> </span>
                              เข้าใช้งาน 
                           </button>
                        </div>
                     </div>
                  </div>

                  

                  

               </div>

              
               
            </div>
         </div>
 )
}
export default Applications;