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
import SearchPage from "./SearchPage";
import RectangleImage from '../assets/Rectangle_img.png';

const SearchPageNew = () =>{
    return(
        <>
           <div class="mx-auto">
     

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
     <div class="flex items-center justify-center mt-4 ml-4 gap-1">
       <input class="w-[700px] h-[34px]  rounded-2xl border border-[#00AEEF] placeholder:text-[#00AEEF] placeholder:px-4 flex items-center" placeholder="Location" />
       
       <div class="w-[100px] h-[30px] p-2 rounded-2xl border border-[#00AEEF] ml-2 flex items-center justify-center">
        <span class="text-[#00AEEF] text-xs px-1">Add Filters</span>
        <img src={Vector} width="14px" alt="Filter Icon" />
    </div>
     <div class="w-[100px] h-[30px] rounded-2xl border border-[#00AEEF] items-center bg-[#00AEEF]">
         <span class=" px-6 text-white mx-auto">Search</span>
     </div>
     
   </div>
   
 </div>

 <SearchPage />
 <img
  src={RectangleImage}
  className="w-full h-[500px] pb-16"
 />
 <hr class="border-[#00AEEF] border-2 w-[80%] mx-auto mb-8" />
  <div class="flex justify-center items-center pt-8">
      <div class="px-12">
          <img src={Logo} width="150px" alt="Logo" />
      </div>
      <div class="flex flex-col items-start space-y-1 justify-center">
          <div class="flex items-center">
              <img src={Location} width="24px" alt="Location Icon" />
              <span class="text-xs ml-2">ABC Company, 123 East, 17th Street, St. Louis 10001</span>
          </div>
          <div class="flex items-center justify-between pt-2 ">
              <img src={Phone} width="24px" alt="Location Icon" />
              <span class="text-xs ml-2">(121) 456-7890</span>

              <img 
              class="ml-12"
              src={Shape} width="24px" alt="Location Icon" />
              <span class="text-xs ml-2">(121) 456-7890</span>
          </div>
          <div class="flex items-center pt-6 gap-2">
            <span class="text-[#0A142F] font-normal mx-8  text-xs">Social media</span>
            <img src={Facebook} width="20px" alt="Facebook" />
            <img src={Twitter} width="20px" alt="Twitter" />
            <img src={Youtube} width="20px" alt="YouTube" />
        </div>
        
      </div>
  </div>
  <footer class="py-6 mt-12">
  <hr class="border-[#00AEEF] border-1 w-[80%] mx-auto mb-8" />
  <div class="flex flex-col md:flex-row justify-between items-center">
    <div class="px-4 md:px-14 ml-16">
      <ul class="flex flex-wrap space-x-4">
        <li class="text-sm text-[#0A142F]">TOS</li>
        <li class="text-sm text-[#0A142F]">HELP</li>
        <li class="text-sm text-[#0A142F]">PRIVACY POLICY</li>
        <li class="text-sm text-[#0A142F]">DISCLAIMER</li>
      </ul>
    </div>
    <div class="text-[#0A142F] text-sm text-center  md:text-right px-4">
      <p>Copyright &copy; 2022 ABC Company</p>
    </div>
  </div>
</footer>
        
        </>
    )
} 

export default SearchPageNew;