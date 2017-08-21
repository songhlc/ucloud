<template>
  <div class="box-content">
    <div class="box-content-title">{{label}}</div>
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'boxcontent',
    props: {
      label: {
        type: String,
        default: ''
      }
    }
  }
</script>
<style>
  .box-content{
    color: inherit;
    padding: 15px 20px 20px 20px;
    background: #FFFFFF;
    margin-bottom: 10px;
  }
  .box-content-title {
    border-left: 4px solid #f15c50;
    margin-bottom: 18px;
    font-size: 16px;
    padding-left: 10px;
    text-align: left;
    width: 100%;
  }
</style>
