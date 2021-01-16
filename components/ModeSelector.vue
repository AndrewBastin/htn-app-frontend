<template>
  <div>
    <div
      class="rounded bg-white flex cursor-pointer px-4 py-2 shadow-xl focus-within:outline-none focus-within:ring-2 focus-within:ring-purple-700"
      @click.prevent="onMainClick"
      >
      <div
        class="inline-flex flex-1 cursor-pointer self-center shadow-xl"
        >
        <svg v-if="selectTransit" class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none"/><path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z"/></svg>
        <svg v-if="selectCar" class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none"/><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>
        <svg v-if="selectFlight" class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none"/><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg>
      </div>
      <input 
             id="method" 
             class=" cursor-pointer pl-2 rounded border bg-white border-transparent text-xl inline-flex font-bold focus:outline-none"
             :value="selectedMode" 
             disabled=true
             />
      <div
        class="inline-flex flex-1 cursor-pointer self-center shadow-xl"
        >
        <svg class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg>
      </div>
    </div>

    <ul
      class="rounded bg-white font-bold text-xl shadow-xl px-2 py-2 mt-2"
      :class="{ hidden: !dropdownActive }"
      >
      <li>
        <div
          class="px-3 py-2 mb-2 rounded flex"
          :class="{ 'mode-selected': selectTransit }"
          @click.prevent="onSelect('transit')"
          >
          <svg class="self-center" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none"/><path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z"/></svg>
          <input
            class="font-bold pl-3 bg-white"
            value="Public Transit"
            disabled=true
            />
        </div>
      </li>
      <li>
        <div
          class="px-3 py-2 my-2 rounded flex"
          :class="{ 'mode-selected': selectCar }"
          @click.prevent="onSelect('car')"
          >
          <svg class="self-center" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none"/><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>
          <input
            class="font-bold pl-3 bg-white"
            value="Car"
            disabled=true
            />
        </div>
      </li>
      <li>
        <div
          class="px-3 py-2 rounded flex"
          :class="{ 'mode-selected': selectFlight }"
          @click="onSelect('flight')"
          >
          <svg xmlns="http://www.w3.org/2000/svg" class="self-center" viewBox="0 0 24 24" fill="currentColor" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none"/><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg>
          <input
            class="font-bold pl-3 bg-white"
            value="Flight"
            disabled=true
            />
        </div>
      </li>
    </ul>
  </div>
</template>
<style>
</style>
<script>
export default {
  data() {
    return {
      selectTransit: true,
      selectCar: false,
      selectFlight: false,
      dropdownActive: false
    }
  },
  props: {
    onModeChange: {
      type: Function,
      required: true
    }
  },
  computed: {
    selectedMode() {
      if (this.selectTransit) return "Public Transit";
      if (this.selectCar) return "Car";
      if (this.selectFlight) return "Flight";
    }
  },
  methods: {
    onMainClick() {
      this.dropdownActive = !this.dropdownActive;
    },
    onSelect(method) {
      this.selectTransit = method === 'transit';
      this.selectCar = method === 'car';
      this.selectFlight = method === 'flight';
      this.dropdownActive = false;
      if (this.onModeChange) this.onModeChange(method);
    }
  }
}
</script>
