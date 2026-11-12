<script setup lang="ts">

</script>

<template>
  <div class="ornament-divider">
    <span />
    <AtomsAsteriskMark class="ornament-divider__symbol" />
    <span />
  </div>
</template>

<style scoped>
.ornament-divider {
  display: flex;
  width: min(280px, 60%);
  align-items: center;
  gap: 20px;
}

.ornament-divider > span:not(.ornament-divider__symbol) {
  height: 1px;
  flex: 1;
  background: rgba(36, 35, 33, 0.18);
}

.ornament-divider__symbol {
  color: #a88e70;
  font-size: 18px;
}
</style>
