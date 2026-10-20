// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import lucode from 'lucode-starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://wiki.codesunlu.com.ar',
	integrations: [
		starlight({
			title: 'Wiki CODES',
			defaultLocale: 'root',
			locales: {
				root: { label: 'Español', lang: 'es' },
			},
			description:
				'Recursos para estudiantes de la UNLu, material específico para la Licenciatura en Sistemas y cosas interesantes de informática.',
			logo: {
				light: './src/assets/logo-claro.svg',
				dark: './src/assets/logo-oscuro.svg',
				alt: 'CODES',
				replacesTitle: false,
			},
			favicon: '/favicon.svg',
			head: [
				{ tag: 'link', attrs: { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' } },
				{ tag: 'meta', attrs: { name: 'theme-color', content: '#39c0c3' } },
			],
			customCss: ['./src/styles/custom.css'],
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/CODES-UNLU' },
				{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/2hbjvN7KDH' },
				{ icon: 'link', label: 'Sitio del centro', href: 'https://www.codesunlu.tech/' },
			],
			plugins: [
				lucode({
					footerText: `© ${new Date().getFullYear()} CODES. Todos los derechos reservados.<br>Hecho con ❤️ por estudiantes para estudiantes`,
				}),
			],
			sidebar: [
				{
					label: 'Universidad (UNLu)',
					items: [{ autogenerate: { directory: 'unlu' } }],
				},
				{
					label: 'Licenciatura en Sistemas',
					items: [
						'sistemas',
						{
							label: 'Agentes',
							items: [{ autogenerate: { directory: 'sistemas/agentes' } }],
						},
						'sistemas/editor',
						'sistemas/editores-recomendados',
						'sistemas/lenguajes',
						{
							label: 'Planes',
							items: [{ autogenerate: { directory: 'sistemas/planes' } }],
						},
					],
				},
				{
					label: 'Informática',
					items: [{ autogenerate: { directory: 'informatica' } }],
				},
				{
					label: 'Beneficios educativos',
					items: [{ autogenerate: { directory: 'beneficios' } }],
				},
			],
		}),
	],
});
