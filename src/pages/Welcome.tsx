import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <>
      <h1>Welcome!</h1>
      <Link to={'/expenses'}>Go to expenses</Link>
    </>
  );
};

export default Welcome;
