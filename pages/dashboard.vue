<template>
  <div class="p-4">
    <div class="container mx-auto">
      <TabGroup>
        <TabList class="flex gap-2 rounded-xl p-1 mb-4">
          <Tab
            v-for="tab in tabs"
            as="template"
            :key="tab"
            v-slot="{ selected }"
          >
            <button
              :class="[
              'px-6 rounded-lg py-2.5 text-sm font-medium leading-5',
              'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
              selected
                ? 'bg-blue-600 text-white shadow'
                : 'text-blue-600 bg-white',
            ]"
            >
              {{ tab }}
            </button>
          </Tab>
        </TabList>
        <TabPanels class="mt-2">
          <TabPanel key="Items" :class="['rounded-xl bg-white py-4 px-6']">
            <DashboardItemsListView />
          </TabPanel>
          <TabPanel key="Profile" :class="['rounded-xl bg-white py-4 px-6']">
            <DashboardProfileForm />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  </div>
</template>
<script setup lang="ts">
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

definePageMeta({
  middleware: ['auth'],
});

const tabs = ref([
  'Items',
  'Profile'
]);
</script>
