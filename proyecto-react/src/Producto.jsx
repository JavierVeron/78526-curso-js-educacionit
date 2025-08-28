const Producto = ({imagen, titulo, precio, descripcion}) => {
    return (
        <div>
            <img src={imagen} alt={titulo} />
            <h1>{titulo}</h1>
            <p><b>$ {precio}</b> Precio sin impuestos nacionales</p>
            <p>{descripcion}</p>
        </div>
    )
}

export default Producto