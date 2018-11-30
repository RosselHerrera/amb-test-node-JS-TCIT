const clients = [
  { id: 1, taxNumber: '86620855', name: 'HECTOR ACUÑA BOLAÑOS'},
  { id: 2, taxNumber: '7317855K', name: 'JESUS RODRIGUEZ ALVAREZ'},
  { id: 3, taxNumber: '73826497', name: 'ANDRES NADAL MOLINA'},
  { id: 4, taxNumber: '88587715', name: 'SALVADOR ARNEDO MANRIQUEZ'},
  { id: 5, taxNumber: '94020190', name: 'VICTOR MANUEL ROJAS LUCAS'},
  { id: 6, taxNumber: '99804238', name: 'MOHAMED FERRE SAMPER' }
];

const accounts = [
  { clientId: 6, bankId: 1, balance: 15000 },
  { clientId: 1, bankId: 3, balance: 18000 },
  { clientId: 5, bankId: 3, balance: 135000 },
  { clientId: 2, bankId: 2, balance: 5600 },
  { clientId: 3, bankId: 1, balance: 23000 },
  { clientId: 5, bankId: 2, balance: 15000 },
  { clientId: 3, bankId: 3, balance: 45900 },
  { clientId: 2, bankId: 3, balance: 19000 },
  { clientId: 4, bankId: 3, balance: 51000 },
  { clientId: 5, bankId: 1, balance: 89000 },
  { clientId: 1, bankId: 2, balance: 1600 },
  { clientId: 5, bankId: 3, balance: 37500 },
  { clientId: 6, bankId: 1, balance: 19200 },
  { clientId: 2, bankId: 3, balance: 10000 },
  { clientId: 3, bankId: 2, balance: 5400 },
  { clientId: 3, bankId: 1, balance: 9000 },
  { clientId: 4, bankId: 3, balance: 13500 },
  { clientId: 2, bankId: 1, balance: 38200 },
  { clientId: 5, bankId: 2, balance: 17000 },
  { clientId: 1, bankId: 3, balance: 1000 },
  { clientId: 5, bankId: 2, balance: 600 },
  { clientId: 6, bankId: 1, balance: 16200 },
  { clientId: 2, bankId: 2, balance: 10000 }
]
const banks = [
  { id: 1, name: 'SANTANDER' },
  { id: 2, name: 'CHILE' },
  { id: 3, name: 'ESTADO' }
];

//0 Arreglo con los ids de clientes
function listClientsIds() {
  return clients.map((client) => client.id);
};

function listClientsName() {
	  return clients.map((client) => client.name);
};
console.log('------------------------------------');
console.log('Pregunta 0');
console.log(listClientsIds());
console.log('------------------------------------');
//1 Arreglo con los ids de clientes ordenados por rut
function listClientsIdsSortByTaxNumber() {
	return clients.map((client) => client.taxNumber);
};

function listClientsIdsSortByName() {
	return clients.map((client) => client.name);
};

console.log('------------------------------------');
console.log('Pregunta 1');
console.log(listClientsIdsSortByTaxNumber());
//console.log(listClientsIdsSortByName());
console.log('------------------------------------');
//2 Arreglo con los nombres de cliente ordenados de mayor a menor por la suma TOTAL de los saldos de cada cliente en los bancos que participa.
function sortClientsTotalBalances() {
	
	//return banks.map((banks) => banks.id + ' ' + banks.name);
	//return clients.map((clients) =>clients.id + ' ' + clients.taxNumber + ' ' + clients.name);
	return accounts.map((accounts) => accounts.balance);	

}
console.log('------------------------------------');
console.log('Pregunta 2');
console.log('n cuentas ' + accounts.length);
console.log('------------------------------------');
const result = sortClientsTotalBalances();

console.log('-------------- result -------------');
console.log(result);
	
function max() {
	if(accounts.length == 0) {
	return 0;
	}
	let max = accounts[0].balance;
	for(let i = 1; i < accounts.length; i++) {
		if(accounts[i].balance > max) {
			max = accounts[i].balance;
		}
	}
	return max;  
	}

console.log('----------------max()---------------');
console.log('Mayor de los saldos ' + max());
console.log('------------- clases() -------------');


var Persona = class {
	constructor(nombre) {
	this.nombre = nombre;
	}
}

var miguel = new Persona('Miguel Angel Alvarez');
console.log(miguel.nombre);

console.log('------------- clientes -------------');
const clientes =  listClientsIdsSortByName();
console.log(clientes);

class Sumatorio {
	static sumarArray(result) {
	let suma = 0;
	for(let valor of result){
		suma += valor
	}
	return suma;
	}
}

console.log('------------------------------------');
let suma = Sumatorio.sumarArray(result);
console.log('Total en Cuentas ' + suma);
console.log('------------------------------------');


function ClientesTotalBalances(num) {
	let cliente = 0;
	for (const prop in accounts) {
		    if (accounts[prop].clientId===num){  	 
			//console.log('accounts.clientId = ' + accounts[prop].clientId);
			cliente += parseInt(accounts[prop].balance);
			//console.log('balance = ' + accounts[prop].balance);
			} 
	}

	//return banks.map((banks) => banks.id + ' ' + banks.name);
	//return clients.map((clients) =>clients.id + ' ' + clients.taxNumber + ' ' + clients.name);
	//return accounts.map((accounts) => accounts.balance);	
	return cliente;
	
}

console.log('balance = ' + ClientesTotalBalances(2));
console.log('------------------------------------');

var cliente = "";
class SumatorioCli {
	static sumarArray(cliente) {
	let suma = 0;
	for(let valor of cliente){
		suma += valor
	}
	return suma;
	}
}

let totalcli1 = ClientesTotalBalances(1);
console.log('balance X cli CLP ' + totalcli1);
let totalcli2 = ClientesTotalBalances(2);
console.log('balance X cli CLP '+ totalcli2);
let totalcli3 = ClientesTotalBalances(3);
console.log('balance X cli CLP '+ totalcli3);
let totalcli4 = ClientesTotalBalances(4);
console.log('balance X cli CLP '+ totalcli4);
let totalcli5 = ClientesTotalBalances(5);
console.log('balance X cli CLP '+ totalcli5);
let totalcli6 = ClientesTotalBalances(6);
console.log('balance X cli CLP '+ totalcli6);
console.log('------------------------------------');

