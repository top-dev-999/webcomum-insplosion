<template>
    <div class="color-palette-control">
        <div class="color-palette-header">
            <p>COLOR PALETTE</p>
        </div>
        <div class="color-palette-content">
            <div v-for="(color, i) in colors" :key="i" class="color-item">
                <div class="color-bar" :style="{'background-color': color, 'width': '75px', 'height': '10px'}"></div>
                <dt class="color-text">{{color}}</dt>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ColorPalette",
    props: ["colors"]
}
</script>