const data = require("../data/depenses.json")

import 'run.js';

console.log(data);

//var dessiner = d => 


var chart = bb.generate({
  data: {
    columns: [
	["Dépenses", 100, 200, 400, 600],
    ],
    type: "bar"
  },
  axis: {
    x: {
      type: "category",
      categories: [
        "Vidéos",
        "Streaming",
        "Livres",
        "cat4",
        "cat5",
        "cat6",
      ]
    }
  },
  bindto: "#categoryAxis"
});
