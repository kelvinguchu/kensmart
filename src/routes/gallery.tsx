import { createFileRoute } from '@tanstack/react-router'

import { GeneralGallery } from '@/components/gallery/GeneralGallery'

export const Route = createFileRoute('/gallery')({
  head: () => ({
    meta: [
      {
        title: 'Gallery | Kensmart Utilities',
      },
      {
        name: 'description',
        content:
          'View our gallery of smart utility meters and installations. Kensmart Utilities provides reliable metering solutions.',
      },
    ],
  }),
  component: GalleryPage,
})

function GalleryPage() {
  return (
    <main className="py-16">
      <GeneralGallery />
    </main>
  )
}
