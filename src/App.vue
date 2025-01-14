<template>
    <div class="min-h-screen flex">
        <Sidebar v-if="!isAuthPage"/>
    
        <div class="flex-1">
            <Navbar v-if="!isAuthPage"/>
            
            <main v-if="!isAuthPage" class="p-6">
                <div v-if="!isAuthPage" class="bg-gray-100 p-4 rounded shadow">
                    <RouterView></RouterView>
                </div>

                <RouterView v-else/>
            </main>
        </div>
    </div>
</template>

<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'

import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'

const route = useRoute()

const isAuthPage = ['/auth/login', '/auth/register'].includes(route.path)
</script>

<style scoped>

</style>