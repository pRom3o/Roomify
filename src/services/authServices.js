import { supabase } from '../lib/supabaseClient';
import { ref } from 'vue';

export const userName = ref('');

export const userEmail = ref('');

export const userPhone = ref(null);

export const userPassword = ref('');

export const signUpUser = async (email, password) => {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            emailRedirectTo: 'http://localhost:5174/auth',
            data: {
                name: userName.value,
                phone: userPhone.value,
            },
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

export const insertProfiles = async (id, name, phone, email) => {
    const { error } = await supabase
        .from('roomify_profiles')
        .insert([
            {
                id,
                name,
                phone,
                email,
            },
        ])
        .select();
    if (error) {
        console.log(error.message);
    }
};
