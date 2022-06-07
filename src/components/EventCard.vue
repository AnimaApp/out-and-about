<template>
  <div class="festivals-card">
    <div class="flex-col">
      <div class="date mulish-normal-white-9px">{{ date }}</div>
      <div class="event-name mulish-bold-white-14px">{{ eventName }}</div>
      <p class="location mulish-normal-white-9px">{{ location }}</p>
    </div>
    <div class="favorite" @click="onClickHeart">
      <img :src="heartSrc" :class="{ beat: favorite }" />
    </div>
  </div>
</template>

<script>
const RAINBOW_HEART = require("@/assets/heart-rainbow-true@2x.svg");
const EMPTY_HEART = require("@/assets/empty-heart.png");

export default {
  name: "EventCard",
  props: {
    date: {
      type: String,
      required: true
    },
    eventName: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    favorite: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    heartSrc() {
      return this.favorite ? RAINBOW_HEART : EMPTY_HEART;
    }
  },
  methods: {
    onClickHeart() {
      this.$emit("click:toggle-favorite");
    }
  }
};
</script>

<style>
.festivals-card {
  align-items: flex-start;
  background-color: var(--masala);
  border-radius: 4px;
  display: flex;
  height: 64px;
  overflow: hidden;
  padding: 10px;
  width: 320px;
  border: 0.4px solid var(--white-2);
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

.favorite {
  margin-left: 73px;
  cursor: pointer;
  user-select: none;
}
.favorite img {
  width: 13px;
  height: 12px;
}

.beat {
  animation: beat-once 0.2s linear 0s 1 normal forwards;
}

@keyframes beat-once {
  0%, 100% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(1.2, 1.2);
  }
}
</style>
