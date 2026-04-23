'use client'

import { useRef, useState } from 'react'

export function DocumentsUploader() {
  const ref = useRef<HTMLInputElement | null>(null)
  const [files, setFiles] = useState<string[]>([])

  function onPick() {
    ref.current?.click()
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const next = Array.from(e.target.files ?? []).map((file) => file.name)
    setFiles(next)
  }

  return (
    <section className="rounded-2xl border border-cyan-500/20 bg-slate-900 p-6">
      <div className="flex flex-wrap gap-3 mb-4">
        <button type="button" onClick={onPick} className="rounded-xl bg-cyan-400 px-4 py-3 font-semibold text-slate-950">
          Téléverser des documents
        </button>
        <button type="button" className="rounded-xl border border-cyan-500/20 px-4 py-3 text-cyan-50">
          Créer un dossier projet
        </button>
      </div>
      <input ref={ref} type="file" multiple className="hidden" onChange={onChange} />
      <div className="rounded-xl border border-dashed border-cyan-500/20 p-6 text-cyan-100/70">
        Glisser-déposer ici ou utiliser le bouton.
      </div>
      <ul className="mt-4 space-y-2 text-sm text-cyan-100/70">
        {files.map((file) => (
          <li key={file}>{file}</li>
        ))}
      </ul>
    </section>
  )
}
