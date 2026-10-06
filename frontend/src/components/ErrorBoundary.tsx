import { Component } from "react";
import type { ReactNode } from "react";

// Si el navegador no tiene WebGL, el canvas 3D falla al montar: se muestra
// el fallback en vez de tumbar el portafolio completo.
export default class ErrorBoundary extends Component<{ fallback: ReactNode; children: ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}
