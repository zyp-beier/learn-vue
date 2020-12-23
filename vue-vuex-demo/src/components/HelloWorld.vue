<template>
  <div class="hello">
    距离x轴<input type="number" v-model="x">像素
    距离y轴 <input type="number" v-model="y">像素
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      x:0,
      y:0
    }
  }
}
</script>

