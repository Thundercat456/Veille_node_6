// Le fichier index.js utilise le module tableau.js

const tableaux = require('./tableaux')

let longTabNom = tableaux.nom.length
let longTabPrenom = tableaux.prenom.length
let longTabDomaine = tableaux.domaine.length

// fonction locale
//const genere_telephone = ()=> {...}

// la fonction à exporter
const peupler_json = ()=> {

	let tableauMembres=[];

	console.log("ok");
	objMembres={

		nom:"Malette",
		prenom:"Mathieu",
		courriel:"mathieumalette@hotmail.com"

	}

	tableauMembres.push(objMembres);
	return tableauMembres; 

}


// on exporte la fonction peupler_json
module.exports = peupler_json;