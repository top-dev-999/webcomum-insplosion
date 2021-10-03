<template>
    <div>
        <div v-if="theme == 'white'" class="vbutton btn-white" :class="[width, hover]">
            {{text}}
        </div>
        <div v-if="theme == 'black'" class="vbutton btn-black" :class="[width, hover]">
            {{text}}
        </div>
        <div v-if="theme == 'red'" class="vbutton btn-red" :class="[width, hover]">
            {{text}}
        </div>
        <div v-if="theme == 'black-fill'" class="vbutton btn-black-fill" :class="[width, hover]">
            {{text}}
        </div>
        <div v-if="theme == 'red-fill'" class="vbutton btn-red-fill" :class="[width, hover]">
            {{text}}
        </div>
        <div v-if="theme == 'white-fill'" class="vbutton btn-white-fill" :class="[width, hover]">
            {{text}}
        </div>
    </div>
</template>

<script>
export default {
    name: 'Button02',
    props: ['text', 'theme', 'width', 'hover']
}
</script>
