# ⚽ Más allá del fútbol: ¿puede el desarrollo económico y demográfico de un país predecir su rendimiento en la Copa del Mundo FIFA 2026?

**Trabajo Práctico Grupal · Laboratorio de Métodos Cuantitativos Aplicados a la Gestión**
Facultad de Ciencias Económicas · Universidad de Buenos Aires · 1er Cuatrimestre 2026

---

## Integrantes

| Nombre completo     | Registro | Usuario GitHub |
| ------------------- | -------- | -------------- |
| CARLA GARIBOTTI     | 921326   | cargaribotti   |
| FERNANDO MORICHETTI | 921338   | FMorichetti    |
| LEONARDO GOMEZ      | 921318   | gleo1973       |

---

## Pregunta de investigación

¿Existe en el puntaje FIFA y el valor de mercado del plantel pre-torneo de los equipos participantes del Mundial 2026 alguna relación con los indicadores económicos (PBI, PBI per cápita, etc) y/o demográficos (población, continente, idioma, densidad, religion) de sus países de origen?

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

## Cómo reproducir el análisis

1. Clonar el repositorio:    Abrí una terminal, ubicate en la carpeta donde querés descargar el proyecto, y ejecuta el comando

   git clone https://github.com/usuario/tp-grupal-lmcag-1c2026.git

2. Abrir 'Laboratorio_TP_2026_CopaMundial2026.ipynb' en [Google Colab](https://colab.research.google.com)

3. Subir los archivos de 'datos/raw/' o montarlos desde Google Drive

4. Ejecutar todas las celdas en orden (Entorno de ejecución → Ejecutar todo)

**Librerías requeridas** (disponibles en Colab sin instalación adicional):
'pandas', 'numpy', 'matplotlib', 'seaborn', 'scipy', 'sympy'


_Laboratorio de Métodos Cuantitativos Aplicados a la Gestión · FCE UBA · 1C 2026_

```
