import { S } from "vite/dist/node/types.d-aGj9QkWt";

export interface Sheet{
    key: string
    name: string
    route: string
    show: boolean
    icon?: string
}

export interface StackTrace {
    id: string;
    name: string;
    value: number;
    children?: [StackTrace];
  }
  