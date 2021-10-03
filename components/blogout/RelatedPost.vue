<template>

  <div class="blog-out-products">
      <div class="blog-out-products-header">
          <h2>REALTEAD POSTS</h2>
      </div>
      <div class="blog-out-products-slide-control">
        <b-carousel
        v-model="slide"
        :interval="0"
        controls
        indicators
        background="#fffff"
        img-width="1024"
        img-height="480"
        class="blog-out-slide"
        >
        

        <!-- Slide with blank fluid image to maintain slide aspect ratio -->
        <b-carousel-slide class="inspiration-slide-container">
            <template #img>
            <BlogItem size="small" />
            <BlogItem size="small"/>
            <BlogItem size="small"/>
            </template>
        </b-carousel-slide>
        <b-carousel-slide class="inspiration-slide-container">
            <template #img>
            <BlogItem size="small"/>
            <BlogItem size="small"/>
            <BlogItem size="small"/>
            </template>
        </b-carousel-slide>
        </b-carousel>
    </div>
  </div>
</template>

<script>
import BlogItem from '@/components/blogs/BlogItem';
  export default {
    name: "RelatedPost",
    components: {
      BlogItem
    }
  }
</script>