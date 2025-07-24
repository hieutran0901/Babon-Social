export interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  userInfo: any;
}

export const initialState: AuthState = {
  isAuthenticated: false,
  isLoading: false,
  userInfo: {},
};
