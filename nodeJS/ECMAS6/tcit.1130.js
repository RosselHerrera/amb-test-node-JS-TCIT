/* ****************************************
 * La prueba debe ejecutarse sin errores con:
 * #/> node nombre-apellido.js
 * mrosselh@gmail.com           NOV 30 2018  
 * ****************************************/

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

function listBankName() {
	  return banks.map((banks) => banks.name);
};

const arraybank = listBankName();

function listClientsIds() {
  return clients.map((client) => client.id);
};

function listClientsName() {
	  return clients.map((client) => client.name);
};

const clienteId = listClientsIds();

function listClientsTaxNunber() {
	  return clients.map((client) => client.taxNumber);
};
const clienteNombre = listClientsName();

console.log('------------------------------------');
console.log('TCIT CTO/developer interview v0.0.2');
console.log('------------------------------------');
/* 0 Arreglo con los ids de clientes */
console.log('Pregunta 0');
console.log(listClientsIds());
console.log('------------------------------------');
/* 1 Arreglo con los ids de clientes ordenados por rut */
console.log('------------------------------------');
var rutesordenados = clients.map((client) => client.taxNumber + client.id);
var arr = rutesordenados.sort((a,b) => (a['id'] - b['id']));
var clientes = clients.map((client) => client.id);
var arrcli = clientes.sort((a,b) => (a['id'] - b['id']));
var cli = [];
cli.length =  clientes.length;
var rut = [];
rut.length = rutesordenados.length;
/* 1  Arreglo con los ids de clientes ordenados por rut */
function listClientsIdsSortByTaxNumber() {
	arr.sort();
	arrcli.sort();
	for(let i = 0; i < rutesordenados.length; i++) {
		cli[i] = arr[i].substr((cli.length + 2), 1);
		rut[i] = arr[i];
	}
	function comparar(a, b) {
		  return a - b;
	}
	return cli;
};

/* Arrays para Clientes */
const clienteRut = listClientsIdsSortByTaxNumber();
function max() {
	if(clients.length == 0) {
	return 0;
	}
	let max = clients[0].taxNumber;
	for(let i = 0; i < clients.length; i++) {		
		if(clients[i].taxNumber > max) {
			max = clients[i].taxNumber;
		}
	}
	return max;  
}
function listClientsIdsSortByName() {
	return clients.map((client) => client.name);
};
const clientesNombre =  listClientsIdsSortByName();
/* Arrays para Cuentas */
function listAccountsNames() {
	  return accounts.map((acount) => accounts.name);
};
const arrayCtas = listAccountsNames();

function listAccountsBalance() {
	  return accounts.map((acount) => accounts.balance);
};
const arrayBalance = listAccountsBalance();
function listAccountsBankId() {
	  return accounts.map((acount) => accounts.bankId);
};
const arrayBankId = listAccountsBalance();
var clibco = [];
clibco.length =  clients.length;
var itotal = [];
itotal.length = clients.length;
var idBank = [];
idBank.length = clients.length;

/* Pregunta 2 Arreglo con los nombres de cliente ordenados de mayor a menor 
 *            por la suma TOTAL de los saldos de cada cliente en los bancos que participa.-
 */
