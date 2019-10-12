import * as React from 'react';
import request from 'supertest';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import server from '../../server';
import store from '../../../common/store/redux';
import { ROUTE_ALL, ROUTE_TYPE_HTML } from '../../../common/constants/routes';
import { ServerContext, ConsoleLog } from '../../../common/types';
import { getTemplate } from '../../utils';
import { routeCallback, rootContent, routePath } from './root';

describe('Route: root', () => {
  const originalConsoleLog: ConsoleLog = console.log;
  let mockLog: jest.Mock;

  beforeEach(() => {
    mockLog = jest.fn();
    console.log = mockLog;
  });

  afterEach(() => {
    server.close();
    console.log = originalConsoleLog;
  });

  test('Uses correct route', async () => {
    expect(routePath).toBe(ROUTE_ALL);
  });

  test('Renders correct content', async () => {
    const ctx = {} as ServerContext;
    const next = jest.fn();
    await routeCallback(ctx, next);

    const content: string = renderToString(
      <Provider store={store}>{rootContent}</Provider>
    );
    expect(ctx.body).toBe(getTemplate(content));
  });

  test('Responds as expected', async () => {
    const { status, type, text } = await request(server).get('/');

    expect(status).toEqual(200);
    expect(type).toEqual(ROUTE_TYPE_HTML);
    expect(text).toEqual(expect.any(String));
  });
});
