# T5 Challenge

## Puesta en marcha
- Solucionar el warning del linter y corregir el funcionamiento del selector de resultados


## Funcionalidades
1. Mostrar mensaje de "loading", utilizar custom hook.
2. Crear página que liste personajes de la API Marvel [Character list](https://developer.marvel.com/docs#!/public/getCreatorCollection_get_0) Respetando arquitectura y diseño del proyecto
3. Mostrar detalle de personaje seleccionado al hacer click en el listado (tomar información del listado obtenido previamente)
4. Implementar manejo de errores de llamadas a la API Marvel (ver errores debajo), con la clase existente BaseResponse

Ejemplo
```typescript
    async get(limit: number): Promise<BaseResponse<Comic[]>> 
```

## API Config
-   Marvel API
    -   Crear cuenta / ingresar https://developer.marvel.com/
    -   Endpoints params:
        -   hash: md5(ts+privateKey+publicKey)
        -   apikey: publicKey
        -   ts: (mismo que se uso en el hash)
    - Posibles errores de llamada a la API
        - MissingParameter: falta parametro "hash"
        - InvalidCredentials: enviar un hash incorrecto
    
