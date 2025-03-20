const baseTitle = import.meta.env.VITE_TITLE

export const createPageTitleGuard = router => {
  router.afterEach(to => {
    const pageTitle = to.meta?.title
    if (pageTitle) {
      document.title = `${pageTitle} | ${baseTitle}`
    } else {
      document.title = baseTitle
    }
  })
}
