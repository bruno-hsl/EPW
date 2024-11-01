function Titulo(props){
    // let nome = "Bruno";
    return (
        <div>
            <h1>Título da página</h1>
            <h2>Seu nome: {props.nome} </h2>
            <h2>Sua idade: {props.idade} </h2>
        </div>
    )
}

export default Titulo