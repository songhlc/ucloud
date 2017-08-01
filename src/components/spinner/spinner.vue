<template>
  <div>
    <svg class="spinner" width="25px" height="25px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
      <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
    </svg>
    <p>数据加载中</p>
  </div>

</template>
<script>
  export default {
    name: 'spinner'
  }
</script>
<style lang="less" scoped>
  div{
    margin: 0 auto;
  }
  p{
    font-size: 12px;
  }
  @offset: 187;
  @duration: 1.4s;

  .spinner {
    animation: rotator 1.4s linear infinite;
  }

  @keyframes rotator {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(270deg); }
  }

  .path {
    stroke-dasharray: @offset;
    stroke-dashoffset: 0;
    transform-origin: center;
    animation:
    dash @duration ease-in-out infinite,
    colors (@duration*4) ease-in-out infinite;
  }

  @keyframes colors {
    0% { stroke: #4285F4; }
    25% { stroke: #DE3E35; }
    50% { stroke: #F7C223; }
    75% { stroke: #1B9A59; }
    100% { stroke: #4285F4; }
  }

  @keyframes dash {
    0% { stroke-dashoffset: @offset; }
    50% {
      stroke-dashoffset: @offset/4;
      transform:rotate(135deg);
    }
    100% {
      stroke-dashoffset: @offset;
      transform:rotate(450deg);
    }
  }
</style>