function sortClientsTotalBalances() {
	var Tcliente = 0;
	var idbanco = 0;
	var nombanco1 = ''; 
	var nombanco2 = ''; 
	var nombanco3 = '';
	var nomcliente = "NOMBRE";
	
	for(let i = 0; i < clients.length + 1; i++) {	
		let num = parseInt(i);
		switch (i) {
		  case 0:  
			 nomcliente = clientesNombre[0];
			 clibco[i] = nomcliente;
			 break;
		 case 1:  
			 nomcliente = clientesNombre[1];
			 clibco[i] = nomcliente;
			 break;
		 case 2:  
			 nomcliente = clientesNombre[2];
			 clibco[i] = nomcliente;
			 break;
		 case 3:  
			 nomcliente = clientesNombre[3];
			 clibco[i] = nomcliente;
			 break;
		 case 4:  
			 nomcliente = clientesNombre[4];
			 clibco[i] = nomcliente;
			 break;
		 case 5:  
			 nomcliente = clientesNombre[5];
			 clibco[i] = nomcliente;
			 break;
		 case 6:  
			 nomcliente = clientesNombre[6];
			 clibco[i] = nomcliente;
			 break;
		 default:
		   break;
		}    	
		for (const prop in accounts) {  
		    if (accounts[prop].clientId===parseInt(num)){  	
		    	Tcliente += accounts[prop].balance;
				idbanco = parseInt(accounts[prop].bankId);    	
		    }	 
		    itotal[i] = Tcliente;
		}
		switch (parseInt(idbanco)) {
		 case 1:  
			  nombanco1 = arraybank[0];;
			  idBank[i] = nombanco1;  
		 case 2:  
			  nombanco2 = arraybank[1];
			  idBank[i] = nombanco2;
		 case 3:  
			  nombanco3 = arraybank[3]
			  idBank[i] = nombanco3;;
		} 
		
	}	
	
	var sortCliTotBalances = [];
	sortCliTotBalances.length = 2;
	let sortC = clibco.sort((a,b) => (a[0] - b[0]));
	var reversedsortC = sortC.reverse(); 
	sortCliTotBalances[0]= reversedsortC;
	let sortI = itotal.sort((a,b) => (a[1] - b[1]));
	var reversedsortI = sortI.reverse();
	sortCliTotBalances[1] = reversedsortI;
	
	
	var reversed = sortCliTotBalances;
	
	return sortCliTotBalances;
}

