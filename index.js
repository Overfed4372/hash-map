import HashMap from "./hash-map.js";
const hashTable = new HashMap();
hashTable.set("Hell", 10);
hashTable.set("Carlos", 20);
hashTable.set("Javier", 25);
hashTable.set("Carlos", 29);
hashTable.set("Pedasag", 13);
hashTable.set("eoaust", 30);
hashTable.set("Pke", 33);
hashTable.set("Pkek", 35);
hashTable.set("Pkek", 37);
hashTable.set("Poeu", 39);
hashTable.set("Poeuaeou", 40);
hashTable.set("Poeeoeeu", 45);
hashTable.set("Poeeoeeooeu", 50);
hashTable.set("Poeeoeeoja", 50);
hashTable.set("Poeeoee,.p", 50);
hashTable.set("Poeejeoa", 50);
hashTable.set("Poeejeoaaoeueoau", 50);
hashTable.set("Poeejejaeooa", 50);
hashTable.set("Poeejejaeooa", 50);
hashTable.set("Poeejejaeooa", 50);
hashTable.set("Poeejejaeooa", 50);
// console.log(hashTable.showTable());
console.log(hashTable.get("Javier"));
// console.log(hashTable.has("Poeejeoauaoeueoau"));
console.log(hashTable.remove("Poeeoeeooeu"));
// console.log(hashTable.length());
// console.log(hashTable.keys());
// console.log(hashTable.values());
console.log(hashTable.entries());
// hashTable.clear();

// console.log(hashTable.showTable());