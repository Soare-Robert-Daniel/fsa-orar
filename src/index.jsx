import { render } from 'preact';
import { useState, useMemo, useEffect } from 'preact/hooks';

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
						name: '✏️ DMB',
						location: 'BN133',
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
						name: '⛹️ Ed. fizică',
						location: 'Sală',
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
						name: '📖 ANALIZĂ MATEMATICĂ I (AM)',
						location: 'BNS04',
						instructor: 'Conf. Dr. Antoanela TOMA',
						groups: [ ...Object.values(GROUPS) ]
					}
				]
			},
			{
				startHour: '14',
				endHour: '16',
				courses: [
					{
						name: '📖 CHIMIE (CH)',
						location: 'CD006',
						instructor: 'Conf. Dr. George Octavian BUICĂ',
						groups: [ ...Object.values(GROUPS) ]
					}
				]
			},
		]
	},
	{
		name: 'Marți',
		intervals: [
			{
				startHour: '8',
				endHour: '10',
				courses: [
					{
						name: '🧪 PCLPb',
						location: 'BNS05',
						groups: [ GROUPS.b1311 ]
					},
				]
			},
			{
				startHour: '10',
				endHour: '12',
				courses: [
					{
						name: '📖 DATA MINING & BIG DATA (DMB)',
						location: 'BNS04',
						instructor: 'Conf. Dr. Alina Claudia Petrescu-Niță',
						groups: [ ...Object.values(GROUPS) ]
					}
				]
			},
			{
				startHour: '12',
				endHour: '14',
				courses: [
					{
						name: '✏️ ENG',
						location: 'AN220',
						groups: [ GROUPS.a1311, GROUPS.b1311 ],
						odd: true
					},
					{
						name: '✏️ FIZ',
						location: 'BNS04',
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
						name: '✏️ FAC_PE [OPTIONAL]',
						location: 'BN122b',
						groups: [ GROUPS.a1311, GROUPS.b1311 ]
					}
				]
			},
			{
				startHour: '16',
				endHour: '18',
				courses: [
					{
						name: '📖 Psihologia Educației (FAC_PE)',
						instructor: 'Lect. Dr. Ana Voichița Tebenu',
						location: 'BN113',
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
						name: '✏️ ALG',
						location: 'AN220',
						groups: [ GROUPS.a1311, GROUPS.b1311 ]
					},
				]
			},
			{
				startHour: '12',
				endHour: '14',
				courses: [
					{
						name: '✏️ AM',
						location: 'AN211',
						groups: [ GROUPS.a1311, GROUPS.b1311 ]
					},
				]
			},
			{
				startHour: '14',
				endHour: '16',
				courses: [
					{
						name: '🧪 DMBa',
						location: 'BNS06',
						groups: [ GROUPS.a1311 ],
						odd: true
					},
					{
						name: '🧪 CHb',
						location: 'EG104',
						groups: [ GROUPS.b1311 ],
						odd: true
					},
					{
						name: '🧪 Cha',
						location: 'EG104',
						groups: [ GROUPS.a1311 ],
						odd: false
					},
					{
						name: '🧪 DMBb',
						location: 'BNS06',
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
						name: '🧪 PCLPa',
						location: 'BNS05',
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
						name: '📖 FIZICĂ I (FIZ)',
						instructor: 'Ș.L. Dr. Victor-Cristian PALEA',
						location: 'AN024',
						groups: [ ...Object.values(GROUPS) ]
					},
				]
			},
			{
				startHour: '12',
				endHour: '14',
				courses: [
					{
						name: '📖 PROGRAMAREA CALCULATOARELOR ȘI LIMBAJE DE PROGRAMARE I (PCLP)',
						instructor: 'Prof. Dr. Andreea Ioana UDREA',
						location: 'AN024',
						groups: [ ...Object.values(GROUPS) ]
					},
				]
			},
			{
				startHour: '14',
				endHour: '16',
				courses: [
					{
						name: '📖 CULTURĂ ȘI INSTITUȚII EUROPENE (CIE)',
						instructor: 'Lect. Dr. Maricica Daniela COTOARĂ',
						location: 'AN024',
						groups: [ Object.values(GROUPS) ],
						odd: true
					},
					{
						name: '📖 LIMBA ENGLEZĂ I (ENG)',
						instructor: 'Conf. Dr. Brândușa RĂILEANU',
						location: 'AN024',
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
						name: '📖 ALGEBRĂ LINIARĂ, GEOMETRIE ANALITICĂ ȘI DIFERENȚIALĂ I (ALG)',
						instructor: 'Prof. Dr. Gabriel-Eduard VÎLCU',
						location: 'AN015',
						groups: [ ...Object.values(GROUPS) ]
					},
				]
			},
		]
	}
]

