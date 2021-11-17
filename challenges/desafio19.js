db.voos.findOne(
  { litrosCombustivel: { $ne: null } },
  {
    vooId: 1,
    _id: 0,
  },
);
