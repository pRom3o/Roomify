<!-- eslint-disable vue/multi-word-component-names -->
<!-- <div class="md:w-1/2 w-full h-full bg-[#fffffc]px-5">
  <div class="flex flex-col items-center h-full space-y-10">
      <h1 v-if="cartItems.length > 0" class="text-5xl font-light">Your Cart:</h1>
      <div class="min-h-80 w-full center" v-if="cartItems.length > 0">
          <transition-group name="items" tag="ul" class="w-full p-3">
              <li
                  v-for="items in cartItems"
                  :key="items.id"
                  class="flex items-center justify-between w-full border-b py-3"
              >
                  <div class="flex flex-col space-y-3">
                      <h3>{{ items.name }}</h3>
                      <p class="price">{{ items.price }}</p>
                  </div>
                  <div class="flex flex-col items-center space-y-3">
                      <button
                          @click="deleteFromCart(items.id)"
                          class="w-4 h-4 border rounded-full"
                      ></button>
                      <p class="font-normal">{{ items.qty }}</p>
                  </div>
              </li>
          </transition-group>
      </div>
      <div v-else class="flex items-center justify-center h-full w-full bg-[#fffffc]">
          <h4 class="text-4xl font-light"><i>Cart is empty...</i></h4>
      </div>
  </div>

  <div class="flex items-center justify-end w-full">
      <button
          @click="clearCart"
          class="btn-red hover p-3 rounded-2xl text-[#ededed] hover:bg-[#333333] hover:text-[#ffffff] hover"
      >
          Clear cart
      </button>
  </div>
</div>
<div class="w-1/2"></div> -->
