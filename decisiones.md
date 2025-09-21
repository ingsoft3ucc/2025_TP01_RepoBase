## Estrategia de desarrollo

- **Rama separada**: trabajé en `nueva-funcionalidad` para no afectar la rama `main` y mantenerla estable.
- **Commits atómicos**: realicé dos commits pequeños y claros:
  1. Creación del archivo `funcionalidad.txt` con contenido inicial.
  2. Ampliación del archivo con más detalles.
  
Esto facilita la revisión de cambios y la posibilidad de revertir solo una parte si es necesario.

## Corrección de error (hotfix)

- **Error simulado**: se introdujo un error en `main` en el archivo `error.txt`.
- **Rama hotfix**: creé `hotfix/error-fix` para corregirlo rápidamente sin afectar otras ramas.
- **Integración**: usé `merge` para aplicar el fix tanto en `main` como en `nueva-funcionalidad`, asegurando que ambas ramas tengan la corrección.
- **Justificación**: elegí `merge` porque quería mantener el historial completo y claro de la corrección, y porque el fix era compatible con ambas ramas sin conflictos.
