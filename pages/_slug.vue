<template>
    <div :class="[`prose px-8 py-4 overflow-auto max-w-full h-screen ${slugBackground}`]">
        <article class="pb-4 text-lg tracking-normal">
            <nuxt-content :document="article" />
        </article>
        <div class="flex justify-end">
            <div class="bg-white w-48 rounded transition duration-300 transform hover:-translate-y-1">
                <NuxtLink class="pl-2 text-2xl" to="/"> Back to space </NuxtLink>
            </div>
        </div>
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
                case 'summary':
                    return 'bg-blue-300'
                }
            return 'bg-white'
        }
    },
}
</script>