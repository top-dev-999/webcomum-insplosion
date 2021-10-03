<template>
    <div class="hall">
        <div class="hall-control">
            <h2>Hall</h2>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi <br /> tristique senectus et netus et malesuada fames ac turpis egestas.</p>
            <div class="hall-lists">
                <b-row>
                    <b-col lg="3" md="6" v-for="(item, index) in data.slice(0, showing)" :key="index">
                        <InspirationTrendsItem :title="item.title" :description="item.description" />
                    </b-col>
                </b-row>
            </div>
            <ViewAll text="VIEW ALL" @view-more="handleMore" v-if="this.showing < this.data.length"/>
        </div>
        <div class="hall-form">
            <HallForm />
        </div>
    </div>
</template>

<script>
import ViewAll from '@/components/basic/ViewAll';
import InspirationTrendsItem from '@/components/Inspirations/InspirationTrendsItem';
import HallForm from '@/components/collection/HallForm';
export default {
    name: 'Hall',
    components: {
        InspirationTrendsItem,
        ViewAll,
        HallForm
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