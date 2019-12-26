<template>
  <div class="components-container">
    <div style="padding:20px">
      <tinymce v-model="content" :height="500" />
    </div>
    <!-- <div class="editor-content" v-html="content" /> -->
  </div>
</template>

<script>
import Tinymce from '@/components/Tinymce'

export default {
  name: 'TinymceDemo',
  components: { Tinymce },
  data() {
    return {
      content:``
    }
  }
}
</script>

<style scoped>
.editor-content{
  margin-top: 20px;
}
</style>

