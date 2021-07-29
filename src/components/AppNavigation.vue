<template>
  <div>
    <v-toolbar color="purple" dark flat>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>e-Bonbons</v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="search-container">
        <v-text-field
          label="Search for anything"
          :rules="rules"
          hide-details="auto"
          outlined
        ></v-text-field>
      </div>
      <div class="all-category">
        <v-select :items="allCategory" label="All category" outlined></v-select>
      </div>
      <v-btn class="search-button" x-large color="primary">Search</v-btn>
      <v-btn class="advanced-button" outlined x-large color="primary">
        <router-link class="router-link" to='/addProduct'>Switch to Seller
        </router-link></v-btn>
    </v-toolbar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
      color="purple"
    >
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <div class="appNavigation-heading">e-Bonbons</div>
          </v-list-item>
          <v-list-item>
            <v-avatar class="avatar">
              <img
                src="https://cdn.vuetifyjs.com/images/john.jpg"
                alt="e-Bonbons"
              />
            </v-avatar>
          </v-list-item>
          <v-list-item>
            <div class="username">
              Username
            </div>
          </v-list-item>
          <v-divider :color="color.yellow"></v-divider>
          <v-list-item v-for="(item, i) in appNavigation" :key="i">
            <v-list-item-title class="font-weight-light">
              <router-link class="app-navigation-link" :to="item.path">
                <v-list-item-avatar>
                  <v-icon size="25" :color="color.yellow">
                    {{ item.icon }}
                  </v-icon>
                </v-list-item-avatar>
                <span>{{ item.name }}</span>
              </router-link>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title class="font-weight-light">
              <v-list-item-avatar>
                <v-icon size="25" :color="color.yellow"> mdi-login </v-icon>
              </v-list-item-avatar>
              <span class="span-modal" @click="loginAsASellerSheet = !sheet"
                >Login as a Seller</span
              >
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title class="font-weight-light">
              <v-list-item-avatar>
                <v-icon size="25" :color="color.yellow"> mdi-arrow-right-bold-box-outline </v-icon>
              </v-list-item-avatar>
              <span class="span-modal" @click="signupAsASellerSheet = !sheet"
                >Signup as a Seller</span
              >
            </v-list-item-title>
          </v-list-item>
          
          <div class="text-center">
            <v-bottom-sheet v-model="loginAsASellerSheet" inset>
              <v-sheet class="text-center">
                <v-btn
                  class="mt-6"
                  text
                  color="red"
                  @click="loginAsASellerSheet = !loginAsASellerSheet"
                >
                  Close
                </v-btn>
                <LoginForm />
              </v-sheet>
            </v-bottom-sheet>
          </div>
          <div class="text-center">
            <v-bottom-sheet v-model="signupAsASellerSheet" inset>
              <v-sheet class="text-center">
                <v-btn
                  class="mt-6"
                  text
                  color="red"
                  @click="signupAsASellerSheet = !signupAsASellerSheet"
                >
                  Close
                </v-btn>
                <SignupForm />
              </v-sheet>
            </v-bottom-sheet>
          </div>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import LoginForm from "./LoginForm.vue";
import SignupForm from "./SignupForm.vue";
export default {
  components: {
    LoginForm,
    SignupForm,
  },
  data() {
    return {
      allCategory: ["High Rated", "Newest Arrival", "Most Purchased", "Most Liked"],
      drawer: false,
      loginAsABuyerSheet: false,
      loginAsASellerSheet: false,
      signupAsABuyerSheet: false,
      signupAsASellerSheet: false,
      color: { purple: "#6a1b9a", yellow: "#ffeb3b", lightPurple: "#963ACE" },
      appNavigation: [
        { icon: "mdi-home-outline", name: "Home", path: "/" },
        { icon: "mdi-human-greeting", name: "Daily Bid", path: "/dailyBid" },
        {
          icon: "mdi-truck-delivery",
          name: "Newest Arrival",
          path: "/newestArrival",
        },
        { icon: "mdi-view-dashboard", name: "Add New Item", path: "/addProduct" },
        { icon: "mdi-share", name: "Share App", path: "/" },
      ],
    };
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style scoped>

.span-modal {
  color: white;
}
.app-navigation-link {
  text-decoration: none;
}
.app-navigation-link span {
  color: white;
}
.search-container {
  width: 600px;
}
.all-category {
  width: 150px;
  margin-top: 28px;
}
.search-button {
  margin: 0px 10px;
}
.advanced-button {
  margin: 0px 10px;
}
.avatar {
  text-align: center;
  margin: auto;
}
.appNavigation-heading {
  color: white;
  margin: auto;
}
.username {
  color: white;
  font-weight: bold;
  margin: auto;
}
.router-link{
  text-decoration: none;
}
</style>
