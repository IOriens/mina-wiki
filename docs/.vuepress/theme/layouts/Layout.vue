<style scoped>
.custom-footer {
  text-align: center;
  font-size: 16px;
  font-weight: 500;
}
</style>

<template>
  <ParentLayout>
    <template #page-bottom>
      <div class="custom-footer">✨ 进小程序开发者交流群请加我微信: <code>jjjdev</code> ✨</div>
    </template>
  </ParentLayout>
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'

export default {
  name: 'Layout',

  components: {
    ParentLayout
  }
}
</script>