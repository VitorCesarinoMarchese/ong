import Logo from "../favicon.svg"

function Navbar(){
    return(
        <>
        <ul className="flex flex-row justify-evenly	items-center bg-darkblue text-white h-28">
            <li className="hover:text-lightblue"><a href="#"><img src={Logo} alt="Logo" className="w-20"/></a></li>
            <li className="hover:text-lightblue"><a href="#info">Quem somos</a></li>
            <li className="hover:text-lightblue"><a href="#problema">O problema</a></li>
            <li className="hover:text-lightblue"><a href="#solucao">A solução</a></li>
            <li className="btn btn-outline btn-info"><a href="#contatos">Nos Contate</a></li>
        </ul>
        </>
    )
}
export default Navbar