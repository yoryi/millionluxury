import React from "react";
import { GlobalCard } from "../../components";
import { useAPIClient } from "../../hooks/useAPIClient";

/**
 * StatsCard component displays a global statistics card that fetches data from an API.
 * 
 * This component utilizes the StatsManager class to handle data fetching and transformation.
 * The fetched data is displayed within a GlobalCard component.
 * 
 * @component
 * @example
 * ```tsx
 * <StatsCard />  // Displays global statistics
 * ```
 */


class StatsManager {
  data: {};
  constructor(data: {}[]) {
    this.data = data?.[0] || {};
  }

  getDisplayData() {
    return this.data;
  }
}

export default function StatsCard() {
  const { data, loading, error, fetch } = useAPIClient();
  const statsManager = new StatsManager(data);

  return (
    <GlobalCard 
      onPress={() => fetch('GET', 'api/global/')} 
      loading={loading} 
      data={statsManager.getDisplayData()} 
    />
  );
}
