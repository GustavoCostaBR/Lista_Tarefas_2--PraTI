class Hotel {
	static hoteis = [];
	static contadorIds = 0;

	constructor(id, nome, cidade, quartosTotais) {
		this.id = id;
		this.nome = nome;
		this.cidade = cidade;
		this.quartosTotais = quartosTotais;
		this.quartosDisponiveis = quartosTotais;
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
	return id;
}

function buscarHoteisPorCidade(cidade) {
	return Hotel.hoteis.filter(hotel => hotel.cidade === cidade);
}

function listarVagasDisponiveisCidade(cidade) {
	let hoteis = buscarHoteisPorCidade(cidade);
	for (const hotel of hoteis) {
		console.log(hotel.nome + " localizado na cidade " + cidade + " tem " + listarVagasDisponiveisHotel(hotel) + " vagas disponíveis!");
	}
}

function listarVagasDisponiveisHotel(hotel) {
	return hotel.quartosDisponiveis;
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
		let hotel = encontrarHotelPorId(reserva.idHotel);
		const reservaIndex = hotel.reservas.findIndex(reserva => reserva.id === idReserva);
		if (reservaIndex !== -1) {
			hotel.quartosDisponiveis++;
			hotel.reservas.splice(reservaIndex, 1);
			console.log(`Reserva de ID ${idReserva} no hotel ${hotel.nome} (ID=${hotel.id}) foi cancelada!`);

			return true;
		}
	}
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
	const reservaIndex = Reserva.reservas.findIndex(reserva => reserva.idReserva === idReserva);
	if (reservaIndex !== -1) {

	}
}


let idHotel1 = adicionarHotel("Hotel A", "São Paulo", 2);
let idHotel2 = adicionarHotel("Hotel B", "Rio de Janeiro", 20);
let idHotel3 = adicionarHotel("Hotel C", "Rio de Janeiro", 40);


// console.log(`${Hotel.hoteis[0].id}`);
// console.log(`${Hotel.hoteis[1].id}`);

let idReserva1 = fazerReserva(0, "Cliente A");
let idReserva2 = fazerReserva(0, "Cliente B");
let idReserva3 = fazerReserva(0, "Cliente E");
let idReserva4 = fazerReserva(1, "Cliente C");
let idReserva5 = fazerReserva(2, "Cliente D");

console.log(listarReservas());

// console.log(`${Hotel.hoteis}`);

cancelarReserva(idReserva2);

let idReserva6 = fazerReserva(0, "Cliente E");

console.log(listarReservas());
// fazerReserva(5, 1, "Cliente E");

listarVagasDisponiveisCidade("Rio de Janeiro");
listarVagasDisponiveisCidade("São Paulo");

console.log(`${encontrarHotelPorId(idHotel1).nome}`);

// for (const iterator of buscarHoteisPorCidade("Rio de Janeiro")) {
// console.log(`${iterator.nome}`);
// }
// console.log(`${buscarHoteisPorCidade("Rio de Janeiro")}`);

// console.log(listarReservas());
