// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), react()],

  markdown: {
    shikiConfig: {
      theme: {
        name: 'custom-dark',
        type: 'dark',
        colors: {
          'editor.background': '#232323', // mono3
          'editor.foreground': '#a0a0a0', // mono11
        },
        tokenColors: [
          {
            scope: ['comment'],
            settings: { foreground: '#6d6d6d' }, // muted gray for comments
          },
          {
            scope: ['keyword', 'storage.type', 'storage.modifier'],
            settings: { foreground: '#83c5c0' }, // muted teal for keywords (Cursor)
          },
          {
            scope: ['string', 'string.quoted'],
            settings: { foreground: '#d89bcf' }, // muted pink for strings (Cursor)
          },
          {
            scope: ['constant.numeric', 'constant.language', 'boolean'],
            settings: { foreground: '#dbc28d' }, // muted gold for constants (Cursor)
          },
          {
            scope: ['entity.name.function', 'support.function'],
            settings: { foreground: '#e0a87a' }, // muted peach for functions (Cursor)
          },
          {
            scope: ['variable', 'variable.parameter', 'variable.other.property', 'meta.object-literal.key'],
            settings: { foreground: '#c4c4c4' }, // light gray for variables
          },
          {
            scope: ['punctuation', 'delimiter'],
            settings: { foreground: '#808080' }, // medium gray for punctuation
          },
        ],
      },
      wrap: true,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});