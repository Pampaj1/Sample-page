import './css/App.css'
import logo from './assets/images/detailing-logo.svg'
import menu from './assets/images/bars-solid.svg'
import arrow from './assets/images/sort-down-solid.svg'

function App() {
  return (
    <div className='bg-white'>
      <Navbar />
    </div>
  )
}

function Navbar() {
  return (
    <nav className='bg-[#0A0A0A] w-full h-[100px] flex items-center fiexed top-0 justify-around px-[18vw] max-[1000px]:px-[0vw] max-[1340px]:px-[10vw] '>
      <div className='logo'>
        <img src={logo} alt="logo-car-detailing" className='w-[100px] object-contain'/>
      </div>
      <ul className='text-[#B9BAA3] flex text-xl gap-10 max-[1000px]:hidden'>
        <a href="#"><li>STRONA GŁÓWNA</li></a>
        <a href="#"><li>OFERTA<span><img src={arrow} alt="arrow-icon" className='w-5 h-5'/></span></li></a>
        <a href="#"><li>USŁUGI DODATKOWE<img src={arrow} alt="arrow-icon" className='w-5 h-5'/></li></a>
        <a href="#"><li>KONTAKT</li></a>
      </ul>
      <div className='min-[1000px]:hidden max-[1000px]:block cursor-pointer'>
        <img src={menu} alt="menu-bars" className='w-10 h-10'/>
      </div>
    </nav>
  )
}

export default App
