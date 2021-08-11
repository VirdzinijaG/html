import handlebars from "handlebars"; // handlebars importavimas

const html = "<p>{{vardas}} {{pavarde}}</p>"; // html turinys


const template = handlebars.compile(html); // kompiliavimas // sudaro sablona, kuri butu galima nedelsiant vykdyti

let rez = template({
    vardas: "Jonas",
    pavarde: "Jonaitis"
});

console.log(rez);