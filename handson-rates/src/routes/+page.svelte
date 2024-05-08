<script lang="ts">
	import { onMount } from 'svelte';
	import 'tailwindcss/tailwind.css';
	import CoinbaseLogo from '../lib/assets/logos/coinbase.svg';
  import KrakenLogo from '../lib/assets/logos/kraken.svg';
  import FixerLogo from '../lib/assets/logos/fixer.svg';
  import LightnetLogo from '../lib/assets/logos/lightnet.svg';
  import DlocalLogo from '../lib/assets/logos/dlocal.svg';
  import MainsysLogo from '../lib/assets/logos/mainsys.svg';
  import FlutterwaveLogo from '../lib/assets/logos/flutterwave.svg';

	let suportedCryptos = ['BTC', 'ETH', 'USDC', 'USDT', 'TRX'];
	$: selectedBaseCurrency = 'USD';
	let providerList: Array<ProviderData> = [];

	type TickerData = {
		id: string;
		version: 1;
		providers_contrib: {
			name: string;
		};
		rates_count: number;
		outlier_perc: number;
		created_at: string;
		base: string;
		quote: string;
		rate_base_quote: string;
		rate_base: string;
		rate_quote: string;
	};
	type ProviderData = {
		name: string;
		rates: Record<string, string>;
		logoPath: string;
	};
  const defaultValue = {
    BTC: "0",
    ETH: "0",
    USDC: "0",
    USDT: "0",
    TRX: "0",
  }

	onMount(() => {
		const evtSource = new EventSource('http://localhost:5555/rate/usd');
		evtSource.onmessage = (event) => {
			const tickerData = JSON.parse(event.data) as TickerData;
			let providerItemIdx = providerList.findIndex(
				(provItem) =>
					provItem.name.toLowerCase() === tickerData.providers_contrib.name.toLowerCase()
			);

			let providerItem;
			if (providerItemIdx === -1) {
				providerItem = {
					name: tickerData.providers_contrib.name,
					rates: {
            ...defaultValue,
						[tickerData.quote]: tickerData.rate_quote
					},
					logoPath: ''
				};
				providerList[providerList.length] = providerItem;
			} else {
				providerItem = providerList[providerItemIdx];
				providerItem.rates[tickerData.quote] = tickerData.rate_quote;

				providerList[providerItemIdx] = providerItem;
			}

      // reassign for reactive update
			providerList = providerList;
		};
	});
</script>

<h1>Welcome to Triple-A !</h1>
<h2>Current exchange rates</h2>
<!-- Search for a rate -->

<!-- List of rates -->
<form class="flex gap-4">
	<label class="flex flex-col">
		Base currency:
		<select class="select select-info w-full max-w-xs" bind:value={selectedBaseCurrency}>
			<option disabled selected>Select base currency</option>
			<option value="usd">USD</option>
			<option value="sgd">SGD</option>
		</select>
	</label>
	<!-- <label class="flex flex-col">
		Destination currency:
		<select class="select select-info w-full max-w-xs" disabled>
			<option disabled selected>Select destination currency</option>
			{#each suportedCryptos as crypto}
				<option value={crypto}>{crypto}</option>
			{/each}
		</select>
	</label> -->
</form>

<div class="overflow-x-auto">
	
	<table class="table">
		<!-- head -->
		<thead>
			<tr>
				<th>Provider</th>
				{#each suportedCryptos as crypto}
					<th>{selectedBaseCurrency.toUpperCase()}/{crypto}</th>
				{/each}
				<th></th>
			</tr>
		</thead>
		<tbody>
			<!-- Providers -->
			{#each providerList as provider}
				<tr>
					<td class="flex items-center gap-2">
						<div class="avatar">
							<div class="mask mask-squircle w-12 h-12">
								{#if provider.name === 'Coinbase'}
									<img src={CoinbaseLogo} alt="{provider.name} avatar" class="m-0"/>
                {:else if provider.name === 'Kraken'}
                  <img src={KrakenLogo} alt="{provider.name} avatar" class="m-0"/>
                {:else if provider.name === 'Fixer'}
                  <img src={FixerLogo} alt="{provider.name} avatar" class="m-0"/>
                {:else if provider.name === 'Lightnet'}
                  <img src={LightnetLogo} alt="{provider.name} avatar" class="m-0"/>
                {:else if provider.name === 'dlocal'}
                  <img src={DlocalLogo} alt="{provider.name} avatar" class="m-0"/>
                {:else if provider.name === 'mainsys'}
                  <img src={MainsysLogo} alt="{provider.name} avatar" class="m-0"/>
                {:else if provider.name === 'Flutterwave'}
                  <img src={FlutterwaveLogo} alt="{provider.name} avatar" class="m-0"/>
								{/if}
							</div>
						</div>
            {provider.name}
					</td>
					{#each Object.entries(provider.rates) as [currency, rate]}
						<td>
							{currency}
							{rate}
							<span class="badge badge-ghost badge-sm">-</span>
						</td>
					{/each}
					<td><button class="btn secondary">See history</button></td>
				</tr>
			{/each}
		</tbody>
		<!-- foot -->
		<tfoot>
			<tr>
				<th>Provider</th>
				{#each suportedCryptos as crypto}
					<th>{selectedBaseCurrency.toUpperCase()}/{crypto}</th>
				{/each}
			</tr>
		</tfoot>
	</table>
</div>

<style>
	form {
	}
</style>
