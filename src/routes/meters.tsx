import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/meters')({
  component: MetersLayout,
})

function MetersLayout() {
  return <Outlet />
}
