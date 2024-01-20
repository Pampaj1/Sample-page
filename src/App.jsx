import './css/App.css'

import logo from './assets/images/detailing-logo.svg'
import menu from './assets/images/bars-solid.svg'
import arrow from './assets/images/sort-down-solid.svg'
import background from './assets/images/background.jpg'


function App() {
  return (
    <div>
      <Navbar />
      <MainSecion />
    </div>
  )
}

function Navbar() {

  const navLinks = [
    {
      id: 1,
      title: "STRONA GŁÓWNA",
      link: "#"
    },
    {
      id: 2,
      title: "OFERTA",
      link: "#"
    },
    {
      id: 3,
      title: "USŁUGI DODATKOWE",
      link: "#"
    },
    {
      id: 4,
      title: "KONTAKT",
      link: "#"
    },
  ]

  return (
    <nav className='bg-[#0A0A0A] w-full h-[100px] flex items-center fiexed top-0 justify-around px-[18vw] max-[1000px]:px-[0vw] max-[1340px]:px-[10vw] '>
      <div className='logo'>
        <img src={logo} alt="logo-car-detailing" className='w-[100px] object-contain'/>
      </div>
      <ul className='text-[#B9BAA3] font-light flex text-xl gap-8 max-[1000px]:hidden'>
        {navLinks.map((link) => (
          <li className='cursor-pointer transition-all ease-in-out duration-300 hover:text-white'>{link.title}</li>
        ))}
      </ul>
      <div className='min-[1000px]:hidden max-[1000px]:block cursor-pointer'>
        <img src={menu} alt="menu-bars" className='w-10 h-10'/>
      </div>
    </nav>
  )
}


function MainSecion() {
  return (
    <section className='w-[100vw] h-[60vh] flex flex-col justify-center items-center text-center' style={{backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}>
      <h2 className='font-bold text-white text-5xl tracking-[1.5rem] mb-20 max-[1200px]:text-3xl max-[570px]:tracking-[.5rem]'>DETAILING SAMOCHODOWY</h2>
      <button className='bg-[#B9BAA3] w-[250px] h-[60px] text-xl font-bold text-[#0A0A0A] rounded-xl mb-20 transition-all ease-in-out duration-300 hover:text-white'>ZADZWOŃ DO NAS</button>
    </section>
  )
}

export default App
