<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog :open="isOpen" @close="onClose" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                as="h3"
                class="text-lg font-medium leading-6 text-gray-900 mb-4"
              >
                Create New Item
              </DialogTitle>
              <form @submit="onSubmit">
                <CommonInput class="mb-4" label="Name" placeholder="Enter name" name="name"></CommonInput>

                <CommonDatePicker label="Date" name="date"></CommonDatePicker>

                <CommonSwitch label="Important" name="important"></CommonSwitch>

                <div class="mt-4 flex justify-end">
                  <CommonButton type="submit" label="Save"></CommonButton>
                </div>
              </form>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'
import { useForm } from 'vee-validate';
import * as Yup from 'yup';
import dayjs from 'dayjs';

const { createItems } = useDirectusItems();

defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
});

const schema = Yup.object({
  name: Yup.string().label('Name').required(),
  date: Yup.string().label('Date').required(),
  important: Yup.boolean(),
});

const emit = defineEmits(['close']);

const { handleSubmit } = useForm({
  validationSchema: schema,
});

const onClose = (value) => {
  emit('close', value);
}

const onSubmit = handleSubmit(async (formData, actions) => {
  try {
    await createItems({
      collection: 'Items',
      items: {
        name: formData.name,
        date: dayjs(formData.date),
        important: formData.important,
      }
    });

    actions.resetForm();

    emit('close', true);
  } catch (err) {
    console.log('err', err);
  }
});

</script>
