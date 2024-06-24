<template>
  <q-scroll-area
    :thumb-style="thumbStyle"
    :bar-style="barStyle"
    :style="{
      height: `calc(100vh - ${props.headerHeight}px) `,
    }"
  >
    <q-page class="row items-center justify-evenly">
      <p v-for="n in 100" :key="n" class="text-center">
        {{ props.leftDrawerOpen }}<br />
        본문 가로 사이즈 : {{ $q.screen.width }} px - 300px<br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
        perspiciatis obcaecati cupiditate at natus quia voluptatum sunt
        temporibus saepe ipsa corrupti repudiandae, sint sed deleniti
        accusantium facere a, minima laborum?<br />
      </p>
    </q-page>
  </q-scroll-area>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { colors, useQuasar } from 'quasar';

const props = withDefaults(
  defineProps<{
    leftDrawerOpen: boolean;
    headerHeight: number;
  }>(),
  {
    leftDrawerOpen: false,
    headerHeight: 100,
  }
);

// NOTE: Quasar Setting
const $q = useQuasar();
const { getPaletteColor } = colors;
const primaryColor = getPaletteColor('primary');

// NOTE: scroll style
const thumbStyle = reactive({
  right: '4px',
  borderRadius: '5px',
  backgroundColor: primaryColor,
  width: '5px',
  opacity: '0.75',
});

const barStyle = reactive({
  right: '2px',
  borderRadius: '9px',
  backgroundColor: primaryColor,
  width: '9px',
  opacity: '0.2',
});
</script>
