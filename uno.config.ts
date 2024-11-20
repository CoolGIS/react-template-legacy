import {
  defineConfig,
  presetUno,
  presetAttributify,
  transformerDirectives,
  transformerAttributifyJsx,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  presets: [presetUno(), presetAttributify()],
  transformers: [transformerDirectives(), transformerAttributifyJsx(), transformerVariantGroup()],
  shortcuts: [
    {
      hstack: 'flex items-center',
      vstack: 'flex flex-col items-center',
      center: 'flex justify-center items-center'
    },
    [/^size-(.*)$/, ([, n]) => `w-${n} h-${n}`]
  ]
})
