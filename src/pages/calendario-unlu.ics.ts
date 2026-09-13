import type { APIRoute } from 'astro';
import { calendarioUnlu, eventos } from '../data/calendario';

const encoder = new TextEncoder();

function aFechaIcs(iso: string): string {
	return iso.replace(/-/g, '');
}

function diaSiguiente(iso: string): string {
	const [anio, mes, dia] = iso.split('-').map(Number);
	const fecha = new Date(Date.UTC(anio, mes - 1, dia + 1));
	return [
		fecha.getUTCFullYear(),
		String(fecha.getUTCMonth() + 1).padStart(2, '0'),
		String(fecha.getUTCDate()).padStart(2, '0'),
	].join('');
}

function escapar(texto: string): string {
	return texto
		.replace(/\\/g, '\\\\')
		.replace(/;/g, '\\;')
		.replace(/,/g, '\\,')
		.replace(/\r?\n/g, '\\n');
}

function plegar(linea: string): string {
	const limite = 75;
	if (encoder.encode(linea).length <= limite) return linea;

	const partes: string[] = [];
	let actual = '';

	for (const caracter of linea) {
		const maximo = partes.length === 0 ? limite : limite - 1;
		if (encoder.encode(actual + caracter).length > maximo) {
			partes.push(partes.length === 0 ? actual : ` ${actual}`);
			actual = caracter;
		} else {
			actual += caracter;
		}
	}

	if (actual) partes.push(partes.length === 0 ? actual : ` ${actual}`);

	return partes.join('\r\n');
}

export const GET: APIRoute = () => {
	const dtstamp = new Date()
		.toISOString()
		.replace(/[-:]/g, '')
		.replace(/\.\d{3}Z$/, 'Z');

	const lineas: string[] = [
		'BEGIN:VCALENDAR',
		'VERSION:2.0',
		'PRODID:-//CODES++//Wiki CODES - Calendario Academico UNLu//ES',
		'CALSCALE:GREGORIAN',
		'METHOD:PUBLISH',
		`X-WR-CALNAME:${escapar(calendarioUnlu.titulo)}`,
		'X-WR-TIMEZONE:America/Argentina/Buenos_Aires',
	];

	eventos.forEach((evento, indiceEvento) => {
		const descripcion = [evento.fechaTexto, evento.nota].filter(Boolean).join(' — ');

		evento.rangos.forEach((rango, indiceRango) => {
			lineas.push(
				'BEGIN:VEVENT',
				`UID:calendario-unlu-${calendarioUnlu.anio}-${indiceEvento + 1}-${indiceRango + 1}@wiki-codes`,
				`DTSTAMP:${dtstamp}`,
				`DTSTART;VALUE=DATE:${aFechaIcs(rango.inicio)}`,
				`DTEND;VALUE=DATE:${diaSiguiente(rango.fin)}`,
				`SUMMARY:${escapar(evento.actividad)}`,
				`DESCRIPTION:${escapar(descripcion)}`,
				'TRANSP:TRANSPARENT',
				'END:VEVENT',
			);
		});
	});

	lineas.push('END:VCALENDAR');

	const cuerpo = lineas.map(plegar).join('\r\n') + '\r\n';

	return new Response(cuerpo, {
		headers: {
			'Content-Type': 'text/calendar; charset=utf-8',
			'Content-Disposition':
				'attachment; filename="calendario-academico-unlu-2026.ics"',
		},
	});
};
