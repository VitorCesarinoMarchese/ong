
function Banner(){
    return(
        <>
            <div className="flex justify-around h-96">
                <div className="text-darkblue text-center flex items-center flex-col justify-center bg-white whitespace-normal w-2/3 ">
                    <h1 className="text-4xl">Em busca de um mundo mais justo</h1>
                    <p className="text-lg mb-10 w-96">Fazendo parcerias com governos e outras ongs para alcançar nossos objetivos e tornar o mundo um lugar melhor</p>
                    <div>
                        <button className="btn mr-4 ml-2 btn-accent"><a href="#contatos">Doações</a></button>
                        <button className="btn hover:bg-white hover:text-darkblue bg-darkblue text-lightblue"><a href="#info">Saiba mais</a></button>
                    </div>
                </div>
                <div className="flex justify-center items-center w-1/3 bg-blue">
                    <img className="h-64 rounded-3xl" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/African_child.jpg/1920px-African_child.jpg" alt="" />
                </div>
            </div>
        </>
    )
}
export default Banner