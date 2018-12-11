# hook-test

> app for hook test

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).


## nuxt command

| universal                           | spa                                 |
|-------------------------------------|-------------------------------------|
| [nuxt hook]: modules:done           | [nuxt hook]: modules:done           |
| [nuxt hook]: render:before          | [nuxt hook]: render:before          |
| [nuxt hook]: render:setupMiddleware | [nuxt hook]: render:setupMiddleware |
| [nuxt hook]: render:done            | [nuxt hook]: render:done            |
| [nuxt hook]: ready                  | [nuxt hook]: ready                  |
| [nuxt hook]: build:before           | [nuxt hook]: build:before           |
| [nuxt hook]: build:templates        | [nuxt hook]: build:templates        |
| [nuxt hook]: build:compile          | [nuxt hook]: build:compile          |
| [nuxt hook]: build:compile          | [nuxt hook]: bundler:done           |
| [nuxt hook]: bundler:done           | [nuxt hook]: build:compiled         |
| [nuxt hook]: build:compiled         | [nuxt hook]: render:resourcesLoaded |
| [nuxt hook]: render:resourcesLoaded | [nuxt hook]: build:done             |
| [nuxt hook]: build:done             | [nuxt hook]: listen                 |
| [nuxt hook]: listen                 | [nuxt hook]: render:route           |
| ACCESS BROWSER                      | [nuxt hook]: render:routeDone       |
| [vue hook]: (layout): beforeCreate    | ACCESS BROWSER                      |
| [vue hook]: (layout): created         | [vue hook]: (layout): beforeCreate    |
| [vue hook]: (page1): beforeCreate     | [vue hook]: (layout): created         |
| [vue hook]: (page1): created          | [vue hook]: (layout): beforeMount     |
| [vue hook]: (component): beforeCreate | [vue hook]: (page1): beforeCreate     |
| [vue hook]: (component): created      | [vue hook]: (page1): created          |
| [nuxt hook]: render:routeContext    | [vue hook]: (page1): beforeMount      |
| [nuxt hook]: render:route           | [vue hook]: (component): beforeCreate |
| [nuxt hook]: render:routeDone       | [vue hook]: (component): created      |
| [vue hook]: (layout): beforeCreate    | [vue hook]: (component): beforeMount  |
| [vue hook]: (layout): created         | [vue hook]: (component): mounted      |
| [vue hook]: (layout): beforeMount     | [vue hook]: (page1): mounted          |
| [vue hook]: (page1): beforeCreate     | [vue hook]: (layout): mounted         |
| [vue hook]: (page1): created          |                                     |
| [vue hook]: (page1): beforeMount      |                                     |
| [vue hook]: (component): beforeCreate |                                     |
| [vue hook]: (component): created      |                                     |
| [vue hook]: (component): beforeMount  |                                     |
| [vue hook]: (component): mounted      |                                     |
| [vue hook]: (page1): mounted          |                                     |
| [vue hook]: (layout): mounted         |                                     |

## nuxt generate command

