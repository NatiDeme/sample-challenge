import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUpUser } from '../../redux/user/userAuth';

export default function Signup() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = useState({
    email: '',
    name: '',
    username: '',
    password: ''
  });
  const updateValue = (e) => {
    setValue({
      ...value,
      [e.target.id]: e.target.value
    });
  };
  const submitHandler = () => {
    dispatch(signUpUser(value));
  };
  useEffect(() => {
    const exist = Object.keys(user).length;
    if (exist > 0) {
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
                placeholder="Email"
                id="email"
                onChange={updateValue}
                className="border-b-2 placeholder:text-black placeholder:p-1 border-gray-400 w-64 focus:outline-0"
              />
              <input
                type="text"
                placeholder="name"
                id="name"
                onChange={updateValue}
                className="border-b-2 placeholder:text-black placeholder:p-1 border-gray-400 w-64 focus:outline-0"
              />
              <input
                type="text"
                placeholder="username"
                id="username"
                onChange={updateValue}
                className="border-b-2 placeholder:text-black placeholder:p-1 border-gray-400 w-64 focus:outline-0"
              />
              <input
                type="text"
                placeholder="Password"
                id="password"
                onChange={updateValue}
                className="border-b-2 placeholder:text-black placeholder:p-1 border-gray-400 w-64 focus:outline-0"
              />
              <button
                type="button"
                onClick={submitHandler}
                className="bg-black text-white w-64 p-2 rounded-xl hover:bg-white hover:border-2 hover:text-black hover:border-black">
                {' '}
                Sign Up
              </button>
            </form>
            <div className="flex gap-2 lg:hidden">
              <p>You already have an account?</p>
              <p className="underline">Sign in</p>
            </div>
          </div>
        </div>
      </div>
      <div className="login w-[45rem] rounded-3xl h-[56rem] my-5 mr-14 hidden lg:block">
        <div className="flex justify-end mr-5">
          <button
            type="button"
            className="bg-white text-black p-3 rounded-xl mt-5 hover:bg-black hover:text-white hover:border-2 hover:border-white">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}
