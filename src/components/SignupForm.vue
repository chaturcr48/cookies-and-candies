<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field label="Full Name" required></v-text-field>
          <v-text-field label="Username" required></v-text-field>
          <v-text-field label="Mobile Number" required></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field label="Email" required></v-text-field>
          <v-text-field label="Password" required></v-text-field>
          <v-text-field label="Confirm Password" required></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field label="Business" required></v-text-field>
          <v-text-field label="GSTIN NUmber" required></v-text-field>
          <v-text-field label="City/Location" required></v-text-field>
        </v-col>
      </v-row>
      <v-btn class="mr-4 submit-button" color="primary" type="submit"
        >Submit</v-btn
      >
      <v-btn class="clear-button" color="primary">Clear</v-btn>
    </v-container>
  </v-form>
</template>
