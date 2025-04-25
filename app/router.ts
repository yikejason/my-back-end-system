'use strict';

import { Application } from 'egg';

export default function(app: Application) {
  const { router, controller } = app;

  // User routes
  router.get('/users', controller.user.index);
  router.get('/users/:id', controller.user.show);
  router.post('/users', controller.user.create);
  router.put('/users/:id', controller.user.update);
  router.delete('/users/:id', controller.user.destroy);

  // Post routes
  router.get('/posts', controller.post.index);
  router.get('/posts/:id', controller.post.show);
  router.post('/posts', controller.post.create);
  router.put('/posts/:id', controller.post.update);
  router.delete('/posts/:id', controller.post.destroy);

}
