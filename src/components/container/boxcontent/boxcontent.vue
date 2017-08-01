<template>
  <div class="box-content">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'boxcontent'
  }
</script>
<style>
  .box-content{
    color: inherit;
    padding: 15px 20px 20px 20px;
    background: #FFFFFF;
    margin-bottom: 10px;
  }
</style>
