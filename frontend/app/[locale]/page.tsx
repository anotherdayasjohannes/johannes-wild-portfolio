export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-bg">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-dark-text-primary">
          Hello from {locale}!
        </h1>
        <p className="mt-4 text-dark-text-secondary">
          If you can see this, the route is working!
        </p>
      </div>
    </div>
  );
}

