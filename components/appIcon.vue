<template>
  <img
    :class="[iconSize, 'mx-auto w-auto']"
    src="~/assets/images/forest.png"
    alt="Workflow"
  >
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      required: true
    }
  },
  computed: {
    iconSize () {
      switch (this.size) {
        case 'sm':
          return 'h-12'

        case 'md':
          return 'h-24'

        case 'lg':
          return 'h-36'

        default:
          return 'h-24'
      }
    }
  }
}
</script>
