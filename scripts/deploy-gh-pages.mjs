import { execFileSync, spawn } from 'node:child_process'
import { createRequire } from 'node:module'

function getRepoName() {
  const fromEnv = process.env.GITHUB_REPOSITORY?.split('/')?.[1]
  if (fromEnv) return fromEnv

  const remoteUrl = execFileSync('git', ['config', '--get', 'remote.origin.url'], {
    encoding: 'utf8',
  }).trim()

  const last = remoteUrl.replace(/\/$/, '').split(/[/:]/).pop()
  if (!last) throw new Error('No pude determinar el nombre del repo desde remote.origin.url')
  return last.replace(/\.git$/i, '')
}

function computeBaseUrl(repoName) {
  return repoName.endsWith('.github.io') ? '/' : `/${repoName}/`
}

function run(command, args, env) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { stdio: 'inherit', env })
    child.on('exit', (code) => {
      if (code === 0) resolve()
      else reject(new Error(`${command} ${args.join(' ')} salió con código ${code}`))
    })
  })
}

const repoName = getRepoName()
const baseUrl = computeBaseUrl(repoName)

console.log(`Deploy a GitHub Pages (gh-pages). BASE_URL=${baseUrl}`)

await run('npm', ['run', 'build'], { ...process.env, BASE_URL: baseUrl })

const require = createRequire(import.meta.url)
const ghpages = require('gh-pages')

await new Promise((resolve, reject) => {
  ghpages.publish(
    'dist',
    {
      dotfiles: true,
    },
    (err) => {
      if (err) reject(err)
      else resolve()
    },
  )
})
