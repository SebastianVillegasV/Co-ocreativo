# Guía de material — co-ocreativo.com

Dónde va cada tipo de archivo y cómo exportarlo. El sitio se sirve desde
Cloudflare Pages, así que **todo lo que esté en `public/` queda publicado
en el CDN** con la misma ruta.

## Dónde va cada cosa

| Material | Dónde | Ejemplo de ruta |
|---|---|---|
| Fotos de un proyecto | `public/assets/projects/NombreProyecto/` | `public/assets/projects/Cafetal/Cafetal-1.jpg` |
| Teaser de portada | `public/assets/video/teaser.mp4` | (nombre exacto — la portada lo detecta sola) |
| Loops por proyecto | `public/assets/video/loops/` | `public/assets/video/loops/tigre-de-salon.mp4` |
| Piezas completas | YouTube | se referencia el ID en `src/data/projects.ts` |

**Los masters y RAW nunca van al repo.** Aquí solo viven exportaciones
optimizadas para web. Límite duro de Cloudflare: 25 MB por archivo.

## Especificaciones de exportación

### Fotos
- JPG, espacio de color **sRGB**
- Lado largo: **2400 px** (suficiente para pantallas retina)
- Calidad: **80** (~300–700 KB por foto)
- Nombres: `NombreProyecto-1.jpg`, `NombreProyecto-2.jpg`, … (sin espacios,
  sin tildes, sin `:` ni caracteres especiales)

### Teaser de portada (estilo Phantasm)
- MP4, códec **H.264**, 1920×1080
- Duración: **8–15 segundos**, pensado para loop invisible (que el final
  empalme con el principio)
- **Sin audio** (el navegador solo autoreproduce videos silenciados)
- Peso objetivo: **5–10 MB** (bitrate ~4–6 Mbps)
- Nombre exacto: `teaser.mp4` → va en `public/assets/video/`
- La portada lo reproduce automáticamente con fundido; si el archivo no
  existe, muestra la foto fija. En celulares se recorta a vertical
  (encuadra pensando en el centro del cuadro).

### Loops por proyecto (fase 2)
- Mismas specs del teaser pero pueden ser más cortos (5–8 s) y livianos (≤5 MB)
- Nombre: el slug del proyecto (`tigre-de-salon.mp4`, `finest-call.mp4`, …)

## Flujo para publicar

1. Suelta los archivos en la carpeta que corresponda (Finder normal).
2. Pide a Claude que monte el material: agrega el proyecto a
   `src/data/projects.ts` (título, logline, relato), verifica, hace
   commit + push y despliega a https://co-ocreativo.pages.dev.
3. Revisas el preview. Cuando apruebes, se apunta el dominio.
