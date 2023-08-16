
function Navbar(){
    return(
        <>
        <ul className="flex flex-row justify-evenly	items-center mt-4 bg-test">
            <li><a href="#"><img src="../favicon.svg" alt="Logo"/></a></li>
            <li><a href="#">Quem somos</a></li>
            <li><a href="#">O problema</a></li>
            <li><a href="#">A solução</a></li>
            <li className="btn btn-outline btn-info"><a href="#">Nos Contate</a></li>
        </ul>
        </>
    )
}
export default Navbar