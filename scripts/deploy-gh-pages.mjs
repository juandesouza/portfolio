import { execSync } from 'node:child_process'
import { writeFileSync } from 'node:fs'
import { join } from 'node:path'

const distDir = join(process.cwd(), 'dist')
const repo = 'https://github.com/juandesouza/portfolio.git'

writeFileSync(join(distDir, '.nojekyll'), '')

execSync('git init -b gh-pages', { cwd: distDir, stdio: 'inherit' })
execSync('git add -A', { cwd: distDir, stdio: 'inherit' })
execSync('git commit -m "Deploy portfolio to GitHub Pages"', {
  cwd: distDir,
  stdio: 'inherit',
})
execSync(`git push -f ${repo} HEAD:gh-pages`, {
  cwd: distDir,
  stdio: 'inherit',
})

console.log('Deployed to https://juandesouza.github.io/portfolio/')
