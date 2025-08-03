<script lang="ts">
  import { goto } from '$app/navigation';
  import { t } from '$lib/i18n';

  let input = '';

  function search() {
    if (input) {
      goto(`/search?input=${encodeURIComponent(input)}`);
    }
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      search();
    }
  }
</script>

<div class="others-option d-flex align-items-center">
  <div class="option-item">
    <div class="search-box">
      <input
        type="text"
        class="input-search"
        placeholder={$t('common.searchPlaceholder')}
        bind:value={input}
        on:keydown={handleKeydown}
      />
      <button on:click={search} aria-label={$t('common.search')}>
        <i class="bx bx-search"></i>
      </button>
    </div>
  </div>
</div>

<style>
  /* Search box styles will be imported from the main stylesheet */
  .search-box {
    position: relative;
    display: flex;
    align-items: center;
  }

  .input-search {
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    padding: 8px 40px 8px 15px;
    width: 250px;
    transition: all 0.3s ease;
  }

  .input-search:focus {
    outline: none;
    border-color: #4a90e2;
  }

  .search-box button {
    position: absolute;
    right: 5px;
    background: none;
    border: none;
    padding: 8px;
    cursor: pointer;
  }
</style>
