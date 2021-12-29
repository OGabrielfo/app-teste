import Item from "./Item"

function List() {
    return (
        <>
            <h1>Lista Show</h1>
            <ul>
                <Item marca="Sony" ano_lancamento={2018} />
                <Item marca="Microsoft" ano_lancamento={2019} />
                <Item marca="" ano_lancamento="" />
            </ul>
        </>
    )
}

export default List