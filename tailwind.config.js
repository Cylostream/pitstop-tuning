import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			colors: {
				'pit-red': '#D32F2F',
				'pit-yellow': '#FFD700',
				'charcoal': '#121212',
				'smoke': '#616161',
				// shadcn colors
				border: "hsl(var(--border) / <alpha-value>)",
				input: "hsl(var(--input) / <alpha-value>)",
				ring: "hsl(var(--ring) / <alpha-value>)",
				background: "hsl(var(--background) / <alpha-value>)",
				foreground: "hsl(var(--foreground) / <alpha-value>)",
				primary: {
					DEFAULT: "hsl(var(--primary) / <alpha-value>)",
					foreground: "hsl(var(--primary-foreground) / <alpha-value>)"
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
					foreground: "hsl(var(--secondary-foreground) / <alpha-value>)"
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
					foreground: "hsl(var(--destructive-foreground) / <alpha-value>)"
				},
				muted: {
					DEFAULT: "hsl(var(--muted) / <alpha-value>)",
					foreground: "hsl(var(--muted-foreground) / <alpha-value>)"
				},
				accent: {
					DEFAULT: "hsl(var(--accent) / <alpha-value>)",
					foreground: "hsl(var(--accent-foreground) / <alpha-value>)"
				},
				popover: {
					DEFAULT: "hsl(var(--popover) / <alpha-value>)",
					foreground: "hsl(var(--popover-foreground) / <alpha-value>)"
				},
				card: {
					DEFAULT: "hsl(var(--card) / <alpha-value>)",
					foreground: "hsl(var(--card-foreground) / <alpha-value>)"
				}
			},
			borderRadius: {
				'DEFAULT': '0.5rem',
				'button': '8px',
				'card': '12px',
				'lg': 'var(--radius)',
				'md': 'calc(var(--radius) - 2px)',
				'sm': 'calc(var(--radius) - 4px)',
			},
			fontFamily: {
				sans: ['Inter', ...fontFamily.sans],
				heading: ['Bebas Neue', 'cursive'],
				mono: ['Roboto Mono', 'monospace'],
			},
			spacing: {
				'1': '4px',
				'2': '8px',
				'4': '16px',
				'8': '32px',
				'12': '48px',
				'16': '64px',
			},
			textShadow: {
				sm: '0 1px 2px rgba(0, 0, 0, 0.25)',
				DEFAULT: '0 2px 4px rgba(0, 0, 0, 0.25)',
				lg: '0 4px 8px rgba(0, 0, 0, 0.25)',
				xl: '0 8px 16px rgba(0, 0, 0, 0.25)',
			},
		},
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px"
			}
		},
	},
	plugins: [
		function ({ addUtilities }) {
			const newUtilities = {
				'.text-shadow-sm': {
					textShadow: '0 1px 2px rgba(0, 0, 0, 0.25)',
				},
				'.text-shadow': {
					textShadow: '0 2px 4px rgba(0, 0, 0, 0.25)',
				},
				'.text-shadow-lg': {
					textShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
				},
				'.text-shadow-xl': {
					textShadow: '0 8px 16px rgba(0, 0, 0, 0.5)',
				},
				'.text-shadow-none': {
					textShadow: 'none',
				},
			}
			addUtilities(newUtilities)
		},
	],
};
