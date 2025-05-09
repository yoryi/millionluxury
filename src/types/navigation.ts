export const Routes = {
  Home: "Home",
  Tabs: "Tabs",
  Favorite: "Favorite",
  Details: "Details",
} as const;

export type RouteNames = keyof typeof Routes;

export type RootStackParamList = {
  [Routes.Details]: { coinId: number };
  [Routes.Tabs]: undefined;
  [Routes.Home]?: undefined; 
  [Routes.Favorite]?: undefined;
};
