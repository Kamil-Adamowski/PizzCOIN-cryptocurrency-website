export const Dropdown = ({children, open, setOpen, setClose, btnName }) => (
  <div className="relative">
  <button 
    id="open-btn"
    onClick={setOpen}
    className="bg-gradient-to-br from-gradientPurple  to-gradientBlue text-xl text-main w-64 h-14 p-3 rounded-lg focus:outline-none">
      {btnName}
  </button>
  {open === true && 
    <div 
      id="close-div-btn"
      onClick={setClose}
      className="fixed inset-0 h-full w-full z-10">
    </div>
  }
  {open === true &&
    <div 
      className="absolute mt-2 bg-primary rounded-md z-20 grid grid-cols-5 shadow-sm">
        {children}
    </div>
  }
</div>
)
