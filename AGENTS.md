## Contexto del Proyecto

- **Tipo de sitio:** Página web profesional para psicólogo
- **Especialidades:**
    - Hipnosis clínica
    - Tanatología
    - Terapia centrada en el trauma
    - Terapia de Aceptación y Compromiso (ACT)
- **Stack tecnológico:**
    - Astro v5
    - Tailwind CSS v4
    - TypeScript
    - Vite

El sitio **no reemplaza terapia**, solo informa y facilita contacto profesional.

---

## Comandos Principales

```bash
# Desarrollo local
bun run dev                    # Inicia servidor de desarrollo con hot reload

# Build y preview
bun run build                  # Genera build de producción en dist/
bun run preview                # Previsualiza build localmente

# Formateo (Prettier)
bun run format                 # Formatea todos los archivos
bun run format:check           # Verifica formato sin modificar

# Linting (ESLint)
bun run lint                   # Ejecuta linter en todos los archivos
bun run lint:fix               # Ejecuta linter y corrige errores automáticos

# Testing (Vitest)
bun run test                   # Ejecuta tests en modo watch
bun run test:ui                # Ejecuta tests con UI interactiva
bun run test:run               # Ejecuta tests una sola vez
bun run test:run:components    # Ejecuta solo tests de componentes

# Ejecutar un test específico
bun run test -- __test__/components/Header.test.ts

# Astro CLI
bun run astro                  # Acceso directo al CLI de Astro
```

**Nota:** Este proyecto usa Bun como package manager (ver `bun.lock`). Prettier, ESLint y Vitest están configurados y listos para usar.

---

## Principios Éticos (Muy Importante)

1. **No hacer afirmaciones médicas absolutas**
    - Evitar promesas de curación, resultados garantizados o diagnósticos.
    - Usar lenguaje informativo y responsable.

2. **Lenguaje sensible al trauma**
    - Evitar contenido gráfico, invasivo o que pueda detonar recuerdos traumáticos.
    - Priorizar un tono calmado, respetuoso y empático.

3. **Consentimiento y autonomía**
    - El contenido debe reforzar la idea de que la persona decide iniciar o no un proceso terapéutico.
    - Nunca presionar ni manipular emocionalmente.

4. **Privacidad**
    - No sugerir almacenamiento innecesario de datos sensibles.
    - Formularios simples y claros.

---

## Convenciones de Código

### Idioma y Nomenclatura

- **Código:** Inglés (imports, variables, funciones, componentes)
- **Contenido visible:** Español
- **Componentes:** PascalCase (`ContactForm.astro`, `TherapyCard.astro`)
- **Variables/funciones:** camelCase (`handleScroll`, `isExpanded`)
- **Constantes:** UPPER_SNAKE_CASE para valores fijos
- **Archivos:** PascalCase para componentes, camelCase para utilidades

### Imports

```typescript
// 1. Path alias @/ para src/
import '@/styles/global.css';
import Contact from '../components/Contact.astro';

// 2. Orden de imports:
//    - Astro/React imports
//    - Componentes locales
//    - Utilidades/estilos
//    - Tipos
```

### TypeScript

- Usar tipado estricto (extends `astro/tsconfigs/strict`)
- Definir Props interface en frontmatter de Astro
- Evitar `any`; usar `unknown` cuando sea necesario
- Tipos descriptivos para props complejas

### Formato

- Indentación: 4 espacios
- Comillas dobles en HTML/Astro, simples en JS
- Punto y coma obligatorio
- Máximo 100 caracteres por línea
- Trailing commas en multilínea

### Manejo de Errores

```typescript
// Defensivo y silencioso para UI
const element = document.getElementById('id');
if (!element) return;

// Validar antes de usar
if (data && Array.isArray(data)) {
    // procesar
}
```

---

## Reglas Técnicas

### Astro

- Usar para layouts, páginas estáticas, SEO
- Mantener componentes estáticos por defecto
- Scripts de cliente: validar existencia de elementos antes de usarlos

### Tailwind CSS

- Utilidades primero; evitar CSS custom
- Usar tema custom definido en `global.css`:
    - `--color-primary: #025cff`
    - `--font-arvo`, `--font-arimo`, `--font-parisienne`
- Clases responsive: `md:`, `lg:` en orden ascendente
- Espaciados consistentes: 4, 8, 12, 16, 20, 24, 30

### Accesibilidad (Obligatorio)

- HTML semántico (`<section>`, `<article>`, `<nav>`)
- Atributos ARIA: `aria-label`, `aria-labelledby`, `role`
- Textos alternativos en imágenes
- Labels correctos en formularios (`for` + `id`)
- Contraste WCAG AA mínimo
- Navegación por teclado

### SEO

- Meta descripciones informativas, no sensacionalistas
- Títulos claros sin clickbait
- Atributos `lang="es"` en HTML

---

## Qué NO Hacer

- ❌ Diagnosticar o prometer curas
- ❌ Usar lenguaje alarmista
- ❌ Agregar librerías innecesarias
- ❌ Romper la estética calmada del sitio
- ❌ Modificar configuración de Vite sin razón clara

---

## Buenas Prácticas

- Explicar cambios relevantes en commits
- Dudas éticas: documentar, no asumir
- Priorizar simplicidad sobre sobreingeniería
- Probar en mobile y desktop
- Validar accesibilidad antes de finalizar

---

**Este proyecto pone a las personas primero.**
