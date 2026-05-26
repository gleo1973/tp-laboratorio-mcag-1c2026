# ⚽ Más allá del fútbol: ¿puede el desarrollo económico y demográfico de un país predecir su rendimiento en la Copa del Mundo FIFA 2026?

**Trabajo Práctico Grupal · Laboratorio de Métodos Cuantitativos Aplicados a la Gestión**
Facultad de Ciencias Económicas · Universidad de Buenos Aires · 1er Cuatrimestre 2026

---

## Integrantes

| Nombre completo     | Registro | Usuario GitHub |
| ------------------- | -------- | -------------- |
| CARLA GARIBOTTI     |          | cargaribotti   |
| FERNANDO MORICHETTI |          | FMorichetti    |
| LEONARDO GOMEZ      | 921318   | gleo1973       |

---

## Hipótesis central

> _"El puntaje FIFA pre-torneo de los equipos participantes del Mundial 2026 puede explicarse, al menos parcialmente, a través de indicadores económicos (PBI, PBI per cápita) y demográficos (población, continente, idioma, densidad) de sus países de origen, siendo el valor de mercado del plantel una variable mediadora entre el desarrollo económico y el desempeño deportivo."_

---

## Pregunta de investigación

¿Existe una relación estadísticamente significativa entre el nivel de desarrollo económico y demográfico de un país y el puntaje FIFA de su selección nacional, o el fútbol es uno de los pocos espacios donde la economía no determina el resultado?

---

## Datasets utilizados

datos/fuentes.md

### Variables clave

**Variable dependiente:**

- `fifa_points_pre_tournament` — puntaje FIFA oficial de cada selección previo al torneo

**Variables explicativas económicas:**

- `gdp` — PBI total del país (USD)
- `gdp_per_capita` — PBI per cápita calculado (gdp / population)
- `squad_total_market_value_eur` — valor de mercado total del plantel (EUR)

**Variables explicativas demográficas:**

- `population` — población total del país
- `continent` — confederación/continente
- `language` — idioma oficial (agrupado en familias lingüísticas)
- `median_age` — edad mediana de la población
- `density` — densidad poblacional

---

## Estructura del repositorio

```
tp-grupal-lmcag-1c2026/
│
├── README.md
├── .gitignore
│
├── Laboratorio_TP_2026_CopaMundial2026.ipynb
│
├── datos/
│   ├── raw/
│   │   ├── paises.csv               ← dataset deportivo original
│   │   └── country_info.csv         ← dataset económico/demográfico original
│   ├── processed/
│   │   └── df_merged.csv            ← dataset integrado post-limpieza
│   └── fuentes.md                    ← descripción de fuentes y variables
│
├── informe/
│   └── informe_final.pdf            ← informe académico en PDF
│
├── presentacion/
│   └── links.md                     ← links a Canva, video o sitio web
│
└── imagenes/
   └── ...                          ← gráficos exportados desde Colab

---


_Laboratorio de Métodos Cuantitativos Aplicados a la Gestión · FCE UBA · 1C 2026_

```
