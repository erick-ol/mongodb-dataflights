db.voos.find({
  "aeroportoOrigem.pais": { $ne: "Brasil" },
}).count();
