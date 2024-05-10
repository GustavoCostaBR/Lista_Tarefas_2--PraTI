const prompt = require('prompt-sync')();

function receberEntradaInteira(mensagem, limite) {
	if (limite == undefined) {
		limite = Number.MAX_SAFE_INTEGER;
	}
	let inteiro = "a";
	do {
		try {
			inteiro = parseInt(prompt(mensagem));
		} catch (error) {
			console.log("Informe um número inteiro, positivo válido! (somente a parte inteira será considerada)");
			inteiro = "a";
		}
		if (inteiro < 0) {
			console.log("Informe um número inteiro, positivo válido! (somente a parte inteira será considerada)");
			inteiro = "a";
		}
		else if (inteiro > limite) {
			console.log("Informe um número inteiro, positivo válido menor ou igual a " + limite + "!");
			inteiro = "a";
		}
		else if (isNaN(inteiro)) {
			inteiro = "a";
			console.log("Informe um número inteiro, positivo válido menor ou igual a " + limite + "!");
		}

	} while (inteiro == "a");
	return inteiro;
}

class Hotel {
	static hoteis = [];
	static contadorIds = 0;
	static NOTAMAXIMA = 10;
	static NOTAMINIMA = 0;

	constructor(id, nome, cidade, quartosTotais) {
		this.id = id;
		this.nome = nome;
		this.cidade = cidade;
		this.quartosTotais = quartosTotais;
		this.quartosDisponiveis = quartosTotais;
		this.somaAvaliacoes = 0;
		this.contadorAvaliacoes = 0;
		this.reservas = [];
	}
}

class Reserva {
	// static reservas = [];
	static contadorIds = 0;
	constructor(id, idHotel, nomeCliente) {
		this.id = id;
		this.idHotel = idHotel;
		this.nomeCliente = nomeCliente;
		this.checkIn = false;
		this.checkOut = false;
		this.avaliado = false;
	}
}

const encontrarHotelPorId = (id) => Hotel.hoteis.find(hotel => hotel.id === id);
const encontrarReservaPorId = (id) => {
	for (const hotel of Hotel.hoteis) {
		for (const reserva of hotel.reservas) {
			if (id === reserva.id) {
				return reserva;
			}
		}
	}
	return false;
}

function adicionarHotel(nome, cidade, quartosTotais) {
	let id;
	if (Hotel.contadorIds >= 0) {
		id = Hotel.contadorIds++;
	}

	const hotel = new Hotel(id, nome, cidade, quartosTotais);
	Hotel.hoteis.push(hotel);
	console.log(`Hotel adicionado com sucesso!`);
	return id;
}

function buscarHoteisPorCidade(cidade) {
	return Hotel.hoteis.filter(hotel => hotel.cidade === cidade);
}

function listarVagasDisponiveisCidade(cidade) {
	let hoteis = buscarHoteisPorCidade(cidade);
	if (hoteis.length > 0){
		for (const hotel of hoteis) {
			console.log(hotel.nome+ " de ID igual a " + hotel.id   + " localizado na cidade " + cidade + " tem " + listarVagasDisponiveisHotel(hotel) + " vagas disponíveis;");
			if (hotel.contadorAvaliacoes > 0){
				console.log(`Avaliação: ${hotel.somaAvaliacoes/hotel.contadorAvaliacoes}`);
			}
			else {
				console.log(`Hotel ainda não avaliado!`);
			}
		}
	}
	else {
		console.log(`Não há hotéis disponíveis para a cidade com nome igual a: ${cidade}!`);
	}

}

function listarVagasDisponiveisHotel(hotel) {
	return hotel.quartosDisponiveis;
}

function listarCidadesVagaDisponivel(){
	let cidades = new Set();
	for (const hotel of Hotel.hoteis) {
		if (hotel.quartosDisponiveis > 0){
			cidades.add(hotel.cidade)
		}
	}
	return cidades;
}

