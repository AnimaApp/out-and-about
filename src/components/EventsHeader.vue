<template>
  <div class="events-header">
    <div class="title-1">{{ title }}</div>
    <div class="filters">
      <span class="mulish-normal-white-9px">{{ spanText1 }}</span
      ><span class="mulish-normal-white-9px-2">{{ spanText2 }}</span
      ><span class="mulish-normal-white-9px">{{ spanText3 }}</span
      ><span class="mulish-normal-white-9px-2">{{ spanText4 }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventsHeader",
  props: ["title", "spanText1", "spanText2", "spanText3", "spanText4"],
};
</script>

<style>
.events-header {
  align-items: flex-start;
  display: flex;
  height: 12px;
  margin-top: 7px;
  min-width: 320px;
}

.title-1 {
  color: var(--white);
  font-family: var(--font-family-mulish);
  font-size: var(--font-size-m);
  font-weight: 700;
  letter-spacing: 0;
  line-height: 12px;
  margin-top: -1px;
  min-height: 12px;
  min-width: 29px;
  white-space: nowrap;
}

.filters {
  color: transparent;
  font-family: var(--font-family-mulish);
  font-size: var(--font-size-m);
  font-weight: 400;
  letter-spacing: 0;
  line-height: 12px;
  margin-left: 234px;
  margin-top: -1px;
  min-height: 12px;
  white-space: nowrap;
}
</style>
