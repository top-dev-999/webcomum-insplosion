<template>
    <div>
        <div class="seperator" v-if="color == '' || color == 'black' "></div>
        <div class="seperator gray" v-if="color == 'gray' " ></div>
    </div>
</template>

<script>
export default {
    name: 'Seperator',
    props: ["color"]
}
</script>