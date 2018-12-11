module.exports = function() {
  const hooks = [
    'build:before',
    'build:compile',
    'build:compiled',
    'build:done',
    'build:extend',
    'build:extendRollup',
    'build:resources',
    'build:templates',
    'bundler:change',
    'bundler:done',
    'generate:before',
    'generate:done',
    'generate:extendRoutes',
    'generate:distRemoved',
    'generate:distCopied',
    'generate:routeFailed',
    'generate:page',
    'generate:routeCreated',
    'modules:before',
    'modules:done',
    'ready',
    'close',
    'listen',
    'render:before',
    'render:done',
    'render:resourcesLoaded',
    'render:setupMiddleware',
    'render:route',
    'render:routeContext',
    'render:routeDone',
    'webpack:done'
  ]
  hooks.forEach(hook => {
    this.nuxt.hook(hook, async generator => {
      console.log(`[nuxt hook]: ${hook} was called.`)
    })
  })
}
