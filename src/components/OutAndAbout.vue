<template>
  <div class="container-center-horizontal">
    <div class="out-and-about screen">
      <div class="jukebox-background">
        <div class="group-container">
          <img class="mask-group" :src="jukeboxTopLeft" /><img class="mask-group-1" :src="jukeboxTopRight" />
          <div class="overlap-group6">
            <div class="bg">
              <h1 class="title valign-text-middle">{{ title }}</h1>
              <div class="proud-all-year-round valign-text-middle">{{ subtitle }}</div>
            </div>
            <screws />
            <div class="overlap-group4">
              <span class="made-with-by-anima">Made with</span>
              <img
                class="heart-rainbow"
                src="@/assets/heart-rainbow-true@2x.svg"
              />
              <span class="made-with-by-anima">by Anima</span>
            </div>
            <img class="flipper" :src="flipper" />
            <div class="shapes-illustration">
              <div class="overlap-group5">
                <img
                  class="ellipse-shape animate-enter"
                  src="@/assets/ellipse-shape@2x.svg"
                />
                <music-shape />
                <img class="anima-logo" :src="animaLogo" />
              </div>
              <img class="rainbow-shape" :src="rainbowShape" />
            </div>
          </div>
        </div>
        <div class="search-bar">
          <small-icons-search />
          <input
            class="search-input"
            type="text"
            v-model="query"
            :placeholder="inputPlaceholder"
          />
        </div>
        <events-header
          title="Events"
          :filter="filter"
          @click:filter="onChangeFilter"
        />
        <transition-group class="events-list" name="events-list" v-if="events.length">
          <event-card
            v-for="event in events"
            :key="event.id"
            :date="event.dateFrame"
            :eventName="event.title"
            :location="event.location"
            :favorite="event.favorite"
            @click:toggle-favorite="onClickToggleFavorite(event)"
          />
        </transition-group>
        <div v-else class="empty-state">
          <template v-if="query">
            <span>No events found for your query 🥲</span>
            <span>Here's a heart.</span>
            <img class="heart-rainbow" src="@/assets/heart-rainbow-true@2x.svg" />
          </template>
          <template v-else-if="filter === 'Favorites'">
            <span>You didn't set any favorite events yet!</span>
            <span>Go back to <span class="clickable" @click="onChangeFilter('All')">All events</span> and add some!</span>
            <span class="bigger">🫶</span>
          </template>
        </div>
        <img class="footer" :src="footer" />
      </div>
    </div>
  </div>
</template>

<script>
import Screws from "./Screws";
import MusicShape from "./MusicShape";
import SmallIconsSearch from "./SmallIconsSearch";
import EventsHeader from "./EventsHeader";
import EventCard from "./EventCard";
import Fuse from 'fuse.js';

const FAVORITE_IDS_KEY = "favoriteIds";

export default {
  name: "OutAndAbout",
  data() {
    return {
      filter: 'All',
      eventsList: [],
      favoriteIds: [],
      fuse: null,
      query: ''
    };
  },
  components: {
    Screws,
    MusicShape,
    SmallIconsSearch,
    EventsHeader,
    EventCard,
  },
  props: [
    "jukeboxTopLeft",
    "jukeboxTopRight",
    "subtitle",
    "title",
    "flipper",
    "animaLogo",
    "rainbowShape",
    "inputPlaceholder",
    "footer"
  ],
  mounted() {
    this.fetchEvents().then(this.initFuzzySearch);
    this.getFavorites();
  },
  computed: {
    events() {
      const query = this.query.trim();
      let data = [...this.eventsList];

      // filter by query
      if (query) {
        // results are sorted by relevance to query
        data = this.fuse.search(query).map(res => res.item);
      } else {
        // sort by date
        data = data.sort((a, b) => (new Date(a.startDate) - new Date(b.startDate)))
      }

      // add favorites values to events
      data = data.map(event => ({
          ...event,
          favorite: this.favoriteIds.includes(event.id)
        })
      );

      if (this.filter === 'Favorites') {
        data = data.filter(event => event.favorite);
      }

      return data;
    }
  },
  methods: {
    async fetchEvents() {
      const res = await fetch('/data/events.json');
      this.eventsList = await res.json();
    },
    initFuzzySearch() {
      this.fuse = new Fuse(this.eventsList, {
        keys: ['title', 'location', 'dateFrame'],
        findAllMatches: true,
        threshold: 0.3
      });
    },
    getFavorites() {
      const favoriteIdsString = localStorage.getItem(FAVORITE_IDS_KEY);
      if (favoriteIdsString) {
        this.favoriteIds = JSON.parse(favoriteIdsString);
      }
    },
    onChangeFilter(type) {
      this.filter = type;
    },
    onClickToggleFavorite({ id, favorite }) {
      const newList = [...this.favoriteIds];
      if (favorite) {
        newList.splice(this.favoriteIds.indexOf(id), 1);
      } else {
        newList.push(id);
      }

      localStorage.setItem(FAVORITE_IDS_KEY, JSON.stringify(newList));
      this.favoriteIds = newList;
    }
  }
};
</script>

