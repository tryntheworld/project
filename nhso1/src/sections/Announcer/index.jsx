const  Announce=() => {
 return (
         <div className="bg-white bg-opacity-50 px-5 py-2 rounded-xl w-full shadow-xl">
               <div>
                  <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-1 overflow-x-auto">
                  <div className="flex items-center">
                           <div className="flex w-10 h-10 mb-5 mr-2">
                                 <img className="w-full h-full" src="../src/assets/announce.png"alt="" />
                           </div>
                           <h5 className="mb-2 block text-xl font-semibold leading-snug tracking-normal text-cyan-900 antialiased">
                                 จดหมายข่าวประชาสัมพันธ์
                           </h5>
                        </div>
                        <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-0 hover:rounded-2xl">
                           <img src="../src/assets/news/01.jpg" width="1000" height="667" 
                           className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"/>
                           <div className="sm:w-7/12 pl-0 p-5">
                              <div className="space-y-2">
                              <div className="space-y-4">
                                 <h4 className="text-xl font-semibold text-cyan-900">โครงการอบรมบุคลากรเพื่อเพิ่มประสิทธิภาพ การตรวจสอบเวชระเบียนสำหรับหน่วยบริการในเครือข่ายสำนักงานสาธารณสุขจังหวัดเลย ปีงบประมาณ 2567</h4>
                                 <p className="text-gray-600">แพทย์หญิง ระพีพรรณ จันทร์อ้วน รองนายแพทย์สาธารณสุขจังหวัดเลย ด้านเวชกรรมป้องกัน 3 ได้รับมอบหมายจากนายแพทย์สาธารณสุขจังหวัดเลย ให้เกียรติมาเป็นประธานพิธีเปิดโครงการอบรมบุคลากรเพื่อเพิ่มประสิทธิภาพ..</p>
                              </div>
                                    <a href="#"
                                             className="relative inline-block px-3 py-1 font-semibold text-pink-900 leading-tight">
                                             <span 
                                                className="absolute inset-0 bg-pink-200 opacity-50 rounded-full"></span>
                                 <span className="relative">อ่านต่อ..</span>
                                 </a>
                              </div>
                           </div>
                        </div>
                  </div>
               </div>
            </div>
            
 )
}
export default Announce;