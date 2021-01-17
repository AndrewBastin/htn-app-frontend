<template>
  <div class="flex flex-col h-screen">
    <Header selected="home" />
      <div class="flex justify-center flex-col h-screen bg-purple-300 py-10 px-10">
        <h1
          class="text-5xl font-bold text-purple-800"
          >
          Be prepared.
        </h1>
          <h3
            class="tracking-tight text-xl py-2 text-purple-900"
            >
            COVIDgo helps you assess the risk you might be taking on your travels.
          </h3>
            <div
              class="pt-10"
              >
              <a
                class="bg-purple-900 text-white px-4 py-3 rounded shadow-lg mr-5"
                href="/check"
                >Check my risk factor</a>
              <a
                class="text-purple-900 border-b-2 border-purple-900"
                href="/about"
                >
                What is this all about ?
              </a>
            </div>
      </div>
  </div>
</template>

<script>
import Header from "~/components/Header"

export default {
  components: {
    Header
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="postcss" scoped>
</style>
