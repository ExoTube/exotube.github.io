# ExoTube · Página de descarga

Sitio web estático (HTML, CSS y JavaScript, sin librerías) para presentar la app ExoTube y
repartir el APK. Usa los mismos colores que la app: negro con acentos verdes.

## Estructura

```
exotube-web/
├── index.html        Toda la página (portada, características, capturas, descarga, preguntas)
├── css/styles.css    Estilos. Los colores están arriba del todo, en :root
├── js/main.js        Menú móvil, animaciones al bajar y año del pie
├── img/              Logotipo, favicon y capturas de la app
└── descargas/        Aquí van los archivos .apk
```

## Verla en tu computadora

Basta con abrir `index.html` en el navegador. Si prefieres un servidor local (recomendado, porque
así se comporta igual que en internet):

```bash
python -m http.server 8000
```

Luego abre http://localhost:8000

## Actualizar la app que se descarga

1. Genera el APK firmado en el proyecto Android:
   ```bash
   ./gradlew assembleRelease
   ```
2. Copia los archivos desde `app/build/outputs/apk/release/` a la carpeta `descargas/`, con estos
   nombres (los que espera `index.html`):
   - `ExoTube-1.0-arm64-v8a.apk` (el del botón principal)
   - `ExoTube-1.0-armeabi-v7a.apk`
   - `ExoTube-1.0-x86_64.apk`
3. En `index.html`, actualiza la versión y el peso: busca `id="version"`, `id="peso-apk"` y
   `id="peso-principal"`, y también el nombre del archivo en `id="boton-descarga"`.

## Publicarla en internet (gratis)

**Opción recomendada: GitHub Pages + Releases**

1. Sube esta carpeta a un repositorio de GitHub.
2. En **Settings → Pages**, elige la rama `main` y la carpeta raíz. En unos minutos tendrás una
   dirección `https://tuusuario.github.io/exotube-web/`.
3. **El APK súbelo como "Release", no dentro del repositorio.** GitHub rechaza archivos de más de
   100 MB y, aunque el tuyo entre, el repositorio se vuelve pesado e incómodo. En **Releases →
   Draft a new release** adjunta los APK y luego cambia los enlaces de `index.html` por la
   dirección que te dé GitHub.

**Alternativas:** Netlify o Cloudflare Pages. En ambas puedes arrastrar la carpeta a su panel y
te dan una dirección al instante.

## Antes de publicar

- El botón "Ver en GitHub" y los enlaces del pie apuntan a rutas locales: cámbialos por la
  dirección real de tu repositorio.
- Revisa el aviso legal de `index.html`. Es importante dejar claro que la app es una herramienta y
  que el usuario debe respetar los derechos de autor.
- Sustituye las capturas de `img/` cuando cambies el diseño de la app.
