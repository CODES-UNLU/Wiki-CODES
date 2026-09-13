export interface RangoCalendario {
	/** Fecha de inicio en formato ISO (YYYY-MM-DD). */
	inicio: string;
	/** Fecha de fin en formato ISO (YYYY-MM-DD), inclusive. */
	fin: string;
}

export interface EventoCalendario {
	actividad: string;
	/** Texto de fechas tal como figura en el calendario oficial. */
	fechaTexto: string;
	/** Rango(s) usados para generar el archivo .ics. */
	rangos: RangoCalendario[];
	nota?: string;
	destacado?: boolean;
}

export const calendarioUnlu = {
	anio: 2026,
	titulo: 'Calendario Académico UNLu 2026',
	fuente: 'https://www.unlu.edu.ar/calendario.html',
	pdf: 'https://www.unlu.edu.ar/doc/calendario-acad.pdf',
};

export const eventos: EventoCalendario[] = [
	{
		actividad: 'Receso Institucional 2026 (Académico y Administrativo)',
		fechaTexto: 'Desde el primer día hábil de enero de 2026 al 31/01/26',
		rangos: [{ inicio: '2026-01-01', fin: '2026-01-31' }],
		nota: 'Comprende desde el primer día hábil de enero.',
	},
	{
		actividad: 'Inscripción a exámenes complementarios 2025 (Febrero de 2026)',
		fechaTexto: '02/02/26 al 26/02/26',
		rangos: [{ inicio: '2026-02-02', fin: '2026-02-26' }],
	},
	{
		actividad: 'Turno de exámenes complementarios 2025 (Febrero de 2026)',
		fechaTexto: '09/02/26 al 28/02/26',
		rangos: [{ inicio: '2026-02-09', fin: '2026-02-28' }],
	},
	{
		actividad: 'Aspirantes 2026 - Cursado de Talleres Introductorios',
		fechaTexto: '02/02/26 al 27/02/26',
		rangos: [{ inicio: '2026-02-02', fin: '2026-02-27' }],
	},
	{
		actividad:
			'Inscripción en Asignaturas 1º cuatrimestre sólo Aspirantes de Carreras con modalidad a Distancia 2026 (CCC)',
		fechaTexto: '23/02/26 al 27/02/26',
		rangos: [{ inicio: '2026-02-23', fin: '2026-02-27' }],
	},
	{
		actividad:
			'Inscripción en Asignaturas 1º cuatrimestre de Aspirantes 2026 y Estudiantes Regulares',
		fechaTexto: '26/02/26 al 05/03/26',
		rangos: [{ inicio: '2026-02-26', fin: '2026-03-05' }],
	},
	{
		actividad:
			'Inscripción en Asignaturas 1º cuatrimestre de Aspirantes y Estudiantes del Profesorado en Educación Física',
		fechaTexto: '02/03/26 al 05/03/26',
		rangos: [{ inicio: '2026-03-02', fin: '2026-03-05' }],
	},
	{
		actividad: 'Período para solicitar Cambios de Carrera y/o Simultaneidades para el 1° C/2026',
		fechaTexto: 'Febrero de 2026',
		rangos: [{ inicio: '2026-02-01', fin: '2026-02-28' }],
		nota: 'Fechas aproximadas del mes.',
	},
	{
		actividad: 'Desarrollo del 1er. Cuatrimestre 2026',
		fechaTexto: '09/03/26 al 27/06/26',
		rangos: [{ inicio: '2026-03-09', fin: '2026-06-27' }],
		destacado: true,
	},
	{
		actividad:
			'Inscripción Aspirantes a Carreras de Grado y Pregrado - Mayores de 25 años sin estudios secundarios completos Cohorte 2027',
		fechaTexto: '15/04/26 al 31/08/26',
		rangos: [{ inicio: '2026-04-15', fin: '2026-08-31' }],
	},
	{
		actividad:
			'Período para solicitar equivalencias de ésta u otras Universidades para el 2° C./2026',
		fechaTexto: 'Abril - Mayo',
		rangos: [{ inicio: '2026-04-01', fin: '2026-05-31' }],
		nota: 'Fechas aproximadas del período.',
	},
	{
		actividad: 'Inscripción Turno extraordinario de Exámenes de Mayo 2026',
		fechaTexto: '04/05/26 al 14/05/26',
		rangos: [{ inicio: '2026-05-04', fin: '2026-05-14' }],
	},
	{
		actividad: 'Turno extraordinario de Exámenes de Mayo 2026',
		fechaTexto: '11/05/26 al 16/05/26',
		rangos: [{ inicio: '2026-05-11', fin: '2026-05-16' }],
	},
	{
		actividad:
			'Período para solicitar Cambio de Carrera y/o Simultaneidades. Comienza cursado en 2° C/2026',
		fechaTexto: 'Junio de 2026',
		rangos: [{ inicio: '2026-06-01', fin: '2026-06-30' }],
		nota: 'Fechas aproximadas del mes.',
	},
	{
		actividad:
			'Inscripción para el cursado de los Talleres Introductorios para estudiantes regulares (Recursantes/Ingresantes 2026)',
		fechaTexto: '15/06/26 al 18/06/26',
		rangos: [{ inicio: '2026-06-15', fin: '2026-06-18' }],
	},
	{
		actividad: 'Cursado de Talleres (Recursantes/Ingresantes 2026)',
		fechaTexto: '22/06/26 al 17/07/26',
		rangos: [{ inicio: '2026-06-22', fin: '2026-07-17' }],
	},
	{
		actividad: 'Inscripción a exámenes Julio-Agosto 2026',
		fechaTexto: '29/06/26 al 06/08/26',
		rangos: [{ inicio: '2026-06-29', fin: '2026-08-06' }],
	},
	{
		actividad: 'Turno de Exámenes Julio-Agosto 2026',
		fechaTexto: '06/07/26 al 18/07/26 y del 03/08/26 al 08/08/26',
		rangos: [
			{ inicio: '2026-07-06', fin: '2026-07-18' },
			{ inicio: '2026-08-03', fin: '2026-08-08' },
		],
	},
	{
		actividad: 'Receso Institucional de Invierno (Académico y Administrativo)',
		fechaTexto: '20/07/26 al 31/07/26',
		rangos: [{ inicio: '2026-07-20', fin: '2026-07-31' }],
	},
	{
		actividad: 'Inscripción en Asignaturas 2° C/2026',
		fechaTexto: '03/08/26 al 10/08/26',
		rangos: [{ inicio: '2026-08-03', fin: '2026-08-10' }],
	},
	{
		actividad: 'Desarrollo 2do. Cuatrimestre 2026',
		fechaTexto: '17/08/26 al 05/12/26',
		rangos: [{ inicio: '2026-08-17', fin: '2026-12-05' }],
		destacado: true,
	},
	{
		actividad:
			'Inscripción de aspirantes para el año 2027 (excepto Profesorado en Educación Física) y presentación de equivalencias externas cohorte 2027',
		fechaTexto: '15/10/2026 al 15/02/2027',
		rangos: [{ inicio: '2026-10-15', fin: '2027-02-15' }],
	},
	{
		actividad:
			'Inscripción de aspirantes 2027 para la Carrera de Profesorado en Educación Física y presentación de equivalencias externas cohorte 2027',
		fechaTexto: '15/10/2026 al 30/11/2026',
		rangos: [{ inicio: '2026-10-15', fin: '2026-11-30' }],
	},
	{
		actividad:
			'Inscripción de aspirantes 2027 para Carreras con modalidad a distancia (CCC)',
		fechaTexto: '15/10/2026 - fecha de cierre a definir por la CPE',
		rangos: [{ inicio: '2026-10-15', fin: '2026-10-15' }],
	},
	{
		actividad: 'Inscripción Turno extraordinario de Exámenes de Septiembre 2026',
		fechaTexto: '21/09/26 al 01/10/26',
		rangos: [{ inicio: '2026-09-21', fin: '2026-10-01' }],
	},
	{
		actividad: 'Turno extraordinario de Exámenes de Septiembre 2026',
		fechaTexto: '28/09/26 al 03/10/26',
		rangos: [{ inicio: '2026-09-28', fin: '2026-10-03' }],
	},
	{
		actividad:
			'Período para solicitar equivalencias de ésta u otras Universidades para el 1° Cuatrimestre 2027',
		fechaTexto: 'Septiembre - Octubre',
		rangos: [{ inicio: '2026-09-01', fin: '2026-10-31' }],
		nota: 'Fechas aproximadas del período.',
	},
	{
		actividad:
			'Plazo de entrega de Certificados Analíticos y/o Títulos para Ingresantes 2026',
		fechaTexto: '30/10/2026',
		rangos: [{ inicio: '2026-10-30', fin: '2026-10-30' }],
	},
	{
		actividad:
			'Período para solicitar Cambio de Carrera y/o Simultaneidades. Comienza cursado 1º Cuatrimestre 2027',
		fechaTexto: 'Noviembre de 2026',
		rangos: [{ inicio: '2026-11-01', fin: '2026-11-30' }],
		nota: 'Fechas aproximadas del mes.',
	},
	{
		actividad: 'Inscripción a exámenes finales de Diciembre 2026',
		fechaTexto: '07/12/26 al 21/12/26',
		rangos: [{ inicio: '2026-12-07', fin: '2026-12-21' }],
	},
	{
		actividad: 'Turno de exámenes finales de Diciembre 2026',
		fechaTexto: '10/12/26 al 23/12/26',
		rangos: [{ inicio: '2026-12-10', fin: '2026-12-23' }],
	},
	{
		actividad: 'Receso Institucional 2027 (Académico y Administrativo)',
		fechaTexto: 'Desde el primer día hábil de enero de 2027 al 31/01/27',
		rangos: [{ inicio: '2027-01-01', fin: '2027-01-31' }],
		nota: 'Comprende desde el primer día hábil de enero.',
	},
	{
		actividad: 'Inscripción a exámenes ordinarios 2026 (Febrero de 2027)',
		fechaTexto: '01/02/27 al 25/02/27',
		rangos: [{ inicio: '2027-02-01', fin: '2027-02-25' }],
	},
	{
		actividad: 'Turno de exámenes ordinarios 2026 (Febrero de 2027)',
		fechaTexto: '08/02/27 al 27/02/27',
		rangos: [{ inicio: '2027-02-08', fin: '2027-02-27' }],
	},
];
