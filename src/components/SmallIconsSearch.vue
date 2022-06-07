<template>
  <div class="small-icons-search">
    <div class="overlap-group-4">
      <img
        class="shape"
        src="@/assets/shape-1@2x.svg"
      />
      <img
        class="path"
        src="@/assets/path-1@2x.svg"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "SmallIconsSearch",
};
</script>

<style>
.small-icons-search {
  align-items: flex-start;
  display: flex;
  height: 16px;
  padding: 1.9px 1.9px;
  width: 16px;
}

.overlap-group-4 {
  height: 11px;
  position: relative;
  width: 11px;
}

.shape {
  height: 9px;
  left: 0;
  position: absolute;
  top: 0;
  width: 9px;
}

.path {
  height: 3px;
  left: 7px;
  position: absolute;
  top: 7px;
  width: 3px;
}
</style>
