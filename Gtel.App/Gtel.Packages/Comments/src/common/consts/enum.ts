export const SORT_OPTIONS: Array<Option> = [
	{ name: 'Không', value: '', selected: true },
	{ name: 'Mới nhất', value: 'Id DESC' },
	{ name: 'Cũ nhất', value: 'Id ASC' },
	{ name: 'Tên A-Z', value: 'Name ASC' },
	{ name: 'Tên Z-A', value: 'Name DESC' }
];

export const ITEMS_PER_PAGE_OTPIONS: Array<Option> = [
	{ name: '5', value: '5' },
	{ name: '10', value: '10', selected: true },
	{ name: '20', value: '20' },
	{ name: '50', value: '50' }
]

export const NAME_OF_COMMENTS_SERVICES = {
	NEWSCOMMENT: 'newscomment',
	APPLICATIONINFORMATION: 'applicationinformation'
}
