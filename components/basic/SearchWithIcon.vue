<template>
    <div class="search-with-icon">
        <img src="@/assets/images/basic/ic-search-dark.png" alt="">
        <input type="text" :placeholder="placeholder" v-model="searchText">
        <img src="@/assets/images/basic/cross.png" alt="" @click="removeSearchText">
    </div>
</template>

<script>
export default {
    name: "SearchWithIcon",
    props: ["placeholder"],
    data: function() {
        return {
            searchText: ""
        }
    },
    methods: {
        removeSearchText() {
            this.searchText = "";
        }
    }
}
</script>