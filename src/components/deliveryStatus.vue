<script setup>
const props = defineProps({
    modelValue: String, // current status
    options: Array,
    loading: Boolean,
});

const emit = defineEmits(['update:modelValue']);

const statusColors = {
    Pending: 'bg-yellow-100 text-yellow-800 border border-yellow-300',
    Shipped: 'bg-blue-100 text-blue-800 border border-blue-300',
    Delivered: 'bg-green-100 text-green-800 border border-green-300',
    Failed: 'bg-red-100 text-red-800 border border-red-300',
};

const handleChange = (e) => {
    emit('update:modelValue', e.target.value);
};
</script>

<template>
    <div class="relative w-1/2 sm:w-full">
        <select
            :class="[
                'w-full rounded px-2 py-1 text-xs focus:outline-none',
                statusColors[props.modelValue] || 'bg-gray-100 text-gray-700',
                props.loading ? 'opacity-60 cursor-not-allowed' : '',
            ]"
            :value="props.modelValue"
            @change="handleChange"
            :disabled="props.loading"
        >
            <option v-for="status in props.options" :key="status" :value="status">
                {{ status }}
            </option>
        </select>

        <!-- Loading spinner -->
        <span v-if="props.loading" class="absolute right-2 top-1/2 -translate-y-1/2 animate-spin">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
            >
                <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                />
                <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
            </svg>
        </span>
    </div>
</template>
