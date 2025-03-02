import jsonServer from 'json-server';
import auth from 'json-server-auth';

const server = jsonServer.create();
const router = jsonServer.router('src/datos.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.db = router.db;
server.use(auth);
server.use(router);

server.listen(3000, () => {
  console.log('JSON Server is running on http://localhost:3000');
});