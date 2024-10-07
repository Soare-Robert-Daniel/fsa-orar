import { render } from 'preact';
import { useState } from 'preact/hooks';

import './style.css';

const GROUPS = {
	a1311: '1311a',
	b1311: '1311b',
	a1312: '1312a',
	b1312: '1312b',
	a1313: '1313a',
	b1313: '1313b',
	a1314: '1314a',
	b1314: '1314b',
	a1315: '1315a',
	b1315: '1315b',
}

const allCourses = [
	{
		name: 'Luni',
		intervals: [
			{
				startHour: '8',
				endHour: '10',
				courses: [
					{
						name: '✏️ DMB (BN113)',
						groups: [ GROUPS.a1311, GROUPS.b1311 ],
						odd: true
					},
				]
			},
			{
				startHour: '10',
				endHour: '12',
				courses: [
					{
						name: '⛹️ Ed. fizică (Sală)',
						groups: [ GROUPS.a1311, GROUPS.b1311 ],
						odd: true
					},
				]
			},
			{
				startHour: '12',
				endHour: '14',
				courses: [
					{
						name: '📖 ANALIZĂ MATEMATICĂ I (AM) – Conf. Dr. Antoanela TOMA (BNS04)',
						groups: [ ...Object.values(GROUPS) ]
					}
				]
			},
			{
				startHour: '14',
				endHour: '16',
				courses: [
					{
						name: '📖 CHIMIE (CH) – Conf. Dr. George Octavian BUICĂ (CD006)',
						groups: [ ...Object.values(GROUPS) ]
					}
				]
			},
		]
	},
	{
		name: 'Marti',
		intervals: [
			{
				startHour: '8',
				endHour: '10',
				courses: [
					{
						name: '🧪 PCLPb (BNS05)',
						groups: [ GROUPS.b1311 ]
					},
				]
			},
			{
				startHour: '10',
				endHour: '12',
				courses: [
					{
						name: '📖 DATA MINING & BIG DATA (DMB) – Conf. Dr. Alina Claudia PETRESCU-NIȚĂ (BNS04)',
						groups: [ ...Object.values(GROUPS) ]
					}
				]
			},
			{
				startHour: '12',
				endHour: '14',
				courses: [
					{
						name: '✏️ ENG (AN220)',
						groups: [ GROUPS.a1311, GROUPS.b1311 ],
						odd: true
					},
					{
						name: '✏️ FIZ (BNS04)',
						groups: [ GROUPS.a1311, GROUPS.b1311 ],
						odd: false
					}
				]
			},
			{
				startHour: '14',
				endHour: '16',
				courses: [
					{
						name: '✏️ FAC_PE (BN122b)',
						groups: [ GROUPS.a1311, GROUPS.b1311 ]
					}
				]
			},
			{
				startHour: '16',
				endHour: '18',
				courses: [
					{
						name: '📖 Curs facultativ: PSIHOLOGIA EDUCAȚIEI (FAC_PE) – Lect. Dr. Ana Voichița TEBEANU (BN113)',
						groups: [ ...Object.values(GROUPS) ]
					}
				]
			},
		]
	},
	{
		name: 'Miercuri',
		intervals: [
			{
				startHour: '10',
				endHour: '12',
				courses: [
					{
						name: '✏️ ALG (AN220)',
						groups: [ GROUPS.a1311, GROUPS.b1311 ]
					},
				]
			},
			{
				startHour: '12',
				endHour: '14',
				courses: [
					{
						name: '✏️ AM (AN211)',
						groups: [ GROUPS.a1311, GROUPS.b1311 ]
					},
				]
			},
			{
				startHour: '14',
				endHour: '16',
				courses: [
					{
						name: '🧪 DMBa (BNS06)',
						groups: [ GROUPS.a1311 ],
						odd: true
					},
					{
						name: '🧪 CHb (EG104)',
						groups: [ GROUPS.b1311 ],
						odd: true
					},
					{
						name: '🧪 Cha (EG104)',
						groups: [ GROUPS.a1311 ],
						odd: false
					},
					{
						name: '🧪 DMBb (BNS06)',
						groups: [ GROUPS.b1311 ],
						odd: false
					}
				]
			},
			{
				startHour: '16',
				endHour: '18',
				courses: [
					{
						name: '🧪 PCLPa (BNS05)',
						groups: [ GROUPS.a1311 ]
					}
				]
			},
		]
	},
	{
		name: 'Joi',
		intervals: [
			{
				startHour: '10',
				endHour: '12',
				courses: [
					{
						name: '📖 FIZICĂ I (FIZ) – Ș.L. Dr. Victor-Cristian PALEA (AN024)',
						groups: [ ...Object.values(GROUPS) ]
					},
				]
			},
			{
				startHour: '12',
				endHour: '14',
				courses: [
					{
						name: '📖 PROGRAMAREA CALCULATOARELOR ȘI LIMBAJE DE PROGRAMARE I (PCLP) – Prof. Dr. Andreea Ioana UDREA (AN024)',
						groups: [ ...Object.values(GROUPS) ]
					},
				]
			},
			{
				startHour: '14',
				endHour: '16',
				courses: [
					{
						name: '📖 CULTURĂ ȘI INSTITUȚII EUROPENE (CIE) – Lect. Dr. Maricica Daniela COTOARĂ (AN024)',
						groups: [ Object.values(GROUPS) ],
						odd: true
					},
					{
						name: '📖 LIMBA ENGLEZĂ I (ENG) – Conf. Dr. Brândușa RĂILEANU (AN024)',
						groups: [ ...Object.values(GROUPS) ],
						odd: false
					},
				]
			},
			{
				startHour: '16',
				endHour: '18',
				courses: [
					{
						name: '📖 ALGEBRĂ LINIARĂ, GEOMETRIE ANALITICĂ ȘI DIFERENȚIALĂ I (ALG) – Prof. Dr. Gabriel-Eduard VÎLCU (AN015)',
						groups: [ ...Object.values(GROUPS) ]
					},
				]
			},
		]
	}
]

