import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ELNAGAR — Mohamed Elnagar | Frontend Software Engineer',
  description: 'Mohamed Elnagar — Frontend Software Engineer specializing in React, Next.js, and modern web applications.',
  metadataBase: new URL('https://example.com'),
  openGraph: { title: 'ELNAGAR — Mohamed Elnagar', description: 'Engineering Digital Experiences.', type: 'website' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
