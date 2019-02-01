<style>

</style>

<template>
    <div>
        {{ msg }} {{ 2+ 3 }}
        <br>
        '$page' 网站源数据: {{ $page }}
        <button @click="abc">handleMe</button>
    </div>
</template>

<script>

export default {
   data() {
      return {
        msg: 'Hellow VuePress.vue'
     }
   },
   mounted() {
       console.log('123');
   },
   methods: {
     abc() {
       alert('i am vue');
    }
  }

}
</script>



