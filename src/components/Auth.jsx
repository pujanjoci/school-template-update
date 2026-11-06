import { useState } from 'react';
import { Link } from 'react-router-dom';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Student');
  const [showPassword, setShowPassword] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    setStatusMessage(
      `${role} portal authentication requested for ${email}. Please contact the IT Helpdesk if you require a password reset.`
    );
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100svh-4rem)] bg-[#FAF9F6] px-4 py-12">
      <div className="bg-white p-8 sm:p-10 border border-stone-300 w-full max-w-md text-left">
        <span className="ty-kicker text-indigo-800 block mb-1">
          Staff &amp; Student Portal
        </span>
        <h2 className="ty-subheading mb-5 text-stone-900 pb-3 border-b border-stone-200">
          Login
        </h2>

        {/* Role Selector Tabs */}
        <div className="grid grid-cols-3 border border-stone-300 mb-6 bg-[#FAF9F6]">
          {['Student', 'Parent', 'Staff'].map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => {
                setRole(item);
                setStatusMessage('');
              }}
              className={`py-2 ty-support font-semibold transition-colors ${
                role === item
                  ? 'bg-indigo-950 text-white'
                  : 'text-stone-700 hover:text-indigo-950'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {statusMessage && (
          <div className="mb-5 p-3.5 bg-indigo-50 border border-indigo-200 text-indigo-950 ty-support">
            {statusMessage}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-stone-700 ty-support font-medium mb-2"
            >
              {role} Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="name@stjosephs.edu"
              className="appearance-none border border-stone-300 w-full py-2.5 px-3 text-stone-800 ty-body leading-tight focus:outline-none focus:border-indigo-900"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <label
                htmlFor="password"
                className="block text-stone-700 ty-support font-medium"
              >
                Password
              </label>
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="ty-support text-indigo-800 hover:underline font-medium"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              className="appearance-none border border-stone-300 w-full py-2.5 px-3 text-stone-800 ty-body leading-tight focus:outline-none focus:border-indigo-900"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full bg-indigo-900 border border-indigo-900 hover:bg-white hover:text-indigo-900 text-white font-semibold text-[15px] py-2.5 px-4 transition-colors focus:outline-none"
            >
              Log In
            </button>
          </div>
        </form>

        <div className="mt-6 pt-4 border-t border-stone-200 flex items-center justify-between ty-support text-stone-600">
          <span>Need portal assistance?</span>
          <Link to="/support" className="text-indigo-800 font-semibold hover:underline">
            Contact IT Support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Auth;
