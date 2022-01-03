function OutraLista({ itens }) {

    return (
        <>
            <h3>Lista show:</h3>
            { //condicional if é utilizada desta forma
                itens.length > 0 ? (
                    itens.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))
                ) // : equivale ao else e é obrigatório ser usado
                : (
                    <p>Não há itens cadastrados!</p>
                )
            }
        </>
    )

}

export default OutraLista