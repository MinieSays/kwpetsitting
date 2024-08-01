


const ReviewCard = ( {imgUrl, customerName, review } ) => {
  return (
    <div className="bg-white h-[300px] rounded-xl border">
        <div className="h-50 rounded-t-xl bg-[#D1BAA4] flex justify-center items-center">
            <img src={imgUrl} alt=""
            className="h-24 w-24 rounded-full my-4" />
        </div>
        <div className="flex flex-col justify-center items-center gap-1 p-6">
            <p className="font-montserrat font-semibold">{customerName}</p>
            <p className="font-montserrat text-sm px-6 py-1 rounded-xl italic text-center break-words">{review}</p>
        </div>
    </div>
  )
}

export default ReviewCard