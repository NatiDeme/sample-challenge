function Tour() {
  return (
    <div className="w-full">
      <div className=" flex flex-col items-center pt-5">
        <p className="text-3xl font-black">Latest Tours</p>
        <p>Please select a Tour</p>
      </div>
      <div className="flex justify-between">
        <div className="bg-gray-200 w-14 p-5 rounded-r-full bg-opacity-50 hidden lg:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
            />
          </svg>
        </div>
        <div className="bg-black w-14 p-5 rounded-l-full hidden lg:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Tour;
