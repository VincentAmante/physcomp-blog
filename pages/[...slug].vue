<script setup lang="ts">

const experimentsQuery = await queryContent('experiments')
  .where({
    navigation: {
      $ne: false
    }
  })
  .find()
  .then((data) => {
    return data
  })
const blogsQuery = await queryContent('blog')
  .where({
    navigation: {
      $ne: false
    }
  })
  .find()
  .then((data) => {
    return data
  })

const path = useRoute().fullPath

const isExperiments = computed(() => {
  return (path === '/experiments')
})
const isBlogs = computed(() => {
  return (path === '/blog')
})

</script>

<template>
  <main class="px-6 py-16 flex gap-2 flex-col lg:flex-row">

    <NuxtLink to="#top"
      class="bottom-0 right-0 m-4 lg:mx-12 fixed cursor-pointer btn btn-ghost opacity-50 hover:opacity-100 text-primary">
      <ClientOnly>
        <font-awesome-icon :icon="['fas', 'chevron-up']" class="text-5xl" />
      </ClientOnly>
    </NuxtLink>


    <!-- Nav Bar -->
    <div class="drawer h-full basis-1/3 bg-base-100 border-[1px] border-primary p-4 rounded-lg">
      <nav
        class="drawer-side max-h-none flex flex-col text-white prose prose-a:no-underline prose-li:list-none prose-li:list-outside">
        <NuxtLink id="top" to="/" class="btn btn-ghost text-primary text-2xl w-full flex items-center px-2 font-bold">
          <ClientOnly>
            <font-awesome-icon :icon="['fas', 'chevron-left']" class="mr-2" />
          </ClientOnly>
          Return to Home
        </NuxtLink>
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

      <!-- Displays lists of blogs if on index page -->
      <div v-if="isExperiments">
        <div v-for="item in experimentsQuery">
          <NuxtLink :to="item._path"
            class="pl-4 border-l-primary border-l-[1px]  py-2 flex flex-col gap-0 mb-6 group  hover:bg-primary hover:bg-opacity-20 rounded-r-md">
            <div class="opacity-100">
              <div class="text-primary my-0 text-2xl ">{{ item.title }}
              </div>
              <div class="text-neutral-400 max-w-2xl">{{ item.description }}</div>
            </div>
            <img class="my-1 max-w-xs" :src="item.image">
          </NuxtLink>
          <div class="divider"></div>
        </div>
      </div>
      <div v-if="isBlogs">
        <div v-for="item in blogsQuery">
          <NuxtLink :to="item._path"
            class="pl-4 border-l-primary border-l-[1px] py-2 flex flex-col gap-0 mb-6 group hover:bg-primary hover:bg-opacity-20">
            <div class="opacity-100">
              <div class="text-primary my-0 text-2xl">{{ item.title }}
              </div>
              <div class="text-neutral-400 max-w-2xl">{{ item.description }}</div>
            </div>
            <img class="my-1 max-w-xs" :src="item.image">
          </NuxtLink>
          <div class="divider"></div>
        </div>
      </div>

      <!-- Displays Content -->
      <ContentDoc>
        <template v-slot="{ doc }" #default>
          <div class="pb-4 border-b-2 border-b-primary">
            <h1 class="text-6xl font-boldy mb-1">
              {{ doc.title }}
            </h1>
          </div>
          <ContentRenderer v-if="!(isExperiments) && !(isBlogs)" :value="doc" />
        </template>
        <template #empty>

        </template>
      </ContentDoc>
    </div>
  </main>
</template>

<style scoped lang="postcss">
main:deep(a) {
  @apply text-primary;
}

main:deep(pre) {
  @apply mockup-code bg-base-300 font-['Fira_Code'] leading-5
}

main:deep(code) {
  @apply font-['Fira_Code'] bg-base-300 rounded-md px-2 py-1
}

main:deep(img) {
  @apply w-full rounded-lg max-w-md
}

main:deep(video) {
  @apply w-full rounded-lg max-w-xs
}

main:deep(table) {
  @apply table table-zebra border-[1px] border-primary border-opacity-25
}

.router-link-active {
  @apply bg-primary bg-opacity-25 rounded-md;
}
</style>
