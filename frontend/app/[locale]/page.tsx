import { getTranslations } from 'next-intl/server';

type Props = {
  params: { locale: string };
};

export default async function HomePage({ params }: Props) {
  const { locale } = params;
  const t = await getTranslations({ locale });

  return (
    <div className="min-h-screen bg-dark-bg text-dark-text-primary p-8">
      <h1 className="text-4xl font-bold mb-4">
        {locale === 'en' ? 'Welcome' : 'Willkommen'}
      </h1>
      <p className="text-xl mb-2">
        Translation test: {t('nav.about')}
      </p>
      <p className="text-lg">
        Hero tagline: {t('hero.tagline')}
      </p>
    </div>
  );
}

