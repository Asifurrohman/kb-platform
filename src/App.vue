<template>
    <div class="max-w-screen grid grid-cols-12">
        <Sidebar class="col-span-3"/>
        <div class="col-span-9">
            <Navbar class="sticky top-0"/>
            <RouterView></RouterView>
        </div>
    </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'

import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'
</script>

<style scoped>

</style>