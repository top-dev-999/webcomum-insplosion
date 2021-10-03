<template>
    <div class="page-up-arrow" @click="pageUp">
        <img src="@/assets/images/basic/arrow-top.png" alt="">
    </div>
</template>

<script>
export default {
    name: 'PageUpArrow',
    methods: {
        pageUp() {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    }
}
</script>