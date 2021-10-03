<template>
  <div class="search-wrapper">
    <form class="search-wrapper-form">
      <input type="text" class="search-input" placeholder="Pesquise aqui...">
      <button type="submit" class="search-submit">
        <SearchSVG />
      </button>
    </form>
  </div>
</template>
<script>
import SearchSVG from '@/components/svg/Search'
export default {
  name:'AppSearch',
  components:{
    SearchSVG,
  }
}
</script>
