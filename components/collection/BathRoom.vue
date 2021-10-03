<template>
    <div class="bath-room">
        <div class="bath-room-control">
            <h2>Bath Room</h2>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi <br /> tristique senectus et netus et malesuada fames ac turpis egestas.</p>
            <div class="bath-room-lists">
                <b-row>
                    <b-col lg="3" md="6" v-for="(item, index) in data.slice(0, showing)" :key="index">
                        <InspirationTrendsItem :title="item.title" :description="item.description" />
                    </b-col>
                    
                </b-row>
            </div>
            <ViewAll text="VIEW ALL" @view-more="handleMore" v-if="this.showing < this.data.length"/>
        </div>
        <div class="bath-room-form">
            <BathRoomForm />
        </div>
    </div>
</template>

<script>
import ViewAll from '@/components/basic/ViewAll';
import InspirationTrendsItem from '@/components/Inspirations/InspirationTrendsItem';
import BathRoomForm from '@/components/collection/BathRoomForm';
export default {
    name: 'BathRoom',
    components: {
        InspirationTrendsItem,
        ViewAll,
        BathRoomForm
    },
    data: function() {
        return {
            data: [
                {
                    title: "MALO MIRROR",
                    description: "Lopem text ..."
                },
                {
                    title: "MALO MIRROR",
                    description: "Lopem text ..."
                },
                {
                    title: "MALO MIRROR",
                    description: "Lopem text ..."
                },
                {
                    title: "MALO MIRROR",
                    description: "Lopem text ..."
                },
                {
                    title: "MALO MIRROR",
                    description: "Lopem text ..."
                },
                {
                    title: "MALO MIRROR",
                    description: "Lopem text ..."
                },
                {
                    title: "MALO MIRROR",
                    description: "Lopem text ..."
                },
                {
                    title: "MALO MIRROR",
                    description: "Lopem text ..."
                },
                {
                    title: "MALO MIRROR",
                    description: "Lopem text ..."
                },
                {
                    title: "MALO MIRROR",
                    description: "Lopem text ..."
                },
                {
                    title: "MALO MIRROR",
                    description: "Lopem text ..."
                },
                {
                    title: "MALO MIRROR",
                    description: "Lopem text ..."
                },
                {
                    title: "MALO MIRROR",
                    description: "Lopem text ..."
                },
                {
                    title: "MALO MIRROR",
                    description: "Lopem text ..."
                },
                {
                    title: "MALO MIRROR",
                    description: "Lopem text ..."
                },
                {
                    title: "MALO MIRROR",
                    description: "Lopem text ..."
                },
                {
                    title: "MALO MIRROR",
                    description: "Lopem text ..."
                },
                {
                    title: "MALO MIRROR",
                    description: "Lopem text ..."
                },
                {
                    title: "MALO MIRROR",
                    description: "Lopem text ..."
                },
                {
                    title: "MALO MIRROR",
                    description: "Lopem text ..."
                },
                {
                    title: "MALO MIRROR",
                    description: "Lopem text ..."
                },
                {
                    title: "MALO MIRROR",
                    description: "Lopem text ..."
                },
            ],
            step: 8,
            showing: 8,
        }
    },
    methods: {
        handleMore() {
            if (this.data.length > this.showing) {
                if (this.data.length - this.showing > this.step) {
                    this.showing += this.step
                } else {
                    this.showing += this.data.length - this.showing;
                }
            }
        }
    }
}
</script>