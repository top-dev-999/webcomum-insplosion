<template>
    <div class="believe-control">
        <h2>OUR BELIEVES</h2>
        <b-container class="believe-tabs d-none d-lg-block" >
            <ul>
                <li @click="selected = 'trendsetting'" :class="selected == 'trendsetting' ? 'selected' : null">TRENDSETTING</li>
                <li @click="selected = 'excellence'" :class="selected == 'excellence' ? 'selected' : null">EXCELLENCE</li>
                <li @click="selected = 'commitment'" :class="selected == 'commitment' ? 'selected' : null">COMMITMENT</li>
                <li @click="selected = 'innovation'" :class="selected == 'innovation' ? 'selected' : null">INNOVATION</li>
                <li @click="selected = 'individuality'" :class="selected == 'individuality' ? 'selected' : null">INDIVIDUALITY</li>
            </ul>
        </b-container>

        <Seperator color="black"/>

        <BelieveItem type='image-first' />
        <BelieveItem type='description-first' />
        <BelieveItem type='image-first' />
        <BelieveItem type='description-first' />
    </div>
</template>

<script>

import Seperator from '@/components/basic/Seperator';
import Button from '@/components/basic/button';
import BelieveItem from '@/components/Believes/BelieveItem';
export default {
    name: 'Believes',
    components: {
        Seperator,
        Button,
        BelieveItem
    },
    data: function() {
        return {
            selected: 'excellence'
        }
    }
}
</script>