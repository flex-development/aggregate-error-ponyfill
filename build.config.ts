/**
 * @file Unbuild Config
 * @module config/unbuild
 * @see https://github.com/unjs/unbuild#configuration
 */

import type { MkdistOptions } from 'mkdist'
import path from 'node:path'
import { applyChanges } from 'resolve-tspaths/dist/steps/applyChanges'
import { computeAliases } from 'resolve-tspaths/dist/steps/computeAliases'
import { generateChanges } from 'resolve-tspaths/dist/steps/generateChanges'
import { loadTSConfig } from 'resolve-tspaths/dist/steps/loadTSConfig'
import type { Alias, Change } from 'resolve-tspaths/dist/types'
import {
  defineBuildConfig,
  type BuildConfig,
  type BuildContext,
  type BuildOptions,
  type MkdistBuildEntry
} from 'unbuild'

/**
 * Build options.
 *
 * @const {BuildConfig}
 */
const config: BuildConfig = defineBuildConfig({
  declaration: true,
  entries: [
    { builder: 'mkdist', input: 'src/' },
    { builder: 'mkdist', ext: 'cjs', format: 'cjs', input: 'src/' },
    { builder: 'mkdist', ext: 'mjs', format: 'esm', input: 'src/' }
  ],
  hooks: {
    /**
     * Transforms path aliases found in `output.writtenFiles`.
     *
     * @param {BuildContext} ctx - Build context
     * @param {BuildOptions} ctx.options - Build options
     * @param {MkdistBuildEntry} entry - `mkdist` build entry
     * @param {{ writtenFiles: string[] }} output - Build results
     * @param {string[]} output.writtenFiles - Files created during build
     * @return {void} Nothing when complete
     */
    'mkdist:entry:build'(
      ctx: BuildContext,
      entry: MkdistBuildEntry,
      output: { writtenFiles: string[] }
    ): void {
      const { outDir, rootDir } = ctx.options
      const { writtenFiles } = output

      try {
        const { paths = {} } = loadTSConfig(`${rootDir}/tsconfig.json`).options

        /**
         * Path alias objects.
         *
         * @const {Alias[]} aliases
         */
        const aliases: Alias[] = computeAliases(rootDir, paths)

        /**
         * Changes to apply to {@link writtenFiles}.
         *
         * @const {Change[]} changes
         */
        const changes: Change[] = generateChanges(writtenFiles, aliases, {
          outPath: outDir,
          srcPath: path.resolve('src')
        })

        return void applyChanges(changes)
      } catch (e: unknown) {
        console.error(e instanceof Error ? e.message : e)
      }
    },
    /**
     * Updates `mkdist` build options.
     *
     * @see https://github.com/unjs/mkdist#-usage
     *
     * @param {BuildContext} ctx - Build context
     * @param {MkdistBuildEntry} entry - `mkdist` build entry
     * @param {MkdistOptions} options - `mkdist` build options
     * @return {void} Nothing when complete
     */
    'mkdist:entry:options'(
      ctx: BuildContext,
      entry: MkdistBuildEntry,
      options: MkdistOptions
    ): void {
      options.pattern = ['**', '!**/{__mocks__,__snapshots__,__tests__}/**']
    }
  }
})

export default config
