<template>
  <SwitchGroup>
    <div class="flex items-center">
      <SwitchLabel class="mr-4">{{ label }}</SwitchLabel>
      <Switch
        :name="name"
        v-model="value"
        as="template"
        v-slot="{ checked }"
      >
        <button
          class="relative inline-flex h-6 w-11 items-center rounded-full"
          :class="checked ? 'bg-blue-600' : 'bg-gray-200'"
        >
          <span
            :class='checked ? "translate-x-6" : "translate-x-1"'
            class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform"
          />
        </button>
      </Switch>
    </div>
  </SwitchGroup>
</template>

<script setup lang="ts">
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue';
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

const { value } = useField<boolean>(() => props.name);
</script>
