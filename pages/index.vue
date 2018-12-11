<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        hook-test
      </h1>
      <h2 class="subtitle">page 1</h2>
      <nuxt-link to="/page2">go to page 2</nuxt-link>
    </div>
  </section>
</template>

<script>
import lifecycle from '@/modules/lifecycle'
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  mixins: [lifecycle('page1')]
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
