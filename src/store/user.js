import { defineStore } from 'pinia';
import { supabase } from '../lib/supabaseClient';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
    const user = ref(null);
    const isAdmin = ref(false);

    const getUser = async () => {
        const { data } = await supabase.auth.getSession();
        user.value = data?.session?.user ?? null;

        if (user.value) {
            const { data: profile, error } = await supabase
                .from('profiles')
                .select('is_admin')
                .eq('id', user.value.id)
                .single();

            if (!error && profile) {
                isAdmin.value = profile.role === 'admin';
            }
        } else {
            isAdmin.value = false;
        }
    };

    const getUserRole = async () => {
        if (user.value) {
            const { data, error } = await supabase
                .from('profiles')
                .select('is_admin')
                .eq('id', user.value.id)
                .single();

            if (!error && data) {
                isAdmin.value = data.is_admin;
            }
        }
    };

    // Listen for auth state changes
    supabase.auth.onAuthStateChange((_event, session) => {
        user.value = session?.user ?? null;
    });

    return { user, getUser, isAdmin, getUserRole };
});
