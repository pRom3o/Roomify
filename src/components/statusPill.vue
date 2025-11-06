<script setup>
import IconClock from '../../public/icons/IconClock.vue';
import IconCheck from '../../public/icons/IconCheck.vue';

import { computed } from 'vue';

const props = defineProps({
    status: String,
});

const statusClass = computed(() => {
    switch (props.status) {
        case 'paid':
            return 'bg-green-100 text-green-700';
        case 'pending':
            return 'bg-yellow-100 text-yellow-700';
        default:
            return 'bg-gray-100 text-gray-700';
    }
});

const icon = computed(() => {
    switch (props.status) {
        case 'paid':
            return IconCheck;
        case 'pending':
            return IconClock;
        default:
            return IconClock;
    }
});
</script>

<template>
    <span
        :class="[
            'inline-flex items-center gap-1 md:gap-2 px-2 py-1 text-xs md:text-sm font-semibold rounded-full',
            statusClass,
        ]"
    >
        <component :is="icon" class="md:w-4 md:h-4 w-3 h-3" />
        {{ status }}
    </span>
</template>
