'use strict';

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

var clients = [{ id: 1, taxNumber: '86620855', name: 'HECTOR ACUÑA BOLAÑOS' }, { id: 2, taxNumber: '7317855K', name: 'JESUS RODRIGUEZ ALVAREZ' }, { id: 3, taxNumber: '73826497', name: 'ANDRES NADAL MOLINA' }, { id: 4, taxNumber: '88587715', name: 'SALVADOR ARNEDO MANRIQUEZ' }, { id: 5, taxNumber: '94020190', name: 'VICTOR MANUEL ROJAS LUCAS' }, { id: 6, taxNumber: '99804238', name: 'MOHAMED FERRE SAMPER' }];

var accounts = [{ clientId: 6, bankId: 1, balance: 15000 }, { clientId: 1, bankId: 3, balance: 18000 }, { clientId: 5, bankId: 3, balance: 135000 }, { clientId: 2, bankId: 2, balance: 5600 }, { clientId: 3, bankId: 1, balance: 23000 }, { clientId: 5, bankId: 2, balance: 15000 }, { clientId: 3, bankId: 3, balance: 45900 }, { clientId: 2, bankId: 3, balance: 19000 }, { clientId: 4, bankId: 3, balance: 51000 }, { clientId: 5, bankId: 1, balance: 89000 }, { clientId: 1, bankId: 2, balance: 1600 }, { clientId: 5, bankId: 3, balance: 37500 }, { clientId: 6, bankId: 1, balance: 19200 }, { clientId: 2, bankId: 3, balance: 10000 }, { clientId: 3, bankId: 2, balance: 5400 }, { clientId: 3, bankId: 1, balance: 9000 }, { clientId: 4, bankId: 3, balance: 13500 }, { clientId: 2, bankId: 1, balance: 38200 }, { clientId: 5, bankId: 2, balance: 17000 }, { clientId: 1, bankId: 3, balance: 1000 }, { clientId: 5, bankId: 2, balance: 600 }, { clientId: 6, bankId: 1, balance: 16200 }, { clientId: 2, bankId: 2, balance: 10000 }];
var banks = [{ id: 1, name: 'SANTANDER' }, { id: 2, name: 'CHILE' }, { id: 3, name: 'ESTADO' }];

//0 Arreglo con los ids de clientes
function listClientsIds() {
	return clients.map(function (client) {
		return client.id;
	});
};
console.log('------------------------------------');
console.log('Pregunta 0');
console.log(listClientsIds());
console.log('------------------------------------');
//1 Arreglo con los ids de clientes ordenados por rut
function listClientsIdsSortByTaxNumber() {
	return clients.map(function (client) {
		return client.taxNumber;
	});
};
console.log('------------------------------------');
console.log('Pregunta 1');
console.log(listClientsIdsSortByTaxNumber());
console.log('------------------------------------');
//2 Arreglo con los nombres de cliente ordenados de mayor a menor por la suma TOTAL de los saldos de cada cliente en los bancos que participa.
function sortClientsTotalBalances() {

	//return banks.map((banks) => banks.id + ' ' + banks.name);
	//return clients.map((clients) =>clients.id + ' ' + clients.taxNumber + ' ' + clients.name);
	return accounts.map(function (accounts) {
		return accounts.balance;
	});
}
console.log('------------------------------------');
console.log('Pregunta 2');
console.log('n cuentas ' + accounts.length);
console.log('------------------------------------');
var result = sortClientsTotalBalances();

console.log('-------------- result -------------');
console.log(result);

function max() {
	if (accounts.length == 0) {
		return 0;
	}
	var max = accounts[0].balance;
	for (var i = 1; i < accounts.length; i++) {
		if (accounts[i].balance > max) {
			max = accounts[i].balance;
		}
	}
	return max;
}

console.log('----------------max()---------------');
console.log('Mayor de los saldos ' + max());
console.log('------------- clases() -------------');

var Persona = function Persona(nombre) {
	_classCallCheck(this, Persona);

	this.nombre = nombre;
};

var miguel = new Persona('Miguel Angel Alvarez');
console.log(miguel.nombre);

console.log('------------- clientes() -------------');

//console.log(clientes);

var Sumatorio = function () {
	function Sumatorio() {
		_classCallCheck(this, Sumatorio);
	}

	_createClass(Sumatorio, null, [{
		key: 'sumarArray',
		value: function sumarArray(result) {
			var suma = 0;
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = result[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var valor = _step.value;

					suma += valor;
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			return suma;
		}
	}]);

	return Sumatorio;
}();

console.log('------------------------------------');
var suma = Sumatorio.sumarArray(result);
console.log('Total en Cuentas ' + suma);
console.log('------------------------------------');

function ClientesTotalBalances(num) {
	var cliente = 0;
	for (var prop in accounts) {
		if (accounts[prop].clientId === num) {
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

var SumatorioCli = function () {
	function SumatorioCli() {
		_classCallCheck(this, SumatorioCli);
	}

	_createClass(SumatorioCli, null, [{
		key: 'sumarArray',
		value: function sumarArray(cliente) {
			var suma = 0;
			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = cliente[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var valor = _step2.value;

					suma += valor;
				}
			} catch (err) {
				_didIteratorError2 = true;
				_iteratorError2 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion2 && _iterator2.return) {
						_iterator2.return();
					}
				} finally {
					if (_didIteratorError2) {
						throw _iteratorError2;
					}
				}
			}

			return suma;
		}
	}]);

	return SumatorioCli;
}();

var totalcli1 = ClientesTotalBalances(1);
console.log('balance X cli CLP ' + totalcli1);
var totalcli2 = ClientesTotalBalances(2);
console.log('balance X cli CLP ' + totalcli2);
var totalcli3 = ClientesTotalBalances(3);
console.log('balance X cli CLP ' + totalcli3);
var totalcli4 = ClientesTotalBalances(4);
console.log('balance X cli CLP ' + totalcli4);
var totalcli5 = ClientesTotalBalances(5);
console.log('balance X cli CLP ' + totalcli5);
var totalcli6 = ClientesTotalBalances(6);
console.log('balance X cli CLP ' + totalcli6);
console.log('------------------------------------');