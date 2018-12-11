export default function(name) {
  return {
    beforeCreate() {
      console.info(`[vue hook](${name}): beforeCreate was called.`)
    },
    created() {
      console.info(`[vue hook](${name}): created was called.`)
    },
    beforeMount() {
      console.info(`[vue hook](${name}): beforeMount was called.`)
    },
    mounted() {
      console.info(`[vue hook](${name}): mounted was called.`)
    },
    beforeUpdate() {
      console.info(`[vue hook](${name}): beforeUpdate was called.`)
    },
    updated() {
      console.info(`[vue hook](${name}): updated was called.`)
    },
    beforeDestroy() {
      console.info(`[vue hook](${name}): beforeDestroy was called.`)
    },
    destroyed() {
      console.info(`[vue hook](${name}): destroyed was called.`)
    }
  }
}
