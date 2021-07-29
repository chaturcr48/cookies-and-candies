<template>
  <v-container>
    <v-alert outlined type="info" color="purple" class="alert">
      <strong>PLACE A BID </strong> button is disabled for the user who is not <strong>loggedin</strong>.
      Please <strong>login</strong> to place a bit and enjoy your day with <strong>cookies and candies :-)</strong><br>
      This alert is not visible once you logged in.
    </v-alert>
    <v-row v-for="(item, i) in items" :key="i" class="item-container">
      <v-col cols="12" sm="3">
        <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="190"
          max-width="350"
          :src="item.imgLink"
          ><v-btn
            class="white--text"
            color="purple"
            width="40"
            height="40"
            x-small
            rounded
            >New</v-btn
          ></v-img
        >
      </v-col>
      <v-col cols="12" sm="8">
        <div class="item-header">
          {{ item.title }}
          <span style="font-size: 13px"
            >{{ item.seller }} {{ item.username }}</span
          >
        </div>
        <div class="item-subheader">{{ item.subTitle }}</div>
        <div class="item-price">
          <span style="font-size: 13px">MAP</span> ₹{{ item.price }}
        </div>
        <div class="item-description">
          <div>
            {{ item.des1 }}
            <v-btn outlined rounded small color='purple'>Place a bid</v-btn>
          </div>
          <div>{{ item.des2 }}</div>
          <div>{{ item.des3 }}</div>
          <div>{{ item.des4 }}</div>
        </div>
      </v-col>
      <v-col cols="12" sm="1">
        <v-btn icon><v-icon large color="purple">mdi-heart</v-icon></v-btn>
        <v-btn icon id="share" color="purple" @click="sheet = !sheet">
          <v-icon medium>mdi-share-variant</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-bottom-sheet v-model="sheet">
      <v-sheet class="text-center" height="180px">
        <v-btn class="mt-6" text color="red" @click="sheet = !sheet"
          >Close</v-btn
        >
        <div class="py-4">
          <v-row justify="space-around" align="center">
            <ShareNetwork network="whatsapp">
              <v-btn icon>
                <v-icon color="green" x-large>mdi-whatsapp</v-icon> </v-btn
              ><v-subheader>Whatsapp</v-subheader>
            </ShareNetwork>
            <ShareNetwork network="facebook">
              <v-btn icon>
                <v-icon color="blue" x-large>mdi-facebook</v-icon> </v-btn
              ><v-subheader>Facebook</v-subheader>
            </ShareNetwork>
            <ShareNetwork network="twitter">
              <v-btn icon>
                <v-icon color="blue" x-large>mdi-twitter</v-icon> </v-btn
              ><v-subheader>Twitter</v-subheader>
            </ShareNetwork>
            <ShareNetwork network="telegram">
              <v-btn icon>
                <v-icon color="blue" x-large>mdi-telegram</v-icon> </v-btn
              ><v-subheader>Telegram</v-subheader>
            </ShareNetwork>
          </v-row>
        </div>
      </v-sheet>
    </v-bottom-sheet>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    sheet: false,
    items: [
      {
        imgLink:
          "https://nitrocdn.com/wGQBfjwJxisdWFaHfyrEIdkKcKRLgtJH/assets/static/optimized/rev-73da4cb/wp-content/uploads/2019/06/meringue-cookies-17.jpg",
        title: "Jeera Cookie",
        subTitle:
          "Chaayos Chai Time Snacks - Made with fried jeera | Crunchy Snack | Biscuits and Snacks | Family Packs | Coconut Flavour Cookies | Fruit Biscuits",
        seller: "Agrawal Sweets",
        username: "Mohit",
        price: "17.00",
        des1: "3 bids 2d 4h left (Sun, 7:15 AM)",
        des2: "Chocolate, Egg",
        des3: "made - 8 AM 7th July(2021)",
        des4: "Burari(North-Delhi)",
      },
      {
        imgLink:
          "https://photo.foodgawker.com/wp-content/uploads/2017/12/3125355.jpg",
        title: "Jeera Cookie",
        subTitle:
          "Chaayos Chai Time Snacks - Made with fried jeera | Crunchy Snack | Biscuits and Snacks | Family Packs | Coconut Flavour Cookies | Fruit Biscuits",
        seller: "Agrawal Sweets",
        username: "Mohit",
        price: "34.00",
        des1: "7 bids 2d 4h left (Sun, 7:15 AM)",
        des2: "Vanilla, Eggless",
        des3: "made - 8 AM 7th July(2021)",
        des4: "Burari(North-Delhi)",
      },
      {
        imgLink:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCjI6xDegTCf-O8SszhNpdEnYwOuEdEWJreg&usqp=CAU",
        title: "Jeera Cookie",
        subTitle:
          "Chaayos Chai Time Snacks - Made with fried jeera | Crunchy Snack | Biscuits and Snacks | Family Packs | Coconut Flavour Cookies | Fruit Biscuits",
        seller: "Agrawal Sweets",
        username: "Mohit",
        price: "23.00",
        des1: "5 bids 2d 4h left (Sun, 7:15 AM)",
        des2: "Nutella, Egg",
        des3: "made - 8 AM 7th July(2021)",
        des4: "Burari(North-Delhi)",
      },
      {
        imgLink:
          "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F37%2F2020%2F08%2F26%2Ftwo-ingredient-peanut-butter-fudge-RU325886.jpg",
        title: "Jeera Cookie",
        subTitle:
          "Chaayos Chai Time Snacks - Made with fried jeera | Crunchy Snack | Biscuits and Snacks | Family Packs | Coconut Flavour Cookies | Fruit Biscuits",
        seller: "Agrawal Sweets",
        username: "Mohit",
        price: "11.00",
        des1: "4 bids 2d 4h left (Sun, 7:15 AM)",
        des2: "Oatmeal, Egglass",
        des3: "made - 8 AM 7th July(2021)",
        des4: "Burari(North-Delhi)",
      },
      {
        imgLink:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs5PEwpUY77kyLLiO9mQGhPhIu0Lw261pJ1Q&usqp=CAU",
        title: "Jeera Cookie",
        subTitle:
          "Chaayos Chai Time Snacks - Made with fried jeera | Crunchy Snack | Biscuits and Snacks | Family Packs | Coconut Flavour Cookies | Fruit Biscuits",
        seller: "Agrawal Sweets",
        username: "Mohit",
        price: "9.00",
        des1: "0 bids 2d 4h left (Sun, 7:15 AM)",
        des2: "Chocolate, Egg",
        des3: "made - 8 AM 7th July(2021)",
        des4: "Burari(North-Delhi)",
      },
      {
        imgLink:
          "https://media.istockphoto.com/photos/candy-canes-on-colorful-candies-background-picture-id674582650",
          title: "Jeera Cookie",
        subTitle:
          "Chaayos Chai Time Snacks - Made with fried jeera | Crunchy Snack | Biscuits and Snacks | Family Packs | Coconut Flavour Cookies | Fruit Biscuits",
        seller: 'Agrawal Sweets',
        username: 'Mohit',
        price: "22.00",
        des1: "10 bids 2d 4h left (Sun, 7:15 AM)",
        des2: "Chocolate, Egg",
        des3: "made - 8 AM 7th July(2021)",
        des4: "Burari(North-Delhi)",
      },
      {
        imgLink:
          "https://5.imimg.com/data5/WZ/QG/FW/SELLER-73817392/chocolate-gems-500x500.jpg",
          title: "Jeera Cookie",
        subTitle:
          "Chaayos Chai Time Snacks - Made with fried jeera | Crunchy Snack | Biscuits and Snacks | Family Packs | Coconut Flavour Cookies | Fruit Biscuits",
        seller: 'Agrawal Sweets',
        username: 'Mohit',
        price: "9.00",
        des1: "0 bids 2d 4h left (Sun, 7:15 AM)",
        des2: "Chocolate, Egg",
        des3: "made - 8 AM 7th July(2021)",
        des4: "Burari(North-Delhi)",
      },
      {
        imgLink:
          "https://resize.indiatvnews.com/en/resize/newbucket/715_-/2021/01/candyologist-1611669378.jpg",
        title: "Jeera Cookie",
        subTitle:
          "Chaayos Chai Time Snacks - Made with fried jeera | Crunchy Snack | Biscuits and Snacks | Family Packs | Coconut Flavour Cookies | Fruit Biscuits",
        seller: "Agrawal Sweets",
        username: "Mohit",
        price: "9.00",
        des1: "0 bids 2d 4h left (Sun, 7:15 AM)",
        des2: "Chocolate, Egg",
        des3: "made - 8 AM 7th July(2021)",
        des4: "Burari(North-Delhi)",
      },
      {
        imgLink:
          "https://media.istockphoto.com/photos/assortment-of-fine-chocolate-candies-white-dark-and-milk-chocolate-picture-id923430892",
          title: "Jeera Cookie",
        subTitle:
          "Chaayos Chai Time Snacks - Made with fried jeera | Crunchy Snack | Biscuits and Snacks | Family Packs | Coconut Flavour Cookies | Fruit Biscuits",
        seller: 'Agrawal Sweets',
        username: 'Mohit',
        price: "9.00",
        des1: "0 bids 2d 4h left (Sun, 7:15 AM)",
        des2: "Chocolate, Egg",
        des3: "made - 8 AM 7th July(2021)",
        des4: "Burari(North-Delhi)",
      },
      {
        imgLink:
          "https://cdn10.phillymag.com/wp-content/uploads/sites/3/2021/03/philadelphia-candies-double-bubble.jpg",
        title: "Jeera Cookie",
        subTitle:
          "Chaayos Chai Time Snacks - Made with fried jeera | Crunchy Snack | Biscuits and Snacks | Family Packs | Coconut Flavour Cookies | Fruit Biscuits",
        seller: "Agrawal Sweets",
        username: "Mohit",
        price: "9.00",
        des1: "0 bids 2d 4h left (Sun, 7:15 AM)",
        des2: "Chocolate, Egg",
        des3: "made - 8 AM 7th July(2021)",
        des4: "Burari(North-Delhi)",
      },
      {
        imgLink:
          "https://previews.123rf.com/images/ilfede/ilfede1109/ilfede110900008/10467655-background-made-of-colourful-sweets-and-candies.jpg",
          title: "Jeera Cookie",
        subTitle:
          "Chaayos Chai Time Snacks - Made with fried jeera | Crunchy Snack | Biscuits and Snacks | Family Packs | Coconut Flavour Cookies | Fruit Biscuits",
        seller: 'Agrawal Sweets',
        username: 'Mohit',
        price: "9.00",
        des1: "0 bids 2d 4h left (Sun, 7:15 AM)",
        des2: "Chocolate, Egg",
        des3: "made - 8 AM 7th July(2021)",
        des4: "Burari(North-Delhi)",
      },
      {
        imgLink:
          "https://www.hi5mart.com/image/cache/catalog/amit/Paan%20Smith%20Fruit%20Candies-750x750.jpg",
          title: "Jeera Cookie",
        subTitle:
          "Chaayos Chai Time Snacks - Made with fried jeera | Crunchy Snack | Biscuits and Snacks | Family Packs | Coconut Flavour Cookies | Fruit Biscuits",
        seller: 'Agrawal Sweets',
        username: 'Mohit',
        price: "9.00",
        des1: "0 bids 2d 4h left (Sun, 7:15 AM)",
        des2: "Chocolate, Egg",
        des3: "made - 8 AM 7th July(2021)",
        des4: "Burari(North-Delhi)",
      },
      {
        imgLink:
          "https://img1.exportersindia.com/product_images/bc-full/dir_101/3025081/candy-1481260110-2631884.jpeg",
        title: "Jeera Cookie",
        subTitle:
          "Chaayos Chai Time Snacks - Made with fried jeera | Crunchy Snack | Biscuits and Snacks | Family Packs | Coconut Flavour Cookies | Fruit Biscuits",
        seller: "Agrawal Sweets",
        username: "Mohit",
        price: "9.00",
        des1: "0 bids 2d 4h left (Sun, 7:15 AM)",
        des2: "Chocolate, Egg",
        des3: "made - 8 AM 7th July(2021)",
        des4: "Burari(North-Delhi)",
      },
      {
        imgLink:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoa2hKMGT3NqzHxI0tneliY3-CIzHp_5XSmg&usqp=CAU",
          title: "Jeera Cookie",
        subTitle:
          "Chaayos Chai Time Snacks - Made with fried jeera | Crunchy Snack | Biscuits and Snacks | Family Packs | Coconut Flavour Cookies | Fruit Biscuits",
        seller: 'Agrawal Sweets',
        username: 'Mohit',
        price: "9.00",
        des1: "0 bids 2d 4h left (Sun, 7:15 AM)",
        des2: "Chocolate, Egg",
        des3: "made - 8 AM 7th July(2021)",
        des4: "Burari(North-Delhi)",
      },
      {
        imgLink: "https://images.financialexpress.com/2018/05/snap-1.jpg",
        title: "Jeera Cookie",
        subTitle:
          "Chaayos Chai Time Snacks - Made with fried jeera | Crunchy Snack | Biscuits and Snacks | Family Packs | Coconut Flavour Cookies | Fruit Biscuits",
        seller: 'Agrawal Sweets',
        username: 'Mohit',
        price: "9.00",
        des1: "0 bids 2d 4h left (Sun, 7:15 AM)",
        des2: "Chocolate, Egg",
        des3: "made - 8 AM 7th July(2021)",
        des4: "Burari(North-Delhi)",
      },
      {
        imgLink:
          "https://static.toiimg.com/thumb/71438425.cms?width=680&height=512&imgsize=1265513",
        title: "Jeera Cookie",
        subTitle:
          "Chaayos Chai Time Snacks - Made with fried jeera | Crunchy Snack | Biscuits and Snacks | Family Packs | Coconut Flavour Cookies | Fruit Biscuits",
        seller: "Agrawal Sweets",
        username: "Mohit",
        price: "9.00",
        des1: "0 bids 2d 4h left (Sun, 7:15 AM)",
        des2: "Chocolate, Egg",
        des3: "made - 8 AM 7th July(2021)",
        des4: "Burari(North-Delhi)",
      },
      {
        imgLink:
          "https://www.tasteandtellblog.com/wp-content/uploads/2020/12/Cake-Mix-Cookies-2.jpg",
        title: "Jeera Cookie",
        subTitle:
          "Chaayos Chai Time Snacks - Made with fried jeera | Crunchy Snack | Biscuits and Snacks | Family Packs | Coconut Flavour Cookies | Fruit Biscuits",
        seller: "Agrawal Sweets",
        username: "Mohit",
        price: "9.00",
        des1: "0 bids 2d 4h left (Sun, 7:15 AM)",
        des2: "Chocolate, Egg",
        des3: "made - 8 AM 7th July(2021)",
        des4: "Burari(North-Delhi)",
      },
    ],
  }),
};
</script>

<style scoped>
.item-container {
  background-color: rgb(255, 248, 182);
  margin: 3px 0px;
}
.item-header {
  font-weight: bold;
  font-size: 22px;
}
.item-subheader {
  font-size: 12px;
}
.item-price {
  font-size: 26px;
  font-weight: bold;
}
.item-description {
  font-size: 12px;
}
</style>
