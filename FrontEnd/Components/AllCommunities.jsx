import Cards from '../Components/Cards';
import useForum from './context';

function AllCommunites()
{
  
  const {communities}=useForum()
    
    return(
        <>
              <div className='h-[34px] w-[1174px] flex justify-between bg-[#0000002E] ml-[133px] mb-[20px]'>
                <div className='font-[600] text-[16px] text-[#DAD7D7] text-center box-border pt-[6px]'>Top communities</div>
                <img src='images/play_arrow_filled.svg ' className='flex justify-center items-center'></img>
              </div>
              <div className='flex ml-[133px] '>
                

              </div>
              <div className="mt-[42px]">
                <div className='h-[34px] w-[1174px] flex justify-between bg-[#0000002E] ml-[133px] mb-[20px]'>
                <div className='font-[600] text-[16px] text-[#DAD7D7] text-center box-border pt-[6px]'>Explore communities</div>
                <img src='images/play_arrow_filled.svg ' className='flex justify-center items-center'></img>
              </div>
              </div>
               <div className='flex ml-[133px] gap-[20px] flex-wrap '>
                {
                  communities.map((community)=>
                  (
                      <Cards key={community.id} id={community.id} name={community.name} discription={community.description}/>
                  )
                  )

                }

              </div>
        </>
    )
}
export default AllCommunites