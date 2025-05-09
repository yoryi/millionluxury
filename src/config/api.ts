const BaseURL = {
  prod: "https://api.coinlore.net/",

  getBaseURL(): string {
      return this.prod;
  },
  setBaseURL(url: string): void {
      this.prod = url;
  }
};

export default BaseURL;