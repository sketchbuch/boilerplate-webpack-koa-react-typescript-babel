import Koa from 'koa';

export type ServerContext = Koa.Context;
export type ServerNext = () => Promise<any>;

export interface Placeholders {
  content: string;
  contentState: string;
  [key: string]: string;
}
