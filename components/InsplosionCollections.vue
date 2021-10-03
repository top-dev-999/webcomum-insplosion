<template>
    <div id="collections">
        <b-row class="mx-0">
            <b-col offset-lg="2" lg="8" class="inspiration-collections-header">
                <div>
                    <SmallText text="DISCOVER OUR COLLECTIONS" />
                    <h2>INSPIRATION COLLECTION</h2>
                </div>
                <div>
                    <Button02 text='VIEW ALL TRENDS' theme="black"  hover="black-white"/>
                </div>
            </b-col>
        </b-row>
        <div class="insplosion-collections-control">
            <b-row class="mx-0" align-v="stretch">
                <b-col lg="1"></b-col>
                <b-col lg="2">
                    <InsplosionCollectionSmallItem :data="smallSlide" />
                    <InsplosionCollectionSmallItem :data="smallSlide" />
                </b-col>
                <b-col lg="2">
                    <InsplosionCollectionSmallItem :data="smallSlide" />
                    <InsplosionCollectionSmallItem :data="smallSlide" />
                </b-col>
                <b-col lg="2">
                    <InsplosionCollectionSmallItem :data="smallSlide" />
                    <InsplosionCollectionSmallItem :data="smallSlide" />
                </b-col>
                <b-col lg="4">
                    <InsplosionCollectionBigItem :data="bigSlide" />
                </b-col>
                <b-col lg="1"></b-col>
            </b-row>
            <b-row class="mx-0">
                <b-col lg="1"></b-col>
                <b-col lg="2">
                    <InsplosionCollectionSmallItem :data="smallSlide" />
                </b-col>
                <b-col lg="2">
                    <InsplosionCollectionSmallItem :data="smallSlide" />
                </b-col>
                <b-col lg="2">
                    <InsplosionCollectionSmallItem :data="smallSlide" />
                </b-col>
                <b-col lg="2">
                    <InsplosionCollectionSmallItem :data="smallSlide" />
                </b-col>
                <b-col lg="2">
                    <InsplosionCollectionSmallItem :data="smallSlide" />
                </b-col>
                <b-col lg="1"></b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
import InsplosionCollectionSmallItem from '@/components/InsplosionCollectionSmallItem';
import InsplosionCollectionBigItem from '@/components/InsplosionCollectionBigItem';
import SmallText from '@/components/basic/SmallText';
import Button02 from '@/components/basic/Button02';
export default {
    name: 'InsplosionCollections',
    components: {
        InsplosionCollectionSmallItem,
        InsplosionCollectionBigItem,
        SmallText,
        Button02
    },
    data: function () {
        return {
            bigSlide: [
                {
                    catalogue: 'MOST WANTED',
                    image: require('@/assets/images/inspiration/collections/empire-column-display-01.png'),
                    title: 'MODERN MARBLE LIVING ROOM',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
                },
                {
                    catalogue: 'MOST WANTED',
                    image: require('@/assets/images/inspiration/collections/empire-column-display-01.png'),
                    title: 'MODERN MARBLE LIVING ROOM',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
                },
                {
                    catalogue: 'MOST WANTED',
                    image: require('@/assets/images/inspiration/collections/empire-column-display-01.png'),
                    title: 'MODERN MARBLE LIVING ROOM',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
                }
            ],
            smallSlide: [
                {
                    image: require('@/assets/images/inspiration/collections/small/img.png'),
                    title: 'MOST WANTED',
                    description: '+71 PRODUCTS'
                },
                {
                    image: require('@/assets/images/inspiration/collections/small/img.png'),
                    title: 'MOST WANTED',
                    description: '+71 PRODUCTS'
                },
                {
                    image: require('@/assets/images/inspiration/collections/small/img.png'),
                    title: 'MOST WANTED',
                    description: '+71 PRODUCTS'
                },
            ]
        }
    }
}
</script>