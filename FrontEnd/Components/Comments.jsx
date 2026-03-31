function Comments(props)
{
    return(
        <>
        <div className="w-[1100px] min-h-[96px] rounded-[15px] bg-[#ECEBEB] ml-[47px] filter drop-shadow-[-6px_0px_0px_#52BFAF]">
            <div className="w-[84px] h-[22px] font-[600] text-[20px] text-[#000000] ml-[25px] mt-[14px]">u/tech123</div>
            <div className="w-[84px] min-h-[22px] font-[400] text-[20px] text-[#000000] ml-[25px] mt-[12px] whitespace-nowrap">{props.content}</div>
        </div>
        </>
    )
}
export default Comments