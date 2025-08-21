
## 1. Configuración del Entorno

Se clonó el repositorio base usando "git clone" y se configuró la identidad
 de usuario con "git config user.name" y" git config user.email " para asociar 
 los commits a mi persona.
 
 ## 2. Justificacion Estrategia
 
 Por qué una rama separada: La guía indica que las ramas permiten trabajar
 de forma independiente de la rama principal (main). Esto evita que los cambios 
 en desarrollo afecten el código estable del proyecto. Si algo sale mal en mi rama, 
 no impacta a los demás.

Por qué commits atómicos: Un commit atómico, como lo describe la guía,
 es un conjunto de cambios lógicos y coherentes. Hacer commits de esta manera 
 (feat: Agregar primer item y feat: Agregado archivo al repositorio...) permite tener
 un historial de cambios claro y fácil de entender. Si en el futuro necesitas 
 revertir solo una parte del trabajo, es mucho más sencillo si los cambios 
 están separados.

## Decisiones del TP

### Estrategia de Hotfix

Para resolver el error simulado en la rama "main", se utilizó la siguiente estrategia:

1.  Se creó una rama "hotfix" a partir de "main" para aislar la corrección del error.
2.  Se corrigió el problema y se realizó un"commit" descriptivo.
3.  Se aplicó la corrección tanto en "main" como en la rama de desarrollo ("develop"). Para esto, se utilizó el comando `git merge`.

### Justificación de la Fusión (Merge)

Se eligió "git merge" para integrar la solución del "hotfix" porque:

* Es el método recomendado en la guía para combinar ramas.
* Mantiene un historial claro y lineal de la corrección.
* En este caso, la fusión era simple y directa, ya que el cambio del `hotfix` 
era un arreglo específico sobre una línea que fue modificada recientemente. 
Si hubiera habido cambios más complejos, "git cherry-pick" podría haber sido
 una alternativa, pero ""merge es la opción más robusta y adecuada para este escenario.
 y
## Configuración de identidad en Git
Se configuró la identidad con los siguientes comandos:

$ git config user.name RoyKostrun

$ git config user.email 2116571@ucc.edu.ar
