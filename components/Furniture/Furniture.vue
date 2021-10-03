<template>
    <div>
        <div class="furniture-lists d-none d-lg-flex">
            <div v-for="furniture in furnitures" :key="furniture.description" >
                <FurnitureItem :description="furniture.description" :image="furniture.image" />
            </div>  
        </div>
        <div class="d-none d-md-flex d-lg-none furniture-lists-mobile">
            <b-carousel
            v-model="slide"
            :interval="0"
            controls
            img-width="1024"
            img-height="480"
            background="#ededed"
       
            class="furniture-slide"
            >
            
            <b-carousel-slide>
                <template #img>
                    <div v-for="furniture in furnitures.slice(0,4)" :key="furniture.description" >
                        <FurnitureItem :description="furniture.description" :image="furniture.image" />
                    </div>
                </template>
            </b-carousel-slide>

            <b-carousel-slide>
                <template #img>
                    <div v-for="furniture in furnitures.slice(4,8)" :key="furniture.description" >
                        <FurnitureItem :description="furniture.description" :image="furniture.image" />
                    </div>
                </template>
            </b-carousel-slide>
           
            </b-carousel>

            
        </div>
        <div class=" d-sm-flex d-lg-none d-md-none furniture-lists-mobile">
            <b-carousel
            v-model="slide"
            :interval="0"
            controls
            img-width="1024"
            img-height="480"
            background="#ededed"
          
            class="furniture-slide"
            >
            
            <b-carousel-slide v-for="(furniture, index) in furnitures" :key="index">
                <template #img class="text-center">
                        <FurnitureItem :description="furniture.description" :image="furniture.image" />
                </template>
            </b-carousel-slide>
           
            </b-carousel>

            
        </div>
    </div>
</template>

<script>

import FurnitureItem from '@/components/Furniture/FurnitureItem';

export default {
    name: 'Furniture',
    components: {
        FurnitureItem
    },
    data: function () {
        return {
            furnitures: [
                {
                    image: require('@/assets/images/furnitures/sideboard.png'),
                    description: 'SIDEBOARDS'
                },
                {
                    image: require('@/assets/images/furnitures/cabinet.png'),
                    description: 'CABINETS'
                },
                {
                    image: require('@/assets/images/furnitures/console.png'),
                    description: 'CONSOLES'
                },
                {
                    image: require('@/assets/images/furnitures/mirror.png'),
                    description: 'MIRRORS'
                },
                {
                    image: require('@/assets/images/furnitures/lighting.png'),
                    description: 'LIGHTING'
                },
                {
                    image: require('@/assets/images/furnitures/armchair.png'),
                    description: 'ARMCHAIRS'
                },
                {
                    image: require('@/assets/images/furnitures/sofa.png'),
                    description: 'SOFAS'
                },
                {
                    image: require('@/assets/images/furnitures/dinningChair.png'),
                    description: 'DINNING CHAIRS'
                },
                {
                    image: require('@/assets/images/furnitures/dinningTable.png'),
                    description: 'DINNING TABLES'
                },
                {
                    image: require('@/assets/images/furnitures/centerTable.png'),
                    description: 'CENTER TABLES'
                },
                {
                    image: require('@/assets/images/furnitures/bathroom.png'),
                    description: 'BATHROOM'
                }
            ]
        }
    }
}
</script>