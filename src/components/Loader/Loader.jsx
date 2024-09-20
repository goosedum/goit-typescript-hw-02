import { RotatingLines } from 'react-loader-spinner';

const Loader = () => (
  <RotatingLines
    visible={true}
    height="96"
    width="96"
    color="#6076ff"
    strokeWidth="5"
    animationDuration="0.65"
    ariaLabel="rotating-lines-loading"
    wrapperStyle={{}}
    wrapperClass=""
  />
);

export default Loader;
