<template>
    <div class="h-screen w-full primary-bg center p-1">
        <div
            class="h-full w-full primary-bg flex items-center justify-between rounded-xl gap-4 p-2"
        >
            <div class="h-full w-[15%] rounded-xl flex flex-col items-center">
                <div class="h-[5%] center bg-white w-[80%] rounded-xl p-2 shadow">
                    <h2 class="font-medium">
                        <RouterLink to="/" class=""
                            ><img
                                src="/Images/celines-treats-logo-2.svg"
                                alt="Celine\'s Treats"
                                class="h-8"
                        /></RouterLink>
                    </h2>
                </div>
            </div>
            <div class="h-full w-[85%] rounded-xl flex flex-col gap-4">
                <div
                    class="w-full bg-white rounded-xl h-[5%] flex items-center justify-between p-3 px-5 shadow"
                >
                    <h2>Admin Dashboard</h2>
                    <div class="flex items-center h-full gap-2">
                        <div class="h-7 w-7 bg-gray-300 rounded-full"></div>
                        <div class="flex-col">
                            <h3 class="text-xs">Ayorinde Celine</h3>
                            <p class="font-light text-[10px]">Super Admin</p>
                        </div>
                    </div>
                </div>
                <div class="w-full bg-white rounded-xl h-[95%] p-3">
                    <h3 class="text-xl">Sales and Payment</h3>
                </div>
            </div>
        </div>
    </div>
</template>
