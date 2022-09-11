import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { renderMoreInfo } from 'service/api';

export const useFetchIvent = () => {
  const [eventData, setEventData] = useState(null);
  const { eventId } = useParams();

  useEffect(() => {
    renderMoreInfo(eventId).then(data => setEventData(data));
  }, [eventId]);

  return eventData;
};
