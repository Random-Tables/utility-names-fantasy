# Names Utility Library

Utility library for randomised tables, focusing on medieval/tolkenesque fantasy names.

### Categories status list

Aim for about ~150 - 200 first names, and around ~ 200 - 300 surnames or ~20(prefix)/20(postfix) for surname generation to consider a group complete

<b>Category</b> - <b>Data size</b>

- Dwarf - fM 90  fF 75 l 26 / 20
- Elven - fM 60  fF 50 l 26 / 20

### Atributions

- [Elven] https://askmiddlearth.tumblr.com/post/56336984476/gendered-names-in-middle-earth


### Utility

converts an array to uppercase & sorts
```
const a = [];

console.log(a.map(x => x.charAt(0).toUpperCase() + x.slice(1)).sort())
```