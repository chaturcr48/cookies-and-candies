<template>
  <v-container>
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
            width="60"
            height="60"
            x-small
            rounded
            >Regular</v-btn
          ></v-img
        >
      </v-col>
      <v-col cols="12" sm="8">
        <div class="item-header">
          {{ item.title }}
          <span style="font-size: 13px">
            {{ item.seller }} {{ item.username }}</span
          >
        </div>
        <div class="item-subheader">{{ item.description }}</div>
        <div class="item-price">
          <span style="font-size: 13px">MAP</span> ₹{{ item.price }}
        </div>
        <div class="item-description">
          <div>
            {{ item.des1 }}
            <v-btn outlined rounded small color="purple">Place a bid</v-btn>
          </div>
          <div>{{ item.des2 }}</div>
          <div>{{ item.des3 }}</div>
          <div>{{ item.des4 }}</div>
        </div>
      </v-col>
      <v-col cols="12" sm="1">
        <v-icon large color="purple">mdi-heart</v-icon>
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
          "https://www.biggerbolderbaking.com/wp-content/uploads/2017/07/1C5A8967.jpg",
        title: "Vanila Cookies",
        description: "made with pure sunflower oil, healty to eat etc.",
        seller: "Mithali Sweets",
        username: "Ghanshyam",
        price: "31.00",
        des1: "4 bids 2d 4h left (Sun, 7:15 AM)",
        des2: "Vanila, Egg",
        des3: "made - 4 PM 8th April(2021",
        des4: "Hemant Nagar(East-Delhi)",
      },
      {
        imgLink:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGpOcfiVa3JU8mwNzcLD9zshQd8c91lg6xuw&usqp=CAU",
        title: "Vanila Cookies",
        description: "made with pure sunflower oil, healty to eat etc.",
        seller: "Mithali Sweets",
        username: "Ghanshyam",
        price: "31.00",
        des1: "4 bids 2d 4h left (Sun, 7:15 AM)",
        des2: "Vanila, Egg",
        des3: "made - 4 PM 8th April(2021",
        des4: "Hemant Nagar(East-Delhi)",
      },
      {
        imgLink:
          "https://cdn2.shopify.com/s/files/1/1968/0529/files/Bakedin_How_to_store_cakes_biscuits_and_cookies.jpg?v=1563186072",
        title: "Vanila Cookies",
        description: "made with pure sunflower oil, healty to eat etc.",
        seller: "Mithali Sweets",
        username: "Ghanshyam",
        price: "31.00",
        des1: "4 bids 2d 4h left (Sun, 7:15 AM)",
        des2: "Vanila, Egg",
        des3: "made - 4 PM 8th April(2021",
        des4: "Hemant Nagar(East-Delhi)",
      },
      {
        imgLink:
          "https://www.vegrecipesofindia.com/wp-content/uploads/2014/12/eggless-butter-cookies-recipe-2-1-500x375.jpg",
        title: "Vanila Cookies",
        description: "made with pure sunflower oil, healty to eat etc.",
        seller: "Mithali Sweets",
        username: "Ghanshyam",
        price: "31.00",
        des1: "4 bids 2d 4h left (Sun, 7:15 AM)",
        des2: "Vanila, Egg",
        des3: "made - 4 PM 8th April(2021",
        des4: "Hemant Nagar(East-Delhi)",
      },
      {
        imgLink:
          "https://www.recipegirl.com/wp-content/uploads/2015/01/Kit-Kat-Cake-1.jpg",
        title: "Vanila Cookies",
        description: "made with pure sunflower oil, healty to eat etc.",
        seller: "Mithali Sweets",
        username: "Ghanshyam",
        price: "31.00",
        des1: "4 bids 2d 4h left (Sun, 7:15 AM)",
        des2: "Vanila, Egg",
        des3: "made - 4 PM 8th April(2021",
        des4: "Hemant Nagar(East-Delhi)",
      },
      {
        imgLink:
          "https://bakedbree.com/wp-content/uploads/2020/08/Christmas-Tree-Cupcakes-RESHOOT-20-scaled-720x540.jpg",
        title: "Vanila Cookies",
        description: "made with pure sunflower oil, healty to eat etc.",
        seller: "Mithali Sweets",
        username: "Ghanshyam",
        price: "31.00",
        des1: "4 bids 2d 4h left (Sun, 7:15 AM)",
        des2: "Vanila, Egg",
        des3: "made - 4 PM 8th April(2021",
        des4: "Hemant Nagar(East-Delhi)",
      },
    ],
  }),
};
</script>

<style scoped>
.item-container {
  border-bottom: 1px solid rgba(0, 0, 0, 0.192);
  background-color: rgb(255, 248, 182);
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
