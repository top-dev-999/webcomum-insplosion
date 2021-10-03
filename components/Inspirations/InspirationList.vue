<template>
    <div class="insiration-list-control">
        <div class="inspiration-list-header">
            <h2>INSPIRATIONS</h2>
            <Button02 text="VIEW MORE INSPIRATION" theme="black" hover='black-white'/>
        </div>
        <InspirationListSlide />
    </div>
</template>

<script>

import Button02 from '@/components/basic/Button02';
import InspirationListSlide from '@/components/Inspirations/InspirationListSlide';
export default {
    name: 'InspirationList',
    components: {
        Button02,
        InspirationListSlide
    }
}
</script>