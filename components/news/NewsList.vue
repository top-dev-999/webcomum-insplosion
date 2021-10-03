<template>
  <section class="news-list-section section-padding">
    <div class="container">
      <div class="section-heading">
        <p class="section-title">Noticias</p>
      </div>
      <div class="news-list">
        <div class="row news-list-row">
          <div class="col-12 col-sm-6 col-md-4 news-list-column">
            <NewsItem />
          </div>
          <div class="col-12 col-sm-6 col-md-4 news-list-column">
            <NewsItem />
          </div>
          <div class="col-12 col-sm-6 col-md-4 news-list-column">
            <NewsItem />
          </div>
          <div class="col-12 col-sm-6 col-md-4 news-list-column">
            <NewsItem />
          </div>
          <div class="col-12 col-sm-6 col-md-4 news-list-column">
            <NewsItem />
          </div>
          <div class="col-12 col-sm-6 col-md-4 news-list-column">
            <NewsItem />
          </div>
          <div class="col-12 col-sm-6 col-md-4 news-list-column">
            <NewsItem />
          </div>
          <div class="col-12 col-sm-6 col-md-4 news-list-column">
            <NewsItem />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import NewsItem from "@/components/news/NewsItem";
export default {
  name:'NewsList',
  components: {
    NewsItem,
  },
};
</script>
