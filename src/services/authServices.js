import { supabase } from '../lib/supabaseClient';
import { ref } from 'vue';

export const userName = ref('');

export const userEmail = ref('');

export const userNumber = ref(null);

export const userPassword = ref('');

export const signUpUser = async (email, password) => {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            emailRedirectTo: 'http://localhost:5173/auth/confirmation',
        },
    });
    if (error) throw error;

    return { user: data.user, session: data.session };
};

export const signinUser = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) throw error;

    return data;
};
