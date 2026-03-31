import { useEffect, useState } from 'react';
import Cards from '../Components/Cards';
import { getJoinedCommunitieses } from './api';
import useForum from './context';

function JoinedCommunites()
{
    const {joinedcom}=useForum()
    

    return(
        <>
        <div className='mt-[53px] ml-[133px] mr-[133px] flex flex-wrap gap-[20px]' >
            {
                  joinedcom.map((community)=>
                  (
                      <Cards key={community.id} id={community.id} name={community.name} discription={community.description}/>
                  )
                  )

                }

        </div>
        </>
    )
}
export default JoinedCommunites
