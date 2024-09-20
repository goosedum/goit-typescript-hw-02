import { RotatingLines } from 'react-loader-spinner';

const Loader = () => (
  <RotatingLines
    visible={true}
    height="96"
    width="96"
    strokeColor="#465efa"
    strokeWidth="5"
    animationDuration="0.65"
    ariaLabel="rotating-lines-loading"
    wrapperStyle={{}}
    wrapperClass=""
  />
);

export default Loader;
