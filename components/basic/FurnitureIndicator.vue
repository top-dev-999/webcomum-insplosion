<template>
    <div class="furniture-indicator" :id="top + '_' + left + '_' + id">
        <div class="furniture-indicator-content" ></div>
        <b-popover :target="top + '_' + left + '_' + id" triggers="hover" :placement="pos">
            <img src="@/assets/images/roombyroom/item.png" />
            <h3>{{title}}</h3>
            <h4>{{description}}</h4>
        </b-popover>
    </div>
    
</template>

<script>
export default {
    name: "FurnitureIndicator",
    props: ["top", "left", "title", "description", "furniture", "id"],
    computed: {
        posx: function () {
            return parseInt(this.top.split('%')[0]) >= 50 ? 'top' : 'bottom';
        },
        posy: function () {
            return parseInt(this.left.split('%')[0]) >= 50 ? 'left' : 'right';
        },
        pos: function () {
            return this.posx + this.posy;
        },
    }
}
</script>