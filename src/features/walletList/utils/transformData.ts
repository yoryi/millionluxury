/**
 * transformData function transforms API data into a consistent format based on the specified type.
 * 
 * This function takes in raw data and a type ('moneda' or 'exchange'), and returns a transformed array of objects
 * with a consistent structure containing the id, title, value, and subtitle fields.
 * 
 * @param {any} data - The raw data from the API to be transformed.
 * @param {string} type - The type of data, used to determine how to transform it ('moneda' or 'exchange').
 * 
 * @returns {Array<Object>} - A transformed array of objects with the structure { id, title, value, subtitle }.
 * 
 * @example
 * ```ts
 * const transformedMonedaData = transformData(data, 'moneda');
 * const transformedExchangeData = transformData(data, 'exchange');
 * ```
 */

export const transformData = (data: any, type: string) => {
  switch (type) {
    case 'moneda':
      return data?.data?.map((x: any) => ({
        id: x.id,
        title: x.symbol,
        value: x.price_usd,
        subtitle: x.name
      }));
    case 'exchange':
      return Object.values(data).map((x: any) => ({
        id: x.id,
        title: x.name,
        value: x.volume_usd,
        subtitle: x.country
      }));
    default:
      return [];
  }
};