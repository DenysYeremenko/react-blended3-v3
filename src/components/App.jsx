import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from 'pages/SharedLayout/SharedLayout';
import { HomeView } from 'pages/HomeView/HomeView';
import { EventsListView } from 'pages/EventsListView/EventsListView';
import { EventSubView } from 'pages/EventSubView/EventSubView';
import { EventDetails } from 'pages/EventDetails/EventDetails';
import { NotFoundView } from 'pages/NotFoundView/NotFoundView';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomeView />} />
        <Route path="events" element={<EventsListView />}>
          <Route path=":eventId" element={<EventSubView />} />
        </Route>
      </Route>
      <Route path="/events/:eventId/details" element={<EventDetails />} />
      <Route path="*" element={<NotFoundView />} />
    </Routes>
  );
};

// export class App extends Component {
// state = {
//   events: [],
//   eventData: {}
// }
// componentDidMount() {
//   this.getData()
// }
// getEvent = (id) => {
//   renderMoreInfo(id).then((r) => {
//     this.setState( { eventData: r.data})
//   })
// }
// getData = () => {
//   getEvents().then((r) => {
//     this.setState({ events:  [...r]  })
// }) }
// render() {
// return (
//   <div
//     style={{
//       height: '100vh',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       fontSize: 40,
//       color: '#010101'
//     }}
//   >
//     <Gallery events={this.state.events} getEvent={this.getEvent} />
//     <EventsInfo eventsData={this.state.eventData } />
//   </div>
// );
// };
// }
