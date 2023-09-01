import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const Layout = () => {
  return (
    <Box>
      <Wrapper>
        <Header>
          <Title>FaceBook/React</Title>
        </Header>
        <Outlet />
      </Wrapper>
    </Box>
  )
}

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #c0d6e4;
`
const Wrapper = styled.div`
  width: 70rem;
  height: 80rem;
  padding: 1rem;
  border: 0.1rem solid #e1e2e3;
  border-radius: 1rem;
  background-color: #fff;
`

const Header = styled.header``

const Title = styled.h1`
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 2rem;
  font-size: 3rem;
  font-weight: bold;
`

export default Layout
