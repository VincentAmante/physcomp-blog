<script setup lang="ts">
// import { vElementHover } from '@vueuse/components';

// const isArtistHovered = ref(false);
// function onArtistHovered(state: boolean) {
//     isArtistHovered.value = state;
// }

// const isDeveloperHovered = ref(false);
// function onDeveloperHovered(state: boolean) {
//     isDeveloperHovered.value = state;
// }

// const isGamesHovered = ref(false);
// function onGamesHovered(state: boolean) {
//     isGamesHovered.value = state;
// }

// const isStoriesHovered = ref(false);
// function onStoriesHovered(state: boolean) {
//     isStoriesHovered.value = state;
// }

// const isOtherHovered = ref(false);
// function onOtherHovered(state: boolean) {
//     isOtherHovered.value = state;
// }

</script>

<template>
    <main class="flex flex-col py-8 lg:py-16 items-center justify-center w-full overflow-hidden h-screen">
        <section class="bg-opacity-5 w-full flex flex-col lg:flex-row items-center justify-center gap-12 relative">
            <div class="absolute w-screen h-screen hero-bg pointer-events-none"></div>
            <div class="flex flex-col justify-center items-center w-full lg:w-auto px-4">
                <div>
                    <h1 class="text-4xl lg:text-8xl text-outline-primary font-extrabold uppercase text-transparent">Vincent
                    </h1>
                    <h2 class="text-xl lg:text-6xl font-extrabold text-primary">Amante</h2>
                </div>

                <div class="divider text-primary">I make</div>
                <h1 class="text-3xl">Arduino Code</h1>
            </div>
            <div class="relative  flex flex-col items-center px-4">
                <div class="relative isolate max-w-xs lg:max-w-sm flex flex-col rounded-lg">
                    <div class="p-4 flex flex-col gap-2">
                        <NuxtLink to="experiments">
                            <h1
                                class="text-4xl p-4 py-8 border-2 border-white border-solid rounded-lg flex items-center hover:bg-white hover:text-secondary cursor-pointer">
                                Experiments
                            </h1>
                        </NuxtLink>
                        <h1
                            class="text-4xl p-4 py-8 border-2 border-white border-solid rounded-lg flex items-center hover:bg-white hover:text-secondary cursor-pointer">
                            ??
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped lang="postcss">
.text-outline-primary {
    -webkit-text-stroke: 1px;
    -webkit-text-stroke-color: #E5724D;
}

.grainy-bg {
    filter: contrast(100%) brightness(100%);
    background:
        linear-gradient(158deg, rgba(229, 114, 77, 0.57), rgba(208, 143, 39, 0.49)),
        url("data:image/svg+xml,%3Csvg viewBox='0 0 268 268' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='7.66' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    animation: 0.2s infinite noise;
}
</style>
