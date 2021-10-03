<template>
    <div class="inspiration-trends-control" id="trends">
        <div class="inspiration-trends-header">
            <div>
                <SmallText text="DISCOVER OUR TRENDS" />
                <h2>INSPIRATION TRENDS</h2>
            </div>
            <div>
                <Button02 text='VIEW ALL TRENDS' theme="black" hover="black-white" />
            </div>
        </div>
        <div class="inspiration-trends-lists">
            <b-row class="inspiration-trends-row">
                <b-col lg="3" md="6" sm="6" v-for="trend in trends" :key="trend.id">
                    <InspirationTrendsItem :title="trend.title" :description="trend.description" />
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
import SmallText from '@/components/basic/SmallText';
import Button02 from '@/components/basic/Button02';
import InspirationTrendsItem from '@/components/Inspirations/InspirationTrendsItem';
export default {
    name: 'InspirationTrends',
    components: {
        SmallText,
        Button02,
        InspirationTrendsItem
    },
    data: function() {
        return {
            trends: [
                {
                    id: 1,
                    title: "HALO MIRROR",
                    description: "BOCA DO LOBO"
                },
                {
                    id: 2,
                    title: "HALO MIRROR",
                    description: "BOCA DO LOBO"
                },
                {
                    id: 3,
                    title: "HALO MIRROR",
                    description: "BOCA DO LOBO"
                },
                {
                    id: 4,
                    title: "HALO MIRROR",
                    description: "BOCA DO LOBO"
                },
                {
                    id: 5,
                    title: "HALO MIRROR",
                    description: "BOCA DO LOBO"
                },
                {
                    id: 6,
                    title: "HALO MIRROR",
                    description: "BOCA DO LOBO"
                },
                {
                    id: 7,
                    title: "HALO MIRROR",
                    description: "BOCA DO LOBO"
                },
                {
                    id: 8,
                    title: "HALO MIRROR",
                    description: "BOCA DO LOBO"
                },
            ]
        }
    }
}
</script>