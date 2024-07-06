export default function List({listItems, renderItem}) {
    return(
        <ul>
            {listItems.map((item, index) => (
                <li key={index}>{renderItem(item, index)}</li>
            ))}
        </ul>
    )
}