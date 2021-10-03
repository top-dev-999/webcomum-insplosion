<template>
    <div class="inspiration-with-tag-control" id="press-room">
        <div class="inspiration-with-tag-description" :class="$mq">
            <div>
                <SmallText text="DISCOVER OUR INSPIRATION" />
                <h2>INSPIRATIONS ROOM BY ROOM!</h2>
            </div>
            <div>
                <ul>
                    <TabItem v-for="item in Object.keys(items)" :key="item" :text="item" :selected="item == selectedItem"
                    @select-item="selectItem" />
                </ul>
            </div>
            <div class="inspiration-with-tag-image" :class="$mq" v-if="$mq == 'tablet' || $mq == 'mobile'">
                <img :src="items[selectedItem].image" alt="">
                <div v-for="indicator in items[selectedItem].indicators" :key="indicator.title"
                    :style="{ position: 'absolute', top: indicator.y, left: indicator.x }"
                    >
                    <FurnitureIndicator :top="indicator.y" :left="indicator.x" 
                        :title="indicator.title" :description="indicator.description"
                        :furniture="indicator.furniture" />
                </div>
            </div>
            <div class="button-container" :class="$mq">
                <Button02 text="VIEW ALL INSPIRATIONS" theme='white' hover="white-black" />
            </div>
        </div>
        <div class="inspiration-with-tag-image" v-if="$mq == 'desktop'">
            <img :src="items[selectedItem].image" alt="">
            <div v-for="indicator in items[selectedItem].indicators" :key="indicator.title"
                    :style="{ position: 'absolute', top: indicator.y, left: indicator.x }"
                    >
                <FurnitureIndicator :top="indicator.y" :left="indicator.x" 
                        :title="indicator.title" :description="indicator.description"
                        :furniture="indicator.furniture" :id="indicator.id" />
            </div>
        </div>
    </div>

</template>

<script>
import SmallText from '@/components/basic/SmallText';
import TabItem from '@/components/basic/tab/TabItem';
import Button02 from '@/components/basic/Button02';
import FurnitureIndicator from '@/components/basic/FurnitureIndicator';
export default {
    name: 'InspirationWithTag',
    components: {
        SmallText,
        TabItem,
        Button02,
        FurnitureIndicator
    },
    data: function() {
        return {
            
            selectedItem: "CATALOGUES",
            items : {
                'CATALOGUES': {
                    image: require('@/assets/images/inspiration/withtags/image1.png'),
                    indicators: [
                        {id: '123310', x: '32%', y: '87%', furniture: '', title: 'HALO MIRROR1', description: 'SOCA DO LOBA'},
                        {id: '123311', x: '12%', y: '56%', furniture: '', title: 'HALO MIRROR2', description: 'SOCA DO LOBA'},
                        {id: '123312', x: '32%', y: '12%', furniture: '', title: 'HALO MIRROR3', description: 'SOCA DO LOBA'},
                    ]
                },
                'INSPIRATIONS': {
                    image: require('@/assets/images/inspiration/withtags/image2.png'),
                    indicators: [
                        {id: '123313', x: '23%', y: '12%', furniture: '', title: 'HALO MIRROR1', description: 'SOCA DO LOBA'},
                        {id: '123314', x: '76%', y: '32%', furniture: '', title: 'HALO MIRROR2', description: 'SOCA DO LOBA'},
                        {id: '123315', x: '43%', y: '45%', furniture: '', title: 'HALO MIRROR3', description: 'SOCA DO LOBA'},
                    ]
                },
                'EBOOKS': {
                    image: require('@/assets/images/inspiration/withtags/image3.png'),
                    indicators: [
                        {id: '123316', x: '21%', y: '54%', furniture: '', title: 'HALO MIRROR1', description: 'SOCA DO LOBA'},
                        {id: '123317', x: '45%', y: '93%', furniture: '', title: 'HALO MIRROR2', description: 'SOCA DO LOBA'},
                        {id: '123318', x: '32%', y: '33%', furniture: '', title: 'HALO MIRROR3', description: 'SOCA DO LOBA'},
                    ]
                },
                'MOODBOARD': {
                    image: require('@/assets/images/inspiration/withtags/image1.png'),
                    indicators: [
                        {id: '123319', x: '38%', y: '51%', furniture: '', title: 'HALO MIRROR1', description: 'SOCA DO LOBA'},
                        {id: '123320', x: '50%', y: '23%', furniture: '', title: 'HALO MIRROR2', description: 'SOCA DO LOBA'},
                        {id: '123321', x: '65%', y: '87%', furniture: '', title: 'HALO MIRROR3', description: 'SOCA DO LOBA'},
                    ]
                },
                'INFOGRAPHICS': {
                    image: require('@/assets/images/inspiration/withtags/image2.png'),
                    indicators: [
                        {id: '123322', x: '3%', y: '51%', furniture: '', title: 'HALO MIRROR1', description: 'SOCA DO LOBA'},
                        {id: '123323', x: '78%', y: '61%', furniture: '', title: 'HALO MIRROR2', description: 'SOCA DO LOBA'},
                        {id: '1233124', x: '65%', y: '27%', furniture: '', title: 'HALO MIRROR3', description: 'SOCA DO LOBA'},
                    ]
                },
            }
        }
    },
    methods: {
        selectItem(text) {
            this.selectedItem = text;      
        }
    }
}
</script>