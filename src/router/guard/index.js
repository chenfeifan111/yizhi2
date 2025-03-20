import { createPageLoadingGuard } from './page-loading-guard'
import { createPageTitleGuard } from './page-title-guard'

export const setupRouterGuard = router => {
  createPageLoadingGuard(router)
  createPageTitleGuard(router)
}
