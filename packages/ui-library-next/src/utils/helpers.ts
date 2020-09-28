export const getElementRoot = (el: HTMLElement, fallback: HTMLElement = el) => {
  return el.shadowRoot || fallback
}

export const hasShadowDom = (el: HTMLElement) => {
  return !!el.shadowRoot && !!(el as any).attachShadow
}

export const findItemLabel = (componentEl: HTMLElement) => {
  const itemEl = componentEl.closest('bal-field')
  if (itemEl) {
    return itemEl.querySelector('span.label')
  }
  return null
}

export const renderHiddenInput = (
  always: boolean,
  container: HTMLElement,
  name: string,
  value: string | undefined | null,
  disabled: boolean,
) => {
  if (always || hasShadowDom(container)) {
    let input = container.querySelector('input.aux-input') as HTMLInputElement | null
    if (!input) {
      input = container.ownerDocument!.createElement('input')
      input.type = 'hidden'
      input.classList.add('aux-input')
      container.appendChild(input)
    }
    input.disabled = disabled
    input.name = name
    input.value = value || ''
  }
}
