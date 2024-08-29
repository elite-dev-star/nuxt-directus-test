<template>
  <div class="flex justify-between items-center mb-4">
    <h1 class="text-2xl font-bold">Profile Settings</h1>

    <CommonButton label="Log out" @click="onLogout" />
  </div>
  <form @submit="onSubmit">
    <div class="grid grid-cols-2 gap-x-4">
      <CommonInput label="First name" name="first_name" />
      <CommonInput label="Last name" name="last_name" />
      <CommonInput label="Email Address" name="email" />
      <CommonInput label="Password" name="password" type="password" />
      <CommonTextarea label="Biography" name="description" :rows="5" />
    </div>

    <div class="mt-4 flex justify-end">
      <CommonButton type="submit" label="Save"></CommonButton>
    </div>
  </form>
</template>

<script setup lang="ts">
import * as Yup from 'yup';
import { useForm } from 'vee-validate';

const user = useDirectusUser();
const { logout } = useDirectusAuth();
const { updateUser } = useDirectusUsers();

const schema = Yup.object({
  first_name: Yup.string().label('First name').required(),
  last_name: Yup.string(),
  email: Yup.string().email().label('Email').required(),
  password: Yup.string().label('Password').required(),
  description: Yup.string().label('Biography'),
});

const { handleSubmit } = useForm({
  validationSchema: schema,
  initialValues: {
    first_name: user.value?.first_name,
    last_name: user.value?.last_name,
    email: user.value?.email,
    password: '',
    description: user.value?.description || ''
  }
});

const onSubmit = handleSubmit(async (formData) => {
  if (!user.value?.id) return;

  await updateUser({
    id: user.value.id,
    user: formData
  })
});

const onLogout = async () => {
  await logout();
  navigateTo('/');
};

</script>
