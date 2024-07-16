import { data } from "../../Content/PsnMeet.js";
const PsnMeet = () => {
    return(
        <div>
            <div className="relative flex flex-col rounded-xl bg-white bg-opacity-50 text-gray-700 shadow-xl">
                <div className="p-6">
                <h5 className="mb-2 block text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {data.headname}{data.number}
                </h5>
                <p className="block text-base font-light leading-relaxed text-inherit antialiased">
                    {data.detail}
                </p>
                <p className="block text-base font-light leading-relaxed text-inherit antialiased mb-2">
                    วันที่ : {data.Meetdate}
                </p>
                
                <p className="block text-sm font-light leading-relaxed text-inherit antialiased">
                    Zoom ID : {data.ZoomID}
                </p>
                <p className="block text-base font-light leading-relaxed text-inherit antialiased">
                    Zoom PASS : {data.ZoomPass}
                </p>
                </div>
                <div className="flex p-6 pt-0 gap-x-2">
                    <button className="rounded-2xl bg-pink-500 px-5 py-4 text-sm font-bold text-white hover:text-gray-900 hover:shadow-[inset_13rem_0_0_0] hover:shadow-blue-400 duration-[500ms,700ms] transition-[color,box-shadow]">
                    ลงทะเบียน
                    </button>

                    <button className="rounded-2xl bg-pink-500 px-5 py-4 text-sm font-bold text-white hover:text-gray-900 hover:shadow-[inset_13rem_0_0_0] hover:shadow-blue-400 duration-[500ms,700ms] transition-[color,box-shadow]">
                    เอกสารการประชุม
                    </button>

                    <button className="rounded-2xl bg-pink-500 px-5 py-4 text-sm font-bold text-white hover:text-gray-900 hover:shadow-[inset_13rem_0_0_0] hover:shadow-blue-400 duration-[500ms,700ms] transition-[color,box-shadow]">
                    Link ZOOM
                    </button>              
                </div>

                
            </div>
        </div>
    )
}
export default PsnMeet;