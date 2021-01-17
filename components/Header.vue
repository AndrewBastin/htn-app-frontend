<template>
  <div class="flex bg-purple-200 p-4 text-purple-900">
    <a href="/" class="inline-flex flex-1 place-items-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z" />
      </svg>
      <span class="pl-2 font-bold">COVIDgo</span>
    </a>
    <nav>
      <a
        class="font-bold mx-3"
        :class="{ 'rounded bg-purple-600 py-1 px-4 text-white': selected === 'home' }"
        href="/"
      >Home</a>
      <a
        class="font-bold mx-3"
        :class="{ 'rounded bg-purple-600 py-1 px-4 text-white': selected === 'check' }"
        href="/check"
      >Check</a>
      <a
        class="font-bold mx-3"
        :class="{ 'rounded bg-purple-600 py-1 px-4 text-white': selected === 'about' }"
        href="/about"
      >About</a>
    </nav>
  </div>
</template>
<style>
</style>
<script>
export default {
  props: {
    selected: {
      type: String,
      required: true
    }
  }
  
}
</script>
