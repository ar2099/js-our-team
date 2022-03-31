// Ciao ragazzi,
//   esercizio di oggi: Our Team
// nome repo: js - our - team
// Per la pagina 'Chi siamo' del nostro sito aziendale, 
// dobbiamo sviluppare la sezione "Il nostro team".
// Definiamo un array di oggetti che rappresentano 
// i membri del team.Ogni membro ha le informazioni 
// necessarie per stampare la relativa card:
//  Nome, Ruolo e Foto.

//  Milestone 1: stampare in console l'elenco dei
//  membri del team, scrivendo separatamente i 
// dettagli di ciascun componente.

// Milestone 2: stampare i dati all'interno 
// di un contenitore nella pagina html in modo dinamico,
// creando per ciascun membro del team un elemento
// che conterrà i suoi dati.
// BONUS: stilizziamo la sezione realizzando 
// le card di ciascun membro del team, come 
// nel mockup allegato.
// Consigli del giorno:
// Ragioniamo come sempre a step.

var membri = 
[
    {
      "nome" : "Angela Caroll",
      "ruolo" : "Chief Editor",
      "foto" : "angela-caroll-chief-editor.jpg"
    },

    {
      "nome": "Angela Lopez",
      "ruolo": "Media Manager",
      "foto": "angela-lopez-social-media-manager.jpg"
    },

    {
      "nome": "Barbara Ramos",
      "ruolo": "Graphic Designer",
      "foto": "barbara-ramos-graphic-designer.jpg"
    },

    {
      "nome": "Scott Estrada",
      "ruolo": "Developer",
      "foto": "scott-estrada-developer.jpg"
    },

    {
      "nome": "Walter Gordon",
      "ruolo": "Office Manager",
      "foto": "walter-gordon-office-manager.jpg"
    },

    {
      "nome": "Wayne Barnett",
      "ruolo": "Founder and CEO",
      "foto": "wayne-barnett-founder-ceo.jpg"
    },

    {
      "nome": "Marta Berna",
      "ruolo": "Relazioni col pubblico",
      "foto": "new-team-member-01.jpg"
    },

    {
      "nome": "Mario Maria Mario",
      "ruolo": "Addetto spazzolini e sarchiopone",
      "foto": "new-team-member-02.jpg"
    },

    {
      "nome": "Xu Bambu",
      "ruolo": "Sa matematica",
      "foto": "new-team-member-03.jpg"
    },

    {
      "nome": "Marcellino Barnett",
      "ruolo": "Fratello del capo, alcolista",
      "foto": "new-team-member-04.jpg"
    },
];

// 1 milestone
console.log(membri)



let stampa1 = document.getElementById("stampa1")


// 1.5 milestone
for(i = 0; i < membri.length; i++){
for (var key in membri[i]) {
  stampa1.innerHTML += `<p>${membri[i][key]}</p>`
} 
stampa1.innerHTML += `<p>------</p>`
}

let stampa2 = document.getElementById("stampa2")

//2 milestone
for (i = 0; i < membri.length; i++) {
  stampa2.innerHTML += `<p>Nome: ${membri[i]["nome"]}</p><p>Ruolo: ${membri[i]["ruolo"]}</p><img src="${membri[i]["foto"]}" alt=""><p>------</p>`
}


// 3 milestone


let stampa3 = document.getElementById("schede-id")
for (i = 0; i < membri.length; i++) {
  stampa3.innerHTML += 
`<div class="scheda">
  <div class="immagine-scheda">
    <img src="${membri[i]["foto"]}" alt="">
  </div>
  <div class="dati-scheda">
    <p class="nome">${membri[i]["nome"]}</p>
    <p class="ruolo">${membri[i]["ruolo"]}</p>
  </div>
</div>`}