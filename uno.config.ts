import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetIcons,
  transformerDirectives,
  transformerAttributifyJsx,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      collections: {
        gis: () => import('@iconify-json/gis/icons.json').then((i) => i.default)
      }
    })
  ],
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
