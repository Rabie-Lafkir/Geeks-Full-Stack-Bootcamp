const building = {
  numberOfFloors: 4,
  numberOfAptByFloor: {
    firstFloor: 3,
    secondFloor: 4,
    thirdFloor: 9,
    fourthFloor: 2,
  },
  nameOfTenants: ["Sarah", "Dan", "David"],
  numberOfRoomsAndRent:  {
    sarah: [3, 990],
    dan:  [4, 1000],
    david: [1, 500],
  },
};

// number of floors
console.log("Number of floors:", building.numberOfFloors);

// apartments on 1 and 3
console.log("Apartments on floor 1 and 3:",
  building.numberOfAptByFloor.firstFloor,
  "and",
  building.numberOfAptByFloor.thirdFloor
);

// second tenant name and rooms
const secondTenant = building.nameOfTenants[1];
const roomsSecondTenant = building.numberOfRoomsAndRent[secondTenant.toLowerCase()][0];
console.log(`${secondTenant} has ${roomsSecondTenant} rooms`);

// rents
const sarahRent = building.numberOfRoomsAndRent.sarah[1];
const davidRent = building.numberOfRoomsAndRent.david[1];
const danRent = building.numberOfRoomsAndRent.dan[1];

if (sarahRent + davidRent > danRent) {
  building.numberOfRoomsAndRent.dan[1] = 1200;
  console.log("Dan's rent increased to 1200");
}
