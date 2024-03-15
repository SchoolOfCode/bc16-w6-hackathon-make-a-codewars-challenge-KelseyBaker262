// Hello challenger!
// Due to everyone getting pets during the Covid pandemic in 2020 a vetenary practice been struggling with the demands on their services. They have decided to begin unregistering pets from their system who haven't had an appointment in the last 3 years.

// // Its your task to be given an array of pets, identify the first pet who last visited the vets over 3 years before todays date and return the following string:

// "Fluffy has not visited in 3 years and needs to be taken off the register."

// Things to remember:
// *The pet must only be taken off the register if they haven't visited in 3 years

// *The name of the pet must be stated in the output string

// *The array of pets will be like:

// const visitDatesArray = [
//     { name: "Mowgli", lastVisit: "2021-03-16" },
//     { name: "Fluffy", lastVisit: "2021-03-14" },
//     { name: "Bertie", lastVisit: "2024-03-16" },
//     { name: "Simba", lastVisit: "2024-03-15" }
// ];

//*This test was made on 2024.03.15 so the example dates show dates relevant to that, but your datas in the array will be appriate for the day you're doing this kata*

// export function checkVetsVisits(visitDatesArray) {
//   // Good luck!
// }

export function checkVetVisits(visitDatesArray) {
  const today = new Date();
  const expiryDate = new Date(
    today.getFullYear() - 3,
    today.getMonth(),
    today.getDate()
  );

  for (let i = 0; i < visitDatesArray.length; i++) {
    const pet = visitDatesArray[i];
    const lastVisitDate = new Date(pet.lastVisit);
    if (lastVisitDate < expiryDate) {
      return `${pet.name} has not visited in 3 years and needs to be taken off the register.`;
      // Additional actions can be performed here
    }
  }
}

// Example array of visit dates
const today = new Date();

const visitDatesArray = [
  {
    name: "Mowgli",
    lastVisit: `${new Date(
      today.getFullYear() - 3,
      today.getMonth(),
      today.getDate() + 1
    )}`,
  }, //Not over 3 years ago
  {
    name: "Socks",
    lastVisit: `${new Date(
      today.getFullYear() - 3,
      today.getMonth(),
      today.getDate() - 1
    )}`,
  }, // 1 day over 3 years
  // {
  //   name: "Bertie",
  //   lastVisit: `${new Date(
  //     today.getFullYear(),
  //     today.getMonth(),
  //     today.getDate() + 1
  //   )}`,
  // }, //Tomorrows date
  { name: "Simba", lastVisit: `${today}` }, // Todays date
  // { name: "Marcie", lastVisit: "ASDE-FH-IJ" }, // non-numeric date
];

// Check the visit dates
console.log(checkVetVisits(visitDatesArray));
