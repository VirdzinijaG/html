import * as fs from "fs/promises"; // failu skaitumui
import handlebars from "handlebars"; // handlebars importavimas

async function main() {
    const html = await fs.readFile("testas.handlebars", { // is failo skaitomas tekstas
        encoding: "utf-8"
    });

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
        },
        {
            vardas: "Vardenis",
            pavarde: "Pavardenis"
        }
    ]

    // for (const zmogus of zm) { // for of pereina peer masyva
    //     let rez = template(zmogus);
    //     console.log(rez);
    // }

    console.log(template({
        zmones: zm
    }));
}

main();


// const html = "<p>Vardas: {{vardas}} Pavarde: {{pavarde}}</p>"; // html turinys


// const template = handlebars.compile(html); // kompiliavimas // sudaro sablona, kuri butu galima nedelsiant vykdyti

// const zm = [
//     {
//         vardas: "Jonas",
//         pavarde: "Jonaitis"
//     },
//     {
//         vardas: "Petras",
//         pavarde: "Petraitis"
//     },
//     {
//         vardas: "Antanas",
//         pavarde: "Antanaitis"
//     },
//     {
//         vardas: "Ona",
//         pavarde: "Onaitiene"
//     }
// ]

// for (const zmogus of zm) { // for of pereina peer masyva
//     let rez = template(zmogus);
//     console.log(rez);
// }
// perejus per zm masyva, pasinaudojus sukompiliuotu sablonu, atvaizduojamas html turinys su vardais ir pavardemis, kurie aprasyti zm masyve

// let rez = template({
//     vardas: "Jonas",
//     pavarde: "Jonaitis"
// });

// console.log(rez);