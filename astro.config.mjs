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
            settings: { foreground: '#707070' }, // mono9
          },
          {
            scope: ['keyword', 'storage.type', 'storage.modifier', 'punctuation', 'delimiter', 'boolean'],
            settings: { foreground: '#707070' }, // mono9 - gray for syntax
          },
          {
            scope: ['string', 'string.quoted'],
            settings: { foreground: '#7e7e7e' }, // mono10 - muted for strings
          },
          {
            scope: [
              'constant.numeric',
              'constant.language',
              'entity.name.function',
              'support.function',
              'variable',
              'variable.parameter',
              'variable.other.property',
              'meta.object-literal.key',
            ],
            settings: { foreground: '#ededed' }, // mono12 - white for identifiers
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