//3 Objeto en que las claves sean los nombres de los bancos y los valores un arreglo 
//con los ruts de sus clientes ordenados alfabeticamente por nombre.
function banksClientsTaxNumbers(){
	
	//claves => nombre Bancos
	//valores => ruts ordenado x nombrea alfa
	
	//crear mapa
	let clientesxRut = new Map();
	//poblar mapa  claveObj = [], CLIxBANCOS = [], BANCOS = [],
	var claveCadena = 1;
    var SANTANDER = [], CHILE = [], ESTADO = [];
    //var claveFunc = function () {};
    // asignando valores
    clientesxRut.set(1, 'SANTANDER');
    clientesxRut.set(2, 'CHILE');
    clientesxRut.set(3, 'ESTADO');
    
    let idrutesxbancos = [];
        idrutesxbancos.length = accounts.length;
    let idbancos = [];
    	idbancos.length = accounts.length;
    
    let rutesxbancos = [];
        rutesxbancos.length = accounts.length;
    let bancos = [];
    	bancos.length = accounts.length;	
   
    let santander = [];
    	santander.length = accounts.length;
    let chile = [];
    	chile.length = accounts.length;	
    let estado = [];
    	estado.length = accounts.length;	
    	
    	for (const prop in accounts) {
    		if (accounts[prop].clientId !== ''){
    			if (accounts[prop].bankId===parseInt(1)){  
	    			//console.log('1 ' + accounts[prop].clientId );
		    		idrutesxbancos[prop] = accounts[prop].clientId;	
		    		idbancos[prop] = accounts[prop].bankId;
				}
		    	if (accounts[prop].bankId===parseInt(2)){  	
		    		//console.log('2 '+ accounts[prop].clientId);
		    		idrutesxbancos[prop] = accounts[prop].clientId;	
		    		idbancos[prop] = accounts[prop].bankId;    	
				}
		    	if (accounts[prop].bankId===parseInt(3)){
		    		//console.log('3 '+ accounts[prop].clientId);
		    		idrutesxbancos[prop] = accounts[prop].clientId;	
		    		idbancos[prop] = accounts[prop].bankId;    	
				}	    	
    		}
    		
    	}
    	
    	
    	//console.log(idbancos +' '+ idrutesxbancos);
    	//console.log(idrutesxbancos);
    	    	     	  
    	 
    	  for (const prop in idrutesxbancos) {
	    	  let idNom = idrutesxbancos[prop];
	    	  rutesxbancos[prop] = nombreClienteBanco(idNom)
	    	  
	    	  //clientesxRut.set(BANCOS, nombreClienteBanco(idNom));
	    	  
	    	  //console.log(nombreClienteBanco(idNom));
    	  }
    	  
    	  
    	  for (const prop in idbancos) {	
    		  
    		  let idBco = idbancos[prop];
    		  let idNom = idrutesxbancos[prop];
     		  
    		  bancos[prop] = nombreBanco(idBco);
    		  //clientesxRut.set(BANCOS, nombreBanco(idBco));

    		  let cont = 0;
    		  
        	  if (bancos[prop] === 'SANTANDER'){
        		  if (accounts[prop].clientId <= clients.length ){
	        		  santander[prop] = nombreClienteBanco(idNom);
	        		  //console.log('[' + prop + '] SANTANDER ' + nombreClienteBanco(idNom));
	    			  clientesxRut.set(SANTANDER, nombreClienteBanco(idNom)); 
	    			  //console.log('--------------------------------------------');
        		  }else{
        			  santander[prop] = prop;
        		  }   
    		  }
        	  
    		  if (bancos[prop] === 'CHILE'){
    			  if (accounts[prop].clientId <= clients.length ){
	    			  chile[prop] = nombreClienteBanco(idNom);
	    			  //console.log('[' + prop + '] CHILE ' + nombreClienteBanco(idNom));
	    			  clientesxRut.set(CHILE, nombreClienteBanco(idNom));
	    			  cont = cont + 1; 
	    			  //console.log('--------------------------------------------');
    			  }else{
        			  chile[prop] = 0;
        		  } 
    		  }
    		  if (bancos[prop] === 'ESTADO'){
    			  if (accounts[prop].clientId <= clients.length ){
	    			  estado[prop] = nombreClienteBanco(idNom);
	    			  //console.log('[' + prop + '] ESTADO ' + nombreClienteBanco(idNom));
	    			  clientesxRut.set(ESTADO, nombreClienteBanco(idNom));
	    			  cont = cont +1;
    			  }else{
        			  estado[prop] = 0;
        		  } 
    		  }
    	  //console.log('--------------------------------------------');
    	  } 
    	  /*   Filtros Array     */
		  santander = santander.filter(Boolean);
		  chile = chile.filter(Boolean);
		  estado = estado.filter(Boolean);
		  //console.log(santander);
		  //console.log(chile);
		  //console.log(estado);
		  //console.log('--------------------------------------------');
		  
    	  for (let i = 0; i < bancos.length; i++){
    	 //for (const prop in idbancos) {	  
    		  
    		  let ClientesxBanco = bancos[i];
    		  //console.log('('+i+')-------------');
    		  //console.log('MUESTRA BCO : ' + ClientesxBanco); //+' '+ nombreClienteBanco(i)
    		  //console.log('--------------');
    		  
    		  let BancoxRutClientes = rutesxbancos[i];
    		  //console.log('('+i+')-------------');
    		  //console.log('MUESTRA RUT : ' + BancoxRutClientes); //+' '+ nombreClienteBanco(i)
    		  //console.log('--------------');
    	  }
    	  
	  
    function nombreClienteBanco(num){
    	num = parseInt(num - 1);
    	let nombre = listClientsName();
    	let rut = listClientsTaxNunber();
    	return rut[num];
    }
    
    function nombreBanco(bco){
    	bco = parseInt(bco - 1); 
    	let banco = listBankName();
    	return banco[bco];
    }
    
    //clientesxRut.set(claveObj,idrutesxbancos);
    //clientesxRut.set(CLIxBANCOS,rutesxbancos);
    //clientesxRut.set(BANCOS, bancos);
    
    let bancoS = santander.sort();
    clientesxRut.set(SANTANDER, bancoS.reverse());
    let bancoCh = chile.sort();
    clientesxRut.set(CHILE, bancoCh.reverse());
    let bancoE = estado.sort()
    clientesxRut.set(ESTADO, bancoE.reverse());
    
    //clientesxRut.set(claveObj, "['MOHAMED FERRE SAMPER','VICTOR MANUEL ROJAS LUCAS','SALVADOR ARNEDO MANRIQUEZ','ANDRES NADAL MOLINA','JESUS RODRIGUEZ ALVAREZ','HECTOR ACUÑA BOLAÑOS']");
    //clientesxRut.set(claveFunc, "valor asociado with claveFunc");

    //console.log(clientesxRut.size);  
    
    // obteniendo los valores
    
    //clientesxRut.get(claveCadena);    // "valor asociado con 'banco'"
    
    //clientesxRut.get(claveObj);       // "valor asociado con claveObj"
    //clientesxRut.get(CLIxBANCOS);	  // "valor asociado con CLIBANCOS"	
    //clientesxRut.get(BANCOS);
    clientesxRut.get(SANTANDER);
    clientesxRut.get(CHILE);
    clientesxRut.get(ESTADO);
    //clientesxRut.get(claveFunc);    // "valor asociado con claveFunc"
    console.log('MAPA  -----------------------------------------------------------');
    console.log('RUT CLIENTES SANTANDER : '+ clientesxRut.get(SANTANDER));
    console.log('RUT CLIENTES CHILE : '+ clientesxRut.get(CHILE));
    console.log('RUT CLIENTES ESTADO : '+ clientesxRut.get(ESTADO));
    console.log('-----------------------------------------------------------------');
    
    //console.log(clientesxRut.get(1));               // ""valor asociado con 'banco'"
    //console.log(clientesxRut.get(2));      			// porque claveCadena === 'una cadena'
    //console.log(clientesxRut.get(3));				//console.log(clientesxRut.get(claveObj));
    //console.log('----------------------------');
    //console.log(clientesxRut.get(BANCOS));
    //console.log(clientesxRut.get(CLIxBANCOS));
    //clientesxRut.get(function() {});              // undefined, porque claveFunc !== function () {}
    
    //mostrar mapa
    clientesxRut.forEach(function(valor, clave) {
    	//console.log(clave);
    	
    	console.log(clave + ' = ' + valor);
    	console.log('-----------------------------------------------------------------');
    });
	
}

