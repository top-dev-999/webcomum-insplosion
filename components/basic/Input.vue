<template>
    <div class="input-component">
        <input type="text" :placeholder=placeholder class="form-control input-control">
        <span v-if="isEmpty == 'true'">!This field can not be blank.</span>
    </div>
</template>

<script>
export default {
    name: 'Input',
    props: ['placeholder', 'isEmpty']
}
</script>