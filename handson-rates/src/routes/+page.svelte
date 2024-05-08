<script>
  import "tailwindcss/tailwind.css";
  let suportedCryptos = ["BTC", "ETH", "USDC", "USDT", "TRX"];
  let selectedBaseCurrency = "USD";
  // TODO: Provider object class
  let providerList = [
    {
      name: "Coinbase", 
      rates: {
        BTC: 1.00,
        ETH: 0.85,
        USDC: 1.00,
        USDT: 1.00,
        TRX: 1.00
      },
      logoPath: ""
    },
    {
      name: "Kraken", 
      rates: {
        BTC: 1.00,
        ETH: 0.85,
        USDC: 1.00,
        USDT: 1.00,
        TRX: 1.00
      },
      logoPath: ""
    },
    {
      name: "Fixer", 
      rates: {
        BTC: 1.00,
        ETH: 0.85,
        USDC: 1.00,
        USDT: 1.00,
        TRX: 1.00
      },
      logoPath: ""
    },
    {
      name: "Lightnet", 
      rates: {
        BTC: 1.00,
        ETH: 0.85,
        USDC: 1.00,
        USDT: 1.00,
        TRX: 1.00
      },
      logoPath: ""
    },
    {
      name: "dlocal", 
      rates: {
        BTC: 1.00,
        ETH: 0.85,
        USDC: 1.00,
        USDT: 1.00,
        TRX: 1.00
      },
      logoPath: ""
    },
    {
      name: "mainsys", 
      rates: {
        BTC: 1.00,
        ETH: 0.85,
        USDC: 1.00,
        USDT: 1.00,
        TRX: 1.00
      },
      logoPath: ""
    },
    {
      name: "Flutterwave", 
      rates: {
        BTC: 1.00,
        ETH: 0.85,
        USDC: 1.00,
        USDT: 1.00,
        TRX: 1.00
      },
      logoPath: ""
    }
  ];

  // Fetch latest rates

</script>

<h1>Welcome to Triple-A !</h1>
<h2>Current exchange rates</h2>
<!-- Search for a rate -->

<!-- List of rates -->
<form class="flex gap-4">
  <label class="flex flex-col">
    Base currency:
    <select class="select select-info w-full max-w-xs">
      <option disabled selected>Select base currency</option>
      <option value="usd">USD</option>
      <option value="sgd">SGD</option>
    </select>
  </label>
  <label class="flex flex-col ">
    Destination currency:
    <select class="select select-info w-full max-w-xs">
      <option disabled selected>Select destination currency</option>
      {#each suportedCryptos as crypto}
        <option value={crypto}>{crypto}</option>
      {/each}
    </select>
  </label>
</form>

<div class="overflow-x-auto">
  <table class="table">
    <!-- head -->
    <thead>
      <tr>
        <th>Provider</th>
        {#each suportedCryptos as crypto}
          <th>{selectedBaseCurrency}/{crypto}</th>
        {/each}
        <th>See history</th>
      </tr>
    </thead>
    <tbody>
      <!-- Providers -->
      {#each providerList as provider}
        <tr>
          <td>
            <div class="avatar">
              <div class="mask mask-squircle w-12 h-12">
                <img src="{provider.logoPath}" alt="Avatar {provider.name}" />
              </div>
            </div>
            {provider.name}
          </td>
          {#each Object.entries(provider.rates) as [currency, rate]}
            <td>{currency} {rate}
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
          <th>{selectedBaseCurrency}/{crypto}</th>
        {/each}
        <th>See history</th>
      </tr>
    </tfoot>
  </table>
</div>
<style>
  form {

  }
</style>