/**
 * Get the current day slug and hour.
 * 
 * @returns {[string, number]}
 */
function getCurrentDayAndHour() {
	const now = new Date();
	const daysOfWeek = ['Duminică', 'Luni', 'Marți', 'Miercuri', 'Joi', 'Vineri', 'Sâmbătă'];
	return [daysOfWeek[now.getDay()], now.getHours()];
}

/**
 * Get the current interval based on the current day of the week and hour (24h format).
 * 
 * @returns {string} A hash composed from `day-startHour-endHour`.
 */
function getCurrentInterval(courses) {
	const [currentDay, currentHour] = getCurrentDayAndHour();
    for (const day of courses) {
        if (day.name === currentDay) {
            for (const interval of day.intervals) {
                if (
					currentHour >= parseInt(interval.startHour, 10) && 
					currentHour < parseInt(interval.endHour, 10)
				) {
                    return `${currentDay}-${interval.startHour}-${interval.endHour}`;
                }
            }
        }
    }

    return '';
}

export function App() {
	const [selectedGroup, setSelectedGroup] = useState(localStorage.getItem('selectedGroup') || GROUPS.b1311);
	const [currentInterval, setCurrentInterval] = useState('');

	const handleGroupChange = (event) => {
		const group = event.target.value;
		setSelectedGroup(group);
		localStorage.setItem('selectedGroup', group);
	};

	const filteredCourses = useMemo(
		() => (
				allCourses.map(day => ({
				...day,
				intervals: day.intervals.map(interval => ({
					...interval,
					courses: interval.courses.filter(course => 
						selectedGroup === '' || (Array.isArray(course.groups) && course.groups.includes(selectedGroup))
					)
				})).filter(interval => interval.courses.length > 0)
			})).filter(day => day.intervals.length > 0)
		)
		, [selectedGroup]
	);

	const currentDay = useMemo(() => {
		return getCurrentDayAndHour()[0];
	}, []);

	useEffect(() => {
		setCurrentInterval( getCurrentInterval( filteredCourses ) );

		const timer = setInterval(() => {
			setCurrentInterval( getCurrentInterval( filteredCourses ) );
		}, 900);

		return () => {
			clearInterval( timer );
		}
	}, [ filteredCourses ]);

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
						<div className={'day-header'}>
							<h2 className={ currentDay === day.name ? 'current-day' : ''}>{day.name}</h2>
							{
								currentDay === day.name && (
									<span class={'day-header-separator'} />
								)
							}
						</div>
						{day.intervals.map(interval => (
							<div
								className={`hour-container ${ currentInterval === `${day.name}-${interval.startHour}-${interval.endHour}` ? 'current-hour': '' }`}
								key={`${day.name}-${interval.startHour}`}
							>
								<h3 className={'interval'}>{interval.startHour}-{interval.endHour}</h3>
								<div className={'course-list'}>
									{interval.courses.map(course => (
										<p className={'course-item'} key={course.name}>
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
											{
												course?.location && (
													<span className={'location'}>
														{
															course.location
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
			<footer>
				<a href={'https://github.com/Soare-Robert-Daniel/fsa-orar'}>
					Cod sursă 
				</a>
			</footer>
		</div>
	);
}

render(<App />, document.getElementById('app'));
