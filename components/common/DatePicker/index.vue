<template>
  <div class="mb-4">
    <label class="mb-1 block">{{label}}</label>
    <vue-tailwind-datepicker :formatter="formatter" v-model="dateValue" :as-single="true" @update:model-value="onUpdate" />
    <span v-if="errorMessage" class="text-xs text-red-500">{{errorMessage}}</span>
  </div>
</template>

<script setup lang="ts">
import VueTailwindDatepicker from "vue-tailwind-datepicker";
import { useField } from 'vee-validate';

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    default: '',
  }
});

const dateValue = ref<string>('');
const formatter = ref({
  date: "DD MMM YYYY",
  month: "MMM",
});

const { setValue, errorMessage } = useField<string>(() => props.name);

const onUpdate = () => {
  setValue(dateValue.value);
}
</script>
