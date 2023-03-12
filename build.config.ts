/**
 * @file Configuration - Build
 * @module config/build
 * @see https://github.com/flex-development/mkbuild
 */

import { defineBuildConfig, type Config } from '@flex-development/mkbuild'
import type { BuildResult, OutputFile, PluginBuild } from 'esbuild'
import util from 'node:util'
import pkg from './package.json' assert { type: 'json' }

/**
 * Build configuration options.
 *
 * @const {Config} config
 */
const config: Config = defineBuildConfig({
  conditions: ['import', 'require', 'node', 'default'],
  entries: [
    {},
    {
      format: 'cjs',
      plugins: [
        {
          name: 'add-module-exports',
          setup({ initialOptions, onEnd }: PluginBuild): void {
            const { format } = initialOptions

            // do nothing if format is not commonjs
            if (format !== 'cjs') return void format

            // add module exports
            return void onEnd(
              (result: BuildResult<{ metafile: true; write: false }>): void => {
                /**
                 * Output file objects.
                 *
                 * @const {OutputFile[]} outputFiles
                 */
                const outputFiles: OutputFile[] = result.outputFiles

                return void (result.outputFiles = outputFiles.map(output => {
                  if (/dist\/(?:index|ponyfill)\.cjs$/.test(output.path)) {
                    // get sourceMappingURL comment
                    const [sourcemap = ''] = /\/\/#.+\n/.exec(output.text) ?? []

                    /**
                     * Output file content.
                     *
                     * @const {string} text
                     */
                    const text: string =
                      output.text.replace(sourcemap, '') +
                      'module.exports = module.exports.default;\n' +
                      'module.exports.default = module.exports;\n' +
                      sourcemap

                    return {
                      ...output,
                      contents: new util.TextEncoder().encode(text),
                      text
                    }
                  }

                  return output
                }))
              }
            )
          }
        }
      ]
    }
  ],
  sourcemap: true,
  sourcesContent: false,
  target: 'node' + pkg.engines.node.replace(/^\D+/, ''),
  tsconfig: 'tsconfig.build.json'
})

export default config
