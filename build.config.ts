/**
 * @file Unbuild Config
 * @module config/unbuild
 * @see https://github.com/unjs/unbuild#configuration
 */

import { resolveId } from 'externality'
import type { MkdistOptions } from 'mkdist'
import { findStaticImports } from 'mlly'
import fs from 'node:fs'
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
    { builder: 'mkdist', ext: 'cjs', format: 'cjs', input: 'src/' },
    { builder: 'mkdist', ext: 'mjs', format: 'esm', input: 'src/' }
  ],
  hooks: {
    /**
     * Transforms path aliases and bare specifiers in `output.writtenFiles`.
     *
     * @param {BuildContext} ctx - Build context
     * @param {BuildOptions} ctx.options - Build options
     * @param {MkdistBuildEntry} entry - `mkdist` build entry
     * @param {{ writtenFiles: string[] }} results - Build results
     * @param {string[]} results.writtenFiles - Files created during build
     * @return {Promise<void>} Nothing when complete
     */
    async 'mkdist:entry:build'(
      ctx: BuildContext,
      entry: MkdistBuildEntry,
      results: { writtenFiles: string[] }
    ): Promise<void> {
      const { outDir, rootDir } = ctx.options
      const { writtenFiles } = results

      // transform path aliases
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

        applyChanges(changes)
      } catch (e: unknown) {
        console.error(e instanceof Error ? e.message : e)
      }

      // include file extensions in import specifiers
      // https://nodejs.org/docs/latest-v16.x/api/esm.html#import-specifiers
      for (const file of writtenFiles) {
        try {
          /**
           * {@link file} content.
           *
           * @var {string} content
           */
          let content: string = await fs.promises.readFile(file, 'utf8')

          for (const { code, specifier } of findStaticImports(content)) {
            if (path.extname(specifier)) continue

            if (/^(\w|@)/.test(specifier)) {
              const { path: id } = await resolveId(specifier, process.cwd(), {
                type: 'module'
              })

              content = content.replace(
                code,
                code.replace(specifier, id.split('node_modules/')[1]!)
              )
            } else {
              content = content.replace(
                code,
                code.replace(specifier, specifier + '.' + entry.ext!)
              )
            }
          }

          await fs.promises.writeFile(file, content)
        } catch (e: unknown) {
          console.error(e instanceof Error ? e.message : e)
        }
      }

      return void 0
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
