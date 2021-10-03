<template>
    <div class="furniture-item">
        <img :src="image" width="100%" height="175"/>
        <div class="furniture-item-description">
            <dt>
                {{ description }}
            </dt>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FurnitureItem',
    props: ['image', 'description']
}
</script>