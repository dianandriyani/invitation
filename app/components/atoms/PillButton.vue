<template>
  <button
    type="button"
    class="pill-button"
  >
    <slot />
  </button>
</template>

<style scoped>
.pill-button {
  display: flex;
  min-height: 58px;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 28px;
  border: 1px solid #242321;
  border-radius: 999px;
  background: #242321;
  color: #f5f2eb;
  cursor: pointer;
  font-family: 'DM Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.12em;
  transition:
    background 200ms ease,
    color 200ms ease,
    transform 200ms ease;
}

.pill-button:hover {
  transform: translateY(-3px);
  background: transparent;
  color: #242321;
}

.pill-button:focus-visible {
  outline: 2px solid #a88e70;
  outline-offset: 4px;
}

@media (max-width: 700px) {
  .pill-button {
    width: 100%;
    max-width: 280px;
    min-height: 54px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .pill-button {
    transition: none;
  }
}
</style>
