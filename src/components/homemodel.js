import React from "react";
import Logo from '../assets/logo_img.svg'
import Icon from '../assets/Icons.svg'
import WhiteImage from '../assets/white_plane.png'
import SearchPage from "./SearchPage";
import MapImage from '../assets/map_img.png'

const hangars = [
  { id: 1, name: "Prairie Winds Aviation Park", image: WhiteImage },
  { id: 2, name: "Maple wood", image: WhiteImage },
  { id: 3, name: "Midwest AeroPark", image: WhiteImage },
];
const HomeModel = () =>{
    return(
        <>
         <header class="bg-white">
       <nav
         class="container mx-auto p-4 flex flex-row justify-between items-center"
       >
         <div class="text-2xl font-bold text-gray-800">
           <img src={Logo} width="160px" />
         </div>
         <ul class="hidden md:flex space-x-8">
           <li>
             <a href="#" class="text-gray-600 hover:text-gray-900">List your hanger</a>
           </li>
           <li>
             <a href="#" class="text-gray-600 hover:text-gray-900">About Us</a>
           </li>
           <li>
             <a href="#" class="text-gray-600 hover:text-gray-900">My bookings</a>
           </li>
           <li>
             <a href="#" class="text-gray-600 hover:text-gray-900">Help</a>
           </li>
           <li>
             <div class="w-[100px] h-[30px] rounded-2xl border border-[#00AEEF] flex items-center ">
               <img  src={Icon} width="16px" alt="Icon" class="mr-2 ml-4" />
               <button class="text-[#00AEEF] text-sm">Sign in</button>
           </div>
                   
          </li>
         </ul>
         <button class="md:hidden text-gray-800 focus:outline-none">
           <svg
             xmlns="http://www.w3.org/2000/svg"
             class="h-6 w-6"
             fill="none"
             viewBox="0 0 24 24"
             stroke="currentColor"
           >
             <path
               stroke-linecap="round"
               stroke-linejoin="round"
               stroke-width="2"
               d="M4 6h16M4 12h16m-7 6h7"
             />
           </svg>
         </button>
       </nav>
       <hr class="w-full " />
 
     </header>
     <div className="relative">
    <img src={WhiteImage} alt="Airplane Hangar" width={1200}  className="w-full " />
    {/* <p className="absolute inset-0 flex items-center justify-center text-[#FFFFFF] text-6xl font-bold">
        Airplane Hangars for <br></br> Sale & Rent
    </p> */}
</div>
<div className="">

  <div className="w-[1000px] mx-auto justify-center h-[90px] mt-8 border rounded-xl border-[#00AEEF] bg-[#00AEEF]">
    <div className=" flex flex-row justify-between">
      <p className="text-[#FFFFFF] pl-8  text-base mt-10">
        Members always get our best deals & prices  when signed in
      </p>
      <div className="pr-10">


      <button className="rounded-2xl w-[106px] h-[37px]   bg-[#FFFFFF] mt-8 text-[#00AEEF] text-base font-bold">
        Sign in
      </button>
      </div>
    </div>

   

</div>

  </div>
<div className="pl-24 ">

  <button className="text-lg font-normal w-[95px] h-[32px] text-[#00AEEF] rounded-2xl mt-24 bg-[#00AEEF]">
    <span className="text-white">Popular</span>
</button>

  <p className="text-[#282828] text-4xl font-bold pt-2">Hangar Destinations</p>
  <div className="flex flex-wrap justify-between">
      {hangars.map((hangar) => (
        <div key={hangar.id} className="w-[300px] sm:w-1/2 md:w-1/3 p-2 ">
          <div className="border border-[#F0F0F0] w-full h-[270px] ">
            <img className="rounded-xl mb-4" src={hangar.image} width={380} height={260} alt={hangar.name} />
            <span className="text-[#282828] text-2xl font-normal pl-8 ">{hangar.name}</span>
          </div>
        </div>
      ))}
    </div>
</div>

<div className="flex flex-col justify-center items-center ">
  <div className="flex justify-center pt-8 w-[460px]">
    <p className="font-bold text-4xl text-[#282828]">Find Hangar Spaces That Suit Your Aircraft</p>
  </div>
  <div className="rounded-3xl border border-[#F0F0F0] w-[354px] h-[64px] mt-4 flex items-center justify-between">
  <button className="w-[180px] h-[46px] rounded-2xl ml-4 bg-[#00AEEF]">
    <p className="text-[#FFFFFF] text-sm font-bold ">Hangars for Rent</p>
  </button>
  
  <p className="text-[#BAC3D2] text-sm font-normal pr-8">
    Hangars for Sale
  </p>
</div>

</div>

   <SearchPage />

   <div className="flex justify-center">
      <button className="w-[330px] h-[40px] rounded-2xl text-[#FFFFFF] text-xl font-normal bg-[#00AEEF]">
        View All
      </button>
   </div>
    <div className="flex justify-center">

    <img src={MapImage} width={1000} height={600} />
    </div>


        </>
    )
}

export default HomeModel;