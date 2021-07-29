<template>
  <v-container class="mt-6 slider-container">
    <v-sheet class="mx-auto sheet" elevation="5" max-width="">
      <div class="newely-added-text">
        <router-link class="router-link" to="/newestArrival"
          ><span>Newely Added</span></router-link
        >
      </div>
      <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
        <v-slide-item
          v-for="item in productSliderItems"
          :key="item"
          v-slot="{ active, toggle }"
        >
          <v-card
            :color="active ? 'primary' : 'grey lighten-1'"
            class="ma-4"
            height="200"
            width="150"
            @click="toggle"
          >
            <v-img :src="item.imgLink" height="200">
              <div class="img-btn">
                <router-link class="router-link-over-img" to="/newestArrival"
                  ><span class="view">View</span></router-link>
              </div>
            </v-img>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    productSliderItems: [
      {
        imgLink:
          "https://nitrocdn.com/wGQBfjwJxisdWFaHfyrEIdkKcKRLgtJH/assets/static/optimized/rev-73da4cb/wp-content/uploads/2019/06/meringue-cookies-17.jpg",
      },
      {
        imgLink:
          "https://photo.foodgawker.com/wp-content/uploads/2017/12/3125355.jpg",
      },
      {
        imgLink:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCjI6xDegTCf-O8SszhNpdEnYwOuEdEWJreg&usqp=CAU",
      },
      {
        imgLink:
          "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F37%2F2020%2F08%2F26%2Ftwo-ingredient-peanut-butter-fudge-RU325886.jpg",
      },
      {
        imgLink:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs5PEwpUY77kyLLiO9mQGhPhIu0Lw261pJ1Q&usqp=CAU",
      },
      {
        imgLink:
          "https://media.istockphoto.com/photos/candy-canes-on-colorful-candies-background-picture-id674582650",
      },
      {
        imgLink:
          "https://5.imimg.com/data5/WZ/QG/FW/SELLER-73817392/chocolate-gems-500x500.jpg",
      },
      {
        imgLink:
          "https://resize.indiatvnews.com/en/resize/newbucket/715_-/2021/01/candyologist-1611669378.jpg",
      },
      {
        imgLink:
          "https://media.istockphoto.com/photos/assortment-of-fine-chocolate-candies-white-dark-and-milk-chocolate-picture-id923430892",
      },
      {
        imgLink:
          "https://cdn10.phillymag.com/wp-content/uploads/sites/3/2021/03/philadelphia-candies-double-bubble.jpg",
      },
      {
        imgLink:
          "https://previews.123rf.com/images/ilfede/ilfede1109/ilfede110900008/10467655-background-made-of-colourful-sweets-and-candies.jpg",
      },
      {
        imgLink:
          "https://www.hi5mart.com/image/cache/catalog/amit/Paan%20Smith%20Fruit%20Candies-750x750.jpg",
      },
      {
        imgLink:
          "https://img1.exportersindia.com/product_images/bc-full/dir_101/3025081/candy-1481260110-2631884.jpeg",
      },
      {
        imgLink:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoa2hKMGT3NqzHxI0tneliY3-CIzHp_5XSmg&usqp=CAU",
      },
      {
        imgLink: "https://images.financialexpress.com/2018/05/snap-1.jpg",
      },
      {
        imgLink:
          "https://static.toiimg.com/thumb/71438425.cms?width=680&height=512&imgsize=1265513",
      },
      {
        imgLink:
          "https://www.tasteandtellblog.com/wp-content/uploads/2020/12/Cake-Mix-Cookies-2.jpg",
      },
    ],
  }),
};
</script>

<style scoped>
.newely-added-text {
  padding-left: 85px;
  padding-top: 10px;
  color: brown;
}
.router-link {
  text-decoration: none;
  color: brown;
  font-weight: bold;
}
.router-link-over-img {
  color: white;
  text-decoration: none;
  border: 1px solid white;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.466);
  padding: 5px 10px;
}
.img-btn{
    text-align: right;
    margin-top: 173px;
}
</style>
