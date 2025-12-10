// components/DownloadResumeButton.tsx
'use client'

import { Button } from '@/components/ui/button'

export default function DownloadResumeButton() {
  const handleDownloadPdf = () => {
    const link = document.createElement('a')
    link.href = '/My_Resume.pdf'
    link.download = 'Godwin.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Button variant="outline" onClick={handleDownloadPdf}>
      Download CV
    </Button>
  )
}
