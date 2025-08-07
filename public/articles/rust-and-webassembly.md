# Getting Started with Rust and WebAssembly

## Introduction

WebAssembly (Wasm) is revolutionizing web development by allowing us to run high-performance code in browsers. Rust, with its zero-cost abstractions and memory safety, is a perfect language for WebAssembly development.

## Why Rust for WebAssembly?

1. **Performance**
   - Near-native speed
   - Minimal runtime overhead
   - Efficient memory usage

2. **Safety**
   - Memory safety without garbage collection
   - Thread safety
   - No null or undefined

3. **Tooling**
   - First-class WebAssembly support
   - wasm-pack integration
   - Rich ecosystem

## Getting Started

### Setting Up Your Environment

First, install the necessary tools:

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
cargo install wasm-pack
```

### Creating Your First Project

Initialize a new Rust project for WebAssembly:

```bash
cargo new --lib my-wasm-project
cd my-wasm-project
```

Add this to your `Cargo.toml`:

```toml
[lib]
crate-type = ["cdylib"]

[dependencies]
wasm-bindgen = "0.2"
```

## Example: Simple Calculator

Here's a basic example of a calculator function in Rust that we'll expose to JavaScript:

```rust
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn add(a: i32, b: i32) -> i32 {
    a + b
}
```

## Building and Using

Build your WebAssembly module:

```bash
wasm-pack build --target web
```

Use it in your JavaScript/TypeScript code:

```typescript
import init, { add } from './pkg/my_wasm_project.js';

async function run() {
    await init();
    console.log(add(40, 2)); // Outputs: 42
}
```

## Conclusion

Rust and WebAssembly together provide a powerful platform for building high-performance web applications. As the ecosystem continues to grow, we'll see more complex applications taking advantage of this technology.

Start small, experiment, and gradually build more complex applications as you become comfortable with the tools and patterns.

Happy coding! 🦀