function fazerReserva(idHotel, nomeCliente) {
	const hotel = encontrarHotelPorId(idHotel);
	if (hotel && hotel.quartosDisponiveis > 0) {
		hotel.quartosDisponiveis--;

		if (Reserva.contadorIds >= 0) {
			idReserva = Reserva.contadorIds++;
		}

		const reserva = new Reserva(idReserva, idHotel, nomeCliente);
		hotel.reservas.push(reserva);
		// Reserva.reservas.push(reserva);
		console.log(`Reserva de ID ${reserva.id} no hotel ${hotel.nome} (ID=${hotel.id}) realizada com sucesso!`);
		return idReserva;
	}

	console.log(`Reserva no hotel ${hotel.nome} (ID=${hotel.id}) foi recusada!`)
	if (hotel) {
		console.log(`Número de vagas igual a ${hotel.quartosDisponiveis}!`);
	}
	else {
		console.log(`Hotel não existe!`);
	}
	return false;
}

function cancelarReserva(idReserva) {
	// const reservaIndex = Reserva.reservas.findIndex(reserva => reserva.idReserva === idReserva);
	let reserva = encontrarReservaPorId(idReserva);
	if (reserva != false) {
		if (reserva.checkOut) {
			console.log(`Reserva não foi cancelada, pois o check-out já foi feito!`);
			return false;
		}
		else if (reserva.checkIn) {
			console.log(`Reserva não foi cancelada, pois o check-in já foi feito!`);
			return false;
		}
		else {
			let hotel = encontrarHotelPorId(reserva.idHotel);
			const reservaIndex = hotel.reservas.findIndex(reserva => reserva.id === idReserva);
			if (reservaIndex !== -1) {
				hotel.quartosDisponiveis++;
				hotel.reservas.splice(reservaIndex, 1);
				console.log(`Reserva de ID ${idReserva} no hotel ${hotel.nome} (ID=${hotel.id}) foi cancelada!`);

				return true;
			}
		}

	}

	console.log(`Reserva não foi cancelada devido a não ter sido encontrada no sistema!`);
	return false;
}

function listarReservas() {
	reservas = {}
	for (const hotel of Hotel.hoteis) {
		reservas[hotel.nome] = [];
		for (const reserva of hotel.reservas) {
			reservas[hotel.nome].push(reserva);
		}
	}
	return reservas;
}

function checkIn(idReserva) {
	let reserva = encontrarReservaPorId(idReserva);
	if (reserva != false) {
		if (!reserva.checkIn) {
			reserva.checkIn = true;
			console.log(`Check-in para reserva de ID ${idReserva} feita com sucesso!`);
		}
		else {
			console.log(`Check-in para reserva de ID ${idReserva} falhou, o check-in já havia sido feito anteriormente!`);
		}

	}
	else {
		console.log(`Check-in para reserva de ID ${idReserva} falhou, reserva não existe!`);
	}


}
function checkOut(idReserva) {
	let reserva = encontrarReservaPorId(idReserva);
	if (reserva != false) {
		if (!reserva.checkOut) {
			if (reserva.checkIn) {
				reserva.checkOut = true;
				let hotel = encontrarHotelPorId(reserva.idHotel);
				hotel.quartosDisponiveis++;
				console.log(`Check-out para reserva de ID ${idReserva} feita com sucesso!`);
			}
			else {
				console.log(`Check-out não realizado, o check-in deve ser feito antes de ser possível fazer check-out!`);
			}
		}
		else {
			console.log(`Check-out para reserva de ID ${idReserva} falhou, o check-out já havia sido feito anteriormente!`);
		}

	}
	else {
		console.log(`Check-out para reserva de ID ${idReserva} falhou, reserva não existe!`);
	}
}

function imprimirPropriedadesHotel(id) {
	let hotel = encontrarHotelPorId(id);
	console.log(`\n	Nome do Hotel: ${hotel.nome};
	ID do hotel: ${id};
	Cidade: ${hotel.cidade};
	Quartos totais: ${hotel.quartosTotais};
	Quartos disponíveis: ${hotel.quartosDisponiveis}`);
}

function imprimirReservasHotel(id, retirarReservasCheckout) {
	let hotel = encontrarHotelPorId(id);
	for (const reserva of hotel.reservas) {
		if (retirarReservasCheckout){
			if (reserva.checkOut){
				continue;
			}
		}
		console.log(`\n		ID da reserva: ${reserva.id};
		Nome do cliente: ${reserva.nomeCliente};
		Check-in: ${reserva.checkIn};
		Check-out: ${reserva.checkOut}`);
	}
}

