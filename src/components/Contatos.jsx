
function Contatos(){
    return(
        <>
            <div className="flex flex-col justify-evenly items-center h-96 text-center text-black bg-lightblue" id="contatos">
                <h1 className="text-4xl">Nos Contate</h1>
                <input type="text" name="Nome" id="Nome" placeholder="Nome" className="input input-bordered w-full max-w-lg"/>
                <input type="email" name="Email" id="Email" placeholder="Email" className="input input-bordered w-full max-w-lg"/>
                <textarea name="Mensagem" id="Mensagem" cols="30" rows="10" placeholder="Mensagem" className="input input-bordered w-full max-w-lg"></textarea>
                <button className="btn hover:bg-darkblue text-white bg-blue border-none">Enviar</button>
            </div>
        </>
    )
}
export default Contatos