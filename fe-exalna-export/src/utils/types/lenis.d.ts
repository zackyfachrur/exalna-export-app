// src/types/lenis.d.ts
declare module "@studio-freight/lenis" {
  export interface LenisOptions {
    wrapper?: HTMLElement;
    content?: HTMLElement;
    smoothWheel?: boolean;
    smoothTouch?: boolean;
    // Tambahkan opsi lain sesuai kebutuhan
  }

  export default class Lenis {
    constructor(options?: LenisOptions);
    raf(time?: number): void;
    destroy(): void;
  }
}