type Props = {
  params: { locale: string };
};

export default function HomePage({ params }: Props) {
  const { locale } = params;
  
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: '#0D0D0D' }}>
      <div className="text-center" style={{ color: '#F2F2F2' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>
          Hello from {locale}!
        </h1>
        <p style={{ marginTop: '1rem', color: '#9CA3AF' }}>
          Route is working correctly
        </p>
      </div>
    </div>
  );
}

