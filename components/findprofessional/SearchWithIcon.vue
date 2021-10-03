<template>
    <div class="search-with-icon">
        <img src="@/assets/images/basic/ic-search-dark.png" alt="">
        <input type="text" :placeholder="placeholder">
        <img src="@/assets/images/basic/cross.png" alt="">
    </div>
</template>

<script>
export default {
    name: "SearchWithIcon",
    props: ["placeholder"]
}
</script>