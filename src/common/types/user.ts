export type Provider = 'google' | 'facebook' | '';

export class User {
  id: number;
  provider: Provider;
  providerId: string;
  firstName: string;
  lastName: string;
  email: string;
  refreshToken?: string;
}

