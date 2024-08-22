import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatThaiDate } from "../../utils";

const Meeting =({api_meetList}) => {
    return (
                <div>
                    {api_meetList.map((val) => (
                            <div className="px-5 flex-col rounded-xl bg-white bg-opacity-50 text-gray-700 shadow-xl" key={val.id}>
                                <div className="p-6">
                                    <div className="flex items-center">
                                        <div className="flex w-10 h-10 mb-5 mr-2 animate-bounce">
                                            <img className="w-full h-full" src="../assets/income.png" alt="" />
                                        </div>
                                        <h5 className="mb-2 block text-xl font-semibold leading-snug tracking-normal text-cyan-900 antialiased">
                                            {val.header}
                                        </h5>
                                    </div>
                                    <p className="block text-base font-bold leading-relaxed text-cyan-900 antialiased mb-2">
                                        วันที่ : {formatThaiDate(val.date_meet)}
                                    </p>
                                    <p className="block text-base font-light leading-relaxed text-cyan-900 antialiased">
                                        {val.content}
                                    </p>
                                    
                                </div>
                                <div className="p-6 pt-0">
                                    <button className="rounded-2xl bg-gradient-to-br from-rose-500 to-violet-700 px-5 py-2 text-sm font-bold text-white opacity-80 
                                    hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-gray-700 duration-[500ms,700ms] transition-[color,box-shadow]"
                                    onClick={() => window.open(val.register, '_blank', 'noopener,noreferrer')}>
                                    ลงทะเบียน
                                    <span className='rotate-90 inline-block ml-2 text-sm'><FontAwesomeIcon className='animate-bounce' icon={faArrowDown}/> </span>
                                    </button>
                                    
                                    {val.doc_link !== null ? (
                                        <button className="rounded-2xl bg-indigo-500 px-5 py-2 ml-2  text-sm font-bold text-white 
                                        hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-gray-700 duration-[500ms,700ms] transition-[color,box-shadow]"
                                        onClick={() => window.open(val.doc_link, '_blank', 'noopener,noreferrer')}
                                        >
                                        เอกสาร
                                        </button>
                                    ):(
                                        <span></span>
                                    )}

                                    {val.zoom_link !== null ? (
                                        <button className="rounded-2xl bg-indigo-500 px-5 py-2 ml-2  text-sm font-bold text-white
                                         hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-gray-700 duration-[500ms,700ms] transition-[color,box-shadow]"
                                         onClick={() => window.open(val.zoom_link, '_blank', 'noopener,noreferrer')}>
                                        ZOOM
                                        </button>
                                    ):(
                                        <span></span>
                                    )}                 
                                </div>
                            </div>
                    ))}
                </div>
    )
}
export default Meeting;