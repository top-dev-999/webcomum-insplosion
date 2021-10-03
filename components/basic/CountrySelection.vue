<template>
    <b-form-select v-model="selected" :options="options" place></b-form-select>
</template>

<script>
export default {
    name: 'CountrySelection',
    data: function() {
        return {
            selected: null,
            options: [
                { value: null, text: 'COUNTRY' },
                { value: 'pt', text: "Portugal" },
                { value: 'sp', text: "Spain" },
            ]
        }
    }
}
</script>