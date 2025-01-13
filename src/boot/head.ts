import { createHead } from '@unhead/vue'

export default ({ app /* , router, store */ }) => {
  app.use(createHead())
}
