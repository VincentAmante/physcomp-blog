<script setup lang="ts">

const experimentsQuery = queryContent('experiments').find()
console.log(experimentsQuery)
</script>

<template>
  <main class="p-4 py-16 flex gap-2 flex-col lg:flex-row">
    <div class="drawer basis-1/5 bg-base-100 border-[1px] border-primary p-4 rounded-lg">
      <div class="drawer-side flex flex-col text-white prose prose-a:no-underline">
        <ContentNavigation :query="experimentsQuery">
        </ContentNavigation>
      </div>
    </div>
    <div class="flex flex-col w-full rounded-lg prose-lg px-8 grow basis-3/4 prose-li:list-disc">
      <ContentDoc v-slot="{ doc }">
        <div class="pb-4 border-b-2 border-b-primary">
          <h1 class="text-6xl font-boldy mb-1">
            {{ doc.title }}
          </h1>
        </div>
        <ContentRenderer :value="doc" />
      </ContentDoc>
    </div>
  </main>
</template>

<style scoped lang="postcss">
main:deep(a) {
  @apply text-primary;
}

main:deep(pre) {
  @apply mockup-code bg-cyan-950 font-mono text-white
}

main:deep(img) {
  @apply w-full rounded-lg max-w-md
}

main:deep(video) {
  @apply w-full rounded-lg max-w-xs
}
</style>
