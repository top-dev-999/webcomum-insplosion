<template>
    <small :class="bindClass">{{text}}</small>
</template>

<script>
export default {
    name: 'SmallText',
    props: ['text', 'bindClass']
}
</script>
