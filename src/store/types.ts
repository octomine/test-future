import { AppDispatch, RootState } from "./store";

export type TRepo = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  updated_at: string;
};

export type ThunkApiConfig = {
  state: RootState;
  dispatch: AppDispatch;
};
