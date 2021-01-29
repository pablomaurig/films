import React from 'react'
import syled from 'styled-components'

const Layout = ({children}) => <LayoutStyled>{children}</LayoutStyled>

export default Layout

const LayoutStyled = syled.div`
    margin: 0 auto;
    max-width: 900px;
`;