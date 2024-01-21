import './css/App.css'

import logo from './assets/images/detailing-logo.svg'
import menu from './assets/images/bars-solid.svg'
import arrow from './assets/images/sort-down-solid.svg'
import background from './assets/images/background.jpg'


function App() {
  return (
    <div>
      <Navbar />
      <DropDownMenu />
      <MainSection />
      <OffertSection />
    </div>
  )
}

function Navbar() {

  const navLinks = [
    {
      id: 1,
      title: "STRONA GŁÓWNA",
      link: "#Main-section"
    },
    {
      id: 2,
      title: "OFERTA",
      link: "#Offert-section"
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
    <nav className='fixed bg-[#0A0A0A] w-full h-[100px] flex items-center fiexed top-0 justify-around px-[18vw] max-[1000px]:px-[0vw] max-[1340px]:px-[10vw] '>
      <div className='logo'>
        <img src={logo} alt="logo-car-detailing" className='w-[100px] object-contain'/>
      </div>
      <ul className='text-[#B9BAA3] font-light flex text-xl gap-8 max-[1000px]:hidden'>
        {navLinks.map((link) => (
          <a href={link.link}><li className='cursor-pointer transition-all ease-in-out duration-300 hover:text-white'>{link.title}</li></a>
        ))}
      </ul>
      <div className='min-[1000px]:hidden max-[1000px]:block cursor-pointer'>
        <img src={menu} alt="menu-bars" className='w-10 h-10'/>
      </div>
    </nav>
  )
}


function MainSection() {
  return (
    <section id='Main-section' className='mt-[100px] w-[100vw] h-[60vh] flex flex-col justify-center items-center text-center' style={{backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}>
      <h2 className='font-bold text-white text-5xl overflow-hidden tracking-[1.5rem] mb-20 max-[1200px]:text-3xl max-[570px]:tracking-[.5rem]'>DETAILING SAMOCHODOWY</h2>
      <button className='bg-[#B9BAA3] w-[250px] h-[60px] text-xl font-bold text-[#0A0A0A] rounded-xl mb-20 transition-all ease-in-out duration-300 hover:text-white'>ZADZWOŃ DO NAS</button>
    </section>
  )
}

function DropDownMenu() {
  return (
    <div className=''>
      
    </div>
  )
}

function OffertSection() {
  return (
    <section id='Offert-section' className='w-[100vw]'>
      <h2 className='font-bold text-[#0A0A0A] text-6xl text-center mt-10 max-[400px]:text-5xl'>OFERTA</h2>
      <div className='w-[350px] h-1 bg-[#B9BAA3] mx-auto rounded-xl mt-3 max-[400px]:w-[250px]'></div>
      <div className='w-[90%] h-[600px] rounded-md shadow-[0px_0px_22px_-5px_#1a202c] mx-auto my-20'>

      </div>
    </section>
  )
}

export default App
