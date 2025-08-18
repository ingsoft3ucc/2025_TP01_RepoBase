# Trabajo Práctico 01 – Git Básico (2025)
## 1 CONFIGURAR ENTORNO Y CREAR DECISIONES.MD
Primero configuré mi identidad global de Git para que todos los commits.

git config --global user.name "Kevinmass"
git config --global user.email "2203817@ucc.edu.ar"

Esto es importante porque asegura trazabilidad.
Después creé el archivo decisiones.md para ir documentando todas las decisiones.

touch decisiones.md

git add decisiones.md
git commit -m "ADD decisiones.md al main"

Luego creé una rama development a partir de main, donde voy a trabajar en la nueva funcionalidad sin afectar la rama principal.

git branch development
git checkout development

## 2 DESARROLLAR UNA FUNCIONALIDAD
En la rama development implementé una nueva funcionalidad.

Decidí hacer commits atómicos, es decir, cada commit resuelve una única cosa.

git add src/Paint.py
git commit -m "ADD funcionalidad de pintar"

git push origin development

Luego agregué documentación de uso en un archivo de instrucciones, con otro commit independiente.

git add src/Instrucciones.txt
git commit -m "ADD instrucciones de uso"

git push origin development

## 3 CORREGIR UN ERROR Y APLICAR EL FIX
Para simular un error en main, introduje un cambio incorrecto y lo confirmé.

git checkout main

# Edición simulando error
git commit -am "SIMULATED BUG en producción"
git push origin main

Luego creé una rama hotfix a partir de main para resolverlo.

git checkout -b hotfix

# Corrección aplicada
git commit -am "FIX: corregido error en producción"
git push origin hotfix

Integré la corrección a main con merge porque quería preservar el historial completo.

git checkout main
git merge hotfix
git push origin main

También apliqué el fix en la rama development usando cherry-pick, porque solo quería traer ese commit puntual sin arrastrar el historial de la rama main.
git checkout development
git cherry-pick <id_commit_fix>
git push origin development


- Usé merge en main porque ahí interesa mantener el registro lineal de errores y correcciones.

- Usé cherry-pick en development porque necesitaba solo el fix puntual, sin contaminar el flujo de desarrollo con commits extra.
## 4 HACER UN PR Y ACEPTARLO

Una vez que la rama development tuvo la funcionalidad lista y sincronizada con el fix, abrí un Pull Request (PR) en GitHub para fusionarla con main.
Luego lo aprobé y lo acepté.

## 5 CREAR UNA VERSION ETIQUETADA

Finalmente marqué la primera versión estable del sistema con un tag

git tag v1.0
git push origin v1.0

-Convención: usar formato semántico vX.Y.Z, donde:

X = versión mayor (cambios importantes o incompatibles)

Y = versión menor (nuevas funcionalidades compatibles)

Z = parches o fixes pequeños