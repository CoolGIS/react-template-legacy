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
  transformers: [transformerDirectives(), transformerAttributifyJsx(), transformerVariantGroup()]
})
