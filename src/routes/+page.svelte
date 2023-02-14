<script>
    import { supabase } from '$lib/supabaseClient'
    import { page } from '$app/stores' 
    import Account from "./Account.svelte";
    import Auth from "./Auth.svelte";

    console.log('1:', supabase);
</script>

<svelte:head>
    <title>Supabase + SvelteKit - ToDoList </title>
    <meta name="description" content="SvelteKit using supabase-js v2" />
</svelte:head>


{#if !$page.data.session}
    <Auth />
{:else}
    <Account session="{$page.data.session}"/>
{/if}