<script setup lang="ts">
const reports = [
  { title: 'Annual Report 2024–25', meta: 'Audited · 64 pages', tag: 'Report', to: '/impact/annual-reports' },
  { title: 'Independent Evaluation of Learning Outcomes', meta: 'Third-party study', tag: 'Research', to: '/knowledge-hub/research' },
  { title: 'Audited Financial Statements 2024–25', meta: 'Independent auditor', tag: 'Finance', to: '/who-we-are/governance-transparency' }
]
</script>

<template>
  <section class="section band">
    <div class="container reports">
      <div class="reports__intro reveal">
        <span class="kicker">Reports &amp; Publications</span>
        <h2 class="h2">Everything, on the record.</h2>
        <p class="lede">Audited finances, independent evaluations and the evidence behind our work — all published openly.</p>
        <NuxtLink to="/knowledge-hub" class="btn btn--outline">Visit the Knowledge Hub</NuxtLink>
      </div>
      <ul class="reports__list reveal">
        <li v-for="(r, i) in reports" :key="i">
          <NuxtLink :to="r.to" class="report">
            <span class="report__icon" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24"><path d="M6 2h8l4 4v16H6z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M14 2v4h4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg></span>
            <span class="report__body"><strong>{{ r.title }}</strong><span>{{ r.meta }}</span></span>
            <span class="tag tag--quiet">{{ r.tag }}</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.reports { display: grid; grid-template-columns: 0.9fr 1.1fr; gap: clamp(36px, 6vw, 72px); align-items: center; }
.reports__intro .h2 { margin: 16px 0 18px; }
.reports__intro .btn { margin-top: 26px; }
.reports__list { border-top: 1px solid var(--line-strong); }
.report { display: flex; align-items: center; gap: 18px; padding: 22px 4px; border-bottom: 1px solid var(--line); transition: padding-left .2s var(--ease); }
.report:hover { padding-left: 12px; }
.report__icon { color: var(--red); flex-shrink: 0; }
.report__body { flex: 1; }
.report__body strong { display: block; font-family: var(--sans); font-weight: 700; color: var(--ink); }
.report__body span { font-size: 14px; color: var(--body-dim); }
@media (max-width: 860px) { .reports { grid-template-columns: 1fr; } }
</style>
