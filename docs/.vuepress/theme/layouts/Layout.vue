<template>
  <div class="quantum">
    <BaseListLayout v-if="$pagination" />
    <Content v-else />
  </div>
</template>
<style scoped>
.quantum {
  text-align: center;
}
</style>
