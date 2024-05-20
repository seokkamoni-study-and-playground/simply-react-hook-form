import { ReactNode } from 'react';

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="kr">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
