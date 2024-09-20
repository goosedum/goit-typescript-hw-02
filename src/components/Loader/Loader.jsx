import { RotatingLines } from 'react-loader-spinner';

const Loader = () => (
  <RotatingLines
    visible={true}
    height="90"
    width="90"
    strokeColor="#465efa"
    strokeWidth="4"
    animationDuration="0.65"
    ariaLabel="rotating-lines-loading"
    wrapperStyle={{}}
    wrapperClass=""
  />
);

export default Loader;
