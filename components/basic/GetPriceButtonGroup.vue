<template>
    <div class="get-price-button-group">
        <div class="get-price-button" @click="onPriceClick">GET PRICE</div>
        <div class="more-info-button">+ INFO</div>
    </div>
</template>

<script>
export default {
    name: 'GetPriceButtonGroup',
    methods: {
        onPriceClick() {
            console.log('ggg');
            this.$emit('price-click');
        }
    }
}
</script>