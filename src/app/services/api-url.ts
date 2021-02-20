import { environment } from "src/environments/environment";

export class ApiUrl {
  private get API_URL(): {protocol: string, suffix: string, domain: string} {
    return environment.API_URL;
  }
  get URL(): string {
    return this.API_URL.protocol + this.API_URL.domain + this.API_URL.suffix;
  }
}
