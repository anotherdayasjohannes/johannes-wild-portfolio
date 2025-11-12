import "../globals.css";

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export default function LocaleLayout({ children, params }: Props) {
  const { locale } = params;
  
  return (
    <html lang={locale}>
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}

