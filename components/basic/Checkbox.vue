<template>
    <div class="checkbox-control">
        <b-form-checkbox
            v-model="isChecked"
            name="checkbox-1"
            value="accepted"
            unchecked-value="not_accepted"
            :class="theme"
            >
            {{text}}
            </b-form-checkbox>
    </div>
</template>

<script>
export default {
    name: 'Checkbox',
    props: ['text', 'isChecked', 'theme']
}
</script>

<style lang="scss" scoped>
    
</style>