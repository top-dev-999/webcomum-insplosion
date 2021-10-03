<template>
  <div class="filters-bar">
    <div class="filter-item">
      <div class="filter-item-btn" @click="toggleFilters">
        <p>Filtro</p>
      </div>
      <div class="filter-item-content">
        <div class="filter-item-content-list">
          <div class="checkbox-wrapper">
            <label>
              <input type="checkbox">
              <p>filtro</p>
            </label>
          </div>
          <div class="checkbox-wrapper">
            <label>
              <input type="checkbox">
              <p>filtro</p>
            </label>
          </div>
          <div class="checkbox-wrapper">
            <label>
              <input type="checkbox">
              <p>filtro</p>
            </label>
          </div>
          <div class="checkbox-wrapper">
            <label>
              <input type="checkbox">
              <p>filtro</p>
            </label>
          </div>
          <div class="checkbox-wrapper">
            <label>
              <input type="checkbox">
              <p>filtro</p>
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="filter-item">
      <div class="filter-item-btn" @click="toggleFilters">
        <p>Filtro</p>
      </div>
      <div class="filter-item-content">
        <div class="filter-item-content-list">
          <div class="checkbox-wrapper">
            <label>
              <input type="checkbox">
              <p>filtro</p>
            </label>
          </div>
          <div class="checkbox-wrapper">
            <label>
              <input type="checkbox">
              <p>filtro</p>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'SidebarFilters',
  data: function() {
    return {
      filterIsOpen: false
    }
  },
  methods: {
    toggleFilters: function(event) {
      event.target.closest(".filter-item").classList.toggle("active");
    }
  }
}
</script>
