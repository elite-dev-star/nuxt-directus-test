<template>
  <div>
    <div class="flex justify-between items-center mb-3">
      <h1 class="text-2xl font-bold">Items List</h1>
      <CommonButton label="Add new item" @click="openNewDialog"></CommonButton>
    </div>
    <table v-if="items?.length" class="w-full">
      <thead>
        <tr>
          <th v-for="column in columns" class="py-2 px-4 font-bold border-b border-gray-200 text-left capitalize">
            {{column}}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td class="py-2 px-4 border-b border-gray-200">{{item.name}}</td>
          <td class="py-2 px-4 border-b border-gray-200">{{formatDate(item.date)}}</td>
          <td class="py-2 px-4 border-b border-gray-200">{{item.important ? 'Yes' : 'No'}}</td>
        </tr>
      </tbody>
    </table>
    <div v-else class="flex justify-center items-center min-h-20">
      <div>No data</div>
    </div>

    <DashboardItemCreateDialog :is-open="isOpen" @close="onCloseDialog"></DashboardItemCreateDialog>
  </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs';

const { getItems } = useDirectusItems();

const { data: items, refresh } = await useAsyncData<any>('items', () => {
  return getItems({
    collection: 'Items'
  });
})

const columns = ref([
  'name',
  'date',
  'important'
]);

const isOpen = ref(false);

const openNewDialog = () => {
  isOpen.value = true;
};
const onCloseDialog = (value: boolean) => {
  isOpen.value = false;

  if (value) {
    refresh();
  }
}

const formatDate = (date: Date) => {
  return dayjs(date).format('DD/MM/YYYY')
}
</script>
