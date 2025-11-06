import { defineStore } from 'pinia';
import { supabase } from '../lib/supabaseClient';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
    const user = ref(null);

    const getUser = async () => {
        const { data } = await supabase.auth.getSession();
        user.value = data?.session?.user ?? null;
    };

    // Listen for login/logout changes once
    supabase.auth.onAuthStateChange((_event, session) => {
        user.value = session?.user ?? null;
    });

    return { user, getUser };
});