//4 Arreglo ordenado decrecientemente con los saldos de clientes 
//  que tengan más de 25.000 en el Banco SANTANDER
function richClientsBalances() {
	// Array saldos clientes mayores a 25.000 SANTANDER decreciente
	
	function listBankName() {
		  return banks.map((banks) => banks.name);
	};
	function listBankId() {
		  return banks.map((banks) => banks.id);
	};
	
	const arraybankId = listBankId();
	const arraybankName = listBankName();
	
	//console.log(arraybankId);
	//console.log(arraybankName);
	
	function listAccountsClientId() {
		  return accounts.map((account) => account.clientId);
	};

	function listAccountsBankId() {
		  return accounts.map((account) => account.bankId);
	};
	
	function listAccountsBalance() {
		  return accounts.map((account) => account.balance);
	};
	
	const arrayAccountClientId = listAccountsClientId();
	const arrayAccountBankId = listAccountsBankId();
	const arrayAccountBalance = listAccountsBalance();
	
	//console.log(accounts);
	//console.log(arrayAccountClientId);
	//console.log(arrayAccountBankId);
	//console.log(arrayAccountBalance);

	function listClientsIdsSortById() {
		return clients.map((client) => client.id);
	};
	function listClientsIdsSortBytaxNumber() {
		return clients.map((client) => client.taxNumber);
	};	
	function listClientsIdsSortByName() {
		return clients.map((client) => client.name);
	};
	
	const arrayAccountClientById =  listClientsIdsSortById();
	const arrayAccountClientBytaxNumber =  listClientsIdsSortBytaxNumber();
	const arrayAccountClientByName =  listClientsIdsSortByName();
	
	//console.log(arrayAccountClientById);
	//console.log(arrayAccountClientBytaxNumber);
	//console.log(arrayAccountClientByName);

	
	var SANTANDER = [];
	  
	let idrutesxbancos = [];
	    idrutesxbancos.length = accounts.length;
	let idbancos = [];
		idbancos.length = accounts.length;
		
	let balances = [];
		balances.length = accounts.length;	
	
	let rutesxbancos = [];
	    rutesxbancos.length = accounts.length;
	let bancos = [];
		bancos.length = accounts.length;	
	
	let santander = [];
		santander.length = accounts.length;

		for (const prop in accounts) {
			//console.log(accounts[prop].clientId);
			if (accounts[prop].bankId===parseInt(1)){  
    			if(accounts[prop].balance > 25000 ){
    				idrutesxbancos[prop] = accounts[prop].clientId;	
		    		idbancos[prop] = accounts[prop].bankId;
		    		balances[prop] = accounts[prop].balance;
    			}
			}
		}
		
		//console.log(idrutesxbancos);
		//console.log(balances);
		
		
		for (const prop in idrutesxbancos) {
			let idNom = idrutesxbancos[prop];
	    	rutesxbancos[prop] = balances[prop] +' '+ nombreClienteBanco(idNom);
	    	//OJO meter a un arreglo y mostrarlo OK
	    	//console.log(balances[prop] +' '+ nombreClienteBanco(idNom));
   	  	}		
		
		rutesxbancos = cleanArray(rutesxbancos);
		//rutesxbancos.filter(Boolean);
		console.log(rutesxbancos);
		
		/**
		 * Funciones
		 */
		
		function nombreClienteBanco(num){
			//console.log(num);
	    	num = parseInt(num-1);
	    	let nombre = listClientsName();
	    	let rut = listClientsTaxNunber();
	    	return nombre[num];
	    }
		
		function cleanArray( actual ){
			  var newArray = new Array();
			  for( var i = 0, j = actual.length; i < j; i++ ){
			      if ( actual[ i ] ){
			        newArray.push( actual[ i ] );
			    }
			  }
			  return newArray;
			}
	   
	} 

