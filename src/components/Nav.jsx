import Logo from '../Assets/KootaLogo.svg'

function Nav() {
    return ( 
        <div className='bg-[#181520] p-[1rem]'>
            <img src={Logo} alt="" className='h-[2rem]'/>
        </div>
     );
}

export default Nav;