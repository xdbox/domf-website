<script setup lang="ts">
const props = defineProps<{ open: boolean }>()
const emit = defineEmits<{ close: [] }>()

function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape') emit('close')
}
watch(
  () => props.open,
  (v) => {
    if (!import.meta.client) return
    document.body.style.overflow = v ? 'hidden' : ''
    if (v) window.addEventListener('keydown', onKey)
    else window.removeEventListener('keydown', onKey)
  }
)
onBeforeUnmount(() => import.meta.client && window.removeEventListener('keydown', onKey))
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="open" class="modal" @click.self="emit('close')">
        <div class="modal__card" role="dialog" aria-modal="true">
          <button class="modal__x" aria-label="Close" @click="emit('close')">
            <svg width="18" height="18" viewBox="0 0 18 18"><path d="M3 3l12 12M15 3L3 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
          </button>
          <slot />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal {
  position: fixed; inset: 0; z-index: 100;
  display: grid; place-items: center; padding: 20px;
  background: rgba(20, 21, 32, 0.62); backdrop-filter: blur(6px);
}
.modal__card {
  position: relative; width: min(540px, 100%);
  background: var(--c-cream); border-radius: var(--r-lg);
  padding: clamp(28px, 5vw, 48px); box-shadow: var(--shadow-lg);
  max-height: 90vh; overflow-y: auto;
}
.modal__x {
  position: absolute; top: 16px; right: 16px;
  width: 38px; height: 38px; border-radius: 50%;
  display: grid; place-items: center; color: var(--c-ink);
  background: rgba(0,0,0,0.05); transition: background 0.2s, transform 0.2s;
}
.modal__x:hover { background: rgba(0,0,0,0.1); transform: rotate(90deg); }

.modal-enter-active, .modal-leave-active { transition: opacity 0.3s var(--ease); }
.modal-enter-active .modal__card, .modal-leave-active .modal__card { transition: transform 0.35s var(--ease), opacity 0.35s var(--ease); }
.modal-enter-from, .modal-leave-to { opacity: 0; }
.modal-enter-from .modal__card, .modal-leave-to .modal__card { transform: translateY(24px) scale(0.96); opacity: 0; }
</style>
