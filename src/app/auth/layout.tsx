import './auth.scss'
export default function RootLayout({children}:Readonly<{children: React.ReactNode;}>){
  return (
    <div id="screen">
      {children}
    </div>
  );
}