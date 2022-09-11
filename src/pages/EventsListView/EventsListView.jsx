import { getEvents } from '../../service/api';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const EventsListView = () => {
  const [events, setEvents] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getEvents().then(r => {
      setEvents(r);
    });
  }, []);

  return (
    <div>
      <ul>
        {events.map(({ id, name }) => {
          return (
            <li key={id}>
              <Link to={id} state={{ from: location.pathname }}>
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
      <Outlet />
      {/* <EventsInfo eventsData={eventData} /> */}
    </div>
  );
};
