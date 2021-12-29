import Button from "./evento/Button"

function Evento() {

    function meuEvento(){
        console.log(`Evento ativado!`)
    }

    function segundoEvento() {
        console.log('Segundo evento ativado!')
    }

    return(
        <div>
            <p>Clique para realizar o evento:</p>
            <Button event={meuEvento} text="Primeiro evento" />
            <Button event={segundoEvento} text="Segundo evento" />
        </div>
    )
}

export default Evento