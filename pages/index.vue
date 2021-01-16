<template>
  <div>
    <div v-if="pagestate==='home'" class="bg-purple-300 flex justify-center items-center h-screen">
      <form @submit="submitForm">
        <div class="">
          <div>
            <label 
             for="from"
             class="font-bold opacity-70"
             >
             From
            </label> 
              <br />
              <div
                class="home-input"
                >
                <input 
                id="from" 
                class="font-bold text-xl focus:outline-none inline-flex flex-1"
                value="Thunder Bay" 
                />
                <button
                  class="border-purple-700 border-solid border-2 rounded text-purple-700 px-1 py-1"
                  >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18px" height="18px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z"/></svg>
                </button>
              </div>
          </div>

          <div
            class="my-3"
            >
            <label 
            for="dest"
            class="font-bold opacity-70"
            >
            Destination
            </label> 
              <br />
              <div
                class="flex max-w-sm"
                >
                <input 
                id="dest" 
                class="px-4 py-2 rounded border border-transparent text-xl inline-flex flex-1 font-bold shadow-xl focus:ring-2 focus:outline-none focus:ring-purple-700"
                value="Thunder Bay" 
                />
              </div>
          </div>

            <div
              class="my-3"
              >
              <label 
              for="method"
              class="font-bold opacity-70"
              >
              Using
              </label> 
                <br />
                <div
                  class="rounded bg-white flex px-4 py-2 shadow-xl focus-within:outline-none focus-within:ring-2 focus-within:ring-purple-700"
                  >
                  <div
                    class="inline-flex flex-1 self-center shadow-xl"
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none"/><path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z"/></svg>
                  </div>
                  <input 
                         id="method" 
                         class="pl-2 rounded border border-transparent text-xl inline-flex font-bold focus:outline-none"
                         value="Public Transit" 
                         />
                  <div
                    class="inline-flex flex-1 self-center shadow-xl"
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg>
                  </div>
                </div>
            </div>

            <button
              class="bg-purple-700 font-semibold text-white px-4 py-2 rounded shadow-lg m-auto block mt-10"
              >
              Check
            </button>
        </div>
      </form>
    </div>

    <div 
      v-if="pagestate==='loading'"
      class="bg-purple-700 flex justify-center text-center items-center h-screen"
    >
      <div>
        <!-- By Sam Herbert (@sherb), for everyone. More @ http://goo.gl/7AJzbL -->
        <svg width="44" height="44" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" stroke="#fff">
          <g fill="none" fill-rule="evenodd" stroke-width="2">
          <circle cx="22" cy="22" r="1">
          <animate attributeName="r"
                   begin="0s" dur="1.8s"
                              values="1; 20"
                              calcMode="spline"
                              keyTimes="0; 1"
                              keySplines="0.165, 0.84, 0.44, 1"
                              repeatCount="indefinite" />
          <animate attributeName="stroke-opacity"
                   begin="0s" dur="1.8s"
                              values="1; 0"
                              calcMode="spline"
                              keyTimes="0; 1"
                              keySplines="0.3, 0.61, 0.355, 1"
                              repeatCount="indefinite" />
          </circle>
          <circle cx="22" cy="22" r="1">
          <animate attributeName="r"
                   begin="-0.9s" dur="1.8s"
                                 values="1; 20"
                                 calcMode="spline"
                                 keyTimes="0; 1"
                                 keySplines="0.165, 0.84, 0.44, 1"
                                 repeatCount="indefinite" />
          <animate attributeName="stroke-opacity"
                   begin="-0.9s" dur="1.8s"
                                 values="1; 0"
                                 calcMode="spline"
                                 keyTimes="0; 1"
                                 keySplines="0.3, 0.61, 0.355, 1"
                                 repeatCount="indefinite" />
          </circle>
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pagestate: "home"
    }
  },
  methods: {
    submitForm(e) {
      console.log(e);
      e.preventDefault();
      console.log("form submit!");
      this.pagestate = "loading";
      setTimeout(() => {
        this.pagestate = "final";
      }, 2000);
    }
  }
}
</script>

<style lang="postcss" scoped>
</style>
