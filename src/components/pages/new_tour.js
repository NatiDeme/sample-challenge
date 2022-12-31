export default function CreateTour() {
  return (
    <div className="w-full">
      <div className="text-center bg-gray-50 text-gray-800 pb-10 py-14">
        <h1 className="text-5xl font-bold underline underline-offset-2">Create New Tour</h1>
      </div>
      <div className="mt-6 w-full flex justify-center">
        <form className=" px-10 md:w-[40rem]">
          <input
            type="text"
            className="w-full border border-gray-300 py-2 px-3 rounded mt-2 outline-none"
            placeholder="Title"
          />
          <div className="">
            <div className="flex gap-3 w-full">
              <input
                type="number"
                className="w-full border border-gray-300 py-2 px-3 rounded mt-2 md: outline-none"
                id="date"
                placeholder="Duration"
              />
              <input
                type="number"
                className="w-full border border-gray-300 py-2 px-3 rounded mt-2 outline-none"
                id="date"
                placeholder="Cost"
              />
            </div>
            <div className="flex gap-3 w-full">
              <input
                type="text"
                className="w-full border border-gray-300 py-2 px-3 rounded mt-2 outline-none"
                placeholder="City"
              />
              <input
                className="w-full border border-gray-300 py-2 px-3 rounded mt-2 outline-none"
                id="date"
                placeholder="Photo URL"
              />
            </div>
          </div>
          <textarea
            className="w-full px-2 py-3 bg-slate-100 rounded-md focus:outline-2 focus:outline-slate-500 mt-2"
            id="date"
            placeholder="Description"
          />
          <button
            type="submit"
            className="w-full bg-slate-500 text-white p-3 rounded-lg hover:bg-gray-400 font-bold py-3 px-4 mt-2 uppercase">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
