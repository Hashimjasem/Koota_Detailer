import Logo from '../Assets/KootaLogo.svg'

function Nav() {
    return ( 
        <div className='bg-[#121018] p-[1rem] nav'>
            <img src={Logo} alt="" className=' h-[2rem]'/>
        </div>
     );
}

export default Nav;