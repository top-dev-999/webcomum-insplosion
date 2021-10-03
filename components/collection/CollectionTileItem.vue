<template>
    <a class="collection-tile-item" href="/">
        <img :src="image" alt="">
        <div class="description text-center">
            <p>{{ title }}</p>
            <dt>{{ description }}</dt>
        </div>
    </a>
</template>

<script>
export default {
    name: 'CollectionTileItem',
    props: ["image", "title", "description"]
}
</script>