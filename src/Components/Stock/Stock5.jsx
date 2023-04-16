import React from 'react'

export default function Stock5() {
  return (
    <div>
        <div class="relative min-h-screen xl:flex bg-gray-700">
        <div class="sidebar bg-gray-800 text-gray-100 w-64 space-y-6 absolute inset-y-0 left-0 transform -translate-x-full xl:relative xl:translate-x-0 border-r border-gray-700">
        <a href="#" class="flex items-center py-5 px-4 text-gray-300 border-b border-gray-700">
       <img src="https://raw.githubusercontent.com/tailwindlabs/tailwindcss.com/648abeafbc956f9c632d5a9f5a63a30fefcec199/src/img/brand/tailwindcss-mark.svg" 
           alt="" 
           class="h-6 w-6 mr-1 text-blue-400"
         /> 
     
      
        {/*   <span class="font-bold">TailwindCSS Admin Panel</span> */}
         </a>
   
     {/* <nav class="px-2">
      <a href="#" class="block py-2.5 px-4 rounded transition duration-300 hover:bg-gray-700 hover:text-white">Home</a>
      <a href="#" class="block py-2.5 px-4 rounded transition duration-300 hover:bg-gray-700 hover:text-white">About</a>
      <a href="#" class="block py-2.5 px-4 rounded transition duration-300 hover:bg-gray-700 hover:text-white">Features</a>
      <a href="#" class="block py-2.5 px-4 rounded transition duration-300 hover:bg-gray-700 hover:text-white">Pricing</a>
     </nav> */}
   
      </div>
 
  
  
  <div class="flex-1 pt-32 pb-16">
  
    <nav class="bg-gray-800 h-16 fixed top-0 inset-x-0 xl:ml-64 transition duration-300 border-b border-gray-800">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex justify-between">
          <div class="flex space-x-4">
            <div class="xl:hidden flex items-center">
              <button class="sidebarBtn">
                <svg xmlns="http://www.w3.org/2000/svg" 
                     class="h-6 w-6 text-gray-300" 
                     fill="none" 
                     viewBox="0 0 24 24" 
                     stroke="currentColor">
                  <path stroke-linecap="round" 
                        stroke-linejoin="round" 
                        stroke-width="2" 
                        d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            <div class="xl:hidden">
              <a href="#" class="flex items-center py-5 px-2 text-gray-300">
              


      <img src="https://raw.githubusercontent.com/tailwindlabs/tailwindcss.com/648abeafbc956f9c632d5a9f5a63a30fefcec199/src/img/brand/tailwindcss-mark.svg" 
           alt="" 
           class="h-6 w-6 mr-2 text-blue-400">
       </img>
      
      <span class="font-bold">TailwindCSS Admin Panel</span>
              </a>
            </div>
            <div class="hidden md:flex items-center space-x-1">
              <a href="" class="py-5 px-3 text-gray-300 hover:text-gray-100">Dashboard</a>
              <a href="" class="py-5 px-3 text-gray-300 hover:text-gray-100">Users</a>
              <a href="" class="py-5 px-3 text-gray-300 hover:text-gray-100">Settings</a>
            </div>
          </div>
          <div class="flex items-center space-x-1">
            <div class="hidden md:flex items-center space-x-1">
              <a href="" class="py-5 px-3 text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" 
                     class="h-6 w-6" 
                     fill="none" 
                     viewBox="0 0 24 24" 
                     stroke="currentColor">
                  <path stroke-linecap="round" 
                        stroke-linejoin="round" 
                        stroke-width="2" 
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </a>
              <a href="" class="py-5 px-3 text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" 
                     class="h-6 w-6" 
                     fill="none" 
                     viewBox="0 0 24 24" 
                     stroke="currentColor">
                  <path stroke-linecap="round" 
                        stroke-linejoin="round" 
                        stroke-width="2" 
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </a>
              <a href="" class="py-5 px-3 text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" 
                     class="h-6 w-6" 
                     fill="none" 
                     viewBox="0 0 24 24" 
                     stroke="currentColor">
                  <path stroke-linecap="round" 
                        stroke-linejoin="round" 
                        stroke-width="2" 
                        d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                </svg>
              </a>
            </div>
              <button class="">
                <img src="https://relayfm.s3.amazonaws.com/uploads/user/avatar/81/user_avatar_siracusa_artwork.png"
                     alt="" 
                     class="h-12 w-12 rounded-full ml-2"/>
            </button>
          </div>
          <div class="md:hidden flex items-center">
            <button class="navbarBtn">
              <svg xmlns="http://www.w3.org/2000/svg" 
                   class="h-6 w-6 text-gray-300" 
                   fill="none" 
                   viewBox="0 0 24 24" 
                   stroke="currentColor">
                <path stroke-linecap="round" 
                      stroke-linejoin="round" 
                      stroke-width="2" 
                      d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="navbar hidden md:hidden bg-gray-800 text-gray-300">
        <a href="" 
           class="block py-2 px-4 text-sm hover:bg-gray-700">Dashboard</a>
        <a href="" 
           class="block py-2 px-4 text-sm hover:bg-gray-700">Users</a>
        <a href="" 
           class="block py-2 px-4 text-sm hover:bg-gray-700">Settings</a>
      </div>
    </nav>

    <div class="bg-gray-800 h-16 fixed top-16 inset-x-0 xl:ml-64 transition duration-300 border-t border-gray-700">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex justify-between">
          <ul class="flex space-x-4">
            <li class="flex items-center">
              <a href="#" class="flex items-center py-5 text-gray-300">
                Home
              </a>
            </li>
            <li class="flex items-center">
              <span class="flex items-center py-5 -px-1 text-gray-300"/>
            </li>
            <li class="flex items-center">
              <a href="#" class="flex items-center py-5 text-gray-300">
                Admin
              </a>
            </li>
            <li class="flex items-center">
              <span class="flex items-center py-5 -px-1 text-gray-300"/>
            </li>
            <li class="flex items-center">
              <span class="flex items-center py-5 text-gray-500"/>
                Dashboard
              
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="py-32 bg-red-500 text-center">
      <h2 class="font-extrabold text-6xl">Admin Panel TailwindCSS!</h2>
    </div>
    <div class="py-32 bg-green-500 text-center">
      <h2 class="font-extrabold text-6xl">Admin Panel TailwindCSS!</h2>
    </div>
    <div class="py-32 bg-blue-500 text-center">
      <h2 class="font-extrabold text-6xl">Admin Panel TailwindCSS!</h2>
    </div>

    <div class="bg-gray-800 h-16 fixed bottom-0 inset-x-0 xl:ml-64 transition duration-300 border-t border-gray-700 text-sm">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex justify-between">
          <div class="flex space-x-4">
            <div class="flex items-center">
              <div class="flex items-center py-5 text-gray-300">
                <a href="#" class="text-blue-300">
                  TailwindCSS Admin Panel
                </a>
                <span class="px-2">&copy; 2021 Lashchinskiy Artyom</span>
              </div>
            </div>
        </div>
          <div class="flex space-x-4">
            <div class="flex items-center">
              <div class="flex items-center py-5 text-gray-300">
                <span class="px-2">Powered by</span>
                <a href="https://tailwindcss.com" class="text-blue-300">
                  TailwindCSS
                </a>
              </div>
            </div>
        </div>
      </div>
    </div>

  </div>
 
</div>
   
        </div>
    </div>
  )
}
