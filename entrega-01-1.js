

class Funcionario {
    constructor(nome, Senha, posicao) {
      this.#id = generateUniqueId();
      this.nome = nome;
      this.posicao = posicao;
      this.#senha = Senha;
      this.consultas = [];
    }

    set  ModificarSenha(novaSenha){
        this.#senha = novaSenha
    }

    set ModificarNome(novoNome){
      this.nome = novoNome;
    }

    get verDados(){
      const dados = {
        id: this.#id,
        nome: this.nome,
        posicao: this.posicao,
        consultas: this.consultas
      }
      return dados;
    }
}
  class Cliente {
    constructor(nome, numeroContato) {
      this.#id = generateUniqueId();
      this.nome = nomeCliente;
      this.numeroContato = numeroContato;
      this.pets = [];
      this.fidelizado = fidelizado;
    }

    set fidelizado(){
      //set para o numero de consultas desse cliente, para saber se ele e fidelizado
      // if resultado do numero da busca >= 4 , entao cliente e fidelizado 
    }

    /*adicionarPet() {
      pet.nome = this.nome;
      this.pets.push(pet);
      new Pet = 
      pet.nomeDono = this.nome;
    }*/

  }
  

  class Pet {
    constructor(nome, especie) {
      this.#id = generateUniqueId();
      this.nome = nomepet;
      this.especie = especie;
      this.nomeDono = '';
    }
  }

  class Consulta {
    constructor(nomepet, nomeCliente,nomeFuncionario, dataConsulta, status) {
      this.#id = generateUniqueId();
      this.nomepet = nomepet;
      this.nomeCliente = nomeCliente;
      this.nomeFuncionario = nomeFuncionario;
      this.dataConsulta = dataConsulta;
      this.status = status;
    }
  }
  
  // Function to generate a unique ID
  function generateUniqueId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
  }
  
  // Vet Clinic Information
  class Sistema {

      funcionarios = [];
      Clientes = [];
      Pets = [];
      Consultas = [];

    pegarinput(){
      const entrada = require("prompt-sync")({sigint: true});
      return entrada("> ");
    }
    
    MenuNaoLogado(){
      console.log("escolha uma das opcoes...");
        console.log(
          "1 - Fazer Login\n" +
          "2 - Fazer cadastro\n" +
          "3 - Sair do Sistema"
      )
    }

    NovoFuncionario() {
        //criar interacao no prompt para cadastro de funcionario
      console.log("Criando novo funcionario...");
      console.log("digite o nome do funcionario:");
      const nome = string(this.pegarinput());
      console.log("digite a senha:")
      const Senha = string(this.pegarinput())
      console.log("digite a posicao do funcionario...");
      const posicao = string(this.pegarinput())

      new Funcionario(nome, Senha, posicao);
      this.Novofuncionariouncionario.push(funcionario);
      return funcionario;
    }
    
    NovoCliente(nome, numeroContato) {
      const Cliente = new Cliente(nome, numeroContato);
      this.Cliente.push(Cliente);
      return Cliente;
    }
    NovaConsulta(funcionario, nomepet, dataConsulta,) {
        const appointment = new Consulta(nomepet, dataConsulta,);
        funcionario.addAppointment(appointment);
        return appointment;
    
    }
  
    MostrarFuncionarios() {
        console.clear();
        console.log("Lista de funcionario: ")
        for (let i = 0; this.funcionario.length > i; i++) {
          console.log(this.funcionario[i]);
        }
    return
    }
  
    MostrarClientes() {
      //mostrar para mostrar em ordem alfabetica
      console.log("Lista de Clientes:");
      for (let i = 0; this.Cliente.length > i; i++) {
        console.log(this.Cliente[i]);
      }
      return
    }

    MostrarPets(){
      //ajeitar para mostrar em ordem alfabetica
      console.log("Lista de Pets:");
      for (let i = 0; this.Pets.length > i; i++) {
        console.log(this.Pets[i].verDados);
    }
  }

    fazerLogin(){
    console.clear();
		console.log("Login...");

		console.log("Nome do usuário: ");
		const nome = String(this.pegarInput());

		console.log("Senha: ");
		const senha = String(this.pegarInput());

		let funcionarioEncontrado = false;
		for (let i = 0; this.funcionario.length > i; i++) {
			if (this.funcionario[i].nome == nome && this.funcionario[i].#senha == senha) {
				gerenteEncontrado = true;
				this.MenuLogado(i);
			}
		}
		
		if (!funcionarioEncontrado) {
			console.log("Usuário não encontrado, por favor retornar ao menu.");
      iniciar()
			}
		}
    mostrarfuncionarioMenu() {
      console.log("Escolha uma opção: ");
      console.log(
        "1. Ver meus dados\n" + 
        "2. Modificar meus dados\n" + 
        "3. Mostrar todos os funcionarios\n" + 
        "4. Mostrar todos os Clientes\n" +
        "5. Mostrar todos os pets\n" +
        "6. Marcar Consulta\n" +
        "7. Mudar status de uma consulta\n"+
        "8. Remover Cliente\n" +
        "9. Remover Pet\n" +
        "10. Cancelar Consulta\n" +
        "11. Remover Funcionário\n" +
        "12. Fazer Logout"
      )
    }

    MenuLogado(indice){
      {
        let ligado = true;
        while(ligado) {
          console.clear();
          console.log(`Bem vindo ${this.funcionario[indice].nome} ao seu menu: `);
          this.mostrarfuncionarioMenu();
          switch(this.pegarInput()) {
            case "1":
              this.listarDados(indice);
              break;
            case "2":
              this.modificarDados(indice);
              break;
            case "3":
              this.mostrarFuncionarios(indice);
              break;
            case "12":
              ligado = false;
              console.log("O sistema foi terminado.\n");
              break;
            default:
              continue;
          }
        }
      }
    }

    iniciar(){
      let ligado = true;

      while (ligado){
        MenuNaoLogado();

        switch(this.pegarinput()){
          case "1":
            this.fazerLogin();
            break
          case "2":
            this.NovoFuncionario();
            break
          case "3":
            ligado = false;
					console.log("O sistema foi terminado.\n");
					break;
				default:
					continue;
      }
    }
  }
}
   