interface SectionWrapperProps {
  title: string;
  children: React.ReactNode;
}

export default function SectionWrapper({
  title,
  children,
}: SectionWrapperProps) {
  return (
    <section className="w-full py-10">
      <h2 className="text-xl font-bold text-gray-800 mb-6 text-center tracking-tight">
        {title}
      </h2>
      {children}
    </section>
  );
}
