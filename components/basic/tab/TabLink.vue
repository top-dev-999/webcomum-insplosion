<template>
        <a v-if="theme == 'dark'" :href="'/' + link">
            <li class="tab-item tab-dark" :class="{selected: selected == true}" 
                @mouseover="selected = true"
                @mouseleave="selected = false">
            #{{ text.toUpperCase()}}
            </li>
        </a>
        <a v-else  :href="'/' + link">
            <li class="tab-item tab-light" :class="{selected: selected == true}" 
                @mouseover="selected = true"
                @mouseleave="selected = false">
            #{{text.toUpperCase()}}
            </li>
        </a>
</template>

<script>
export default {
    name: 'TabLink',
    props: ["text", "theme", "link"],
    data: function() {
        return {
            selected: false
        }
    },
}
</script>