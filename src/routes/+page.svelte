<script lang="ts">
	import type { PageData } from './$types';
	
	export let data: PageData;

	let newValue = '';
</script>

<main class="todos-app">
	<h1>Cloudflare KV Usage</h1>

	{#if data.value}
		<p>
			The KV Key's value is: {data.value}
		</p>
		<form method="post" action="?/delete">
			<div>
				<button>
					Delete it
				</button>
			</div>
		</form>
	{:else}
		<p>No value is set for the KV Key</p>
		<form method="post" action="?/set">
			<div>
				<label for="new-value">Set a value:</label>
				<input
					type="text"
					name="new-value"
					id="new-value"
					bind:value={newValue}
				/>
				<button disabled={newValue ? false : true}>
					Set
				</button>
			</div>
		</form>
	{/if}
</main>