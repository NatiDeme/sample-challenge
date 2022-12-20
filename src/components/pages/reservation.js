function Reservation() {
  return (
    <div className="w-full">
      {/* <div className=" flex flex-col items-center pt-5 pb-10 ">
        <p className="text-3xl font-black">Your Tours</p>
      </div> */}
      <div className="text-center bg-gray-50 text-gray-800 py-20 px-4">
        <h1 className="text-5xl font-bold mt-0 mb-6 underline underline-offset-2">Your Tours</h1>
      </div>
      <div className=" flex-col items-center pt-5 hidden">
        <p className="text-3xl font-black">You have not created any reservations yet</p>
        <p>Please select a Tour</p>
      </div>
      <div className="lg:flex gap-8 p-6 rounded-lg shadow-lg bg-white my-5 mx-5">
        <div>
          <img
            src="https://images.pexels.com/photos/158398/niagara-falls-waterfall-horseshoe-158398.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="me"
            className="rounded-lg h-80 w-[60rem]"
          />
        </div>

        <div>
          <p className="text-xl font-black">Visit Nirobi</p>
          <p className="text-gray-500 mt-5">
            Nairobi is Kenya’s capital city. In addition to its urban core, the city has Nairobi
            National Park, a large game reserve known for breeding endangered black rhinos and home
            to giraffes, zebras and lions.
          </p>
          <div className="flex gap-3 text-gray-500 mt-5">
            <p className="">Reserved Date: </p>
            <p className="">Jan, 2022 </p>
          </div>
          <div className="mt-3">
            <button
              type="button"
              className="bg-slate-700 text-white p-3 rounded-xl hover:bg-red-500">
              Cancel Reservation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservation;
