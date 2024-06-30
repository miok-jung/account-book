<template>
  <div class="q-px-lg">
    <h1>Calculator</h1>
    <p>윈도우에서 보여지는 가장 기본적인 계산기를 만들어보았습니다.</p>
    <q-card>
      <q-card-section horizontal>
        <!-- SECTION: 좌. 계산기 -->
        <q-card-section
          class="column items-center q-pa-none q-pr-none full-width"
          style="width: 50%; border: 1px solid lime"
        >
          <div>계산기 보여질 화면</div>
          <q-input v-model="calculatorPreview" filled readonly></q-input>
          <div class="flex no-wrap gutter-x-8px q-mb-sm full-width">
            <!-- ANCHOR: 0.1 메모리 삭제 -->
            <q-btn class="length5" outline
              >MC
              <q-tooltip
                >메모리에 저장된 숫자를 모두 지운다. 단축키는 [Ctrl +
                L]</q-tooltip
              >
            </q-btn>
            <!-- ANCHOR: 0.2 메모리 리콜 -->
            <q-btn class="length5" outline
              >MR
              <q-tooltip
                >메모리에 저장된 숫자를 다시 불러 들인다. 가져온 숫자는 메모리에
                남아 있게 된다. 단축키는 [Ctrl + R]</q-tooltip
              >
            </q-btn>
            <!-- ANCHOR: 0.3 메모리에서 더하기 -->
            <q-btn class="length5" outline
              >M+
              <q-tooltip
                >현재 메모리에 저장되어 있는 숫자에 현재 숫자를 더한다. 단축키는
                [Ctrl + P]</q-tooltip
              >
            </q-btn>
            <!-- ANCHOR: 0.4 메모리에서 빼기 -->
            <q-btn class="length5" outline
              >M-
              <q-tooltip
                >현재 저장되어있는 메모리에서 계산기 값을 뺀다. 단축키는 [Ctrl +
                Q]</q-tooltip
              >
            </q-btn>
            <!-- ANCHOR: 0.5 메모리 저장 -->
            <q-btn class="length5" outline>
              MS
              <q-tooltip
                >현재 숫자를 메모리에 저장한다. 단축키는 [Ctrl + M]
              </q-tooltip>
            </q-btn>
          </div>
          <div class="flex no-wrap gutter-x-8px q-mb-sm full-width">
            <!-- ANCHOR: 1.1 비율: 백분율 -->
            <q-btn class="length4" outline
              >&#37;
              <q-tooltip
                >곱셈 결과를 백분율로 나타날 때 사용한다. 숫자를 입력하고 *를
                클릭한 후(곱셈) 둘째 숫자를 입력한 다음 %를 클릭하는 식으로
                사용한다. 단축키는 %</q-tooltip
              >
            </q-btn>
            <!-- ANCHOR: 1.2 제거: 현재 계산기 숫자 -->
            <q-btn class="length4" outline
              >CE
              <q-tooltip
                >현재 계산기에 나타난 숫자를 지운다. 단축키는 [Del]
                키</q-tooltip
              >
            </q-btn>
            <!-- ANCHOR: 1.3 제거: 계산 결과 -->
            <q-btn class="length4" outline
              >C
              <q-tooltip>현재 계산 결과를 지운다. 단축키 [Esc] 키</q-tooltip>
            </q-btn>
            <!-- ANCHOR: 1.4 제거: 마지막 입력한 숫자 -->
            <q-btn class="length4" icon="backspace" outline>
              <q-tooltip
                >마지막으로 입력한 숫자를 지운다. 단축키는 Backspace 이다.
              </q-tooltip>
            </q-btn>
          </div>
          <div class="flex no-wrap gutter-x-8px q-mb-sm full-width">
            <!-- ANCHOR: 2.1 역수 -->
            <q-btn class="length4" outline
              >1/x
              <q-tooltip>현재 숫자의 역수를 구한다. 단축키는 [R]</q-tooltip>
            </q-btn>
            <!-- ANCHOR: 2.2 sur 제곱근 -->
            <q-btn class="length4" outline
              >x
              <sup>2</sup>
              <q-tooltip>현재 수의 제곱근을 구한다. 단축키는 [@]</q-tooltip>
            </q-btn>
            <!-- ANCHOR: 2.3 -->
            <q-btn class="length4" outline
              >CE
              <q-tooltip>현재 계산 결과를 지운다. 단축키 [Esc]</q-tooltip>
            </q-btn>
            <!-- 나누기 -->
            <q-btn class="length4" outline>&divide;</q-btn>
          </div>
          <div class="flex no-wrap gutter-x-8px q-mb-sm full-width">
            <q-btn class="length4" outline>7</q-btn>
            <q-btn class="length4" outline>8</q-btn>
            <q-btn class="length4" outline>9</q-btn>
            <!-- 곱하기 -->
            <q-btn class="length4" outline>&times;</q-btn>
          </div>
          <div class="flex no-wrap gutter-x-8px q-mb-sm full-width">
            <q-btn class="length4" outline>4</q-btn>
            <q-btn class="length4" outline>5</q-btn>
            <q-btn class="length4" outline>6</q-btn>
            <!-- 빼기 -->
            <q-btn class="length4" outline>-</q-btn>
          </div>
          <div class="flex no-wrap gutter-x-8px q-mb-sm full-width">
            <q-btn class="length4" outline>1</q-btn>
            <q-btn class="length4" outline>2</q-btn>
            <q-btn class="length4" outline>3</q-btn>
            <!-- 더하기 -->
            <q-btn class="length4" outline>+</q-btn>
          </div>
          <div class="flex no-wrap gutter-x-8px q-mb-sm full-width">
            <q-btn class="length2-spacing-8" outline>0</q-btn>
            <q-space style="width: 8px" />
            <q-btn class="length4" outline>.</q-btn>
            <!-- 총합 -->
            <q-btn class="length4" outline>=</q-btn>
          </div>
        </q-card-section>
        <!-- !SECTION: 계산기 END -->
        <!-- SECTION: 우. 메모리 혹은 기록 -->
        <q-card-sectio style="width: 50%; border: 1px solid blue">
          기록, 메모리
        </q-card-sectio>
        <!-- !SECTION: 우. 메모리 혹은 기록 END -->
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// NOTE: 계산 순서 미리보기
const calculatorPreview = ref<string>('');
</script>

<style lang="scss" scoped>
@import 'src/css/styles.scss';
</style>
