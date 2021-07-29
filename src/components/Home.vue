<template>
  <div>
    <v-carousel hide-delimiter-background delimiter-icon="mdi-minus">
      <v-carousel-item
        class="corousal"
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
      >
        <v-container>
          <h1>Here you can sell or buy product globally</h1>
          <div>
            <br><br>
          <p>Place signup and login asap <br> to place a bid to enjoy cookies and candies.</p>

          </div>
          <v-btn to='/newestArrival' outlined>See our products</v-btn>
        </v-container>
      </v-carousel-item>
    </v-carousel>
    <div>
      <ProductSlider />
      <HomeList></HomeList>
    </div>
  </div>
</template>
<script>
import HomeList from "./HomeList.vue";
import ProductSlider from "./ProductSlider.vue";
export default {
  components: {
    HomeList,
    ProductSlider,
  },
  data() {
    return {
      items: [
        {
          src:
            "https://images.wallpaperscraft.com/image/cookies_biscuits_cakes_pastries_114822_2560x1024.jpg",
        },
        {
          src:
            "https://www.walterrauag.com/de-wAssets/img/produkte/weblication/wThumbnails/34e8c8722449b5fg52a13ae6428edd4e.jpg",
        },
        {
          src:
            "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/c2f6ddedd45341bcb1f5f08e4dc93288/BFV63333_TimeToCookCheesecake_AL_010620_v05_1.jpg",
        },
        {
          src:
            "https://hips.hearstapps.com/delish/assets/16/51/1482339335-delish-funfetti-cookies-2.jpg",
        },
      ],
    };
  },
};
</script>
<style>
.corousal {
  height: 100px;
  opacity: 0.9;
}
</style>
