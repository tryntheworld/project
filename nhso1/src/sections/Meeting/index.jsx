import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Meeting =() => {
    return (
        <div>
            <div class="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div class="p-6">
                <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    ที่กำลังจะมาถึง....
                </h5>
                <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                    ประชุมโครงการอบรมบุคลากรเพื่อเพิ่มประสิทธิภาพการตรวจสอบเวชระเบียน สำหรับหน่วยบริการ ในเครือข่ายจังหวัดเลย ปี 2567
                </p>
                </div>
                <div class="p-6 pt-0">
                    <button class="rounded-lg bg-pink-500 px-12 py-4 text-sm font-bold border-2 text-white hover:text-gray-900 hover:shadow-[inset_13rem_0_0_0] hover:shadow-blue-400 duration-[500ms,700ms] transition-[color,box-shadow]">
                    ลงทะเบียน
                    <span className='rotate-90 inline-block ml-2 text-sm'><FontAwesomeIcon className='animate-bounce' icon={faArrowDown}/> </span>
                    </button>              
                </div>
            </div>
        </div>
    )
}
export default Meeting;