import { pg_colors } from '../../themes/pg-quasar/tokens.mjs'

const primary = pg_colors.primary?.DEFAULT || pg_colors.primary?.[600]
const secondary = pg_colors.secondary?.DEFAULT || pg_colors.primary?.[600]

const safelist = []
export { primary, secondary, safelist }
