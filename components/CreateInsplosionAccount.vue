<template>
    <div class="create-insplosion-account-control">
        <h1>JOIN US</h1>
        <p>CREATE YOUR <br /> INSPLOSION ACCOUNT</p>
        <dt>
            Find the latest interior design inspirations and projects from the world's <br > best designers and furniture brands and build the perfect living space.
        </dt>
        <div class="create-account-control">
            <CreateAccountForm />
        </div>
    </div>
</template>

<script>
import CreateAccountForm from '@/components/basic/CreateAccountForm';
export default {
    name: 'CreateInsplosionAccount',
    components: {
        CreateAccountForm
    }
}
</script>