import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const  Announce=({ api_newsList }) => {
 return (
         <div className="bg-white bg-opacity-50 px-5 py-2 rounded-xl w-full shadow-xl" id="Announcer-section">
               <div className="mt-3 mb-5">
               
                  <div className="flex items-center">
                           <div className="flex w-10 h-10 mb-5 mr-2">
                                 <img className="w-full h-full animate-bounce" src="../src/assets/announce.png"alt="" />
                           </div>
                           <h5 className="mb-2 block text-xl font-semibold leading-snug tracking-normal text-cyan-900 antialiased">
                                 จดหมายข่าวประชาสัมพันธ์
                           </h5>
                        </div>
                        
                        {api_newsList.map((val) => (
                        <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-0 hover:rounded-2xl mb-5"  key={val.id}>
                           <img src={`../src/assets//news/${val.id}.jpg`} 
											 alt={val.id} width="1000" height="667" 
                           className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"/>
                           <div className="sm:w-7/12 pl-0 p-5">
                              <div className="space-y-2">
                              <div className="space-y-4">
                                 <h4 className="text-xl font-semibold text-cyan-900">{val.title}</h4>
                                 <p className="text-gray-600">{val.detail}</p>
                              </div>
                                    <button className="rounded-2xl bg-green-500 px-5 py-2 text-sm font-bold text-gray-900 opacity-80 
                                    hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-gray-700 duration-[500ms,700ms] transition-[color,box-shadow]"
                                    onClick={() => {
                                       const imageUrl = `${window.location.origin}/src/assets/news/${val.id}.jpg`;
                                       window.open(imageUrl, '_blank', 'noopener,noreferrer');
                                     }}>
                                       อ่านต่อ
                                    <span className='rotate-90 inline-block ml-2 text-sm'><FontAwesomeIcon className='animate-bounce' icon={faArrowDown}/> </span>
                                    </button>
                              </div>
                           </div>
                        </div>
                      ))}
               </div>
            </div>
            
 )
}
export default Announce;