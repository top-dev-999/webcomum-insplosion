<template>
    <div class="search-professional-control">
        <h1>THE EXPERT</h1>
        <h2>Find a Professional</h2>
        <dt>
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque <br> habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        </dt>
        <b-row class="search-control">
            <b-col md="6" sm="12" offset-md="3">
                <SearchWithIcon placeholder="Your Location" />
            </b-col>
        </b-row>
        <div class="selection-control">
            <div class="selectors">
                <b-form-select v-model="distanceSelected" :options="distanceOptions"></b-form-select>
            </div>
            <div class="selectors">
                <b-form-select v-model="priceSelected" :options="priceOptions"></b-form-select>
            </div>
            <div class="selectors">
                <b-form-select v-model="styleSelected" :options="styleOptions"></b-form-select>
            </div>
            <div class="selectors">
                <b-form-select v-model="regionSelected" :options="regionOptions"></b-form-select>
            </div>
        </div>
    </div>
</template>

<script>
import SearchWithIcon from '@/components/basic/SearchWithIcon';
export default {
    name: "SearchProfessional",
    components: {
        SearchWithIcon
    },
    data: function () {
        return {
            distanceSelected: null,
            priceSelected: null,
            styleSelected: null,
            regionSelected: null,
            distanceOptions: [
                { value: null, text: 'Distance' },
                { value: 1, text: 'Distance1' },
                { value: 2, text: 'Distance2' },
                { value: 3, text: 'Distance3' },
            ],
            priceOptions: [
                { value: null, text: 'Price' },
                { value: 1, text: 'Price1' },
                { value: 2, text: 'Price2' },
                { value: 3, text: 'Price3' },
            ],
            styleOptions: [
                { value: null, text: 'Style' },
                { value: 1, text: 'Style1' },
                { value: 2, text: 'Style2' },
                { value: 3, text: 'Style3' },
            ],
            regionOptions: [
                { value: null, text: 'Region' },
                { value: 1, text: 'Region1' },
                { value: 2, text: 'Region2' },
                { value: 3, text: 'Region3' },
            ],
        }
    }
}
</script>