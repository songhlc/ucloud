<template>
  <div class="ibox">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'box'
  }
</script>
<style>
  .ibox{
    padding: 12px 10px 20px 15px;
    clear: both;
    margin-bottom: 25px;
    margin-top: 0;
    position: relative;
    background-color: rgb(239, 239, 241);
  }
</style>
