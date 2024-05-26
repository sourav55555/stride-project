import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";

const GoogleLogin = () => {
  const { googleLogin } = useAuth();

  const handleGoogle = () => {
    googleLogin();
  };

  return (
    <button onClick={handleGoogle} className="btn w-full bg-slate-100">
      <div className="flex items-center gap-2">
        <FcGoogle size={23} />
        <p>Google</p>
      </div>
    </button>
  );
};

export default GoogleLogin;
