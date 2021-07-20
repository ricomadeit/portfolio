<template>
    <div>
        <article>
            <nuxt-content :document="article" />
        </article>
        <NuxtLink to="/"> Back Home </NuxtLink>
    </div>
</template>

<script>

export default {
    async asyncData(context) {
        console.log(context.params, context.query)
        const { $content, params } = context
        const article = await $content('ResumeContent', params.slug).fetch()
        return { article }
    }
}
</script>