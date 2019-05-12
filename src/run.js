const data = require('./depenses.json')

const categories = [
  'Film et vidéo',
  'Musique et son',
  'Location de supports audio et vidéo',
  'Télévision et radio',
  'Cinéma ',
  'Imprimés',
  'Livres et brochures',
  'Journaux et périodiques',
  "Internet (y.c. abonnemets combinés) jusqu'en 2011",
  'Internet (y.c. abonnemets combinés) à partir de 2012 ',

]

const num = x => Number(x.split(',').join('.'))

const catParAn = d => ({
  annee: Number(d.an),
  list: categories
    .reduce((res, cat) => [...res, num(d[cat])], [])
    .map(n => isNaN(n) ? 0 : n)
})

console.log(data.map(catParAn))