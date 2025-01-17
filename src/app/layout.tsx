const Layout: React.FC<any> = ({ children }) => {
  return (
    <html>
      <head>
        <title>My App</title>
      </head>
      <body>{children}</body>
    </html>
  )
}

export default Layout