export function App() {
	const [selectedGroup, setSelectedGroup] = useState(localStorage.getItem('selectedGroup') || GROUPS.b1311);

	const handleGroupChange = (event) => {
		const group = event.target.value;
		setSelectedGroup(group);
		localStorage.setItem('selectedGroup', group);
	};

	const filteredCourses = allCourses.map(day => ({
		...day,
		intervals: day.intervals.map(interval => ({
			...interval,
			courses: interval.courses.filter(course => 
				selectedGroup === '' || (Array.isArray(course.groups) && course.groups.includes(selectedGroup))
			)
		})).filter(interval => interval.courses.length > 0)
	})).filter(day => day.intervals.length > 0);

	return (
		<div>
			<header>
				<h1>Orar FSA Anul 1</h1>
				<div className={'group-container'}>
					<label htmlFor="group-select">Grupa </label>
					<select id="group-select" value={selectedGroup} onChange={handleGroupChange}>
						{Object.values(GROUPS).slice(0, 2).map(group => (
							<option key={group} value={group}>{group}</option>
						))}
					</select>
				</div>
			</header>
			<section className={'courses'}>
				{filteredCourses.map(day => (
					<div className={'day-container'} key={day.name}>
						<h2>{day.name}</h2>
						{day.intervals.map(interval => (
							<div className={'hour-container'} key={`${day.name}-${interval.startHour}`}>
								<h3 className={'interval'}>{interval.startHour}-{interval.endHour}</h3>
								<div>
									{interval.courses.map(course => (
										<p key={course.name}>
											{course.name}
											{
												undefined !== course.odd && (
													<span className={`badge ${course.odd ? 'odd' : 'even'}`}>
													{
														course.odd ? 'impar' : 'par'
													}
													</span>
												)
											}
										</p>
									))}
								</div>
							</div>
						))}
					</div>
				))}
			</section>
		</div>
	);
}

render(<App />, document.getElementById('app'));
