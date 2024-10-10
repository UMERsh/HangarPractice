 import React from "react";
import Logo from '../assets/logo_img.svg'
import Icon from '../assets/Icons.svg'
import Vector from '../assets/Vector.svg'
import Image from '../assets/image_.png'
import Location from '../assets/location.png'
import Map from '../assets/map.png'
import Phone from '../assets/round-phone-24px.svg'
import Facebook from '../assets/Facebook.svg'
import Twitter from '../assets/Twitter.svg'
import Youtube from '../assets/Youtube.svg'
import Shape from '../assets/Shape.svg'
import HangarSection from "./HangerSection";
 const Home = () =>{
 
    


    return(
      <>
       <div class="mx-auto">
     

     <header class="bg-white">
       <nav
         class="container mx-auto p-4 flex flex-row justify-between items-center"
       >
         <div class="text-2xl font-bold text-gray-800">
           <img
            src={Logo} width="160px" />
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
     <div class="   md:flex lg:flex items-center justify-center mt-4 ml-4 gap-2">
       <input class="w-full h-[34px]   lg:w-[700px] md:w-[700px] rounded-2xl border border-[#00AEEF] placeholder:text-[#00AEEF] placeholder:px-4 flex items-center" placeholder="Location" />
       
       <div className="flex flex-col items-center md:flex-row md:justify-start gap-2">
  <div className="w-[100px] h-[30px] mt-2 p-2 rounded-2xl border border-[#00AEEF] flex items-center justify-center md:mt-0 lg:mt-0">
    <span className="text-[#00AEEF] text-xs px-1">Add Filters</span>
    <img src={Vector} width="14px" alt="Filter Icon" />
  </div>
  <div className="w-[100px] h-[30px] mt-1 rounded-2xl border border-[#00AEEF]  bg-[#00AEEF] flex items-center justify-center md:mt-0 lg:mt-0">
    <span className="px-6 text-white mx-auto">Search</span>
  </div>
</div>

     
   </div>
   
 </div>

  <HangarSection />
  <hr class="border-[#00AEEF] border-2 w-[80%] mx-auto mt-8" />
  <div className="flex flex-col items-center pt-8 gap-4 md:flex-row md:pr-8 md:justify-between">
  <div className=" lg:pl-24 pl-4 md:pl-24">
    <img src={Logo} width="150px" alt="Logo" />
  </div>
  <div className="flex flex-col items-center px-4 md:px-0 lg:pr-24">
    <div className="flex items-center text-center md:text-left">
      <img src={Location} width="24px" alt="Location Icon" />
      <span className="text-xs ml-2 truncate md:whitespace-normal">
        ABC Company, 123 East, 17th Street, St. Louis 10001
      </span>
    </div>
    <div className="flex flex-col md:flex-row md:justify-start items-center pt-2">
      <div className="flex items-center mb-2 md:mb-0">
        <img src={Phone} width="24px" alt="Phone Icon" />
        <span className="text-xs ml-2">(121) 456-7890</span>
      </div>
      <div className="flex items-center">
        <img className="ml-0 md:ml-12" src={Shape} width="24px" alt="Location Icon" />
        <span className="text-xs ml-2">(121) 456-7890</span>
      </div>
    </div>
    <div className="flex items-center pt-6 gap-2 pr-14">
      <span className="text-[#0A142F] font-normal text-xs">Social media</span>
      <img src={Facebook} width="20px" alt="Facebook" />
      <img src={Twitter} width="20px" alt="Twitter" />
      <img src={Youtube} width="20px" alt="YouTube" />
    </div>
  </div>
</div>

  <footer class="py-6 mt-12">
  <hr class="border-[#00AEEF] border-1 w-[80%] mx-auto mb-8" />
  <div className="flex flex-col md:flex-row justify-between items-center px-4">
  <div className="flex justify-center md:justify-start lg:pl-20 md:pl-8">
    <ul className="flex flex-wrap space-x-2 md:space-x-4">
      <li className="text-sm text-[#0A142F]">TOS</li>
      <li className="text-sm text-[#0A142F]">HELP</li>
      <li className="text-sm text-[#0A142F]">PRIVACY POLICY</li>
      <li className="text-sm text-[#0A142F]">DISCLAIMER</li>
    </ul>
  </div>
  <div className="text-[#0A142F] text-sm text-center md:text-right mt-2 md:mt-0 lg:pr-20 md:pr-8">
    <p>Copyright &copy; 2022 ABC Company</p>
  </div>
</div>

</footer>

      </>
    )
 }

 export default Home;