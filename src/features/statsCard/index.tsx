import React from "react";
import { GlobalCard } from "../../components";
import { useStatsCardService } from "./hooks/useStatsCard";

export default function StatsCard() {
  const { data, fetchData, loading } = useStatsCardService();
  return <GlobalCard onPress={fetchData} loading={loading} data={data?.[0]} />;
}
