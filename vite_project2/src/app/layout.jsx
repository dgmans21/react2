import './global.css';
export const metadata = {
    title: "Frontend 01 Mock Dashboard JSX",
    description: "JSX mock dashboard for the AI store operations course"
  };
  
  
  export default function RootLayout({ children }) {
    return (
      <html lang="ko">
        <body>{children}</body>
      </html>
    );
  }