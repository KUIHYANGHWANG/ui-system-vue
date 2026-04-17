<template>
  <div class="input-wrapper">
    <input 
    class="input" 
    :class="[
      `input--${variant}`,
      {'is-error': error}
    ]"
    :placeholder="placeholder"
    :value="modelValue "
    :disabled="disabled"
    @input="onInput"
    />
    <p v-if="errorMessage" class="input-error">{{ errorMessage }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: String,
  placeholder: String,// 1. placeholder라는 이름으로 문자열(String) 데이터를 받겠다.
  // 2. variant라는 이름으로 데이터를 받되, 안 넘어오면 기본값은 'default'다.
  variant: {
    type: String,
    default: 'default' // default | outlined
  },
  disabled: {
    type: Boolean,
    default: false
  },
  // 3. error라는 이름으로 참/거짓(Boolean) 데이터를 받겠다.
  error: {
    type: Boolean,
    default: false
  },
  errorMessage: String
})

const emit = defineEmits(['update:modelValue'])

const onInput = (e) => {
  emit('update:modelValue', e.target.value)
}
</script>

<style scoped>
.input-wrapper {
  display: flex;
  flex-direction: column;
}

.input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

/* variant */
.input--default {
  background: #fff;
}

.input--outlined {
  border: 2px solid #333;
}

/* 상태 */
.is-error {
  border-color: red;
}

.input-error {
  font-size: 12px;
  color: red;
  margin-top: 4px;
}
</style>