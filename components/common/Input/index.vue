<template>
  <div class="mb-4">
    <label class="mb-1 block">{{label}}</label>
    <input
      v-model="value"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      class="focus:outline-none w-full rounded border border-gray-200 px-4 py-2"
    />
    <span v-if="errorMessage" class="text-xs text-red-500">{{errorMessage}}</span>
  </div>
</template>

<script setup lang="ts">
import { useField } from 'vee-validate';

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  modelValue: {
    type: null,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  name: {
    type: String,
    default: '',
  },
  error: {
    type: String,
    default: '',
  },
});

const { value, errorMessage } = useField<string>(() => props.name);

</script>
