export type MarketData = {
    active_markets: number;
    avg_change_percent: string;
    btc_d: string;
    coins_count: number;
    eth_d: string;
    mcap_ath: number;
    mcap_change: string;
    total_mcap: number;
    total_volume: number;
    volume_ath: number;
    volume_change: string;
  };
  
  export type MarketDataArray = MarketData[];
  