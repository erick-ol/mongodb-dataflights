const domesticFlights = db.voos.find(
  {
    natureza: "Doméstica",
    "empresa.nome": "PASSAREDO",
  },
).count();

db.resumoVoos.insertOne(
  { 
    empresa: "PASSAREDO",
    totalVoosDomesticos: domesticFlights,
  },
);

db.resumoVoos.find(
  null,
  {
    empresa: 1,
    totalVoosDomesticos: 1,
    _id: 0,
  },
);
