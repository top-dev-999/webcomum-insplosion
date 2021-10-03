<template>
  <article class="news-item">
    <router-link to="/news-detail/1" class="news-item-link">
      <div class="news-item-image-wrapper">
        <div class="news-item-image">
          <picture>
            <source media="(min-width: 992px)" srcset="https://fakeimg.pl/305x205/ 1x, https://fakeimg.pl/610x410/ 2x">
            <source media="(min-width: 768px)" srcset="https://fakeimg.pl/305x205/ 1x, https://fakeimg.pl/610x410/ 2x">
            <img srcset="https://fakeimg.pl/305x205/ 1x, https://fakeimg.pl/610x410/ 2x" alt="" title="">
          </picture>
        </div>
      </div>
      <div class="news-item-content">
        <p class="news-item-category">Categoria</p>
        <p class="news-item-title">Noticia</p>
        <div class="news-item-description">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras tincidunt lobortis feugiat vivamus. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor.</p>
        </div>
        <p class="news-item-date">1 Janeiro 2020</p>
      </div>
    </router-link>
  </article>
</template>
<script>
export default {
  name:'NewsItemHighlight'
}
</script>
