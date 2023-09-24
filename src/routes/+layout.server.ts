import { supabase } from '$lib/supabaseClient';

export async function load() {
	const { data } = await supabase
		.from('activities')
		.select()
		.eq('user_id', import.meta.env.VITE_SUPABASE_HENRY_ID)
		.order('start_date', { ascending: false });
	return {
		activities: data ?? []
	};
}