function fazerRelatorioHotel(id, retirarReservasCheckout) {
	imprimirPropriedadesHotel(id);
	imprimirAvaliacao(id);
	imprimirReservasHotel(id, retirarReservasCheckout);
}

function avaliar(idReserva){
	let reserva = encontrarReservaPorId(idReserva);
	if (reserva != false) {
		if (reserva.checkOut){
			if (!reserva.avaliado) {
				let avaliacao = receberEntradaInteira("Informe um valor inteiro para a sua avaliação do hotel, valores de 0 a 10 (10 = muito bom, 0= muito ruim)!	", Hotel.NOTAMAXIMA);
				let hotel = encontrarHotelPorId(reserva.idHotel);
				hotel.somaAvaliacoes += avaliacao;
				hotel.contadorAvaliacoes++;
				reserva.avaliado = true;
				console.log(`Avaliação feita com sucesso para o ${hotel.nome}`);
			}
			else {
				console.log(`Já há uma avaliação feita para essa reserva!`);
			}

		}
		else {
			console.log(`Impossível avaliar, o check-out ainda não foi feito!`);
		}
	}
	else {
		console.log(`A reserva não existe!`);
	}
}

function imprimirAvaliacao(id){
	let hotel = encontrarHotelPorId(id);
	if (hotel.contadorAvaliacoes > 0){
		console.log(`	Avaliação média: ${hotel.somaAvaliacoes/hotel.contadorAvaliacoes};`);
	}
	else {
		console.log(`	Hotel ainda não avaliado;`);
	}

}

function imprimirOpcoes2(mensagem, ...opcoes) {
	console.log(mensagem);
	for (let i = 0; i < opcoes.length; i++) {
		console.log(i + "- " + opcoes[i]);
	}
}

function imprimirOpcoes3(mensagem, opcoes) {
	console.log(mensagem);
	for (let i = 0; i < opcoes.length; i++) {
		console.log(i + "- " + opcoes[i]);
	}
}


function menu(){
	imprimirOpcoes2("Escolha uma entre as opções abaixo, digite somente o número!", "Menu Hoteis", "Menu reservas", "Sair do programa");
	let opcao = receberEntradaInteira("Entrada: ", 2);
	if (opcao == 0){
		menuHoteis();
	}
	else if (opcao == 1) {
		menuReservas();
	}
}

function menuHoteis(){
	imprimirOpcoes2("Escolha uma entre as opções abaixo, digite somente o número!", "Cadastrar Hotel;", "Listar hotéis por cidade;", "Avaliar hotel;", "Relatório de ocupação;", "Voltar ao menu principal!");
	let opcao = receberEntradaInteira("Entrada: ", 4);
	if (opcao == 0){
		adicionarHotelMenu();
	}
	else if (opcao == 1) {
		buscarHoteisPorCidadeMenu();
	}
	else if (opcao == 2) {
		avaliarHotelMenu();
	}
	else if (opcao == 3) {
		fazerRelatorioHotelMenu();
	}
	else {
		menu();
	}
}

function adicionarHotelMenu(){
	let nome = prompt("Informe o nome do hotel: ");
	let cidade = prompt("Informe a cidade do hotel: ");
	let quartosTotais = prompt("Informe a quantidade total de quartos no hotel: ");
	adicionarHotel(nome, cidade, quartosTotais);
	menu();
}

function buscarHoteisPorCidadeMenu(){
	let cidades = [...listarCidadesVagaDisponivel()];
	imprimirOpcoes3("Informe somente o número da cidade: ", cidades);
	let opcao = receberEntradaInteira("Informe a opção desejada: ");
	let cidade = cidades[opcao];
	listarVagasDisponiveisCidade(cidade);
	menu();
}

function avaliarHotelMenu(){
	if (Reserva.contadorIds - 1 >= 0) {
		let reservaId = receberEntradaInteira("Informe o ID da reserva: ", Reserva.contadorIds - 1);
	avaliar(reservaId);
	}
	else {
		console.log(`Ainda não há reservas cadastradas!`);
	}

	menu();
}

