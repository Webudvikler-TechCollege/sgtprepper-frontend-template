# Router

Routeren styrer, hvilken side der skal vises i browseren, ud fra URL’ens hash.  
Det kan for eksempel være ruter som `#/products` eller `#/login`.

Når hash’en i URL’en ændrer sig, bliver indholdet på siden opdateret med JavaScript, uden at hele siden genindlæses.

Routeren læser den aktuelle hash, matcher den med de ruter der findes i projektet, og kalder den controller eller det view, der hører til ruten.

Hvis ruten ikke findes, vises en standardside med en fejlbesked, for eksempel “Side ikke fundet”.

På den måde kan vi lave navigation mellem flere sider i en single-page-applikation (SPA), selv om vi kun arbejder med én HTML-side.

## Typisk ansvar:

- Lytte efter ændringer i URL’ens hash (#)
- Vælge hvilken controller eller side der skal vises
- Udskifte indholdet i appens root-element
- Vise en 404 fallback-side hvis ruten ikke findes

## Bemærk

Denne router er en **hash-router** og er lavet særligt til dette projekt.  
Det betyder, at vi arbejder med URL’er der indeholder `#`.

**Eksempler:**

```txt
http://127.0.0.1:5500/index.htm#/products
http://127.0.0.1:5500/index.htm#/products/vand-og-vandrensning
http://127.0.0.1:5500/index.htm#/products/vand-og-vandrensning/
http://127.0.0.1:5500/index.htm#/cart
```