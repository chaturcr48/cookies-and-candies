<template>
  <v-container>
    <v-alert outlined type="info" color="purple" class="alert">
      This is disabled for whom who <strong>logged in</strong> as a <strong>Buyer</strong>.
      If you logged in as a seller and add new product then newely added product will visible in daily bits.
    </v-alert>
      <v-form>
        <v-container class="new-product-container">
          <h2 class="heading">Add New Product</h2>
          <v-text-field label="Product Title" required></v-text-field>
          <v-text-field label="Product Description" required></v-text-field>
          <v-text-field label="Set MAP" required></v-text-field>
          <v-file-input
            label="Upload Product Image"
            prepend-icon="mdi-camera"
          ></v-file-input>
          <v-btn class="mr-4 submit-button" color="primary" type="submit"
            >Submit</v-btn
          >
          <v-btn class="clear-button" color="primary">Clear</v-btn>
        </v-container>
      </v-form>
  </v-container>
</template>
<style scoped>
.alert {
  width: fit-content;
  text-align: center;
  justify-content: center;
}
.new-product-container {
  width: 500px;
}
.heading{
  color: rgba(0, 0, 0, 0.459);
}
</style>
