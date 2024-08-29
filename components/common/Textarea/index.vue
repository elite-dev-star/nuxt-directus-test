<template>
  <div class="mb-4">
    <label class="mb-1 block">{{label}}</label>
    <textarea
      v-model="value"
      :name="name"
      :placeholder="placeholder"
      :rows="rows"
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
  name: {
    type: String,
    default: '',
  },
  error: {
    type: String,
    default: '',
  },
  rows: {
    type: Number,
    default: 4,
  }
});

const { value, errorMessage } = useField<string>(() => props.name);

</script>
