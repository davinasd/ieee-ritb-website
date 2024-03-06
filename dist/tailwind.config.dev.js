"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    fontSize: {
      xs: ['0.75rem', {
        lineHeight: '1rem'
      }],
      sm: ['0.875rem', {
        lineHeight: '1.5rem'
      }],
      base: ['1rem', {
        lineHeight: '1.75rem'
      }],
      lg: ['1.125rem', {
        lineHeight: '2rem'
      }],
      xl: ['1.25rem', {
        lineHeight: '2rem'
      }],
      '2xl': ['1.5rem', {
        lineHeight: '2rem'
      }],
      '3xl': ['2rem', {
        lineHeight: '2.5rem'
      }],
      '4xl': ['2.5rem', {
        lineHeight: '3.5rem'
      }],
      '5xl': ['3rem', {
        lineHeight: '3.5rem'
      }],
      '6xl': ['3.75rem', {
        lineHeight: '1'
      }],
      '7xl': ['4.5rem', {
        lineHeight: '1.1'
      }],
      '8xl': ['6rem', {
        lineHeight: '1'
      }],
      '9xl': ['8rem', {
        lineHeight: '1'
      }]
    },
    extend: {
      borderRadius: {
        '4xl': '2rem'
      },
      fontFamily: {
        sans: ['Inter'].concat(_toConsumableArray(defaultTheme.fontFamily.sans)),
        display: ['Lexend'].concat(_toConsumableArray(defaultTheme.fontFamily.sans))
      },
      maxWidth: {
        '2xl': '40rem'
      },
      colors: {
        pri: '#273D62'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--gradient-color-stops))'
      }
    }
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')]
};