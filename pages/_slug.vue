<template>
    <div :class="[`prose px-8 py-4 overflow-auto max-w-full h-screen ${slugBackground}`]">
        <article>
            <nuxt-content :document="article" />
        </article>
        <NuxtLink to="/"> Back to space </NuxtLink>
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
                    return 'bg-green-400'
                case 'education':
                    return 'bg-red-400'
                case 'experience':
                    return 'bg-gray-400'
                case 'projects':
                    return 'bg-indigo-300'
                case 'skills':
                    return 'bg-purple-400'
                case 'summary':
                    return 'bg-blue-400'
                }
            return 'bg-white'
        }
    },
}
</script>