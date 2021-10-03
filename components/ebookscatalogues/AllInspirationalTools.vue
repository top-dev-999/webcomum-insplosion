<template>
    <div class="all-inspiration-tools-control">
        <div class="all-inspiration-tools-header">
            <h2>ALL INSPIRATIONAL TOOLS</h2>
            <div class="all-inspiration-tools-selectors">
                <div class="empty-control"></div>
                <div class="tab-control">
                    <InspirationTabs selected="all"/>
                    <div class="selectors">
                        <b-form-select v-model="selected" :options="options"></b-form-select>
                    </div>
                </div>
                <div class="download-control">
                    <div class="download-circle">
                        <b-icon icon="download" variant="danger"></b-icon>
                        <b-badge variant="dark" pill class="download-badge">{{ downloadCount }}</b-badge>
                    </div>
                </div>
            </div>
        </div>
        <div class="all-inspiration-tools-content">
            <div class="all-inspiration-tools-row">
                <div class="inspiration-tool-item-control">
                    <InspirationToolItem />
                </div>
                <div class="inspiration-tool-item-control">
                    <InspirationToolItem />
                </div>
                <div class="inspiration-tool-item-control">
                    <InspirationToolItem />
                </div>
                <div class="inspiration-tool-item-control">
                    <InspirationToolItem />
                </div>
                <div class="inspiration-tool-item-control">
                    <InspirationToolItem />
                </div>
            </div>
            <div class="all-inspiration-tools-row">
                <div class="inspiration-tool-item-control">
                    <InspirationToolItem />
                </div>
                <div class="inspiration-tool-item-control">
                    <InspirationToolItem />
                </div>
                <div class="inspiration-tool-item-control">
                    <InspirationToolItem />
                </div>
                <div class="inspiration-tool-item-control">
                    <InspirationToolItem />
                </div>
                <div class="inspiration-tool-item-control">
                    <InspirationToolItem />
                </div>
            </div>
            <div class="all-inspiration-tools-row">
                <div class="inspiration-tool-item-control">
                    <InspirationToolItem />
                </div>
                <div class="inspiration-tool-item-control">
                    <InspirationToolItem />
                </div>
                <div class="inspiration-tool-item-control">
                    <InspirationToolItem />
                </div>
                <div class="inspiration-tool-item-control">
                    <InspirationToolItem />
                </div>
                <div class="inspiration-tool-item-control">
                    <InspirationToolItem />
                </div>
            </div>
        </div>
        <div class="view-all-control">
          <ViewAll text="VIEW MORE"/>
        </div>
    </div>
</template>

<script>
import InspirationTabs from '@/components/ebookscatalogues/InspirationTabs';
import InspirationToolItem from '@/components/ebookscatalogues/InspirationToolItem';
import ViewAll from '@/components/basic/ViewAll';
export default {
    name: 'AllInspirationalTools',
    components: {
        InspirationTabs,
        InspirationToolItem,
        ViewAll
    },
    data: function () {
        return {
            downloadCount: 3,
            selected: null,
            options: [
                { value: null, text: 'Please select an option' },
                { value: 'a', text: 'This is First option' },
                { value: 'b', text: 'Selected Option' },
                { value: { C: '3PO' }, text: 'This is an option with object value' },
                { value: 'd', text: 'This one is disabled', disabled: true }
            ]
        }
    }
}
</script>