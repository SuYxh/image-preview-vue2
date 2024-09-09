

# Vue2 图片查看器

## 功能

好多



## 安装

```
pnpm i @yangxinhao/image-preview-vue2
```



## 使用案例

```html
<template>
  <div class="ul">
    <div v-for="(item, index) of list" :key="index" class="li" @click="handleClick(item)">
      <img :src="item" alt="" />
    </div>
  </div>
</template>

<script>
import { PicturePreviewVue } from '@yangxinhao/image-preview-vue2'
import '@yangxinhao/image-preview-vue2/dist/assets/style.css';

export default {
  name: 'App',
  components: {},
  data() {
    return {
      list: [
        'https://file.iviewui.com/images/image-demo-1.jpg',
        'https://file.iviewui.com/images/image-demo-2.jpg',
        'https://file.iviewui.com/images/image-demo-3.jpg',
        'https://file.iviewui.com/images/image-demo-4.jpg',
        'https://file.iviewui.com/images/image-demo-5.jpg',
        'https://file.iviewui.com/images/image-demo-6.jpg'
      ]
    }
  },
  computed: {},
  mounted() {},
  methods: {
    handleClick(url) {
      // PicturePreviewVue(item)
      PicturePreviewVue({
        url: url,
        urlList: this.list
      })
    }
  }
}
</script>

<style lang="scss">
#app {
  text-align: center;
}
.pic {
  width: 200px;
  cursor: pointer;
}
.ul {
  display: flex;
  .li {
    width: 200px;
    height: 160px;
    margin: 0 10px;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
</style>

```

