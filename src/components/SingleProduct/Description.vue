<template>
  <div id="main" class="mt-10 pt-10 mb-10">
    <el-tabs v-model="activeName" class="demo-tabs flex items-center flex-col">
      <!-- Description -->
      <el-tab-pane
        label="Description"
        name="first"
        class="flex flex-col items-center"
        id="description"
      >
        <h1 class="w-[70%] mt-8">
          Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
          portable active stereo speaker takes the unmistakable look and sound
          of Marshall, unplugs the chords, and takes the show on the road.
          <br />
          <br />
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of
          vintage styled engineering. Setting the bar as one of the loudest
          speakers in its class, the Kilburn is a compact, stout-hearted hero
          with a well-balanced audio which boasts a clear midrange and extended
          highs for a sound that is both articulate and pronounced. The analogue
          knobs allow you to fine tune the controls to your personal preferences
          while the guitar-influenced leather strap enables easy and stylish
          travel.
        </h1>
        <div class="flex w-[90%]">
          <img
            src="https://nowe-meble.pl/userdata/gfx/1578/Rozkladana-sofa-skandynawska-ALVA-nowe-meble.pl-Lodz.jpg"
            alt="Product img"
            class="w-[50%]"
          />
          <img
            src="https://i.pinimg.com/originals/f0/0a/be/f00abed1e70c694f466996feb8d914d1.jpg"
            alt="Product img"
            class="w-[50%]"
          />
        </div>
      </el-tab-pane>

      <!-- Additional information -->
      <el-tab-pane
        label="Additional Information"
        name="second"
        class="flex flex-col items-center"
        id="additional_information"
      >
        <h1 class="w-[70%] mt-8">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi eos
          perspiciatis nemo fugit, asperiores quidem maxime nostrum in iure
          vitae sapiente qui expedita velit est vero delectus nobis minus
          cupiditate rem quo ratione a culpa dolore quod? Reiciendis, iusto?
          Aliquid blanditiis exercitationem alias debitis facilis esse vitae
          dolor dolore amet, porro architecto. Hic, harum necessitatibus non
          quasi in natus optio labore perspiciatis cum nulla maiores distinctio
          tenetur, saepe esse eius magnam libero sunt voluptatibus delectus
          blanditiis quos accusamus vel asperiores numquam. Voluptates
          recusandae voluptatem rem possimus magni commodi eligendi ad dicta
          inventore quis sit tempora culpa atque deleniti placeat saepe, ratione
          soluta aliquid dignissimos eveniet obcaecati earum reprehenderit
          dolores eum. Perferendis deserunt nobis velit, itaque magni incidunt
          facere iusto officiis rerum quidem. Illo culpa asperiores mollitia,
          sint aliquid iure consectetur nulla deserunt esse modi deleniti
          officia? Exercitationem magnam a eius neque illo repudiandae nisi
          dolorum sint, in, officia eum, aliquid animi quidem perspiciatis!
          Molestiae praesentium molestias, natus at fugiat temporibus minus amet
          sunt, voluptas inventore facilis error repudiandae velit esse ratione
          laboriosam perferendis recusandae. Nobis tempora voluptatem cumque
          magni autem? Atque iure, vero enim quod voluptates nemo, possimus,
          voluptas odit laboriosam rem ullam similique quos fuga dicta
          recusandae. Amet, tempore.
        </h1>
      </el-tab-pane>

      <!-- Reviews -->
      <el-tab-pane
        label="Reviews [5]"
        name="third"
        class="flex flex-col justify-center items-center"
        id="reviews"
      >
        <div class="flex flex-col w-[70%]">
          <h1 id="reviewc" class="pb-5">All reviews - 25</h1>
          <h2>Eshmat</h2>
          <div class="flex items-center">
            <el-rate v-model="rate" allow-half disabled />
            <h1>2023.03.25</h1>
          </div>
          <h3>
            Mi A2 32 Televizorini oldim, kachestvosi zo'r, Allplayga 1 oylik
            kupon bilam taroz sovg'asi bilan keldi raxmat hursand bo'ldik,
            narxiyam boshqa joylardan arzinga tushdi. dostavka bir kunga
            kechigdi lekin zarari yo'q.
          </h3>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const rate = ref(4.5);
const activeName = ref("first");
</script>

<style lang="scss" scoped>
#main {
  border-top: 1px solid #d9d9d9;
}

#reviewc {
  border-bottom: 1px solid #d9d9d9;
}
.demo-tabs .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

@media screen and (max-width: 500px) {
  #description {
    h1 {
      width: 85%;
    }
    div {
      width: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 80%;
      }
    }
  }
  #additional_information {
    h1 {
      width: 85%;
    }
  }
  #reviews {
    div {
      width: 85%;
    }
  }
}
</style>
