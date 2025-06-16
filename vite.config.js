import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/lotteryy/', // <-- your repo name with slashes
  plugins: [react()],
});
