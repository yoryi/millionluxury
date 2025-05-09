import React from "react";
import { GlobalCard } from "../../components";
import { useAPIClient } from "../../hooks/useAPIClient";

export default function StatsCard() {
  const { data, loading, error, fetch } = useAPIClient();
  return <GlobalCard onPress={() => fetch('GET', 'api/global/')} loading={loading} data={data?.[0]} />;
}
