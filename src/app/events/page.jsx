import './events.css'
import EventsList from './EventsList';

export default function page() {
    return (
      <main>
        <nav>
          <h2 className='title-label'>All Events</h2>
          <hr className='line-break'/>
        </nav>
        <EventsList />
        <div style={{"height": "200px"}}></div>
      </main>
    );
}
