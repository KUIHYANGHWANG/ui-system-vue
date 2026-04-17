<template>
  <button
    :class="[
      'btn', 
      `btn--${variant}`
      `btn--${size}`,
      {'is-disabled': disabled}
      ]"
    :disabled="disabled">
    <slot />
  </button>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary' // primary | secondary | danger
  },
  size: {
    type: String,
    default: 'md' // sm | md | lg
  },  
  disabled: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.btn {
  border: none;
  cursor: pointer;
  padding: 10px 16px;
  border-radius: 6px;
}

/* variant */
.btn--primary {
  background: #333;
  color: #fff;
}

.btn--secondary {
  background: #eee;
  color: #333;
}

.btn--danger {
  background: #e74c3c;
  color: #fff;
}

/* size */
.btn--sm {
  font-size: 12px;
  padding: 6px 10px;
}

.btn--md {
  font-size: 14px;
}

.btn--lg {
  font-size: 18px;
  padding: 14px 20px;
}

/* 상태 */
.is-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
