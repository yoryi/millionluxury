import { useState, useMemo } from "react";
import { apiService } from "../../api";

interface APIResponse {
  [key: string]: any;
}

class StatsCardService {
  private data: APIResponse | null = null;
  private loading: boolean = false;
  private error: string | null = null;

  async fetchData(): Promise<void> {
    this.setLoading(true);
    this.setError(null);
    try {
      const result: APIResponse = await apiService.get("api/global/");
      this.setData(result);
    } catch (err: any) {
      this.setError(err.message || "Error desconocido");
    } finally {
      this.setLoading(false);
    }
  }

  private setData(data: APIResponse | null): void {
    this.data = data;
  }

  private setLoading(isLoading: boolean): void {
    this.loading = isLoading;
  }

  private setError(errorMessage: string | null): void {
    this.error = errorMessage;
  }

  getData(): APIResponse | null {
    return this.data;
  }

  isLoading(): boolean {
    return this.loading;
  }

  getError(): string | null {
    return this.error;
  }
}

export function useStatsCardService() {
  const [data, setData] = useState<APIResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const statsService = useMemo(() => new StatsCardService(), []);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      await statsService.fetchData();
      setData(statsService.getData());
    } catch (err: any) {
      setError(err.message || "Error desconocido");
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchData };
}

export default StatsCardService;