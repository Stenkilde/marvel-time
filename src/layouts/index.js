import React from 'react'
import Link from 'gatsby-link'
import { Container } from 'react-responsive-grid'

import { rhythm, scale } from '../utils/typography'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <div>
        <header style={{
          display: 'flex',
          padding: `${rhythm(1)} ${rhythm(1)}`,
        }}>
            <h1
              style={{
                ...scale(1),
                marginTop: 0,
                marginBottom: 0,
                flex: 1,
              }}
            >
              <Link
                style={{
                  boxShadow: 'none',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
                to={'/'}
              >
                Marvelastic
              </Link>
            </h1>
            <Link 
              style={{
                boxShadow: 'none',
                textDecoration: 'none',
                color: 'inherit',
              }}
              to={'/timeline'}>Timeline</Link>
          </header>
        <Container
          style={{
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          {children()}
        </Container>
      </div>
    )
  }
}

export default Template
