exports.seed = async function (knex) {

  await knex("cars").truncate()
  await knex("cars").insert([
    {
      VIN: 1234567890,
      Make: "Chevrolet",
      Model: "Prism",
      Mileage: 100000,
      Transmission: "Automatic",
      Title: "Owner",
    },
    {
      VIN: 0987654321,
      Make: "Mazda",
      Model: "Mazda2",
      Mileage: 110000,
      Transmission: "Manual",
      Title: "Owner",
    },
    {
      VIN: 1234509876,
      Make: "Ford",
      Model: "Focus",
      Mileage: 150000,
      Transmission: "Automatic",
      Title: "Owner",
    },
    {
      VIN: 0987612345,
      Make: "GMC",
      Model: "Canyon",
      Mileage: 120000,
      Transmission: "Automatic",
      Title: "Owner",
    },
    {
      VIN: 0987609876,
      Make: "Volkswagon",
      Model: "Jetta",
      Mileage: 170000,
      Transmission: "Manual",
      Title: "Owner",
    },
    {
      VIN: 1231231231,
      Make: "Lincoln",
      Model: "Navigator",
      Mileage: 200000,
      Transmission: "Automatic",
      Title: "Owner",
    },
  ]);
};
