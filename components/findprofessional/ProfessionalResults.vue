<template>
    <div class="professional-results-control">
        <b-row class="mx-0">
            <b-col sm="1"></b-col>
            <b-col sm="10">
                <b-row class="professional-results-row">
                    <b-col lg="3" md="6" sm="12" class="py-3">
                        <ProfessionalResultItem />
                    </b-col>
                    <b-col lg="3" md="6" sm="12" class="py-3">
                        <ProfessionalResultItem />
                    </b-col>
                    <b-col lg="3" md="6" sm="12" class="py-3">
                        <ProfessionalResultItem />
                    </b-col>
                    <b-col lg="3" md="6" sm="12" class="py-3">
                        <ProfessionalBannerItem />
                    </b-col>
                    <b-col lg="3" md="6" sm="12" class="py-3">
                        <ProfessionalResultItem />
                    </b-col>
                    <b-col lg="3" md="6" sm="12" class="py-3">
                        <ProfessionalResultItem />
                    </b-col>
                    <b-col lg="3" md="6" sm="12" class="py-3">
                        <ProfessionalResultItem />
                    </b-col>
                    <b-col lg="3" md="6" sm="12" class="py-3">
                        <ProfessionalResultItem />
                    </b-col>
                    <b-col lg="3" md="6" sm="12" class="py-3">
                        <ProfessionalResultItem />
                    </b-col>
                    <b-col lg="3" md="6" sm="12" class="py-3">
                        <ProfessionalResultItem />
                    </b-col>
                    <b-col lg="3" md="6" sm="12" class="py-3">
                        <ProfessionalResultItem />
                    </b-col>
                    <b-col lg="3" md="6" sm="12" class="py-3">
                        <ProfessionalResultItem />
                    </b-col>
                </b-row>
            </b-col>
            <b-col sm="1"></b-col>
        </b-row>
    </div>
</template>

<script>
import ProfessionalResultItem from '@/components/findprofessional/ProfessionalResultItem';
import ProfessionalBannerItem from '@/components/findprofessional/ProfessionalBannerItem';
export default {
    name: 'ProfessionalResults',
    components: {
        ProfessionalResultItem,
        ProfessionalBannerItem
    }
}
</script>