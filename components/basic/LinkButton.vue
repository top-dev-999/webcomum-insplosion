<template>
    <div :class="width">
        <a v-if="theme == 'white'" class="lbutton btn-white" :class="width">
            {{text}}
        </a>
        <a v-if="theme == 'black'" class="lbutton btn-black" :class="width">
            {{text}}
        </a>
        <a v-if="theme == 'red'" class="lbutton btn-red" :class="width">
            {{text}}
        </a>
    </div>
</template>

<script>
export default {
    name: 'LinkButton',
    props: ['text', 'theme', 'width']
}
</script>
