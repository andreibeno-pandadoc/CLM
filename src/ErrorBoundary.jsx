import React from 'react'

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error, info) {
    console.error('Prototype render error:', error, info)
  }

  render() {
    if (this.state.error) {
      return (
        <div
          style={{
            padding: 24,
            fontFamily: 'system-ui, sans-serif',
            maxWidth: 560,
            lineHeight: 1.5,
          }}
        >
          <h1 style={{ fontSize: 18, margin: '0 0 12px' }}>Something went wrong</h1>
          <pre
            style={{
              background: '#f4f4f4',
              padding: 12,
              borderRadius: 8,
              overflow: 'auto',
              fontSize: 13,
            }}
          >
            {this.state.error?.message || String(this.state.error)}
          </pre>
          <p style={{ fontSize: 14, color: '#767676', marginTop: 16 }}>
            Check the browser console for the full stack trace. After fixing the error, reload the page.
          </p>
        </div>
      )
    }
    return this.props.children
  }
}
