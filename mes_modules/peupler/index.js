// Le fichier index.js utilise le module tableau.js

const tableau = require('./tableau')

let longTabNom = tableau.tabNom.length
let longTabPrenom = tableau.tabPrenom.length


// fonction locale
const genere_telephone = ()=> {...}

// la fonction à exporter
const peupler_json = ()=> {...}


// on exporte la fonction peupler_json
module.exports = peupler_json;