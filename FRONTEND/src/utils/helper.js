import { store } from '../store/store.js';
import { redirect } from '@tanstack/react-router';
import { getCurrentUser } from '../api/auth.api.js';
import { login } from '../store/slice/authSlice.js';

export const checkAuth = async ({ context }) => {
    try {
        const { queryClient, store } = context;
        const userData = await queryClient.ensureQueryData({
            queryKey: ["currentUser"],
            queryFn: getCurrentUser,
        });
        if (!userData || !userData.user) return redirect({ to: "/auth" });
        store.dispatch(login(userData.user));
        const { isAuthenticated } = store.getState().auth;
        if (!isAuthenticated) return redirect({ to: "/auth" });
        return true;
    } catch (error) {
        console.log(error);
        return redirect({ to: "/auth" });
    }
};