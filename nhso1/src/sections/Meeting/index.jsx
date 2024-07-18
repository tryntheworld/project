import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data } from "../../Content/Meeting";

const Meeting =() => {
    return (
                <div>
                    <div className="relative flex w-96 flex-col rounded-xl bg-white bg-opacity-50 text-gray-700 shadow-xl">
                        <div className="p-6">
                        <div className="flex items-center">
                            <div className="flex w-10 h-10 mb-5 mr-2 animate-bounce">
                                <img className="w-full h-full" src="../src/assets/income.png"alt="" />
                            </div>
                            <h5 className="mb-2 block text-xl font-semibold leading-snug tracking-normal text-cyan-900 antialiased">
                                {data.headname}
                            </h5>
                        </div>
                        
                        <p className="block text-base font-light leading-relaxed text-inherit antialiased">
                            {data.detail}
                        </p>
                        </div>
                        <div className="p-6 pt-0">
                            <button className="rounded-2xl bg-gradient-to-br  from-rose-500 to-violet-700 px-5 py-2 text-sm font-bold text-white opacity-80 
                            hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-gray-700 duration-[500ms,700ms] transition-[color,box-shadow]">
                            ลงทะเบียน
                            <span className='rotate-90 inline-block ml-2 text-sm'><FontAwesomeIcon className='animate-bounce' icon={faArrowDown}/> </span>
                            </button>              
                        </div>
                    </div>
                </div>
    )
}
export default Meeting;