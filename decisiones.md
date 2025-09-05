# TRABAJO PRACTICO 1 EN GITHUB

> **Autora:** Rocío Vulcano  
> **Repo:** https://github.com/RocioVulcano/2025_TP01_RepoBase  
> **Fecha:** 5 de septiembre de 2025

## DECISIONES Y PASOS PARA LA REALIZACION DEL TRABAJO PRACTICO

## PRIMER PASO

1. Lo primero que hice fue forkear+clonar el repositorio en mi computadora #comando git clone
2. Luego, configure user.email y user.name para que todos mis commits queden identificados con mi cuenta y mi persona # se usaron los comandos de git config --global user.* * * *
3. Ahora, cree el archivo de decisiones.md con el comando # touch decisiones.md

## REALIZAMOS EL PRIMER COMMIT
        git add decisiones.md
        git commit -m "docs: agregamos el archivo decisiones.md con primeros cambios"
        git push

## SEGUNDO PASO

1. Verificamos que estamos en la rama main con git checkout main
2. Creamos una nueva rama con el comando git switch -c feat/nuevaFuncionalidad. Este comando no solo crea la rama si no que nos mueve a ella automaticamente. Verificamos con git branch -a
3. Para realizar el paso de commits atomicos, primero debemos comprender el concepto
    3.1 "COMMIT ATOMICO: Debe ser un cambio pequeño, puntual y coherente. No debe dejar trabajos a medias o sin terminar, hace una sola cosa, y si lo revertimos, no rompemos el programa"
4. A partir de este conocimiento, hacemos los cambios:
    4.1 CAMBIO 1: Modificaremos el archivo app.js, dandole un nuevo mensaje a la inicializacion del programa
            git add src/app.js
            git commit -m "feat: modificamos el mensaje de bienvenida al sistema"
    4.2 CAMBIO 2: Agregamos el detalle de la primera version del TP, con cambios en el archivo info.txt
            git add data/info.txt
            git commit -m "docs: agregamos info en el archivo info.txt"
5. Hacemos el push con el comando: git push -u origin feat/nuevaFuncionalidad

## TERCER PASO

1. Simularemos el error eliminando la primera linea de la funcion que imprime la frase creada anteriormente por pantalla. 
2. Pusheamos el error
3. Creamos la rama mediante la cual repararemos el error. Comando git switch -c hotfix/reparamosFuncion
4. Reparamos el error y lo pusheamos
5. Ahora, incorporaremos los cambios a mi rama feat/nuevFuncionalidad, ya que esta, no tiene los cambios corregidos del error. Para eso, usamos cherry-pick
6. Con git fetch --all verificamos que este actualizado, luego con git checkout feat/nuevFuncionalidad nos movemos a esta rama. Identificamos el hash de la modificacion que dio el fix
y hacemos el push con el comando git cherry-pick (633ceef --> hash). Hacemos el git push. 


