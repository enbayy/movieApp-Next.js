import React from 'react'

function Layout({ children }) {
    return (
        <html lang='en'>
            <body>
                {children}
            </body>
        </html>
    )
}

export default Layout