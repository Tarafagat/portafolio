# israel-andersen-portfolio

Portafolio de **Israel Andersen** — Platform Engineer, Programador Senior
Golang, Backend y Full Stack, creador de Asterion — empaquetado como
plugin de Asterion (`asterion.plugin/v1`).

Es **solo frontend**: React + TypeScript + Three.js en `frontend/`. El
binario Go (`main.go`, solo librería estándar) no tiene API ni estado:
sirve `frontend/dist` y responde `/health`, que es lo mínimo que exige el
contrato. Puerto fijo: **8049**.

## Instalar como plugin de Asterion

```bash
asterion plugin install https://github.com/Tarafagat/<este-repo>
# o, desde esta carpeta sin publicarla:  asterion plugin install --link .

asterion plugin build israel-andersen-portfolio   # go build + pnpm install/build del frontend
asterion plugin start israel-andersen-portfolio   # http://127.0.0.1:8049
```

No necesita configuración. Dentro del dashboard local de Asterion se abre
igual que cualquier plugin con frontend: el build usa rutas relativas
(`base: "./"`), así que funciona tanto standalone como vía el proxy.

## Desarrollo

```bash
cd frontend
pnpm install
pnpm dev        # http://localhost:8049 — detén el plugin antes, usan el mismo puerto
```

## Editar el contenido

Todo el texto está en [`frontend/src/data/profile.ts`](frontend/src/data/profile.ts):

| Qué | Dónde |
|---|---|
| Nombre, roles, contacto, links | `profile` |
| Postulación activa (hoy: Desarrollador Golang · 3IT / Tanner) | `jobApplication` — ponerlo en `null` oculta la sección |
| Proyectos y sus propuestas | `projects` |
| Niveles de experticia (1 Básico · 2 Intermedio · 3 Avanzado · 4 Experto) | `skillGroups` |
| Nubes y tabla de equivalencias | `clouds`, `cloudEquivalences` |

## Modelos 3D

Los modelos de la sección «Modelado 3D» están construidos en código en
[`frontend/src/three/models.tsx`](frontend/src/three/models.tsx) (rack de
servidores, barril de combustible, llanta JDM, botella y el nodo Asterion
de la portada). La galería está en
[`frontend/src/three/ModelGallery.tsx`](frontend/src/three/ModelGallery.tsx).
Para mostrar un modelo propio exportado a `.glb`, se copia a
`frontend/public/models/` y se carga con `useGLTF` de `@react-three/drei`.

Three.js se carga en diferido: el resto del portafolio no espera ese
chunk, y cada escena solo renderiza mientras está en pantalla.

## Publicar fuera de Asterion

`frontend/dist` es un sitio estático: se puede subir tal cual a Firebase
Hosting, Vercel o Cloudflare Pages, o empaquetar el plugin completo con
`asterion plugin export`.

## `plugin.yaml` — generado, no editado a mano

Su fuente editable es [`plugin.asterion`](plugin.asterion):

```bash
asterion plugin from-asterion plugin.asterion --out . --force
```
