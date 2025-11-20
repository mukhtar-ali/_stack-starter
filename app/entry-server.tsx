import { StartServer } from '@tanstack/start/server';
import { createStartRouter } from './router';
import './styles.css';

export default function handleRequest(request: Request) {
  const router = createStartRouter();

  return StartServer({
    router,
    request,
  });
}
