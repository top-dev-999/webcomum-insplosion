<template>
    <b-container fluid class="search-page">
        <b-row>
            <b-col lg="1"></b-col>
            <b-col lg="10" class="text-right">
               <b-icon icon="x-circle" font-scale="2"></b-icon>
            </b-col>
            <b-col lg="1"></b-col>
        </b-row>
        <b-row>
            <b-col col></b-col>
            <b-col lg='6' class="search-content text-center">
                <h3>SEARCH</h3>
                <p>Search by item, collection, inspiration…</p>
                <div class="search-input">
                    <input type="text" placeholder="SEARCH HERE"/>
                    <img src="@/assets/images/basic/ic-search-dark.png" alt="">
                </div>
            </b-col>
            <b-col col></b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    name: 'search',
    layout: 'empty'
}
</script>