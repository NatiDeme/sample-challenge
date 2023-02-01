import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { authUser } from '../../redux/user/userAuth';

export default function Login() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = useState({
    email: '',
    password: ''
  });
  const updateValue = (e) => {
    setValue({
      ...value,
      [e.target.id]: e.target.value
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(authUser(value));
  };
  useEffect(() => {
    const exist = user.length;
    if (exist > 0) {
      localStorage.setItem('token', user[0].token);
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/');
    }
  }, [user]);
  return (
    <div className="flex justify-center w-full lg:justify-between">
      <div>
        <Link to="/">
          <p className="text-black text-lg font-black mt-10 ml-5">LOGO</p>
        </Link>
        <div>
          <div className="flex flex-col gap-10 mt-20 lg:ml-20">
            <h2 className="text-2xl font-black">Sign in to your account</h2>
            <form className="flex flex-col gap-5">
              <input
                type="email"
                id="email"
                placeholder="Email"
                onChange={updateValue}
                className="border-b-2 placeholder:text-black placeholder:p-1 border-gray-400 w-64 focus:outline-0"
              />
              <input
                type="password"
                placeholder="Password"
                id="password"
                onChange={updateValue}
                className="border-b-2 placeholder:text-black placeholder:p-1 border-gray-400 w-64 focus:outline-0"
              />
              {/* <input
                type="submit"
                className="bg-black text-white w-64 p-2 rounded-xl hover:bg-white hover:border-2 hover:text-black hover:border-black"
                value="Sign in"
              /> */}
              <button
                type="button"
                onClick={submitHandler}
                className="bg-black text-white w-64 p-2 rounded-xl hover:bg-white hover:border-2 hover:text-black hover:border-black">
                signin
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
          <Link to="/signup">
            <button
              type="button"
              className="bg-white text-black p-3 rounded-xl mt-5 hover:bg-black hover:text-white hover:border-2 hover:border-white">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
