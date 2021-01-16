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
                :class="{ 'text-purple-700': usingGeolocation }"
                v-model="fromLocation" 
                :disabled="usingGeolocation"
                />
                <button
                  class="border-purple-700 border-solid border-2 rounded px-1 py-1"
                  :class="{ 'text-white': usingGeolocation, 'text-purple-700': !usingGeolocation, 'bg-purple-700': usingGeolocation }"
                  @click="toggleGeolocation"
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
                <ModeSelector :onModeChange="updateMode" />
            </div>

            <input
              type="submit"
              class="bg-purple-700 font-semibold text-white px-4 py-2 rounded shadow-lg m-auto block mt-10"
              value="Check"
            />
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

    <div v-if="pagestate==='final'">
      <div class="bg-purple-700 text-white h-screen flex justify-center items-center">
        <div class="">
          <h3 class="font-bold text-2xl">Your chances of being exposed are</h3>
          <div class="text-center"><span class="font-bold text-6xl">55</span><span>%</span></div>
          <button @click="checkAnother" class="px-4 py-2 m-auto mt-20 block bg-purple-300 text-purple-900 font-bold rounded shadow-lg">Check another</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAddressFromLatLon } from "~/helpers/geocoding"
import ModeSelector from "~/components/ModeSelector"

export default {
  components: {
    ModeSelector
  },
  data() {
    return {
      pagestate: "home",
      usingGeolocation: false,
      geolat: null,
      geolon: null,
      fromLocation: "Thunder Bay"
    }
  },
  methods: {
    getGeolocationData() {
      if (!navigator.geolocation) {
        alert("Your browser does not support geolocation");
        this.usingGeolocation = false;
        return;
      }

      navigator.geolocation.getCurrentPosition((pos) => {
        this.geolat = pos.coords.latitude;
        this.geolon = pos.coords.longitude;

        getAddressFromLatLon(this.geolat, this.geolon)
          .then((address) => {
            this.fromLocation = address;
          })
          .catch(() => {
            alert("There was an error looking up your address. Please set it manually");
            this.usingGeolocation = false;
          })
      }, (err) => {
        if (err.code === GeolocationPositionError.PERMISSION_DENIED) {
          alert("Please allow location permissions to use geolocation");
        } else if (err.code === GeolocationPositionError.POSITION_UNAVAILABLE) {
          alert("Couldn't get location data. Please set the location manually");
        } else if (err.code === GeolocationPositionError.TIMEOUT) {
          alert("Timed out trying to find the location. Please set the location manually");
        } else {
          alert("Unknown geolocation error occured. Please set the location manually");
        }

        this.usingGeolocation = false;
      })
    },
    toggleGeolocation(e) {
      e.preventDefault();
      this.usingGeolocation = !this.usingGeolocation;
      if (this.usingGeolocation) this.getGeolocationData();
    },
    submitForm(e) {
      e.preventDefault();

      this.pagestate = "loading";

      setTimeout(() => {
        this.pagestate = "final";
      }, 2000);
    },

    checkAnother() {
      console.log("check another");
      this.pagestate = "home";
    },
    updateMode(mode) {
      console.log("mode update");
      console.log(mode);
    }
  }
}
</script>

<style lang="postcss" scoped>
</style>
