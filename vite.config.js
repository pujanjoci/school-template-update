import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Automatically match GitHub repository name when building in GitHub Actions
const repoName = process.env.GITHUB_REPOSITORY
  ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/`
  : '/school-template-update/'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? repoName : '/',
  plugins: [react()],
})
