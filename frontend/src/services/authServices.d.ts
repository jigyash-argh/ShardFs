declare module "./authServices" {
  export function loginUser(email: string, password: string): Promise<any>;
}
