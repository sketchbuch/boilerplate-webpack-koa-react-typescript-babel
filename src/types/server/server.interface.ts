import Koa from 'koa';

export type ServerContext = Koa.Context;
export type ServerNext = () => Promise<any>;
