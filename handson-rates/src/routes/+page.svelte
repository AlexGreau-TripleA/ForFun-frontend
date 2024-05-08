<script>
  import "tailwindcss/tailwind.css";
  let rates = ["USD: 1.00", "EUR: 0.85", "JPY: 110.00"];

  // Fetch latest rates
</script>

<h1>Welcome to Triple-A !</h1>
<h2>Current exchange rates</h2>
<!-- Search for a rate -->

<!-- List of rates -->
<h3>Testing to check values</h3>
<ul>
  {#each rates as rate}
    <li>{rate}</li>
  {/each}
</ul>

