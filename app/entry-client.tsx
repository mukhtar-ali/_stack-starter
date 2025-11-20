import { StartClient } from '@tanstack/start/client';
import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { createStartRouter } from './router';
import './styles.css';

const router = createStartRouter();

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Expected #root element to be present for hydration.');
}

hydrateRoot(
  rootElement,
  <StrictMode>
    <StartClient router={router} />
  </StrictMode>,
);
