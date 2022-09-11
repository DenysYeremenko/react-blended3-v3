import { useFetchIvent } from 'hooks/useFetchIvent/useFetchIvent';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const EventDetails = () => {
  const eventData = useFetchIvent();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    eventData && (
      <div>
        <button
          type="button"
          onClick={() => {
            navigate(location?.state?.from ?? '/');
          }}
        >
          Go back
        </button>
        <h2>{eventData.data.name}</h2>
        <img src={eventData.data.images[0].url} alt="" />
        <p>Genre: {eventData.data.classifications[0].genre.name}</p>
        <p>{eventData.data.info}</p>
      </div>
    )
  );
};
