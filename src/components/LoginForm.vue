<template>
  <v-container>
    <v-form>
      <v-container>
        <h2>Login as a Seller</h2>
        <v-text-field label="Username" required></v-text-field>
        <v-text-field label="Mobile Number" required></v-text-field>
        <v-text-field label="E-mail" required></v-text-field>
        <v-text-field label="Password" required></v-text-field>
        <v-btn class="mr-4 submit-button" color="primary" type="submit"
          >Submit</v-btn
        >
        <v-btn class="clear-button" color="primary">Clear</v-btn>
      </v-container>
    </v-form>
  </v-container>
</template>