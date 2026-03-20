# Typed Magento GraphQL

> Type-safe GraphQL client for Magento 2 / Mage-OS with Zod input validation

[![npm version](https://img.shields.io/npm/v/typed-magento-graphql.svg)](https://www.npmjs.com/package/typed-magento-graphql)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9+-blue.svg)](https://www.typescriptlang.org/)

## Philosophy

**Zod only for input validation** (what you send to the backend)  
**Pure TypeScript for responses** (what you receive from the backend)

We keep it minimal and practical — assume the backend does its job.

## Features

- ✅ **Type-safe** - Full TypeScript support with inferred types
- ✅ **Input validation** - Zod schemas validate all inputs before sending
- ✅ **Zero dependencies** (except Zod) - Lightweight and fast
- ✅ **Tree-shakeable** - Import only what you need
- ✅ **ES Modules** - Modern ESM build
- ✅ **Framework agnostic** - Works with React, Vue, Svelte, or vanilla JS

## Installation

```bash
npm install typed-magento-graphql zod
# or
yarn add typed-magento-graphql zod
# or
pnpm add typed-magento-graphql zod
```