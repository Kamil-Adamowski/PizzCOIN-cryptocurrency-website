import React from 'react'

export const Dropdown = ({children, open, setOpen, close, btnName }) => (
  <div class="relative">
  <button onClick={setOpen}  class="bg-gradient-to-br from-gradientPurple  to-gradientBlue text-xl text-main w-64 h-14 p-3 rounded-lg outline-none ">{btnName}</button>
  {open === true && <div onClick={close} class="fixed inset-0 h-full w-full z-10"></div>}
  {open === true &&
  <div class="absolute left-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-20">
    {children}
  </div>
  }
</div>
  )

export const DropdownItem = ({sortType, name}) => (
  <button
    class="block px-4 py-2 text-sm text-gray-800 border-b hover:bg-gray-200"
    type="button" 
    onClick={sortType}>
    {name}
    </button>
)

