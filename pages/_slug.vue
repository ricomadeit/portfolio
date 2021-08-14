<template>
    <div>
        <div :class="[`h-screen prose px-8 py-4 mb- overflow-auto max-w-full ${slugBackground}`]">
            <article class="h-full w-full text-base md:text-lg tracking-normal">
                <nuxt-content class="pb-8" :document="article" />
            </article>
        </div>
        <footer class="fixed bottom-0 right-0 w-full text-center">
            <div class="flex justify-items-stretch bg-white rounded transition duration-300 hover:bg-gray-500 hover:text-white">
                <NuxtLink class="w-full text-lg md:text-2xl" to="/"> Back to space </NuxtLink>
            </div>
        </footer>
    </div>
</template>

<script>

export default {
    async asyncData({ $content, params }) {
        const article = await $content('ResumeContent', params.slug).fetch()
        return { article }
    },
    computed: {
        slugBackground() {
            switch (this.article.slug) {
                case 'about':
                    return 'bg-green-300'
                case 'education':
                    return 'bg-red-300'
                case 'experience':
                    return 'bg-gray-300'
                case 'projects':
                    return 'bg-indigo-300'
                case 'skills':
                    return 'bg-purple-300'
                case 'synopsis':
                    return 'bg-blue-300'
                }
            return 'bg-white'
        }
    },
}
</script>