const {faker}=require('@faker-js/faker');
const users=[];
function addUser(name=faker.person.firstName(),street=faker.location.streetAddress(),country=faker.location.country()){
 users.push({name,street,country});
}
module.exports={users,addUser};
