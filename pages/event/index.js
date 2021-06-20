import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';
import {Fragment} from 'react'
import router, {useRouter} from 'next/router'

function AllEventPage(){

    const events=getAllEvents();
    const route=useRouter();

    function findEventHandler(year,month){
        const fullPath=`/event/${year}/${month}`;
        router.push(fullPath);
    }
    return(
        <Fragment>
            <EventsSearch onSearch={findEventHandler}/>
            <EventList items={events}/>
        </Fragment>
       
    )
}

export default AllEventPage;