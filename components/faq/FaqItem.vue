<template>
    <div class="faq-item">
        <div class="faq-item-question-control" :aria-controls="control"
            :class="visible ? null : 'collapsed'"
            @click="toggleView"
            :aria-expanded="visible ? 'true' : 'false'">
            <div v-if="visible == true" class="faq-item-question-opened faq-item-question">
                <p>-&nbsp;&nbsp;&nbsp;{{question}}</p>
                <b-icon icon="dash"></b-icon>
            </div>
            <div v-if="visible == false" class="faq-item-question-closed faq-item-question">
                <p>{{question}}</p>
                <b-icon icon="plus"></b-icon>
            </div>
        </div>
        <b-collapse :id="control" v-model="visible">
            <div class="faq-item-answer">
                <p>{{ answer }}</p>
            </div>
        </b-collapse>
        
    </div>
</template>

<script>
export default {
    name: "FaqItem",
    props: ["question", "answer", "control", "visible", "group"],
    
    methods: {
        toggleView() {
            this.visible = !this.visible;
            this.$emit('hide-others', this.question, this.visible, this.group);
        }
    }
}
</script>

<style lang="scss" scoped>
    
</style>