<style>
.out-and-about {
  align-items: flex-start;
  display: flex;
}

.jukebox-background {
  align-items: center;
  background-color: var(--masala);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  width: 370px;
}

.group-container {
  height: 260px;
  position: relative;
  width: 370px;
}

.mask-group {
  height: 104px;
  left: 0;
  position: absolute;
  top: 0;
  width: 140px;
}

.mask-group-1 {
  height: 104px;
  left: 230px;
  position: absolute;
  top: 0;
  width: 140px;
}

.overlap-group6 {
  height: 236px;
  left: 75px;
  position: absolute;
  top: 24px;
  width: 225px;
}

.bg {
  background: linear-gradient(180deg, rgba(45, 45, 45, 0.7) 0%, rgba(45, 45, 45, 0) 100%);
  border: 0.8px solid var(--bianca);
  border-radius: 5.1px;
  box-shadow: 0px 4.44px 3.33px 3.33px #f8d57e33;
  height: 82px;
  left: 0;
  position: absolute;
  top: 127px;
  width: 220px;
}

.proud-all-year-round {
  color: var(--sunset-orange);
  font-family: var(--font-family-caveat);
  font-size: var(--font-size-xxl);
  font-weight: 500;
  left: 54px;
  letter-spacing: 0;
  line-height: 20px;
  text-align: center;
  white-space: nowrap;
}

.title {
  color: var(--bianca);
  font-family: var(--font-family-roboto-slab);
  font-size: var(--font-size-xxxl);
  height: 40px;
  text-align: center;
  margin-top: 10px;
  white-space: nowrap;
}

.overlap-group4 {
  height: 12px;
  left: 0;
  position: absolute;
  top: 113px;
  width: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.made-with-by-anima {
  color: var(--white);
  font-family: var(--font-family-mulish);
  font-size: var(--font-size-s);
  font-weight: 400;
  letter-spacing: 0;
  line-height: 12px;
  text-align: center;
  white-space: nowrap;
}

.heart-rainbow {
  height: 10px;
  width: 11px;
  animation: beat 1s linear 0s 2 normal forwards;
}

.flipper {
  height: 41px;
  left: 138px;
  position: absolute;
  top: 195px;
  width: 64px;
}

.shapes-illustration {
  align-items: center;
  display: flex;
  flex-direction: column;
  left: 20px;
  min-height: 141px;
  padding: 0px 0;
  position: absolute;
  top: 0;
  width: 205px;
}

.overlap-group5 {
  height: 106px;
  margin-right: 0.13px;
  position: relative;
  width: 205px;
}

.ellipse-shape {
  display: block;
  height: 106px;
  left: 67px;
  position: absolute;
  width: 106px;
}

.ellipse-shape.animate-enter {
  animation: animate-enter-frames 1s linear 0s infinite normal forwards;
  display: block;
}

.anima-logo {
  height: 35px;
  left: 167px;
  position: absolute;
  top: 70px;
  width: 38px;
}

.rainbow-shape {
  height: 31px;
  margin-right: 6.09px;
  margin-top: 4px;
  width: 34px;
}

.search-bar {
  align-items: center;
  background: linear-gradient(180deg, rgb(254, 124, 108) 0%, rgb(244.38, 166.51, 142.55) 100%);
  border: 0.5px solid var(--white);
  border-radius: 2px;
  display: flex;
  height: 30px;
  margin-right: 1px;
  margin-top: 7px;
  overflow: hidden;
  padding: 0 2px;
  position: sticky;
  width: 319px;
}

.search-input {
  background-color: transparent;
  border: 0;
  color: var(--white);
  font-family: var(--font-family-mulish);
  font-size: var(--font-size-xl);
  font-weight: 400;
  height: 30px;
  letter-spacing: 0;
  line-height: 12px;
  margin-left: 4px;
  padding: 0;
  white-space: nowrap;
  width: 100%;
}

.search-input::placeholder {
  color: #ffffff99;
}

.events-list {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  position: relative;
  width: 320px;
}

.events-list > * {
  margin-bottom: 10px;
}

.empty-state {
  font-family: var(--font-family-mulish);
  font-size: var(--font-size-xl);
  color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  line-height: 20px;
}
.empty-state .heart-rainbow {
  height: 30px;
  width: 30px;
  margin-top: 10px;
  animation: beat 3s linear 0s infinite normal forwards;
}
.empty-state .bigger {
  font-size: var(--font-size-xxxl);
  margin-top: 10px;
}
.empty-state .clickable {
  text-decoration: underline;
  font-weight: 600;
  cursor: pointer;
}

.footer {
  height: 104px;
  width: 369px;
  margin-top: auto;
}

.events-list-move,
.events-list-enter-active,
.events-list-leave-active {
  transition: all 0.2s;
}

.events-list-enter-from,
.events-list-leave-to {
  opacity: 0;
  transform: translateX(15px);
}

@keyframes animate-enter-frames {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0);
  }
}

@keyframes beat {
  0%, 50%, 100% {
    transform: scale(1, 1);
  }
  30%, 80% {
    transform: scale(1.2, 1.2);
  }
}
</style>
