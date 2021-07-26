<template>
    <div>
        <article class="prose upheaval">
            <nuxt-content :document="article" />
        </article>
        <NuxtLink to="/"> Back Home </NuxtLink>
    </div>
</template>

<script>

export default {
    async asyncData({ $content, params }) {
        const article = await $content('ResumeContent', params.slug).fetch()
        return { article }
    }
}
</script>