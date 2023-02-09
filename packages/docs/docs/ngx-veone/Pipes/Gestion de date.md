---
sidebar_position: 1
---

Des pipes pour formater ou créer des dates.

### timeElapsed

Renvoie le temps écoulé depuis une date passée en paramêtres.

Utilise en interne [DayJS](https://day.js.org), et est donc compatible avec une multitude de
formats de date, allant des chaînes de caractères aux objets.

```html
<article class="user__row">
      <p>Connecté {{ '01/02/2023:14:55' | timeElapsed }}</p>
      <!-- Connecté il y a 2 heures -->
</article>
```
