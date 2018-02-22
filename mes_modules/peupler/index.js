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

	//console.log("ok");
	let rndNom, rndPrenom, rndDomaine;

	for(let i=0;i<=50;i++){

		rndNom = tableaux.nom[Math.floor(Math.random()*longTabNom)];
		rndPrenom = tableaux.prenom[Math.floor(Math.random()*longTabPrenom)];
		rndDomaine = tableaux.domaine[Math.floor(Math.random()*longTabDomaine)];

		objMembres={

			nom:rndNom,
			prenom:rndPrenom,
			courriel:rndNom+rndPrenom+"@"+rndDomaine

		}

		tableauMembres.push(objMembres);

	}
	return tableauMembres; 

}


// on exporte la fonction peupler_json
module.exports = peupler_json;