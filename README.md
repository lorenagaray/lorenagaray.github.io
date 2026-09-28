# Propuestas — Lorena Garay, asesora inmobiliaria

Una página por desarrollo, todas con el mismo marco (marca de Lorena) y un catálogo general.

## Estructura
- `index.html` → catálogo de todas las propuestas
- `proyectos.json` → **lista única** de desarrollos. Alimenta el catálogo y la sección "Otras propuestas" de cada página
- `assets/estilo.css` → identidad común (colores, tipografías, botón de WhatsApp)
- `assets/app.js` → arma las tarjetas desde `proyectos.json`
- `assets/marca/` → logos, favicon e imagen de preview para WhatsApp
- `<slug>/index.html` + `<slug>/img/` + `<slug>/og.jpg` → cada desarrollo

## Sumar un desarrollo nuevo
1. Copiar la carpeta `altos-nativo/` con el nombre nuevo (ej. `los-lapachos/`)
2. Reemplazar las imágenes en `img/` (webp, 1080 px de ancho) y crear `img/portada.webp` (800×600) y `og.jpg` (1200×630)
3. En su `index.html`: título, descripción, rótulo, mensaje de WhatsApp y `data-excluir="<slug>"`
4. Agregar una entrada en `proyectos.json`
5. Commit y push → GitHub Pages lo publica solo

Para retirar un desarrollo sin borrarlo: `"activo": false` en `proyectos.json`.

## Antes de publicar
Las etiquetas `og:` ya apuntan a https://lorenagaray.github.io/ (repo `lorenagaray.github.io`). Si cambia la dirección (por ejemplo, un dominio propio), actualizarlas en cada página.
