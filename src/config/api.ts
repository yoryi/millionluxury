class BaseURLConfig {
    private production: string;
    private currentBaseURL: string;
  
    constructor() {
      this.production = "https://api.coinlore.net/";
      this.currentBaseURL = this.production;
    }
    public getBaseURL(): string {
      return this.currentBaseURL;
    }
    public setBaseURL(url: string): void {
      this.currentBaseURL = url;
    }
  }
  
  const BaseURL = new BaseURLConfig();
  export default BaseURL;
  