import { GridSpinner } from "react-spinners-kit";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-88px)]">
        <GridSpinner size={50} color="#334155"/>
    </div>
  );
};

export default LoadingSpinner;
