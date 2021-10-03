<template>
    <div class="best-sellers-control">
        <h1>BEST SELLERS</h1>
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi <br /> tristique senectus et netus et malesuada fames ac turpis egestas.</p>
        <div class="best-sellers-lists">
            <b-row>
                <b-col lg="3" md="6" v-for="(item, index) in data.slice(0, showing)" :key="index">
                    <InspirationTrendsItem :title="item.title" :description="item.description" />
                </b-col>
                
            </b-row>
        </div>
        <ViewAll text="VIEW ALL" @view-more="handleMore" v-if="this.showing < this.data.length"/>
    </div>
</template>

<script>
import ViewAll from '@/components/basic/ViewAll';
import InspirationTrendsItem from '@/components/Inspirations/InspirationTrendsItem';
export default {
    name: 'BestSellers',
    components: {
        InspirationTrendsItem,
        ViewAll
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