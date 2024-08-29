<template>
  <div class="w-screen h-screen flex items-center justify-center">
    <div class="shadow-xl rounded-xl border border-gray-200 p-4 min-w-120 bg-white">
      <form @submit="onSubmit">
        <h1 class="text-center text-2xl mb-4"> Login </h1>
        <CommonInput class="mb-4" label="Email" placeholder="Enter email" name="email"></CommonInput>
        <CommonInput type="password" label="Password" placeholder="Enter password" name="password"></CommonInput>

        <div class="flex justify-center">
          <CommonButton type="submit" label="Login"></CommonButton>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate';
import * as Yup from 'yup';

const { login } = useDirectusAuth();

const schema = Yup.object({
  email: Yup.string().email().label('Email').required(),
  password: Yup.string().label('Password').required(),
});

const { handleSubmit } = useForm({
  validationSchema: schema,
});

const onSubmit = handleSubmit(async (formData) => {
  try {
    const res = await login({
      email: formData.email,
      password: formData.password,
    });

    if (!!res.access_token && !!res.refresh_token) {
      window.sessionStorage.setItem('nuxt-access-token', res.access_token);
      window.sessionStorage.setItem('nuxt-refresh-token', res.refresh_token);

      navigateTo('/dashboard');
    }
  } catch (err) {
  }
});
</script>
