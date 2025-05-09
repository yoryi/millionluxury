# Componente WalletList

Este componente de React Native muestra una lista de datos de wallets (monedas o intercambios) según el prop `type`. Usa un cliente de API para obtener los datos y los muestra en una lista. Maneja estados de carga, errores y escenarios sin resultados.

## Características

* **Obtención de datos:** Obtiene datos basados en el prop `type` (ya sea `moneda` o `exchange`).
* **Transformación de datos:** Los datos se transforman antes de ser mostrados.
* **Navegación:** Al presionar un item, se navega a la pantalla de "Detalles" pasando el `coinId`.
* **Manejo de errores:** Muestra un mensaje de error si falla la carga.
* **Estado de carga:** Muestra un indicador de carga mientras se obtienen los datos.
* **Estado vacío:** Muestra un mensaje si no se encuentran resultados.

## Props

* `type`: Define el tipo de datos a obtener (`StateType`), que puede ser `moneda` o `exchange`.

## Uso

```tsx
<WalletList type="moneda" />
```
