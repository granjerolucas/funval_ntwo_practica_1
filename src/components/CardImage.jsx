// usar writing-mode para la palbra

function CardImage({ item, className }) {
  return (
    <div className={className + " [&:nth-child(2n)]:mt-[3rem] sm:[&:nth-child(3n-1)]:mt-[8rem] [&:nth-child(3n-1)]:justify-self-center [&:nth-child(3n-3)]:justify-self-end"}>
      <div className="relative sm:w-[13.5rem] lg:w-[20.5rem]  rounded-lg">
        <div className="grid grid-cols-[6.7rem,auto] lg:grid-cols-[18.7rem,auto] sm:grid-cols-[11.7rem,auto] gap-0">
          <div>
            <img
              src={item.imageUrl} cx    
              alt="card image"
              className="absolutex inset-0x  w-full object-cover"
            />
            <p className="font-bold text-[0.8rem] lg:text-[1.4rem]">{item.name}</p>
          </div>
          <div className=" flex justify-end ">
            {/* <p className="rotate-90 absolute top-[5rem] left-[-3rem] w-[10rem]">PRODCUT MANGNE</p> */}
            <p className="[writing-mode:tb] text-[0.4rem] sm:text-[0.8rem] lg:text-1xl  m-0 p-0 uppercase">{item.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardImage;
