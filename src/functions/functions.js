import { ref } from 'vue';

export const openClose = ref(false);

export const switchIcon = () => {
    openClose.value = !openClose.value;
};

export const sideNav = ref(false);
export const openSideNav = () => {
    sideNav.value = !sideNav.value;
    console.log(sideNav.value);
};

export const isMobile = ref(window.innerWidth < 640); // sm breakpoint

// Listen for window resize to auto-expand/collapse
export const handleResize = () => {
    isMobile.value = window.innerWidth < 640;
    if (!isMobile.value) sideNav.value = true; // auto expand on sm+
};

export const edit = ref(false);

export const toggleEdit = () => {
    edit.value = !edit.value;
};
export const uploadModal = ref(false);

export const toggleUploadModal = () => {
    uploadModal.value = !uploadModal.value;
    console.log(uploadModal.value);
};
