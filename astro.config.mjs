// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import lucode from 'lucode-starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://CODES-UNLU.github.io',
	base: '/Wiki-CODES',
	integrations: [
		starlight({
			title: 'Wiki',
			description:
				'Recursos para estudiantes de la UNLu, material específico para la Licenciatura en Sistemas y cosas interesantes de informática.',
			logo: {
				light: './src/assets/logo-nav-light.png',
				dark: './src/assets/logo-nav-dark.png',
				alt: 'CODES++',
				replacesTitle: false,
			},
			favicon: '/favicon.png',
			customCss: ['./src/styles/custom.css'],
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/CODES-UNLU' },
				{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/2hbjvN7KDH' },
				{ icon: 'link', label: 'Sitio del centro', href: 'https://www.codesunlu.tech/' },
			],
			plugins: [
				lucode({
					footerText: `© ${new Date().getFullYear()} CODES++. Todos los derechos reservados.<br>Hecho con ❤️ por estudiantes para estudiantes`,
				}),
			],
			sidebar: [
				{
					label: 'Universidad (UNLu)',
					items: [{ autogenerate: { directory: 'unlu' } }],
				},
				{
					label: 'Licenciatura en Sistemas',
					items: [{ autogenerate: { directory: 'sistemas' } }],
				},
				{
					label: 'Informática',
					items: [{ autogenerate: { directory: 'informatica' } }],
				},
			],
		}),
	],
});
