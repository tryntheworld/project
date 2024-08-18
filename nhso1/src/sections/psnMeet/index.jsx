import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatThaiDate } from "../../utils";
const PsnMeet = ({api_psnList}) => {
    return(
        
        <div>
            {api_psnList.map((val) => (
            <div className="relative flex flex-col rounded-xl bg-white bg-opacity-50 text-cyan-900 shadow-xl" key={val.id}>
                <div className="p-6">
                <div className="flex items-center">
                    <div className="flex w-10 h-10 mb-5 mr-2">
											<img className="w-full h-full animate-bounce"
                                                src="../src/assets/meet.png"
                                                alt="" />
                                        </div>
                    <h5 className="mb-2 block text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {val.header}
                    </h5>
                </div>
                    <p className="block text-base font-bold leading-relaxed text-inherit antialiased mb-2">
                        วันที่ : {formatThaiDate(val.date_meet)}
                    </p>
                    <p className="block text-base font-light leading-relaxed text-inherit antialiased">
                        {val.content}
                    </p>
                    
                    
                    <p className="block text-base font-light leading-relaxed text-inherit antialiased">
                        Zoom ID : {val.zoom_id}
                    </p>
                    <p className="block text-base font-light leading-relaxed text-inherit antialiased">
                        Zoom PASS : {val.zoom_pass}
                    </p>
                    </div>
                    <div className="flex p-6 pt-0 gap-x-2">
                        <button className="rounded-2xl bg-gradient-to-br from-rose-500 to-violet-700 px-5 py-2 text-sm font-bold text-white opacity-80 
                            hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-gray-700 duration-[500ms,700ms] transition-[color,box-shadow]"
                            onClick={() => window.open(val.register, '_blank', 'noopener,noreferrer')}
                            >
                            ลงทะเบียน
                            <span className='rotate-90 inline-block ml-2 text-sm'><FontAwesomeIcon className='animate-bounce' icon={faArrowDown}/> </span>
                            </button>

                        <button className="rounded-2xl bg-indigo-500 px-5 py-2  text-sm font-bold text-white
                         hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-gray-700 duration-[500ms,700ms] transition-[color,box-shadow]"
                         onClick={() => window.open(val.doc_link, '_blank', 'noopener,noreferrer')}
                         >
                        เอกสารการประชุม
                        </button>

                        <button className="rounded-2xl bg-indigo-500 px-5 py-2  text-sm font-bold text-white 
                        hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-gray-700 duration-[500ms,700ms] transition-[color,box-shadow]"
                        onClick={() => window.open(val.zoom_link, '_blank', 'noopener,noreferrer')}
                        >
                        Link ZOOM
                        </button>
                                      
                </div>
                
            </div>
            ))}
        </div>
        
    )
}
export default PsnMeet;