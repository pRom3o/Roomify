<script setup>
import IconPend from '../../public/icons/IconPend.vue';
import IconCheck from '../../public/icons/IconCheck.vue';
import IconFailed from '../../public/icons/IconFailed.vue';

import { computed } from 'vue';

const props = defineProps({
    status: String,
});

const statusClass = computed(() => {
    switch (props.status) {
        case 'Paid':
            return 'bg-green-100/80 text-green-700 border border-green-200';
        case 'Pending':
            return 'bg-yellow-100/80 text-yellow-700 border border-yellow-200';
        default:
            return 'bg-gray-100/80 text-gray-700 border border-gray-200';
    }
});

const icon = computed(() => {
    switch (props.status) {
        case 'Paid':
            return IconCheck;
        case 'Pending':
            return IconPend;
        case 'False':
            return IconFailed;
        default:
            return IconPend;
    }
});
</script>

<template>
    <span
        :class="[
            'inline-flex items-center gap-1 px-2 py-1 text-xs md:text-sm rounded-full',
            statusClass,
        ]"
    >
        <component :is="icon" class="md:w-4 md:h-4 w-3 h-3" />
        {{ status }}
    </span>
</template>

<style scoped>
span {
    font-weight: 500;
}
</style>