| universal                           | spa                                 |
|-------------------------------------|-------------------------------------|
| [nuxt hook]: modules:done           | [nuxt hook]: modules:done           |
| [nuxt hook]: render:before          | [nuxt hook]: render:before          |
| [nuxt hook]: render:resourcesLoaded | [nuxt hook]: render:resourcesLoaded |
| [nuxt hook]: render:setupMiddleware | [nuxt hook]: render:setupMiddleware |
| [nuxt hook]: render:done            | [nuxt hook]: render:done            |
| [nuxt hook]: ready                  | [nuxt hook]: ready                  |
| [nuxt hook]: generate:before        | [nuxt hook]: generate:before        |
| [nuxt hook]: build:before           | [nuxt hook]: build:before           |
| [nuxt hook]: build:templates        | [nuxt hook]: build:templates        |
| [nuxt hook]: build:compile          | [nuxt hook]: build:compile          |
| [nuxt hook]: bundler:done           | [nuxt hook]: bundler:done           |
| [nuxt hook]: build:compiled         | [nuxt hook]: build:compiled         |
| [nuxt hook]: render:resourcesLoaded | [nuxt hook]: render:resourcesLoaded |
| [nuxt hook]: build:done             | [nuxt hook]: build:done             |
| [nuxt hook]: generate:distRemoved   | [nuxt hook]: generate:distRemoved   |
| [nuxt hook]: generate:distCopied    | [nuxt hook]: generate:distCopied    |
| [nuxt hook]: generate:extendRoutes  | [nuxt hook]: generate:extendRoutes  |
| [vue hook]: (layout): beforeCreate    | [nuxt hook]: generate:page          |
| [vue hook]: (layout): created         | [nuxt hook]: generate:routeCreated  |
| [vue hook]: (page2): beforeCreate     | [nuxt hook]: generate:done          |
| [vue hook]: (page2): created          | ACCESS BROWSER                      |
| [vue hook]: (component): beforeCreate | [vue hook]: (layout): beforeCreate    |
| [vue hook]: (component): created      | [vue hook]: (layout): created         |
| [vue hook]: (layout): beforeCreate    | [vue hook]: (layout): beforeMount     |
| [vue hook]: (layout): created         | [vue hook]: (page1): beforeCreate     |
| [vue hook]: (page1): beforeCreate     | [vue hook]: (page1): created          |
| [vue hook]: (page1): created          | [vue hook]: (page1): beforeMount      |
| [vue hook]: (component): beforeCreate | [vue hook]: (component): beforeCreate |
| [vue hook]: (component): created      | [vue hook]: (component): created      |
| [nuxt hook]: render:routeContext    | [vue hook]: (component): beforeMount  |
| [nuxt hook]: render:routeContext    | [vue hook]: (component): mounted      |
| [nuxt hook]: generate:page          | [vue hook]: (page1): mounted          |
| [nuxt hook]: generate:page          | [vue hook]: (layout): mounted         |
| [nuxt hook]: generate:routeCreated  |                                     |
| [nuxt hook]: generate:routeCreated  |                                     |
| [nuxt hook]: generate:done          |                                     |
| ACCESS BROWSER                      |                                     |
| [vue hook]: (layout): beforeCreate    |                                     |
| [vue hook]: (layout): created         |                                     |
| [vue hook]: (layout): beforeMount     |                                     |
| [vue hook]: (page1): beforeCreate     |                                     |
| [vue hook]: (page1): created          |                                     |
| [vue hook]: (page1): beforeMount      |                                     |
| [vue hook]: (component): beforeCreate |                                     |
| [vue hook]: (component): created      |                                     |
| [vue hook]: (component): beforeMount  |                                     |
| [vue hook]: (component): mounted      |                                     |
| [vue hook]: (page1): mounted          |                                     |
| [vue hook]: (layout): mounted         |                                     |

## nuxt start command

| universal                           | spa                                 |
|-------------------------------------|-------------------------------------|
| [nuxt hook]: modules:done           | [nuxt hook]: modules:done           |
| [nuxt hook]: render:before          | [nuxt hook]: render:before          |
| [nuxt hook]: render:resourcesLoaded | [nuxt hook]: render:resourcesLoaded |
| [nuxt hook]: render:setupMiddleward | [nuxt hook]: render:setupMiddleware |
| [nuxt hook]: render:done            | [nuxt hook]: render:done            |
| [nuxt hook]: ready                  | [nuxt hook]: ready                  |
| [nuxt hook]: listen                 | [nuxt hook]: listen                 |
| ACCESS BROWSER                      | [nuxt hook]: render:route           |
| [vue hook]: (layout): beforeCreate    | [nuxt hook]: render:routeDone       |
| [vue hook]: (layout): created         | ACCESS BROWSER                      |
| [vue hook]: (page1): beforeCreate     | [vue hook]: (layout): beforeCreate    |
| [vue hook]: (page1): created          | [vue hook]: (layout): created         |
| [vue hook]: (logo): beforeCreate      | [vue hook]: (layout): beforeMount     |
| [vue hook]: (logo): created           | [vue hook]: (page1): beforeCreate     |
| [nuxt hook]: render:routeContext    | [vue hook]: (page1): created          |
| [nuxt hook]: render:route           | [vue hook]: (page1): beforeMount      |
| [nuxt hook]: render:routeDone       | [vue hook]: (component): beforeCreate |
| [vue hook]: (layout): beforeCreate    | [vue hook]: (component): created      |
| [vue hook]: (layout): created         | [vue hook]: (component): beforeMount  |
| [vue hook]: (layout): beforeMount     | [vue hook]: (component): mounted      |
| [vue hook]: (page1): beforeCreate     | [vue hook]: (page1): mounted          |
| [vue hook]: (page1): created          | [vue hook]: (layout): mounted         |
| [vue hook]: (page1): beforeMount      |                                     |
| [vue hook]: (component): beforeCreate |                                     |
| [vue hook]: (component): created      |                                     |
| [vue hook]: (component): beforeMount  |                                     |
| [vue hook]: (component): mounted      |                                     |
| [vue hook]: (page1): mounted          |                                     |
| [vue hook]: (layout): mounted         |                                     |
