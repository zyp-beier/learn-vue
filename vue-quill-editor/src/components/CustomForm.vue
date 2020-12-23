<template>
  <form class="custom-form">
    <slot></slot>
  </form>
</template>

<script>
  export default {
    name: 'CustomForm',
    props:{
      size:{
        type:String,
        default: 'default',
        validator(value) {
          return ['default','large','small','mini'].includes(value)
        }
      },
      disabled:{
        type: Boolean,
        default: false
      }
    },
    provide() {
      return{
        customForm: this
      }
    }
  };
</script>

<style scoped>

</style>
