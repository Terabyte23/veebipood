## Mis juhtuks kui projekt jääks monoliidiks suureks kasvades?

Kui rakendus kasvaks suureks (nt 1 miljon kasutajat), siis monoliitse arhitektuuri kasutamine muutuks probleemseks.

### Võimalikud probleemid:

- rakenduse skaleerimine on keeruline (kogu süsteem peab skaleeruma korraga)
- üks viga võib mõjutada kogu süsteemi
- koodibaas muutub suureks ja raskesti hallatavaks
- arendustiimide töö on keerulisem (kõik töötavad sama koodi kallal)
- uute funktsioonide lisamine muutub aeglasemaks

### Monoliidi plussid sellises olukorras:

- lihtsam deploy ja haldus
- vähem infrastruktuuri keerukust
- kiirem arendus väikestes tiimides

### Kokkuvõte:

Monoliitne arhitektuur sobib hästi väikese ja keskmise suurusega projektidele, kuid suure koormuse ja kasutajate arvu korral muutub see piiravaks. Sellisel juhul on parem liikuda mikroteenuste arhitektuuri suunas.
