const Calendar = () => {
 return (
   <div className="bg-white bg-opacity-50 px-5 my-2 rounded-xl shadow-xl">
		<div className="mt-5 mb-5">
				<div className="flex items-center">
                    <div className="flex w-10 h-10 mb-5 mr-2">
                        <img className="w-full h-full animate-bounce" src="../src/assets/calendar.png"alt="" />
                    </div>
                    <h5 className="mb-2 block text-xl font-semibold leading-snug tracking-normal text-cyan-900 antialiased">
                        ตารางงานประกันสุขภาพ
                    </h5>
                </div>
				<div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
					<table className="min-w-full leading-normal">
						<thead>
							<tr>
								<th
									className="px-5 py-3 border-b-2 border-pink-200 bg-pink-100 text-left text-sm font-semibold text-gray-600 tracking-wider">
									ชื่องาน
								</th>
							
								<th
									className="px-5 py-3 border-b-2 border-pink-200 bg-pink-100 text-left text-sm font-semibold text-gray-600  tracking-wider">
									วันที่
								</th>
								<th
									className="px-5 py-3 border-b-2 border-pink-200 bg-pink-100 text-left text-sm font-semibold text-gray-600 tracking-wider">
									สถานะ
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<div className="flex items-center">
										<div className="flex-shrink-0 w-10 h-10">
											<img className="w-full h-full rounded-full"
                                                src="../src/assets/au.jpg"
                                                alt="" />
                                        </div>
											<div className="ml-3">
												<p className="text-gray-900 whitespace-no-wrap">
													ประชุม ปสน. ครั้งที่ 7
												</p>
											</div>
										</div>
								</td>
								<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p className="text-gray-900 whitespace-no-wrap">
									30 กรกฏาคม 2567
									</p>
								</td>
								<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<span
                                        className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden
                                            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
									<span className="relative">ปกติ</span>
									</span>
								</td>
							</tr>
							<tr>
								<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<div className="flex items-center">
										<div className="flex-shrink-0 w-10 h-10">
											<img className="w-full h-full rounded-full"
                                                src="../src/assets/boy.jpg"
                                                alt="" />
                                        </div>
											<div className="ml-3">
												<p className="text-gray-900 whitespace-no-wrap">
													ประชุม CFO
												</p>
											</div>
										</div>
								</td>
								<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p className="text-gray-900 whitespace-no-wrap">
									31 กรกฏาคม 2567
									</p>
								</td>
								<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<span
                                        className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden
                                            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
									<span className="relative">ปกติ</span>
									</span>
								</td>
							</tr>
						</tbody>
					</table>				
				</div>		
		</div>
	</div>
 )
}
export default Calendar;