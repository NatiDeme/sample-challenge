export default function CreateTour() {
  return (
    <div className="w-full">
      <div className="text-center mt-5">
        <p className="text-3xl font-black">Create new Tour</p>
      </div>
      <div className="mt-10 w-full">
        <form className="flex flex-col gap-5 md:mx-80">
          <input
            type="text"
            className="border-b-2 border-gray-200 focus:border-slate-500  p-1 focus:outline-0"
            placeholder="Title"
          />
          <div className="flex gap-5">
            <div className="flex flex-col gap-5">
              <input
                type="number"
                className="border-b-2 border-gray-200 focus:border-slate-500  p-1 focus:outline-0"
                id="date"
                placeholder="Duration"
              />
              <input
                type="text"
                className="border-b-2 border-gray-200 focus:border-slate-500  p-1 focus:outline-0"
                placeholder="City"
              />
            </div>
            <div className="flex flex-col gap-5">
              <input
                type="number"
                className="border-b-2 border-gray-200 focus:border-slate-500  p-1 focus:outline-0"
                id="date"
                placeholder="Cost"
              />
              <input
                className="border-b-2 border-gray-200 focus:border-slate-500  p-1 focus:outline-0"
                id="date"
                placeholder="Photo URL"
              />
            </div>
          </div>
          <textarea
            className="bg-slate-100 rounded-md focus:outline-2 focus:outline-slate-500"
            id="date"
            placeholder="Description"
          />
          <input
            type="submit"
            className="bg-slate-700 text-white w-20 rounded-md p-3 hover:border-2 hover:border-slate-700 hover:bg-white hover:text-slate-700"
          />
        </form>
      </div>
    </div>
  );
}
