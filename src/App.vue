<template>
    <div class="min-h-screen flex">
        <Sidebar v-if="!route.meta.hideSidebar"/>
    
        <div class="flex-1">
            <Navbar v-if="!route.meta.hideNavbar"/>
            
            <main :class="dashboardClasses" class="bg-light-gray">
                <RouterView></RouterView>
            </main>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'

import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'

const route = useRoute()

const dashboardClasses = computed(() => {
    return route.meta.hideNavbar || route.meta.hideSidebar ? '' : 'p-6'
})

</script>

<style scoped>

</style>