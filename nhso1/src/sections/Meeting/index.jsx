import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data } from "../../Content/Meeting";

const Meeting =() => {
    return (
        <div>
            <div className="relative flex w-96 flex-col rounded-xl bg-white bg-opacity-50 text-gray-700 shadow-xl">
                <div className="p-6">
                <h5 className="mb-2 block text-xl font-semibold leading-snug tracking-normal text-cyan-900 antialiased">
                    {data.headname}
                </h5>
                <p className="block text-base font-light leading-relaxed text-inherit antialiased">
                    {data.detail}
                </p>
                </div>
                <div className="p-6 pt-0">
                    <button className="rounded-2xl bg-pink-500 px-12 py-4 text-sm font-bold border-2 text-white hover:text-gray-900 hover:shadow-[inset_13rem_0_0_0] hover:shadow-blue-400 duration-[500ms,700ms] transition-[color,box-shadow]">
                    ลงทะเบียน
                    <span className='rotate-90 inline-block ml-2 text-sm'><FontAwesomeIcon className='animate-bounce' icon={faArrowDown}/> </span>
                    </button>              
                </div>
            </div>
        </div>
    )
}
export default Meeting;