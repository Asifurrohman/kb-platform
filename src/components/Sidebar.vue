<template>
    <aside class="w-64 bg-white shadow-md sticky top-0 h-screen">
        <div class="p-4">
            <h1 class="text-2xl font-bold">Admin Dashboard</h1>
        </div>
        <nav class="mt-4 space-y-2">
            <ul>
                <li>
                    <RouterLink to="/" class="block py-2 px-4 hover:bg-gray-700 rounded">
                        <a>Beranda</a>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/adik-bintang-saya" class="block py-2 px-4 hover:bg-gray-700 rounded">
                        <a>Adik Bintang Saya</a>
                    </RouterLink>
                </li>
            </ul>
        </nav>
    </aside>
</template>

<script setup>

</script>

<style scoped>

</style>