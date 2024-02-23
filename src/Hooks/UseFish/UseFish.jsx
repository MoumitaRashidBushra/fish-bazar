import { useQuery } from '@tanstack/react-query';
import React from 'react';

const UseFish = () => {
    const { data: fish = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['fish'],
        queryFn: async () => {
            const res = await fetch('https://fish-bazar-server.vercel.app/fish');
            return res.json();
        }
    })

    return [fish, loading, refetch]
};

export default UseFish;