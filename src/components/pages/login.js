export default function Login() {
  return (
    <div className="flex justify-center  lg:justify-between">
      <div>
        <p className="text-black text-lg font-black mt-10 ml-5">LOGO</p>
        <div>
          <div className="flex flex-col gap-10 mt-20 lg:ml-20">
            <h2 className="text-2xl font-black">Sign in to your account</h2>
            <form className="flex flex-col gap-5">
              <input
                type="email"
                placeholder="Email"
                className="border-b-2 placeholder:text-black placeholder:p-1 border-gray-400 w-64 focus:outline-0"
              />
              <input
                type="text"
                placeholder="Password"
                className="border-b-2 placeholder:text-black placeholder:p-1 border-gray-400 w-64 focus:outline-0"
              />
              <button
                type="button"
                className="bg-black text-white w-64 p-2 rounded-xl hover:bg-white hover:border-2 hover:text-black hover:border-black">
                {' '}
                Sign in
              </button>
            </form>
            <div className="flex gap-2 lg:hidden">
              <p>You dont have an account?</p>
              <p className="underline">Sign Up</p>
            </div>
          </div>
        </div>
      </div>
      <div className="login w-[45rem] rounded-3xl h-[56rem] my-5 mr-14 hidden lg:block">
        <div className="flex justify-end mr-5">
          <button
            type="button"
            className="bg-white text-black p-3 rounded-xl mt-5 hover:bg-black hover:text-white hover:border-2 hover:border-white">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
