<template>
    <div class="trends-control">
        <div class="trends-header">
            <h1>LATEST TRENDS</h1>
            <p>INSPLOSION TRENDS</p>
            <dt>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque <br> habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</dt>
        </div>
        <!--Emerald Green-->
        <b-row class="emerald-green-control">
            <b-col lg="6" md="12" class="trends-item-control">
                <b-row class="trends-item-row">
                    <b-col>
                        <InspirationTrendsItem title="HALLO MIRROR" description="BOCA DO LOBO" />
                    </b-col>
                    <b-col>
                        <InspirationTrendsItem title="HALLO MIRROR" description="BOCA DO LOBO" />
                    </b-col>
                </b-row>
                <b-row class="trends-item-row">
                    <b-col>
                        <InspirationTrendsItem title="HALLO MIRROR" description="BOCA DO LOBO" />
                    </b-col>
                    <b-col>
                        <InspirationTrendsItem title="HALLO MIRROR" description="BOCA DO LOBO" />
                    </b-col>
                </b-row>
            </b-col>
            <b-col lg="6" md="12" class="emerald-green-brand">
                <div class="emerald-image">
                    <img src="@/assets/images/trends/emerald-green.png" alt="">
                </div>
                <div class="emerald-green-description">
                    <h2>EMERALD GREEN</h2>
                    <dt>
                        Quisque tincidunt turpis vitae enim facilisis, rhoncus iaculis eros lobortis. Morbi varius elit vitae mattis condimentum. Pellentesque elementum, est non aliquam molestie, tellus diam accumsan.
                    </dt>
                    <ButtonLink text="VIEW ALL" theme="white" href="/trends-out" />
                </div>
            </b-col>
            
        </b-row>
        <DownloadForm bindID='emerald-green-form1' bindClass='example-collapse'/>
        <!--Emerald Green-->

        <!--CONTEMPORARY CLASSIC-->
        <b-row class="contemporary-classic-control">
            <b-col lg="6" md="12" class="contemporary-classic-brand">
                <div class="contemporary-classic-description">
                    <h2>EMERALD GREEN</h2>
                    <dt>
                        Quisque tincidunt turpis vitae enim facilisis, rhoncus iaculis eros lobortis. Morbi varius elit vitae mattis condimentum. Pellentesque elementum, est non aliquam molestie, tellus diam accumsan.
                    </dt>
                    <ButtonLink text="VIEW ALL" theme="white" href="/trends-out" />
                </div>
            </b-col>
            <b-col lg="6" md="12" class="trends-item-control">
                <b-row class="trends-item-row">
                    <b-col>
                        <InspirationTrendsItem title="HALLO MIRROR" description="BOCA DO LOBO" />
                    </b-col>
                    <b-col>
                        <InspirationTrendsItem title="HALLO MIRROR" description="BOCA DO LOBO" />
                    </b-col>
                </b-row>
                <b-row class="trends-item-row">
                    <b-col>
                        <InspirationTrendsItem title="HALLO MIRROR" description="BOCA DO LOBO" />
                    </b-col>
                    <b-col>
                        <InspirationTrendsItem title="HALLO MIRROR" description="BOCA DO LOBO" />
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
        
        <DownloadForm bindID='emerald-green-form2' bindClass='example-collapse'/>
        <!--CONTEMPARARY CLASSIC-->

        <!--Nature Brown-->
        <b-row class="nature-brown-control">
            <b-col lg="6" md="12" class="trends-item-control">
                <b-row class="trends-item-row">
                    <b-col>
                        <InspirationTrendsItem title="HALLO MIRROR" description="BOCA DO LOBO" />
                    </b-col>
                    <b-col>
                        <InspirationTrendsItem title="HALLO MIRROR" description="BOCA DO LOBO" />
                    </b-col>
                </b-row>
                <b-row class="trends-item-row">
                    <b-col>
                        <InspirationTrendsItem title="HALLO MIRROR" description="BOCA DO LOBO" />
                    </b-col>
                    <b-col>
                        <InspirationTrendsItem title="HALLO MIRROR" description="BOCA DO LOBO" />
                    </b-col>
                </b-row>
            </b-col>
            <b-col lg="6" md="12" class="nature-brown-brand">
                <div class="nature-brown-image">
                    <img src="@/assets/images/trends/nature-brown.png" alt="">
                </div>
                <div class="nature-brown-description">
                    <h2>EMERALD GREEN</h2>
                    <dt>
                        Quisque tincidunt turpis vitae enim facilisis, rhoncus iaculis eros lobortis. Morbi varius elit vitae mattis condimentum. Pellentesque elementum, est non aliquam molestie, tellus diam accumsan.
                    </dt>
                    <ButtonLink text="VIEW ALL" theme="white" href="/trends-out" />
                </div>
            </b-col>
        </b-row>
        <DownloadForm  bindID='emerald-green-form3' bindClass='example-collapse'/>
        <!--Nature Brown-->
    </div>
</template>

<script>
import ButtonLink from '@/components/basic/ButtonLink';
import InspirationTrendsItem from '@/components/Inspirations/InspirationTrendsItem';
import DownloadForm from '@/components/DownloadForm';
export default {
    name: "TrendsControl",
    components: {
        ButtonLink,
        InspirationTrendsItem,
        DownloadForm
    }
}
</script>