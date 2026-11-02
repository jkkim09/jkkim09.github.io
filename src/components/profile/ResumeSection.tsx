import type { ReactNode } from 'react';
import SectionTitle from './SectionTitle';

interface Props {
  title: string;
  meta?: ReactNode;
  children: ReactNode;
}

export default function ResumeSection({ title, meta, children }: Props) {
  return (
    <section className="m-t-50 mt-10 first:mt-0">
      <SectionTitle meta={meta}>{title}</SectionTitle>
      {children}
    </section>
  );
}
