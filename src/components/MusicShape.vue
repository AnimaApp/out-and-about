<template>
  <div class="music-shape">
    <div class="overlap-group-3">
      <div class="rectangle"></div>
      <div class="rectangle-1 animate-enter3"></div>
    </div>
    <div class="overlap-group-2">
      <div class="rectangle"></div>
      <div class="rectangle-2 animate-enter2"></div>
    </div>
    <div class="overlap-group-2">
      <div class="rectangle"></div>
      <div class="rectangle-3 animate-enter1"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MusicShape",
};
</script>

<style>
.music-shape {
  align-items: flex-start;
  background-color: #ffdf90;
  border-radius: 5px;
  display: flex;
  height: 56px;
  left: 0;
  min-width: 86px;
  padding: 10px;
  position: absolute;
  top: 16px;
}

.overlap-group-3 {
  height: 38px;
  position: relative;
  width: 7px;
}

.rectangle {
  background-color: var(--masala);
  height: 38px;
  left: 2px;
  position: absolute;
  top: 0;
  width: 3px;
}

.rectangle-1 {
  background-color: var(--sunset-orange);
  border-radius: 2px;
  height: 3px;
  left: 0;
  position: absolute;
  top: 20px;
  width: 7px;
}

.rectangle-1.animate-enter3 {
  animation: animate-enter3-frames 1s ease-in-out 0s infinite alternate;
}

.overlap-group-2 {
  height: 38px;
  margin-left: 5px;
  position: relative;
  width: 7px;
}

.rectangle-2 {
  background-color: var(--sunset-orange);
  border-radius: 2px;
  height: 3px;
  left: 0;
  position: absolute;
  top: 12px;
  width: 7px;
}

.rectangle-2.animate-enter2 {
  animation: animate-enter2-frames 2s ease-in-out 0s infinite alternate;
}

.rectangle-3 {
  background-color: var(--sunset-orange);
  border-radius: 2px;
  height: 3px;
  left: 0;
  position: absolute;
  top: 32px;
  width: 7px;
}

.rectangle-3.animate-enter1 {
  animation: animate-enter1-frames 0.7s ease-in-out 0s infinite alternate;
}

@keyframes animate-enter2-frames {
  from {
    transform: translate(0, 12px);
  }
  to {
    transform: translate(0, 0);
  }
}

@keyframes animate-enter3-frames {
  from {
    transform: translate(0, -15px);
  }
  to {
    transform: translate(0, 0);
  }
}

@keyframes animate-enter1-frames {
  from {
    transform: translate(0, -25px);
  }
  to {
    transform: translate(0, 0);
  }
}
</style>
