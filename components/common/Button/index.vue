<template>
  <button
    class="focus:outline-none cursor-pointer px-6 py-2 bg-blue-600 rounded text-white"
    :type="type"
    @click="handleClick"
  >
    {{label}}
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  type: {
    type: String as PropType<'button' | 'submit'>,
    default: 'button',
  },
});

const emit = defineEmits(['click']);

const handleClick = () => {
  emit('click');
};
</script>
