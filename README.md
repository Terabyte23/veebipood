# Veebipood

<!-- TODO: Kirjelda mis see rakendus on -->

## Tehnoloogiad

<!-- TODO -->

## Käivitamine

<!-- TODO -->

## Testikasutajad

<!-- TODO -->

## Teadaolevad vead

Rakenduses on kaks viga mida pead parandama:

1. `src/routes/products.js` — otsing ei tööta
2. `src/routes/orders.js` — tellimuse staatus on vale

## API endpointid

### Kasutajad

| Meetod | URL | Kirjeldus |
|--------|-----|-----------|
| POST | /api/users/signup | <!-- TODO --> |
| POST | /api/users/login | <!-- TODO --> |
| POST | /api/users/logout | <!-- TODO --> |
| GET | /api/users/me | <!-- TODO --> |

### Tooted

| Meetod | URL | Kirjeldus |
|--------|-----|-----------|
| GET | /api/products | <!-- TODO --> |
| GET | /api/products/:id | <!-- TODO --> |
| GET | /api/products/search | <!-- TODO --> |
| GET | /api/products/categories | <!-- TODO --> |
| GET | /api/products/category/:cat | <!-- TODO --> |

### Tellimused

| Meetod | URL | Kirjeldus |
|--------|-----|-----------|
| POST | /api/orders | <!-- TODO --> |
| GET | /api/orders | <!-- TODO --> |
| GET | /api/orders/me | <!-- TODO --> |
| GET | /api/orders/:id | <!-- TODO --> |
| PATCH | /api/orders/:id/status | <!-- TODO --> |

## Arhitektuur

<!-- TODO: Mis arhitektuur see rakendus kasutab ja miks? -->

## GitHub Actions

<!-- TODO: Kirjelda mis toimub automaatselt -->
