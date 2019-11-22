import Koa from 'koa';

export type ServerContext = Koa.Context;
export type ServerNext = <T>() => Promise<T>;

export interface Placeholders {
  content: string;
  contentState: string;
  styles: string;
  [key: string]: string;
}
