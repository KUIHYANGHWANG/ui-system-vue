<script setup lang="ts">
import BaseButton from '../components/Button/BaseButton.vue';

</script>

<template>
  <div class="login">
    <h1>로그인</h1>
    <BaseInput 
    v-model="email"
    placeholder="이메일을 입력하세요"
    :error="isTouched.email && !!emailError"
    :errorMessage="isTouched .email ? emailError : ''"
    @update:modelValue="handleEmail"
    />

    <BaseInput 
    v-model="password"
    placeholder="비밀번호를 입력하세요"
    :error="isTouched.password && !!passwordError"
    :errorMessage="isTouched.password ? passwordError : ''"
    @update:modelValue="handlePassword"
      />
    
      <BaseButton 
      :disabled="!!isValid || isLoading"
      @click="handleLogin"
    >
    {{  isLoading ? '로딩중...' : '로그인' }}
    </BaseButton>

    <p v-if="loginResult" class="result">{{ loginResult }}</p>
  </div>
  </template>

  <style scoped>
  .login {
    display: flex;
    flex-direction: column;
    max-width: 320px;
    margin: 100px auto;
    gap: 12px;
  }
  .result {
    margin-top: 1%;
    font-size: 14px;
    color: green;
  }