/* 5 Arreglo con ids de bancos ordenados crecientemente 
*    por la cantidad TOTAL de dinero que administran. 
*/    
function banksRankingByTotalBalance() {
	// totales por Bancos de menor a mayor
	// accounts banks
	function listBankName() {
		  return banks.map((banks) => banks.name);
	};
	function listBankId() {
		  return banks.map((banks) => banks.id);
	};
	
	const arraybankId = listBankId();
	const arraybankName = listBankName();
	
	function listAccountsClientId() {
		  return accounts.map((account) => account.clientId);
	};

	function listAccountsBankId() {
		  return accounts.map((account) => account.bankId);
	};
	
	function listAccountsBalance() {
		  return accounts.map((account) => account.balance);
	};
	
	const arrayAccountClientId = listAccountsClientId();
	const arrayAccountBankId = listAccountsBankId();
	const arrayAccountBalance = listAccountsBalance();
	
	let idrutesxbancos = [];
    	idrutesxbancos.length = accounts.length;
	
    let idbancos = [];
		idbancos.length = accounts.length;
		
	let balances = [];
		balances.length = accounts.length;	
	
	let saldoxbanco = [];
		saldoxbanco.length = accounts.length;
	    
	let bancos = [];
		bancos.length = 2;
		
		var balance = 0;
		var sumaS = 0;
		var sumaCh = 0;
		var sumaE = 0;
		for (const prop in accounts) {
			
			switch (parseInt(accounts[prop].bankId)) {
			 case 1:  
				 //console.log(accounts[prop].bankId +' '+ accounts[prop].balance);
				 balances[prop] = accounts[prop].balance;
				 sumaS = sumaS + parseInt(balances[prop]);
				 idbancos[prop] = accounts[prop].bankId;
				 break;
			 case 2:  
				 //console.log(accounts[prop].bankId +' '+ accounts[prop].balance);
				 balances[prop] = accounts[prop].balance;
				 sumaCh = sumaCh + parseInt(balances[prop]);
				 idbancos[prop] = accounts[prop].bankId;
				 break;
			 case 3:  
				 //console.log(accounts[prop].bankId +' '+ accounts[prop].balance);
				 balances[prop] = accounts[prop].balance;
				 sumaE = sumaE + parseInt(balances[prop]);
				 idbancos[prop] = accounts[prop].bankId;
				 break;
			 default:
				   break;
			   
			} 
			
		}	
		
		bancos[0] = sumaS;
		bancos[1] = sumaCh;
		bancos[2] = sumaE;
		console.log('Arreglo con valores crescientes administrado por bancos');
		bancos.sort();
		console.log(bancos.reverse());
		console.log('-----------------------------------------');
		/**
		 * Funciones
		 */
	}

