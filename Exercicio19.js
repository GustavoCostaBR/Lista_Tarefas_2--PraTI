const prompt = require('prompt-sync')();
function validarHorario(stringHorario){
	condition = false;
	try {
		horarioEmLista = stringHorario.split(".");
		if(horarioEmLista[0] > 23 || horarioEmLista[0] < 0) {
			condition = true;
			console.log("Erro: informe um horário válido! A hora deve ser maior ou igual a 0 e menor que 24!");
		}
		else if(horarioEmLista[1] >= 60 || horarioEmLista[1] < 0) {
			condition = true;
			console.log("Erro: informe um horário válido! O minuto deve ser maior ou igual a 0 e menor que 60!");
		}
		else if(horarioEmLista[0] >= 60 && horarioEmLista[2] < 0) {
			condition = true;
			console.log("Erro: informe um horário válido! O segundo deve ser maior ou igual a 0 e menor que 60!");
		}
	} catch (error) {
		condition = true;
		console.log("Erro: informe um horário válido!")
	}
	return condition;
}

function receberHorario(){
	let horario = new Date();
	let stringHorario;
	let condition = false;
	do {
		stringHorario = prompt("Informe um horário no padrão HH.MM.SS.: ");
		condition = validarHorario(stringHorario);
	} while (condition);
	const horas = parseInt(stringHorario.split('.')[0]);
	const minutos = parseInt(stringHorario.split('.')[1]);
	const segundos = parseInt(stringHorario.split('.')[2]);
	horario.setHours(horas, minutos, segundos);
	return horario;
}

let listaHora = [];
for (let index = 0; index < 5; index++) {
	listaHora[index] = receberHorario();
	// console.log(index);
}
for (let index = 0; index < 5; index++) {
	console.log(`${listaHora[index].getHours()}.${listaHora[index].getMinutes()}.${listaHora[index].getSeconds()}`);
}
