import Router from 'koa-router';

const allRoutes = ({ router }: { router: Router }) => {
  router.get('*', (ctx, next) => {
    ctx.body = 'Hello World! aaaaa';
  });
};

export default allRoutes;
