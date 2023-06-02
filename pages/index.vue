<script setup lang="ts">
import { vElementHover } from '@vueuse/components';

const isArtistHovered = ref(false);
function onArtistHovered(state: boolean) {
    isArtistHovered.value = state;
}

const isDeveloperHovered = ref(false);
function onDeveloperHovered(state: boolean) {
    isDeveloperHovered.value = state;
}

const isGamesHovered = ref(false);
function onGamesHovered(state: boolean) {
    isGamesHovered.value = state;
}

const isStoriesHovered = ref(false);
function onStoriesHovered(state: boolean) {
    isStoriesHovered.value = state;
}

const isOtherHovered = ref(false);
function onOtherHovered(state: boolean) {
    isOtherHovered.value = state;
}

</script>

<template>
    <main class="flex flex-col py-8 lg:py-16 items-center justify-center w-full  overflow-hidden">
        <section class="bg-opacity-5 w-full flex flex-col lg:flex-row items-center justify-center gap-12 relative">
            <div class="absolute w-screen h-screen hero-bg pointer-events-none"></div>
            <div class="flex flex-col justify-center items-center w-full lg:w-auto px-4">
                <div>
                    <h1 class="text-4xl lg:text-8xl text-outline-primary font-extrabold uppercase text-transparent">Vincent</h1>
                    <h2 class="text-xl lg:text-6xl font-extrabold text-primary">Amante</h2>
                </div>

                <div class="divider text-primary">I make</div>

                <ul class="text-2xl w-full flex flex-col gap-0   font-thin">
                    <li
                    v-element-hover="onDeveloperHovered"
                    class="py-1 px-2 cursor-pointer rounded-sm hover:bg-primary">
                    Websites
                    </li>
                    <li
                    v-element-hover="onArtistHovered"
                    class="py-1 px-2 cursor-pointer rounded-sm hover:bg-primary">
                        Art
                    </li>
                    <li
                    v-element-hover="onGamesHovered"
                    class="py-1 px-2 cursor-pointer rounded-sm hover:bg-primary">
                        Games
                    </li>
                    <li
                    v-element-hover="onStoriesHovered"
                    class="py-1 px-2 cursor-pointer rounded-sm hover:bg-primary">
                        Stories
                    </li>
                    <li
                    v-element-hover="onOtherHovered"
                    class="py-1 px-2 cursor-pointer rounded-sm hover:bg-primary">
                        Other stuff
                    </li>
                </ul>
            </div>
            <div class="relative  flex flex-col items-center px-4">
                <div class="relative  isolate                                                                   max-w-xs lg:max-w-sm flex flex-col rounded-lg">
                    <h1 class="absolute transform z-[-10] -translate-y-6  text-primary  left-2                  text-5xl font-bold uppercase">Hello</h1>
                    <h1 class="absolute transform text-outline-primary text-transparent left-2 -translate-y-6   text-5xl font-bold uppercase">Hello</h1>
                    <!-- img elements below -->
                    <div class="w-full h-full absolute "></div>
                    <div class="w-full h-full opacity-0 grainy-bg absolute top-0 left-0"></div>
                    <img
                    class="absolute top-0 w-full object-cover transition-all"
                    :class="(isDeveloperHovered) ? 'opacity-100': 'opacity-0'"
                    src="@/assets/images/self-web.png"/>
                    <img
                    class="absolute top-0 w-full object-cover transition-all"
                    :class="(isArtistHovered) ? 'opacity-100': 'opacity-0'"
                    src="@/assets/images/self-art.png"/>
                    <img class="w-full object-cover" src="@/assets/images/self-pic.png"/>
                </div>
            </div>
        </section>
        <section class="w-full flex flex-col items-center bg-opacity-10 py-10 pt-16">
            <div class=" flex flex-col items-center overflow-hidden">
                <div class="w-4 h-4 bg-primary flex items-center justify-center rounded-full"></div>
                <div class="w-1 h-[12rem] bg-primary flex items-center transform scale-y-120"></div>
                <div class=" overflow-hidden h-5">
                    <div class="w-8 h-8 bg-primary flex items-center justify-center rounded-full"></div>
                </div>
            </div>
            <div class="px-4 lg:px-16 w-full">
                <div class=" w-full border-primary border-t-2 border-solid">
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped lang="postcss">

    .hero-bg {
background: -moz-radial-gradient(circle, rgba(182,185,255,0.06) 0%, rgba(255,255,255,0) 34%);
background: -webkit-radial-gradient(circle, rgba(182,185,255,0.06) 0%, rgba(255,255,255,0) 34%);
background: radial-gradient(circle, rgba(182,185,255,0.06) 0%, rgba(255,255,255,0) 34%);
    }
    .text-outline-primary {
        -webkit-text-stroke: 1px;
        -webkit-text-stroke-color: #E5724D;
    }
    .grainy-bg {
    filter: contrast(100%) brightness(100%);
    background:
	linear-gradient(158deg, rgba(229,114,77,0.57), rgba(208,143,39,0.49)),
	url("data:image/svg+xml,%3Csvg viewBox='0 0 268 268' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='7.66' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    animation: 0.2s infinite noise;
    }
</style>
