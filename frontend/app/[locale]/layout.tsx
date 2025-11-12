import "../globals.css";

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export default function LocaleLayout({ children, params }: Props) {
  const { locale } = params;
  
  return (
    <html lang={locale}>
      <body>
        {children}
      </body>
    </html>
  );
}

