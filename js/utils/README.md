# Utils

Utils (utilities) er små hjælpefunktioner, der kan bruges flere steder i projektet.  
De samler genanvendelig logik, så man undgår at skrive det samme flere gange.

De er ikke knyttet til én bestemt side eller komponent, men understøtter resten af applikationen.

## Filer i denne mappe:

- `cookies.js` håndterer oprettelse, læsning og sletning af cookies  
- `dom.js` indeholder små hjælpefunktioner til DOM-manipulation  
- `formatter.js` formaterer værdier, fx priser til dansk valuta  
- `http.js` indeholder generel logik til HTTP-anmodninger  
- `token.js` håndterer login-token, fx gem, hent, slet og tjek om token er udløbet  

## Typisk ansvar:

- Små genbrugelige hjælpefunktioner  
- Understøttende logik til fx cookies, token, DOM og formattering  
- Kan bruges på tværs af views, controllere og modeller  
- Indeholder ikke sidespecifik logik
