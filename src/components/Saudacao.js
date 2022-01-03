function Saudacao ({nome}) {

    function gerarSaudacao(algumNome) {
        return `Olá, ${algumNome}, tudo bem?`
    }

    return (
        //o trecho inicial do código a seguir se trata de um if para renderização condicional
    <>
        {nome && <p>{gerarSaudacao(nome)}</p>}
    </>
    )
}

export default Saudacao