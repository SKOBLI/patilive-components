import { exec, type ChildProcess } from 'node:child_process'
import path from 'node:path'
import { afterAll, expect, test } from 'vitest'

let buildProcess: ChildProcess | null = null

afterAll(() => {
  if (buildProcess?.pid) {
    try {
      process.kill(buildProcess.pid, 0)
      process.kill(buildProcess.pid)
    } catch {
      // process already finished
    }
  }
})

const repoRoot = path.resolve(__dirname, '..', '..', '..')

const collectOutput = (child?: ChildProcess | null) =>
  new Promise<string>((resolve, reject) => {
    if (!child) {
      reject(new Error('child process missing'))
      return
    }

    let output = ''
    child.stdout?.on('data', (chunk) => {
      output += chunk.toString()
    })
    child.stderr?.on('data', (chunk) => {
      output += chunk.toString()
    })
    child.on('close', (code) => {
      if (code === 0) {
        resolve(output)
      } else {
        reject(new Error(`Build process exited with code ${code}`))
      }
    })
  })

test('Next.js build completes', async () => {
  buildProcess = exec('pnpm --filter next-app build', { cwd: repoRoot })
  const result = await collectOutput(buildProcess)

  expect(result).toContain('Next.js 14')
  expect(result).toContain('Creating an optimized production build')
  expect(result).toContain('Route (app)')
  expect(result).toContain('Route (pages)')
  expect(result).toContain('First Load JS shared by all')
  expect(result).toContain('/_not-found')
  expect(result).toContain('/pages-example')
  expect(result).toContain('/pages-example-user/[id]')
}, 120_000)
