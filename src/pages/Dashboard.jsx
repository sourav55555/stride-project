import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Dashboard = () => {

  const {user} = useContext(AuthContext);
  console.log(user, "dahs")

  return (
    <div className='w-full p-20'>
      <h2 className='font-bold text-4xl'>Profile details</h2>
      <div className='mt-24 flex items-center justify-center gap-14 w-full ms-8'>
        <div>
          <img className='w-[230px] h-[230px] rounded-full border-4 border-slate-600' src={user.photoURL} alt="Profile image" />
        </div>
        <div>
          <p className='font-semibold text-2xl'>{user.displayName}</p>
          <p className='font-semibold text-lg mt-3'>{user.email}</p>
          <p className='font-semibold text-lg mt-3'>+8801475256855</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
