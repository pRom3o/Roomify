<template>
    <p class="px-3 border border-blue-200 rounded-full bg-blue-100">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="100"
            viewBox="0 0 140 80"
            role="img"
            aria-labelledby="sentCheckTitle"
        >
            <title id="sentCheckTitle">Email sent</title>
            <!-- envelope -->
            <g fill="none" fill-rule="evenodd">
                <rect x="8" y="18" width="124" height="64" rx="8" fill="#ffffff" stroke="#ffcece" />
                <path d="M12 22 L70 54 L128 22" stroke="#ffcece" stroke-width="2" fill="none" />
                <!-- badge with check -->
                <circle cx="110" cy="30" r="14" fill="#ffcece" />
                <path
                    d="M104 30 l3.6 4 6-7.2"
                    stroke="#fff"
                    stroke-width="2.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                />
            </g>
        </svg>
    </p>
</template>