/* 6 Objeto en que las claves sean los nombres de los bancos y los valores 
 * el número de clientes que solo tengan cuentas en ese banco. 
 * */
function banksFidelity() {
	/* accounts, clients, banks */
	
	//crear mapa
	let clientesFieles = new Map();
	//poblar mapa  claveObj = [], CLIxBANCOS = [], BANCOS = [],
	var claveCadena = 1;
    var SANTANDER = [], CHILE = [], ESTADO = [];
	//poblar mapa
    
    
	// CODE HERE
	
	}

/* Objeto en que las claves sean los nombres de los bancos 
 * y los valores el id de su cliente con menos dinero. 
 *   */
function banksPoorClients() {
	/* accounts, clients, banks */
	//crear mapa
	let clientesPobres = new Map();
	//poblar mapa  claveObj = [], CLIxBANCOS = [], BANCOS = [],
	var claveCadena = 1;
    var SANTANDER = [], CHILE = [], ESTADO = [];
	//poblar mapa
    
	
	  // CODE HERE
	}

/* 8 Agregar nuevo cliente con datos ficticios a "clientes" 
 * y agregar una cuenta en el BANCO ESTADO 
 * con un saldo de 9000 para este nuevo empleado. 
 * 
 * Luego devolver el lugar que ocupa este cliente en el ranking de la pregunta 2.
 * No modificar arreglos originales para no alterar las respuestas anteriores al 
 * correr la solución */
function newClientRanking() {
	  // CODE HERE
	}


console.log('------------------------------------');
console.log('listClientsIdsSortByTaxNumber()');
console.log('------------------------------------');
console.log(listClientsIdsSortByTaxNumber());
console.log('------------------------------------');
console.log('sortClientsTotalBalances()');
console.log('------------------------------------');
console.log(sortClientsTotalBalances());
console.log('------------------------------------');
console.log('banksClientsTaxNumbers()');
console.log('------------------------------------');
console.log(banksClientsTaxNumbers());
console.log('------------------------------------');
console.log('------------------------------------');
console.log('richClientsBalances()');
console.log('------------------------------------');
console.log(richClientsBalances());
console.log('------------------------------------');
console.log('banksRankingByTotalBalance() ');
console.log('------------------------------------');
console.log(banksRankingByTotalBalance());
console.log('------------------------------------');

console.log('------------------------------------');
console.log('banksFidelity()');
console.log('------------------------------------');
console.log(banksFidelity());
console.log('------------------------------------');
console.log('banksPoorClients()');
console.log('------------------------------------');
console.log(banksPoorClients());
console.log('------------------------------------');
console.log('newClientRanking()');
console.log('------------------------------------');
console.log(newClientRanking());
console.log('------------------------------------');

