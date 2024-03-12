//Faca um componete que faça um retangulo de largura da tela
//por 200px

//crie uma variavel com Let no js que contenha o valor "MeuComponente"

//Crie uma div no componte que dentro dela mostre um <p>
//contendo o valor variavel
import './MeuComponete.css'
function MeuComponente(){
    let variavel = "Meu Componente"
return(
    <div className="minha-div">
        <p>{variavel}</p>
    </div>
)
}
export default MeuComponente;