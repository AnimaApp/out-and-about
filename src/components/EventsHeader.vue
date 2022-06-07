<template>
  <div class="events-header">
    <div class="title-1">Events</div>
    <div class="filters">
      <span
        :class="['mulish-normal-white-xl-transparent', { selected: filter === 'All' }]"
        @click="onClickFilter('All')"
      >
        All
      </span>
      <span class="mulish-normal-white-xl-transparent"> | </span>
      <span
        :class="['mulish-normal-white-xl-transparent', { selected: filter === 'Favorites' }]"
        @click="onClickFilter('Favorites')"
      >
        Favorites
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventsHeader",
  props: {
    title: {
      type: String,
      default: "Events"
    },
    filter: {
      type: String,
      default: "All",
      validator: value => ['All', 'Favorites'].includes(value)
    }
  },
  methods: {
    onClickFilter(type) {
      this.$emit('click:filter', type);
    }
  }
};
</script>

<style>
.events-header {
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  width: 320px;
  margin-top: 15px;
}

.title-1 {
  color: var(--white);
  font-family: var(--font-family-mulish);
  font-size: var(--font-size-xl);
  font-weight: 700;
  letter-spacing: 0;
  line-height: 12px;
  min-height: 12px;
  min-width: 29px;
  white-space: nowrap;
}

.mulish-normal-white-xl-transparent {
  cursor: pointer;
}
.mulish-normal-white-xl-transparent.selected {
  opacity: 1;
}

.filters {
  color: transparent;
  font-family: var(--font-family-mulish);
  font-size: var(--font-size-xl);
  font-weight: 400;
  letter-spacing: 0;
  line-height: 12px;
  min-height: 12px;
  white-space: nowrap;
}
</style>
