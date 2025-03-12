<script setup></script>

<template>
  <section class="p-6 sm:p-20 sm:-mt-32 font-poppins mb-14">
    <div class="lg:grid lg:grid-cols-8 space-y-6 gap-20">
      <div class="space-y-6 col-span-1 sm:col-span-3">
        <p class="uppercase font-semibold text-gray-600">Testimonials</p>
        <p class="text-[#14183E] font-bold text-4xl sm:text-5xl font-volkhov">
          What People say about Us.
        </p>
      </div>
      <div class="col-span-5 grid grid-cols-1 sm:grid-cols-5 gap-12">
        <div class="relative col-span-4">
          <div class="relative shadow-xl rounded-xl bg-white">
            <nuxt-img src="/images/person.jpg" alt="person" class="absolute top-0 -left-4 w-12 h-12 rounded-full" />
            <div class="space-y-7 p-10">
              <p class="text-gray-600 text-[#5E6282]">
                “Thanks to this amazing travel agency, my vacation was seamless and unforgettable! They took care of
                every detail, from flights to activities, and made sure we had the best experiences. I’ll definitely be
                booking with them again!”
              </p>
              <div>
                <p class="text-gray-600 text-[#5E6282] font-bold">Mike taylor</p>
                <p class="text-gray-600 text-[#5E6282]">Lahore, Pakistan</p>
              </div>
            </div>
          </div>

        </div>
        <div
          class="col-span-1 flex flex-row sm:flex-col space-x-8 sm:space-x-0 sm:space-y-8 items-center justify-center my-20 sm:my-0">
          <Icon name="ion:chevron-up" class="w-6 h-auto text-gray-400" />
          <Icon name="ion:chevron-down" class="w-6 h-auto" />
        </div>
      </div>
    </div>
  </section>
</template>
