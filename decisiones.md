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