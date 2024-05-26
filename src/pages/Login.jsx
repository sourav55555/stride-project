import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "../components/Login-Registration/GoogleLogin";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";

const Login = () => {
  const { signIn, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const handleSUbmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    await signIn(email, password);
  };

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);

  return (
    <form onSubmit={handleSUbmit} className="hero min-h-screen bg-slate-200">
      <div className="hero-content flex-col lg:flex-row gap-10">
        <div className="text-center lg:text-left w-full lg:w-1/2">
          <h1 className="text-5xl font-bold">Login Now & Start Shopping</h1>

        </div>
        <div className="card shrink-0 w-full lg:w-1/2 max-w-sm shadow-xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Enter Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Enter Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered"
                name="password"
                required
              />
            </div>

            <div className="form-control mt-6">
              <input
                className="btn bg-slate-600 hover:text-black text-white"
                type="submit"
                value="Login"
              />
            </div>
            <div className="mt-4">
              <GoogleLogin />
            </div>
            <div className="mt-5">
              <p>
                New here?{" "}
                <Link to="/register" className="text-green-600 font-semibold">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
