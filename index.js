import handlebars from "handlebars"; // handlebars importavimas

const html = "<p>{{vardas}} {{pavarde}}</p>"; // html turinys


const template = handlebars.compile(html); // kompiliavimas // sudaro sablona, kuri butu galima nedelsiant vykdyti

const zm = [
    {
        vardas: "Jonas",
        pavarde: "Jonaitis"
    },
    {
        vardas: "Petras",
        pavarde: "Petraitis"
    },
    {
        vardas: "Antanas",
        pavarde: "Antanaitis"
    },
    {
        vardas: "Ona",
        pavarde: "Onaitiene"
    }
]

for (const zmogus of zm) { // for of pereina peer masyva
    let rez = template(zmogus);
    console.log(rez);
}
// perejus per zm masyva, pasinaudojus sukompiliuotu sablonu, atvaizduojamas html turinys su vardais ir pavardemis, kurie aprasyti zm masyve

// let rez = template({
//     vardas: "Jonas",
//     pavarde: "Jonaitis"
// });

// console.log(rez);