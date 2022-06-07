<template>
  <div class="screws">
    <div class="overlap-group-container">
      <div class="overlap-group">
        <div class="ellipse-37"></div>
        <img
          class="group-15706"
          src="@/assets/group-15706-10@2x.svg"
        />
      </div>
      <div class="overlap-group-1">
        <div class="ellipse-37"></div>
        <img
          class="group-15706"
          src="@/assets/group-15706-15@2x.svg"
        />
      </div>
    </div>
    <div class="overlap-group-container-1">
      <div class="overlap-group">
        <div class="ellipse-37-1"></div>
        <img
          class="group-15706"
          src="@/assets/group-15706-8@2x.svg"
        />
      </div>
      <div class="overlap-group-1">
        <div class="ellipse-37"></div>
        <img
          class="group-15706"
          src="@/assets/group-15706-13@2x.svg"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Screws",
};
</script>

<style>
.screws {
  align-items: flex-start;
  display: flex;
  height: 74px;
  left: 4px;
  min-width: 212px;
  position: absolute;
  top: 131px;
}

.overlap-group-container {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 74px;
  width: 9px;
}

.overlap-group {
  border-radius: 4.5px;
  height: 9px;
  position: relative;
  width: 9px;
}

.ellipse-37 {
  background-color: var(--nobel);
  border-radius: 4.5px;
  height: 9px;
  left: 0;
  position: absolute;
  top: 0;
  width: 9px;
}

.group-15706 {
  height: 5px;
  left: 2px;
  position: absolute;
  top: 2px;
  width: 5px;
}

.overlap-group-1 {
  border-radius: 4.5px;
  height: 9px;
  margin-top: 56px;
  position: relative;
  width: 9px;
}

.overlap-group-container-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-left: 194px;
  min-height: 74px;
  width: 9px;
}

.ellipse-37-1 {
  background-color: #b3b3b3;
  border-radius: 4.5px;
  height: 9px;
  left: 0;
  position: absolute;
  top: 0;
  width: 9px;
}
</style>
