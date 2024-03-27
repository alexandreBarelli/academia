class Cliente {
    constructor() { // é chamado toda vez que a classe é instanciada
        this.clientes = []
    }
    static fields = ['nome','nascimento','mensalidade','estadocivil','sexo']
    
    salva(cliente) {
        this.clientes.push(cliente) //o push adiciona no fim do array
        localStorage.setItem('tbClientes',JSON.stringify(this.clientes))
        alert('Cliente salvo com sucesso🎇')
    }
}

// criando o objeto cliente
const cliente = new Cliente()

document.getElementById('salvar').addEventListener('click',(event) => {
    event.preventDefault() // evita que a página seja recarregada
    //const nome = document.getElementById('nome').value
    //alert(`Você informou o nome ${nome}`)
    
    let valorSexo=''
    if(document.getElementById('masculino').checked) {
        valorSexo = 'Masculino'
    } else {
        valorSexo = 'Feminino'
    }
    const registro = {
        nome: document.getElementById('nome').value,
        nascimento: document.getElementById('nascimento').value,
        mensalidade: document.getElementById('mensalidade').value,
        estadocivil: document.getElementById('estadocivil').value,
        sexo: valorSexo
    }
    //salvando os dados
    cliente.salva(registro)
}
)