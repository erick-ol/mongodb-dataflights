const domesticFlights = db.voos.find(
  {
    "empresa.nome": "LATAM AIRLINES BRASIL",
    natureza: "Doméstica",
  },
).count();

db.resumoVoos.insertOne(
  {
    empresa: "LATAM AIRLINES BRASIL",
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
