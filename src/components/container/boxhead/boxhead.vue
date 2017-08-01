<template>
  <div class="box-head">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'boxhead'
  }
</script>
<style>
  .box-head{
    color: inherit;
    padding: 0 20px 0px;
    min-height: 48px;
    line-height: 48px;
    background: #FFFFFF;
    margin-bottom: 10px;
  }
</style>
