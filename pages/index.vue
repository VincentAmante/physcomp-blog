<script setup lang="ts">
</script>

<template>
    <main class="flex flex-col items-center justify-center w-full overflow-hidden scroll-smooth">

        <NuxtLink to="#home"
            class="bottom-0 right-0 m-4 lg:mx-12 fixed cursor-pointer opacity-50 hover:opacity-100 text-primary">
            <ClientOnly>
                <font-awesome-icon :icon="['fas', 'chevron-circle-up']" class="text-5xl" />
            </ClientOnly>
        </NuxtLink>
        <section id="home"
            class="bg-opacity-5 py-8 lg:py-16 w-full flex flex-col lg:flex-row items-center justify-center relative h-screen">
            <div class="flex flex-col justify-center items-center w-full lg:w-auto px-4">
                <div>
                    <div
                        class="text-4xl text-center lg:text-8xl text-outline-primary font-extrabold uppercase text-transparent">
                        Vincent
                    </div>
                    <div class="text-xl lg:text-6xl font-extrabold text-primary">Amante</div>
                    <p class="opacity-60 italic">BSU#415215</p>
                </div>
                <h1 class="text-3xl">Physical Computing Portfolio</h1>
            </div>
            <div class="relative  flex flex-col items-center px-4">
                <div class="relative isolate max-w-xs lg:max-w-sm flex flex-col rounded-lg">
                    <div class="p-4 flex flex-col gap-2">
                        <NuxtLink to="#thematic-infographic">
                            <h3
                                class="bg-base-100 text-3xl p-4 py-2 border-[1px] border-white border-solid rounded-lg flex items-center hover:bg-white hover:text-secondary cursor-pointer">
                                Infographic
                            </h3>
                        </NuxtLink>
                        <NuxtLink to="#deeno-board">
                            <h3
                                class="bg-base-100 text-3xl p-4 py-2 border-[1px] border-white border-solid rounded-lg flex items-center hover:bg-white hover:text-secondary cursor-pointer">
                                Deeno Board
                            </h3>
                        </NuxtLink>
                        <NuxtLink to="/experiments">
                            <h3
                                class="bg-base-100 text-3xl p-4 py-2 border-[1px] border-white border-solid rounded-lg flex items-center hover:bg-white hover:text-secondary cursor-pointer">
                                Experiments
                            </h3>
                        </NuxtLink>
                        <NuxtLink to="/blog">
                            <h3
                                class=" bg-base-100 text-3xl p-4 py-2 border-[1px] border-white border-solid rounded-lg flex items-center hover:bg-white hover:text-secondary cursor-pointer">
                                Blog
                            </h3>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </section>
        <section id="thematic-infographic" class="min-h-screen w-full py-4 lg:py-8 flex flex-col">
            <div class="w-full flex flex-col items-center h-full py-4">
                <h2 class="text-4xl text-primary uppercase font-bold">
                    Thematic Infographic
                </h2>
                <div class="flex flex-col gap-4 py-3 items-center">
                    <h3 class="text-2xl">Physical Computing around us</h3>
                    <div class="text-center flex gap-2 py-4">
                        <div class="max-w-xs flex flex-col gap-4">
                            <p>
                                Right before I entered Creative Computing,
                                I had a desire to dabble in the field of
                                neuroprosthetics, and briefly considered pursuing a career in it.
                            </p>
                            <p>
                                However, I became realistic with my life, and there's no way I would make too hasty
                                decisions so
                                I kept at Creative Computing.
                            </p>
                        </div>
                        <div class="divider divider-horizontal"></div>
                        <div class="max-w-xs flex flex-col gap-4">
                            <p>
                                The main reason for that was my amazement at Brain-Computer Intefaces,
                                devices that allow people to control computers with their minds.
                            </p>
                            <p>
                                As it was a clear cut example of Physical Computing, I decided to make an infographic about
                                it
                                for my assessment.
                            </p>
                        </div>
                    </div>
                    <div>
                        <img class="w-full max-w-lg rounded-lg" src="@/assets/images/infographic.jpg" />
                    </div>
                </div>
            </div>
        </section>
        <div class="divider">
            <ClientOnly>
                <font-awesome-icon :icon="['fas', 'heart']" class="text-xl opacity-30"></font-awesome-icon>
            </ClientOnly>
        </div>
        <section id="deeno-board" class="min-h-screen w-full py-4 lg:py-8 flex flex-col">
            <div class="w-full flex flex-col items-center h-full py-4 ">
                <h2 class="text-4xl text-primary uppercase font-bold">
                    Deeno Board
                </h2>
                <div class="flex flex-col gap-4 py-3 items-center w-full justify-center ">
                    <div class="flex flex-col lg:flex-row items-center justify-center w-full">
                        <div class="p-2 max-w-md flex flex-col gap-2 text-lg leading-6">
                            <p>
                                For our final project, we made an LED interactive board, with many features.
                            </p>
                            <p>
                                The goal of the project was to have an installation that could be placed in the
                                university, as a mere fun thing to play with.
                            </p>
                            <p>
                                The project featured the following:
                            </p>
                            <ul class="flex flex-col gap-2">
                                <li>
                                    Audiovisualiser - A way to display any audio through fun colours
                                </li>
                                <li>
                                    Paint - Enables basic art capabilities as users can press any tile to light it up
                                    with a
                                    specific colour.
                                </li>
                                <li>
                                    Tic Tac Toe - Simple tic tac toe game, playable by two players.
                                </li>
                                <li>
                                    Memory Game - Game that flashes pairs of tiles on the screen, each pair with differing
                                    colours.
                                    Players have to work with tapping tiles to find pairs based on the initial
                                    delay they were given.
                                </li>
                            </ul>
                            <p>
                                To see more details about the progress of the project, see either the blog or the experiment
                                below:
                            </p>
                            <div class="flex gap-4">
                                <NuxtLink to="/blog/">
                                    <button class="btn btn-primary">Blog</button>
                                </NuxtLink>
                                <NuxtLink to="/experiments/deeno-board">
                                    <button class="btn btn-primary">Experiment</button>
                                </NuxtLink>
                            </div>
                        </div>
                        <div class="p-2">
                            <iframe class=" w-full lg:min-w-max" width="560" height="315"
                                src="https://www.youtube.com/embed/HfXKXD3jIM8" title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen></iframe>
                        </div>
                    </div>
                    <div class="flex flex-col gap-4 items-center justify-center w-full py-4">
                        <h2 class="text-2xl font-semibold py-2 max-w-xl text-center">
                            As for the lovely team that worked on this project with me, here are all of us and our roles.
                        </h2>
                        <img class="max-w-5xl" src="@/assets/images/meet-the-team.png" />
                    </div>
                </div>
            </div>
        </section>
        <div class="divider">
            <ClientOnly>
                <font-awesome-icon :icon="['fas', 'heart']" class="text-xl opacity-30"></font-awesome-icon>
            </ClientOnly>
        </div>
        <section class="min-h-screen w-full py-4 lg:py-8 flex flex-col">
            <div class="w-full flex flex-col items-center h-full py-4 ">
                <h2 class="text-4xl text-primary uppercase font-bold">
                    Reflection
                </h2>
                <div class="flex flex-col gap-4 py-3 items-center w-full justify-center ">
                    <div class="flex flex-col items-center justify-center w-full gap-2 max-w-xl text-center leading-7">
                        <h3 class="text-2xl font-bold">
                            Project Evaluation
                        </h3>
                        <p>
                            The project was great and everybody did well.
                            Everyone cooperated and did their roles, the management was great, and because of it
                            we were able to finish much quicker than the other groups.
                        </p>
                        <p>
                            The board itself was also impressive, a difficult feat given the amount of
                            manual work that had to be put into it.
                            Something that could have been improved on,
                            though, was that the features could have been expanded on.
                        </p>
                        <p>
                            The code allowed for a lot more room for better LED displays,
                            and there was no limit to the features that could have been added.
                        </p>
                    </div>
                </div>

                <div class="flex flex-col gap-4 py-3 items-center w-full justify-center ">
                    <div class="flex flex-col items-center justify-center w-full gap-2 max-w-xl text-center leading-7">
                        <h3 class="text-2xl font-bold">
                            Personal Evaluation
                        </h3>
                        <p>
                            On my end, I feel I could have done better.
                        </p>
                        <p>
                            I felt that I would have easily hindered the
                            project if I helped out with the physical aspects,
                            given my prior experiences with craftworks and other physical projects.

                            It did, however, limit most of my contributions to the code and research.
                        </p>
                        <p>
                            That said, there was still plenty of challenge to be done on the coding side.
                            As our work was an amalgmation of other projects, there was no direct reference
                            to what we were doing.
                            In the end a lot of mental work had to be done to build the code for the Deeno Board.
                            The final result was a relatively bug-free experience on the arduino's side,
                            and only vulnerable to physical limitations.
                        </p>
                        <p>
                            Despite this, I still felt I could have contributed more even on that end.
                            I found out too late that the LED board had more colours than previously imagined,
                            a huge oversight on my part.
                            If I had noticed it in time, every feature could have been expanded to be a more enjoyable
                            experience.
                        </p>
                        <p>
                            Overall though, I still am proud of my work and my part in this project.
                            I learned a lot about coding while keeping in mind physical limitations,
                            and also how to develop a project utilising physical devices as a source of inputs and outputs.
                        </p>
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
