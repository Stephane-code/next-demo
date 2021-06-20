import {useRouter} from 'next/router'
import { getEventById } from '../../../dummy-data';
import {Fragment} from 'react'
import EventSummary from '../../../components/event-detail/event-summary';
import EventLogistics from '../../../components/event-detail/event-logistics';
import EventContent from '../../../components/event-detail/event-content'

function EventIdList(){

    const router=useRouter();

    const eventId=router.query.eventId;

    const event=getEventById(eventId);

    if(!event){
        return <p>Event not fount</p>
    }
    return(
        <Fragment>
            <EventSummary title={event.title}/>
            <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
            <EventContent>
                {event.description}
            </EventContent>
        </Fragment>
    )
}

export default EventIdList;