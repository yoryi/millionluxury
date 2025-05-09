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