<template>
  <div :class="[`festivals-card-1 border-0-4px-white-2`, className || ``]">
    <div class="flex-col">
      <div class="date mulish-normal-white-9px">{{ date }}</div>
      <div class="event-name mulish-bold-white-14px">{{ eventName }}</div>
      <p class="location mulish-normal-white-9px">{{ location }}</p>
    </div>
    <img
      class="heart-rainbow"
      src="@/assets/heart-rainbow-true-7@2x.svg"
    />
  </div>
</template>

<script>
export default {
  name: "FestivalsCard",
  props: ["date", "eventName", "location", "className"],
};
</script>

<style>
.festivals-card-1 {
  align-items: flex-start;
  background-color: var(--masala);
  border-radius: 4px;
  display: flex;
  height: 64px;
  overflow: hidden;
  padding: 9.6px 10px;
  width: 320px;
}

.flex-col {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-left: 4px;
  min-height: 44px;
  width: 210px;
}

.date {
  letter-spacing: 0;
  line-height: 11px;
  min-height: 11px;
  opacity: 0.4;
  white-space: nowrap;
}

.event-name {
  letter-spacing: 0;
  line-height: 16px;
  margin-top: 3px;
  min-height: 16px;
  white-space: nowrap;
}

.location {
  letter-spacing: 0;
  line-height: 11px;
  margin-top: 3px;
  min-height: 11px;
  white-space: nowrap;
}

.heart-rainbow {
  height: 12px;
  margin-left: 73px;
  margin-top: 0.36px;
  width: 13px;
}

.festivals-card-1.festivals-card {
  margin-top: 8px;
}
</style>
