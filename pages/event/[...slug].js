import {useRouter} from 'next/router'
import {getFilteredEvents} from '../../dummy-data'
import EventList from '../../components/events/event-list'
import {Fragment} from 'react'
import ResultsTitle from '../../components/events/results-title'

function FilterEventPage(){

    const route=useRouter();
    const filterData=route.query.slug;
    if(!filterData){
        return <p className='center'>Loading...</p>
    }

    const filterYear=filterData[0];
    const filterMonth=filterData[1];

    const numYear=+filterYear;
    const numMonth=+filterMonth;

    if(isNaN(numYear) || isNaN(numMonth) || numYear<2020 || numYear>2030 || numMonth<1 || numMonth>12){

        return <p>invalid filter please adjust your value</p>
    }

    const filteredEvents=getFilteredEvents(
       {
            year:numYear,
            month:numMonth
        }
    )
    if(!filterYear||filteredEvents.length==0){
       
        return  (
           
            <Fragment>
                <p>no event found</p>
                <div className="center">
                    <Button Link="/event">show all event</Button> 
                </div>
            </Fragment>
            )
    }

    const date = new Date(numYear,numMonth-1)

    return(
        <div>
            <Fragment>
                 <ResultsTitle date={date}/>
                 <EventList items={filteredEvents}/>
            </Fragment>

           
         </div>
    )
}

export default FilterEventPage;