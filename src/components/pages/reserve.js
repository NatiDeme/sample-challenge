export default function Reserve() {
  return (
    <div className="w-full">
      <div className="text-center mt-5">
        <p className="text-3xl font-black"> Reserve your Tour</p>
      </div>
      <div className="flex justify-center mt-10">
        <form className="flex flex-col gap-5">
          <input type="date" className="border-b-2 border-gray-600 p-1 focus:outline-0" id="date" />
          <input
            type="text"
            className="border-b-2 border-gray-600 p-1 focus:outline-0"
            id="date"
            placeholder="Name"
          />
          <select className="bg-white border-b-2 border-gray-600 p-1 focus:outline-0">
            <option>Kenya</option>
            <option>Ethipia</option>
          </select>
        </form>
      </div>
    </div>
  );
}
