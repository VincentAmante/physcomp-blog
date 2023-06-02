<script setup lang="ts">
</script>

<template>
  <main class="p-4 py-16 flex gap-2 flex-col lg:flex-row">
    <div class="drawer basis-1/5 bg-base-100 border-[1px] border-primary p-4 rounded-lg">
      <div class="drawer-side flex flex-col text-white prose prose-a:no-underline">
        <ContentNavigation />
      </div>
    </div>
    <div class="flex flex-col w-full rounded-lg prose-lg px-8 grow basis-3/4 prose-li:list-disc">
      <ContentDoc />
    </div>
  </main>
</template>

<style scoped lang="postcss">
main:deep(a) {
  @apply text-primary;
}

main:deep(h1) {
  @apply text-6xl font-bold pb-4 border-b-2 border-b-primary;
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
