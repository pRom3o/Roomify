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
            return 'bg-green-50 text-green-500';
        case 'Pending':
            return 'bg-yellow-50 text-yellow-500';
        default:
            return 'bg-gray-50 text-gray-500';
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
