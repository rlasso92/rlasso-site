<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="dark:bg-muted-900 border-muted-200 dark:border-muted-700 relative border-t bg-white">
    <NuxtLink to="https://cssninja.io"
      class="dark:bg-muted-900 absolute inset-x-0 -top-4 mx-auto flex h-9 w-14 items-center justify-center bg-white">
    </NuxtLink>
    <div class="ltablet:flex-row mx-auto flex max-w-7xl flex-col items-center justify-between px-6 py-8 lg:flex-row">
      <div class="flex w-10 items-start justify-start gap-0">
        <RlassoLogo class="text-muted-300 ltablet:mx-0 mx-auto h-6 transition-all duration-200 lg:mx-0" />
      </div>

      <div
        class="text-muted-500 dark:text-muted-400 ltablet:w-1/5 ltablet:justify-end ltablet:mt-0 mt-6 flex w-full items-center justify-center text-sm lg:mt-0 lg:w-1/5 lg:justify-end">
        <span>
          © rlasso
          {{ year }}.
        </span>
      </div>
    </div>
  </footer>
</template>
