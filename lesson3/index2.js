let users = [
    {
        name: "Ion",
        age: 25,
    },
    {
        name: "Ionut",
        age: 26,
    },
    {
        name: "Anrrei",
        age: 27,
    }
];

console.log("\n", users);

// ADD USERS

// push
users.push({name: "Ioana", age: 11});
console.log("push\n", users);

// concat
let newUsers = {name: "Dragos", age: 23};
users = users.concat(newUsers);
console.log("concat\n", users);

// REMOVE USERS

// pop
users.pop()
console.log("pop\n", users);

// slice
users = users.slice(1)
console.log("slice\n", users);

// filter
const usersWithAgeUnder15 = users.filter((user) => {return user.age < 15;});
console.log("filter\n", usersWithAgeUnder15);

// splice
// users.splice(1, 2);
// console.log("splice\n", users);