import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from '@/app'
import { HealthyFoodProvider } from './context'

const rootElement = document.querySelector('[data-js="root"]')

if (!rootElement) {
  throw new Error('Failed to find the root element')
}

const root = createRoot(rootElement)
root.render(
  <StrictMode>
    <HealthyFoodProvider>
      <App />
    </HealthyFoodProvider>
  </StrictMode>,
)
