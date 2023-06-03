<script setup lang="ts">

</script>

<template>
  <main class="px-6 py-16 flex gap-2 flex-col lg:flex-row">
    <div class="drawer h-full basis-1/3 bg-base-100 border-[1px] border-primary p-4 rounded-lg">
      <nav
        class="drawer-side max-h-none flex flex-col text-white prose prose-a:no-underline prose-li:list-none prose-li:list-outside">
        <ContentNavigation v-slot="{ navigation }">
          <ul class="pl-1 flex flex-col gap-2">
            <li class="first:border-b-[1px] first:border-b-primary first:border-opacity-25" v-for="link in navigation"
              :key="link._path">
              <NuxtLink class="text-xl font-bold btn btn-ghost normal-case py-0 my-0 text-left w-full justify-start"
                :to="link._path">
                {{ link.title }}
              </NuxtLink>
              <ul class="flex flex-col text-left items-start">
                <li class="w-full" v-for="sublink in link.children">
                  <NuxtLink class="text-lg btn btn-ghost normal-case py-0 text-left w-full justify-start"
                    :to="sublink._path">
                    {{ sublink.title }}
                  </NuxtLink>
                </li>
              </ul>
            </li>
          </ul>
        </ContentNavigation>
      </nav>
    </div>
    <div class="flex flex-col w-full rounded-lg prose-lg px-8 grow basis-3/4 prose-li:list-disc py-8">
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

.router-link-active {
  @apply bg-primary bg-opacity-25 rounded-md;
}
</style>
