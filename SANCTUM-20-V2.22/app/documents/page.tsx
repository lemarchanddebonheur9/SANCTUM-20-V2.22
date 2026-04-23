import { DocumentsUploader } from '@/components/documents/documents-uploader'

export default function DocumentsPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Documents</h1>
      <DocumentsUploader />
    </main>
  )
}
