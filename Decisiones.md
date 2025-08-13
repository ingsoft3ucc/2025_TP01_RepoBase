
## PARA EMPEZAR
git add decisiones.md
git commit -m "agrego: decisiones.md a la rama estable"

## Primer paso para la rama develop

1- git checkout main --> partimos de la rama "main" que es la rama de produccion estable
2- git pull origin main --> pulleamos los cambios mas recientes de la rama estable desde el repo remoto
3- git checkout -b develop --> creamos la rama develop si es que no existe en el repo local
4- git push origin develop --> creamos la rama develop tambien en el repo remoto

## USAMOS RAMA MAIN PARA LA PRODUCCION ESTABLE Y DEVELOP PARA LA INTEGRACION DE LAS FUNCIONES --> separaciones claras

-Ahora a partir de develop --> los commits partiran de esta rama, todos los features se crearan a partir del ultimo commit de develop
1- git checkout develop
2- git pull origin develop --> pulleamos los cambios mas recientes de develop, asi los features no quedan desfazadas y generen conflictos en  el merge, y cuando hagamos el checkout al feature, los commits se heredaran
3- git checkout -b feature/saludo-personalizado --> creamos la rama del feature del saludo-personalizado

## PRIMER COMMIT
git pull origin feature/saludo-personalizado
(Añadimos la funcionalidad) --> creada por IA

git add src/app.js --> añadimos los cambios
git commit -m "feat: permitir saludo personalizado con parámetro nombre" --> comiteamos el cambio 

AHORA BIEN PODEMOS HACER EL MERGE DESDE GITHUB CON PULL REQUEST AL APROBARSE SE HACE EL MERGE
git push origin feature/saludo-personalizado
Abrís un PR en GitHub desde feature/mi-funcionalidad → develop.
AL APROBARSE SE HACE EL MERGE

SINO podemos hacer el merge local

git checkout develop --> vamos hacia la rama donde queremos integrar los cambios
git pull origin develop
git merge feature/saludo-personalizado --> sino hacemos el merge los cambios quedan aislados en la rama feature/saludo-personalizado, y no se integran a develop
git push origin develop

## SEGUNDO COMMIT
git pull origin feature/saludo-personalizado
(Actualizamos la funcionalidad)
git add src/app.js --> añadimos archivo con los cambios
git commit -m "feat: mostrar hora actual junto al saludo" 

HACEMOS EL MERGE Y SUBIMOS LOS CAMBIOS AL REPO REMOTO
git checkout develop --> vamos hacia la rama donde queremos integrar los cambios
git pull origin develop
git merge feature/saludo-personalizado --> sino hacemos el merge los cambios quedan aislados en la rama feature/saludo-personalizado, y no se integran a develop
git push origin develop


## ERRORES CRITICOS (HOTFIXES)

git checkout main --> Hotfixes siempre parten del MAIN ya que representa la version que esta en produccion 

    Si hay un bug crítico en producción, tenés que arreglarlo exactamente sobre el código que está en producción, sin incluir funcionalidades que todavía están en desarrollo en develop.

    develop puede tener código inestable o a medio terminar. Si partieras de ahí, podrías meter cambios no probados en producción por accidente.

    (Investigado con IA)

git pull origin main
git checkout -b hotfix/13.08.2025 --> numeramos el hotfix asi ya que el hotfix puede tener varios arreglos dentro del codigo (fecha de emicion)

git add src/app.js
git commit -m "fix: corregir errores criticos 13.08.2025"

git push origin hotfix/fix-error-login

HACEMOS EL MERGE DE LA SOLUCION A MAIN (VERSION DE PRODUCCION)

--> Utilizamos merge ya que el hotfix va aplicar los cambios de la rama de golpe y hcompleto, para situaciones criticas es mejor un merge que un cherry-pick, ya que con este podemos pasar commits puntuales (en este caso seria bueno para actualizaciones teniendo un cronograma no tan presionado)

git checkout main
git merge hotfix/13.08.2025
git push origin main

HACEMOS EL MERGE TAMBIEN A DEVELOP PARA EVITAR DESFACES

git checkout develop
git pull origin develop
git merge hotfix/13.08.2025
git push origin develop

CUANDO INTENTEMOS HACER EL MERGE: Git no sabe cuál versión conservar, así que te deja el archivo con marcas de conflicto para que las resuelvas manualmente.

You have unmerged paths.
  (fix conflicts and run "git commit")
  (use "git merge --abort" to abort the merge)

Unmerged paths:
  (use "git add <file>..." to mark resolution)
        both modified:   src/app.js

git add src/app.js
git commit

ABRIRA EL EDITOR DE GIT PARA CONFIRMAR EL MERGE
apretamos esc, salimos de modo insercion y escribimos ":wq" para confirmar el merge

y se terminara el proceso de merge

POR ESO ES COMVENIENTE: hacer un git pull origin main antes de hacer este merge

## VERSION ESTABLE

git checkout develop
git pull origin develop

git checkout main
git pull origin main

git merge develop
git push origin main

## TAG DE LA VERSION ESTABLE

git checkout main
git pull origin main

git tag -a v1.0 -m "Versión estable 1.0" --> utilizamos esta notacion por jerarquias, versiones superiores seran mas completas
git push origin v1.0


// PARA EL ORAL //


## PROBLEMAS 
Tuvimos cuidado de hacer merges limpios y mantener ramas actualizadas con `git pull` para evitar conflictos, como se presento al hacer merge del hotfix en develop

## CALIDAD Y TRAZABILIDAD
- Commits atómicos y mensajes claros.  
- Pull Requests para revisión de código.  
- Uso de tags semánticos para versiones.  
- En un equipo real, integrar CI/CD para pruebas automáticas.

##  GIT REBASE  
No usamos `rebase` en ramas compartidas para evitar reescritura de historial público, pero es útil para limpiar commits en ramas locales antes del merge.

## Cómo revertir un commit ya push  
Usamos `git revert <hash>` para crear un commit inverso sin alterar el historial público.