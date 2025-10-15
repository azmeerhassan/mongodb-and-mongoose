
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const personSchema = new mongoose.Schema({
  name: {type: String, required: true},
  age: Number,
  favoriteFoods: [String]

})

let Person;

Person = mongoose.model("Person", personSchema)

const arrayOfPeople = [
  {name: 'Azmeer', age: 21, favoriteFoods: ['Biryani']},
  {name: 'Musab', age: 20, favoriteFoods: ['Biryani']},
  {name: 'Rafay', age: 22, favoriteFoods: ['Biryani']}
]

const createAndSavePerson = (done) => {
  const azmeer = new Person({
    name: "Azmeer Hassan Ammad",
    age: 21,
    favoriteFoods: ["Biryani", "Karahi"]
  })
  azmeer.save((err, data)=>{
    if (err) return console.error(err)
    done(null, data)  
  })
};

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, createdPeople)=>{
    if (err) return console.error(err)
    done(null, createdPeople)  
  })
  // done(null /*, data*/);
};

const findPeopleByName = (personName, done) => {
  Person.find({name: personName}, (err, foundPeople)=>{
    if (err) return console.error(err)
    done(null, foundPeople)  
  })
  // done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods: food}, (err, foundPerson)=>{
    if (err) return console.error(err)
    done(null, foundPerson)

  })
};

const findPersonById = (personId, done) => {
  Person.findById(personId, (err, foundPerson)=>{
    if (err) return console.error(err)
    done(null, foundPerson)  
  })
  

};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  Person.findById(personId, (err, person)=>{
    if (err) return console.error(err)
    
    person.favoriteFoods.push(foodToAdd)
    
    person.save((err, updatedPerson)=>{
      if(err) return console.error(err)
      done(null, updatedPerson)  
    })
  })

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
