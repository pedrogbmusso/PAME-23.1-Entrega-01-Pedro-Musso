

class Funcionario {
    constructor(nome, Senha, posicao) {
      this.#id = generateUniqueId();
      this.nome = nome;
      this.posicao = posicao;
      this.senha = Senha;
      this.consultas = [];
    }

    set  ModificarSenha(novaSenha){
        this.senha = novaSenha
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
      this.pets = pets;
      this.consultas = consultas;
    }

    //set fidelizado(){
      //set para o numero de consultas desse cliente, para saber se ele e fidelizado
      // if resultado do numero da busca >= 4 , entao cliente e fidelizado 
    }

    /*adicionarPet() {
      pet.nome = this.nome;
      this.pets.push(pet);
      new Pet = 
      pet.nomeDono = this.nome;
    }*/

  
  
  class Pet {
    constructor(nome, especie) {
      this.#id = generateUniqueId();
      this.nome = nome;
      this.especie = especie;
      this.nomeDono = nomedono;
    }
  }

  class Consulta {
    constructor(nomepet, nomeCliente,nomeFuncionario, diaConsulta, mesConsulta, anoConsulta, status) {
      this.#id = generateUniqueId();
      this.nomepet = nomepet;
      this.nomeCliente = nomeCliente;
      this.nomeFuncionario = nomeFuncionario;
      this.diaConsulta = dataConsulta;
      this.mesConsulta = mesConsulta;
      this.anoConsulta = anoConsulta;
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
    listarDados(i){
      console.log(this.funcionarios[i].verDados())
      return
    }

    modificarDados(i){
    console.clear();
		console.log("Modificando seus dados...")
    console.log("Digite o novo nome")
		const nome = String(this.pegarInput());
		console.log("Digite a nova Senha: ");
		const senha = String(this.pegarInput());

		this.funcionarios[i].modificarNome = nome;
		this.funcionarios[i].modificarSenha = senha;
      return
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

      const novoFuncionario = new Funcionario(nome, Senha, posicao);
      this.funcionario.push(novofuncionario);
      return
    }
    
    NovoCliente() {
      console.log("Criando novo cliente...");
      console.log("digite o nome do cliente:");
      const nome = string(this.pegarinput());
      console.log("digite o numero de contato:")
      const nContato = string(this.pegarinput())

      const novoCliente = new Cliente(nome,Ncontato);
      this.Clientes.push(novoCliente);
      return
    }
    NovaConsulta() {
      console.log("Criando nova consulta...");
      console.log("Digite o nome do Pet:");
      const nomepet = string(this.pegarinput());
      console.log("digite o nome do Cliente:");
      const nomedono = string(this.pegarInput());
      console.log("Digite o nome do funcionario:");
      const nomefuncionario = string(this.pegarinput());
      console.log("Digite o dia da Consulta:");
      const DiaConsulta = string(this.pegarinput());
      console.log("Digite o mes da Consulta");
      const mesconsulta = string(this.pegarinput());
      console.log("Digite o ano da consulta:");
      const anoconsulta = string(this.pegarinput());
      const estado = 'ativa'
      const appointment = new Consulta(nomepet, nomedono,nomefuncionario, DiaConsulta,mesconsulta,anoconsulta, estado);
      this.Consultas.push(appointment);
      this.Clientes.consultas.push(appointment)
      //adicionar consulta a funcionario
      return appointment;
    
    }
  
    MostrarFuncionarios() {
        console.clear();
        console.log("Lista de funcionario: ")
        for (let i = 0; this.funcionario.length > i; i++) {
          console.log(this.funcionario[i].nome);
          console.log(this.funcionarios[i].posicao);
        }
        return
    }
  
    MostrarClientes() {
      //mostrar para mostrar em ordem alfabetica
      console.log("Lista de Clientes:");
      for (let i = 0; this.Clientes.length > i; i++) {
        console.log(this.Clientes[i]);
        if(this.Clientes[i].consultas.length > 3){
          console.log("o cliente nao e fidelizado");
        }
        else{
          console.log("o cliente nao e fidelizado");
        }
      }
      return
    }

    MostrarPets(){
      //ajeitar para mostrar em ordem alfabetica
      console.log("Lista de Pets:");
      for (let i = 0; this.Pets.length > i; i++) {
        console.log(this.Pets[i].nome);
        console.log(this.Pets[i].nomeDono)
    }
    return
  }

  removerCliente(){
    console.log("digite o nome do cliente:")
    const nome = string(this.pegarinput());
    for(let i = 0; this.Clientes.length > i; i++){
      if(this.Clientes[i].nome == nome){
        this.Pets = Pets.filter(this.Pets.nomeDono == this.Clientes[i].nome);
        this.Clientes.splice(i);
        }
      }
      return
    } 

  removerFuncionario(){
    console.log("digite o nome do funcionario:")
    const nome = string(this.pegarinput());
    for(let i = 0; this.funcionarios.length > i; i++){
      if(this.funcionarios[i].nome == nome){
        if(this.funcionarios[i].consultas.length == 0){
          this.funcionarios.splice(i);
          console.log("O funcionario foi removido ");
          return
        }
        else {
            console.log("O funcionario nao pode ser removido por possuir consultas marcadas")
            return
        }
      }
    }
  }

  removerPet(){
    console.log("digite o nome do Pet:");
    const nome = string(this.pegarinput());
    this.Pets = this.pets.filter(this.Pets.nome == nome);
    return
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
              this.mostrarFuncionarios();
              break;
            case "4":
              this.MostrarClientes();
            break;
            case "5":
              this.MostrarPets();
            break;
            case "6":
              this.NovaConsulta();
            break;
            case "7":
              this.mudarstatusConsulta();
            break;
            case "8":
              this.removerCliente();
            break;
            case "9":
              this.removerPet();
            break;
            case "10":
              this.removerConsuta();
            break;
            case "11":
              this.removerFuncionario();
            break;
            case "12":
              ligado = false;
              console.log("Voce deslogou.\n");
              this.iniciar();
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
   