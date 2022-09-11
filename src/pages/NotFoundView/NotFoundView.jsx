import { Link } from 'react-router-dom';

export const NotFoundView = () => {
  return (
    <div>
      <h1>404 page not found</h1>
      <p>
        Go to <Link to="/">Home page</Link>
      </p>
    </div>
  );
};
