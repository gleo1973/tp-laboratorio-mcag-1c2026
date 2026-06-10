# Trabajo Práctico Grupal · 1.er Cuatrimestre 2026 · Laboratorio de Métodos Cuantitativos · FCE UBA

Facultad de Ciencias Económicas · Universidad de Buenos Aires · 1er Cuatrimestre 2026

---

# Integrantes

| Nombre completo     | Registro | Usuario GitHub |
| ------------------- | -------- | -------------- |
| CARLA GARIBOTTI     | 921326   | cargaribotti   |
| FERNANDO MORICHETTI | 921338   | FMorichetti    |
| LEONARDO GOMEZ      | 921318   | gleo1973       |

---

# Estructura del repositorio

---

tp-laboratorio-mcag-1c2026/
│
├── index.html
├── Laboratorio_TP_2026.ipynb
├── README.md
├── script.js
├── style.css
│
├── datos/
│ │
│ ├── fuentes.md
│ │
│ └── raw/
│ ├── country_info.csv
│ └── paises.csv
│
├── imagenes/
│ ├── ajuste_4_modelos.png
│ ├── boxplot-piechart-religiones.png
│ ├── boxplot-puntajefifa-continente.png
│ ├── boxplot-puntajefifa-idioma.png
│ ├── distribucion-puntos-fifa.png
│ ├── heatmap-relacion-variables-numericas.png
│ ├── histogramas_poblacion_densidad_superficie.png
│ ├── histogramas_valor_pbi_ppc.png
│ ├── modelo_cuadratico_vertice.png
│ ├── scattermap-puntajefifa-precioestimado-primeros6.png
│ ├── scattermap-puntajefifa-precioestimado.png
│ └── segunda_derivada_cuadratico.png
│
├── informe/
│ └── Informe_TPGrupal_Mundial_2026.docx
│
└── presentacion/
└── 2026_Presentacion_TPGrupal_El_precio_del_juego.pptx

---

# instrucciones para descargarlo

---

## Para Visual Studio

1. Abrir una ventana de PowerShell y ejecutar:

```powershell
git clone https://github.com/gleo1973/tp-laboratorio-mcag-1c2026.git
```

2. Ingresar al directorio del proyecto:

```powershell
cd tp-laboratorio-mcag-1c2026
```

3. Abrir el proyecto con Visual Studio Code:

```powershell
code .
```

---

## Para Google Colab

1. Ingresar al repositorio GitHub desde la Web.

2. Presionar el botón **Code**.

3. Seleccionar **Download ZIP**.

4. Descomprimir el archivo ZIP en la computadora.

5. Ingresar a Google Colab, y Seleccionar:
   Archivo → Subir notebook
   Cargar el archivo `Laboratorio_TP_2026.ipynb`.

Google Colab NO descarga automáticamente los archivos CSV contenidos en el repositorio.
Además del notebook, es necesario cargar manualmente los archivos ubicados en: datos/raw/

Crear la misma estructura de carpetas dentro del entorno de Colab. Esto se hace desde panel de Archivos que se encuentra a la izquierda. El panel de Archivos, se visualiza y se oculta haciento clic en el icono de carpeta que esta a la izquierda.
Para crear una carpeta, boton derecho sobre el panel de archivos -> nueva carpeta.
Para subir un archivo, boton derecho sobre el panel de archivos -> subir archivo.

6. crear las carpetas datos/raw/

7. Subir los CSV dentro de la carpeta raw.

8. crear la carpeta imagenes/

La estructura final debe quedar equivalente a:

```text
datos/
└── imagenes/
└── raw/
    ├── country_info.csv
    ├── paises.csv
    └── ...
Laboratorio_TP_2026.ipynb
```

De lo contrario, las instrucciones de lectura de archivos (`*.csv`) producirán errores por rutas inexistentes. De igual forma al generar las imagenes de los graficos debe estar creada la carpeta imagenes, en donde se guardaran automaticamente al ejecutar el codigo.

---
