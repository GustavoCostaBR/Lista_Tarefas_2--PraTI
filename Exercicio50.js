class Hotel {
	static hoteis = [];

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
	static reservas = [];
	constructor(idReserva, idHotel, nomeCliente) {
		this.idReserva = idReserva;
		this.idHotel = idHotel;
		this.nomeCliente = nomeCliente;
	}
}

function adicionarHotel(id, nome, cidade, quartosTotais) {
	const hotel = new Hotel(id, nome, cidade, quartosTotais);
	Hotel.hoteis.push(hotel);
}

function buscarHoteisPorCidade(cidade) {
	return Hotel.hoteis.filter(hotel => hotel.cidade === cidade);
}

function listarVagasDisponiveisCidade(cidade){
	let hoteis = buscarHoteisPorCidade(cidade);
	for (const hotel of hoteis) {
		console.log(hotel.nome + " tem " + listarVagasDisponiveisHotel(hotel) + " vagas disponíveis!" );
	}
}

function listarVagasDisponiveisHotel(hotel){
	return hotel.quartosDisponiveis;
}

function fazerReserva(idReserva, idHotel, nomeCliente) {
	const hotel = Hotel.hoteis.find(hotel => hotel.id === idHotel);
	if (hotel && hotel.quartosDisponiveis > 0) {
		hotel.quartosDisponiveis--;
		const reserva = new Reserva(idReserva, idHotel, nomeCliente);
		Reserva.reservas.push(reserva);
		console.log(`Reserva de ID ${reserva.idReserva} no hotel de ID ${hotel.id} realizada com sucesso!`);
		return true;
	}
	console.log(`Reserva de ID ${idReserva} no hotel de ID ${idHotel} foi recusada!`)
	if (hotel) {
		console.log(`Número de vagas igual a ${hotel.quartosDisponiveis}!`);
	}
	return false;
}

function cancelarReserva(idReserva) {
	const reservaIndex = Reserva.reservas.findIndex(reserva => reserva.idReserva === idReserva);
	if (reservaIndex !== -1) {
		const reserva = Reserva.reservas[reservaIndex];
		const hotel = Hotel.hoteis.find(hotel => hotel.id === reserva.idHotel);
		hotel.quartosDisponiveis++;
		Reserva.reservas.splice(reservaIndex, 1);
		return true;
	}
	return false;
}

function listarReservas() {
	return Reserva.reservas.map(reserva => {
		const hotel = Hotel.hoteis.find(hotel => hotel.id === reserva.idHotel);
		return {
			idReserva: reserva.idReserva,
			hotel: hotel.nome,
			cidade: hotel.cidade,
			nomeCliente: reserva.nomeCliente
		};
	});
}


adicionarHotel(1, "Hotel A", "São Paulo", 2);
adicionarHotel(2, "Hotel B", "Rio de Janeiro", 20);
adicionarHotel(3, "Hotel C", "Rio de Janeiro", 40);

fazerReserva(1, 1, "Cliente A");
fazerReserva(2, 1, "Cliente B");
fazerReserva(5, 1, "Cliente E");
fazerReserva(3, 2, "Cliente C");
fazerReserva(4, 3, "Cliente D");

console.log(listarReservas());

// console.log(`${Hotel.hoteis}`);

cancelarReserva(2);
fazerReserva(5, 1, "Cliente E");

listarVagasDisponiveisCidade("Rio de Janeiro")

// for (const iterator of buscarHoteisPorCidade("Rio de Janeiro")) {
	// console.log(`${iterator.nome}`);
// }
// console.log(`${buscarHoteisPorCidade("Rio de Janeiro")}`);

// console.log(listarReservas());
