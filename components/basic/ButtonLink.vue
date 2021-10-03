<template>
    <div>
        <a v-if="theme == 'white'" class="vbutton btn-white" :class="[width, hover]" :href="href">
            {{text}}
        </a>
        <a v-if="theme == 'black'" class="vbutton btn-black" :class="[width, hover]" :href="href">
            {{text}}
        </a>
        <a v-if="theme == 'red'" class="vbutton btn-red" :class="[width, hover]" :href="href">
            {{text}}
        </a>
        <a v-if="theme == 'black-fill'" class="vbutton btn-black-fill" :class="[width, hover]" :href="href">
            {{text}}
        </a>
        <a v-if="theme == 'red-fill'" class="vbutton btn-red-fill" :class="[width, hover]" :href="href">
            {{text}}
        </a>
        <a v-if="theme == 'white-fill'" class="vbutton btn-white-fill" :class="[width, hover]" :href="href">
            {{text}}
        </a>
    </div>
</template>

<script>
export default {
    name: 'ButtonLink',
    props: ['text', 'theme', 'width', 'href', 'hover']
}
</script>