function fazerRelatorioHotelMenu(){
	let id = receberEntradaInteira("Informe o ID do hotel: ", Hotel.contadorIds - 1);
	imprimirOpcoes2("Deseja incluir os quartos com check-out feito no relatório? Informe somente o número para as opções abaixo:", "Sim", "Não");
	let opcao = receberEntradaInteira("Entrada: ", 1);
	if (opcao == 0){
		fazerRelatorioHotel(id);
	}
	else {
		fazerRelatorioHotel(id, true);
	}
	menu();
}

function menuReservas(){
	imprimirOpcoes2("Escolha uma entre as opções abaixo, digite somente o número!", "Fazer reserva;", "Cancelar reserva;", "Check-in;", "Check-out;", "Avaliar;", "Voltar ao menu principal!");
	let opcao = receberEntradaInteira("Entrada: ", 5);
	if (opcao == 0){
		fazerReservaMenu();
	}
	else if (opcao == 1) {
		cancelarReservaMenu();
	}
	else if (opcao == 2) {
		checkInMenu();
	}
	else if (opcao == 3) {
		checkOutMenu();
	}
	else if (opcao == 4) {
		avaliarHotelMenu();
	}
	else {
		menu();
	}
}

function fazerReservaMenu(){
	let cidades = [...listarCidadesVagaDisponivel()];
	imprimirOpcoes3("Informe somente o número da cidade: ", cidades);
	let opcao = receberEntradaInteira("Informe a opção desejada: ");
	let cidade = cidades[opcao];
	listarVagasDisponiveisCidade(cidade);
	let idHotel = receberEntradaInteira("Informe o Id do hotel: ", Hotel.contadorIds - 1);
	let nome = prompt("Informe o seu nome: ");
	fazerReserva(idHotel, nome);
	menu();
}


function cancelarReservaMenu(){
	let idReserva = receberEntradaInteira("Informe o ID da reserva a ser cancelada: ", Reserva.contadorIds - 1);
	cancelarReserva(idReserva);
	menu();
}

function checkInMenu(){
	let idReserva = receberEntradaInteira("Informe o ID da reserva para fazer o check-in: ", Reserva.contadorIds - 1);
	checkIn(idReserva);
	menu();
}

function checkOutMenu(){
	let idReserva = receberEntradaInteira("Informe o ID da reserva para fazer o check-out: ", Reserva.contadorIds - 1);
	checkOut(idReserva);
	menu();
}

let idHotel1 = adicionarHotel("Hotel A", "Sao Paulo", 2);
let idHotel2 = adicionarHotel("Hotel B", "Rio de Janeiro", 20);
let idHotel3 = adicionarHotel("Hotel C", "Rio de Janeiro", 40);
let idReserva1 = fazerReserva(idHotel1, "Cliente A");
checkIn(idReserva1);
checkOut(idReserva1);
menu();


// // console.log(`${Hotel.hoteis[0].id}`);
// // console.log(`${Hotel.hoteis[1].id}`);


// let idReserva2 = fazerReserva(idHotel1, "Cliente B");
// let idReserva3 = fazerReserva(idHotel1, "Cliente E");
// let idReserva4 = fazerReserva(idHotel2, "Cliente C");
// let idReserva5 = fazerReserva(idHotel3, "Cliente D");

// console.log(listarReservas());

// // console.log(`${Hotel.hoteis}`);

// cancelarReserva(idReserva2);

// let idReserva6 = fazerReserva(idHotel1, "Cliente E");

// console.log(listarReservas());
// // fazerReserva(5, 1, "Cliente E");

// listarVagasDisponiveisCidade("Rio de Janeiro");
// listarVagasDisponiveisCidade("São Paulo");

// avaliar(idReserva1);

// checkOut(idReserva6);
// checkIn(idReserva6);
// checkOut(idReserva6);
// checkIn(idReserva1);
// checkOut(idReserva1);

// avaliar(idReserva6);
// avaliar(idReserva1);
// cancelarReserva(idReserva6);
// checkOut(idReserva6);


// console.log(`${encontrarHotelPorId(idHotel1).nome}`);

// fazerRelatorioHotel(idHotel1, true);
// fazerRelatorioHotel(idHotel2);

// // for (const iterator of buscarHoteisPorCidade("Rio de Janeiro")) {
// // console.log(`${iterator.nome}`);
// // }
// // console.log(`${buscarHoteisPorCidade("Rio de Janeiro")}`);

// // console.log(listarReservas());
