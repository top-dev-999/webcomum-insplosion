<template>
        <li class="tab-item tab-dark" v-if="theme == 'dark'" :class="{selected: selected == true}" @click="selectItem(text)">
            #{{ text}}
        </li>
        <li class="tab-item tab-light" v-else :class="{selected: selected == true}" @click="selectItem(text)">
            #{{text}}
        </li>
</template>

<script>
export default {
    name: 'TabItem',
    props: ["text", "theme", "selected"],
    methods: {
        selectItem(text) {
            this.$emit('select-item', text);
        }
    }
}
</script>