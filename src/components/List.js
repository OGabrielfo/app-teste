import Item from "./Item"

function List() {
    return (
        <>
            <h1>Lista Show</h1>
            <ul>
                <Item marca="Sony" />
                <Item marca="Microsoft" />
            </ul>
        </>
    )
}

export default List