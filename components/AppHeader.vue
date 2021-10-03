<template>
    <div>
        <AppNavbar />
        <AppMenu theme='dark' height='big'/>
    </div>
</template>

<script>
import AppNavbar from '@/components/AppNavbar';
import AppMenu from '@/components/AppMenu';
export default {
    name: 'AppHeader',
    components: {
        AppNavbar,
        AppMenu
    }
}
</script>