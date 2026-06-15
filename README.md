# Veebipood

Veebipood on Node.js ja Expressi põhine REST API e-poe rakendus, mis võimaldab hallata kasutajaid, tooteid ja tellimusi.

## Tehnoloogiad

* Node.js
* Express.js
* JavaScript
* REST API
* GitHub Actions (CI/CD)

## Käivitamine

### Eeldused

- Node.js 18+
- npm

### Paigaldamine

```bash
npm install
```

### Arendusrežiimis käivitamine

```bash
npm run dev
```

### Tavarežiimis käivitamine

```bash
npm start
```

Server käivitub vaikimisi aadressil:

```
http://localhost:3000
```

---

## Testikasutajad

### Tavaline kasutaja

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

### Administraator

```json
{
  "email": "admin@example.com",
  "password": "admin123"
}
```

---

## Teadaolevad vead

Rakenduses on kaks viga mida pead parandama:

1. `src/routes/products.js` — otsing ei tööta
2. `src/routes/orders.js` — tellimuse staatus on vale

## API endpointid

### Kasutajad

| Meetod | URL | Kirjeldus |
|--------|-----|-----------|
| POST | /api/users/signup | Uue kasutaja registreerimine |
| POST | /api/users/login | Sisselogimine |
| POST | /api/users/logout | Väljalogimine |
| GET | /api/users/me | Sisselogitud kasutaja andmed |

### Tooted

| Meetod | URL | Kirjeldus |
|--------|-----|-----------|
| GET | /api/products | Kõik tooted |
| GET | /api/products/:id | Toote detailid |
| GET | /api/products/search | Toodete otsing |
| GET | /api/products/categories | Kõik kategooriad |
| GET | /api/products/category/:cat | Tooted kategooria järgi |

### Tellimused

| Meetod | URL | Kirjeldus |
|--------|-----|-----------|
| POST | /api/orders | Uue tellimuse loomine |
| GET | /api/orders | Kõik tellimused |
| GET | /api/orders/me | Kasutaja tellimused |
| GET | /api/orders/:id | Konkreetne tellimus |
| PATCH | /api/orders/:id/status | Tellimuse staatuse muutmine |

## Arhitektuur

```text
src/
├── routes/
│   ├── users.js
│   ├── products.js
│   └── orders.js
├── models/
├── middleware/
└── app.js
```

## GitHub Actions

Projekt kasutab GitHub Actions töövooge automaatseks kontrolliks.

Peamised tegevused:

- sõltuvuste paigaldamine
- testide käivitamine
- koodi kvaliteedi kontroll
- automaatne valideerimine pull requestide puhul

Workflow failid asuvad:

```text
.github/workflows/
```

---

## Etapp 5 — Arhitektuuri analüüs

### Mis arhitektuur see rakendus kasutab?

Rakendus kasutab **monoliitset klient-server arhitektuuri**, millel on **lihtsustatud MVC-laadne struktuur**.

---

### Millest see järeldub?

Seda saab järeldada projekti struktuurist:

- kõik API loogikad on ühes Node.js/Express rakenduses
- eraldi teenuseid ei ole (nt ei ole microservices’e)
- kõik route’id on ühes projektis:
  - `users.js`
  - `products.js`
  - `orders.js`
- andmed tulevad ühest `data` moodulist (in-memory storage)

Seega kogu süsteem töötab ühe serveri sees.

---

### Miks see arhitektuur on siin õige valik?

See arhitektuur sobib, sest:

- lihtne arendada ja mõista
- kiire seadistada ja testida
- sobib väikese või õppeprojekti jaoks
- ei vaja keerulist infrastruktuuri
- kõik komponendid on ühes kohas hallatavad

---

### Mis arhitektuuri kasutaksid 1 miljoni kasutaja puhul?

Sellisel juhul kasutaksin **mikroteenuste arhitektuuri**.

Süsteem jagataks eraldi teenusteks:

- kasutajate teenus (User Service)
- toodete teenus (Product Service)
- tellimuste teenus (Order Service)
- maksete teenus (Payment Service)
- otsingu teenus (Search Service)

---

### Miks mikroteenused?

- parem skaleeritavus (iga teenust saab eraldi skaleerida)
- parem töökindlus (üks teenus võib kukkuda, teised töötavad edasi)
- lihtsam hallata suuri süsteeme ja tiime
- võimaldab kasutada erinevaid tehnoloogiaid eri teenustes
