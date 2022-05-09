import { Store } from '@/store'
import Router from '@/router'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store
    $router: Router
  }
}
