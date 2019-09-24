import Router from 'koa-router';
import request from 'supertest';
import allRoutes, { allRoutesCallback, allRoutesContent } from '../allRoutes';
import server from '../../server';
import { ROUTE_ALL, ROUTE_TYPE_HTML } from '../../../constants/routes';
import { ServerContext, ConsoleLog } from '../../../types';
import { getTemplate } from '../../utils';
import { renderToString } from 'react-dom/server';

describe('allRoutes()', () => {
  const originalConsoleLog: ConsoleLog = console.log;
  const mockRouter: Router = new Router();
  let mockGet: jest.Mock;
  let mockLog: jest.Mock;

  beforeEach(() => {
    mockGet = jest.fn();
    mockLog = jest.fn();
    console.log = mockLog;
  });

  afterEach(() => {
    server.close();
    console.log = originalConsoleLog;
  });

  test('Calls router.get() correct number of times', () => {
    mockRouter.get = mockGet;
    allRoutes({ router: mockRouter });
    expect(mockGet).toBeCalledTimes(1);
  });

  test('Calls router.get() with correct route', () => {
    mockRouter.get = mockGet;
    allRoutes({ router: mockRouter });
    expect(mockGet.mock.calls[0][0]).toBe(ROUTE_ALL);
  });

  test('Calls router.get() with callback', () => {
    mockRouter.get = mockGet;
    allRoutes({ router: mockRouter });
    expect(mockGet.mock.calls[0][1]).toEqual(expect.any(Function));
  });

  test('Renders correct content', async () => {
    const ctx = {} as ServerContext;
    const next = jest.fn();
    await allRoutesCallback(ctx, next);

    const content: string = renderToString(allRoutesContent);
    expect(ctx.body).toBe(getTemplate(content));
  });

  test('Responds as expected', async () => {
    const { status, type, text } = await request(server).get('/');

    expect(status).toEqual(200);
    expect(type).toEqual(ROUTE_TYPE_HTML);
    expect(text).toEqual(expect.any(String));
  });
});
