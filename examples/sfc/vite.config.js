import { defineConfig } from 'vite';
import convue from '../../src';

export default defineConfig({
  plugins: [
    ...convue({}),
  ],
});
