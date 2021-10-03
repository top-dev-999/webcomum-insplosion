<template>
    <div>
        <div v-if="theme == 'white'" class="vbutton btn-white" :class="width">
            {{text}}
        </div>
        <div v-if="theme == 'black'" class="vbutton btn-black" :class="width">
            {{text}}
        </div>
        <div v-if="theme == 'red'" class="vbutton btn-red" :class="width">
            {{text}}
        </div>
        <div v-if="theme == 'black-fill'" class="vbutton btn-black-fill" :class="width">
            {{text}}
        </div>
        <div v-if="theme == 'red-fill'" class="vbutton btn-red-fill" :class="width">
            {{text}}
        </div>
    </div>
</template>

<script>
export default {
    name: 'Button',
    props: ['text', 'theme', 'width']
}
</script>
