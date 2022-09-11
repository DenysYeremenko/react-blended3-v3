import { useFetchIvent } from 'hooks/useFetchIvent/useFetchIvent';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const EventSubView = () => {
  const eventData = useFetchIvent();
  const location = useLocation();
  return (
    eventData && (
      <div>
        <h2>{eventData.data.name}</h2>
        <img src={eventData.data.images[0].url} alt="" width="300" />
        <Link to="details" state={location.state}>
          More details
        </Link>
      </div>
    )
  );
};
