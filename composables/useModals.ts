/** Global modal state shared across the page (volunteer / newsletter / success). */
export type ModalName = 'volunteer' | 'newsletter' | 'success' | null

export function useModals() {
  const active = useState<ModalName>('active-modal', () => null)
  const open = (name: Exclude<ModalName, null>) => (active.value = name)
  const close = () => (active.value = null)
  return { active, open, close }
}
