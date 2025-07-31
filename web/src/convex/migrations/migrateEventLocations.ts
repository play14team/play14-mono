import { mutation } from './_generated/server';

// Migration function for eventLocations
export const migrateEventLocations = mutation({
	args: {},
	handler: async (ctx) => {
		console.log('Starting migration for eventLocations...');

		const data = [
			{
				_strapiId: 82,
				name: 'Bangkok',
				country: 'TH',
				location: {
					lat: 0,
					lng: 0
				}
			},
			{
				_strapiId: 9,
				name: 'Amsterdam',
				country: 'NL',
				location: {
					lat: 0,
					lng: 0
				}
			},
			{
				_strapiId: 11,
				name: 'Paris',
				country: 'FR',
				location: {
					lat: 0,
					lng: 0
				}
			},
			{
				_strapiId: 117,
				name: 'Singapore',
				country: 'SG',
				location: {
					lat: 0,
					lng: 0
				}
			},
			{
				_strapiId: 5,
				name: 'Hamburg',
				country: 'DE',
				location: {
					lat: 0,
					lng: 0
				}
			},
			{
				_strapiId: 26,
				name: 'Online',
				country: '',
				location: null
			},
			{
				_strapiId: 111,
				name: 'Zürich',
				country: 'CH',
				location: {
					lat: 0,
					lng: 0
				}
			},
			{
				_strapiId: 124,
				name: 'Bangkok 2025',
				country: 'TH',
				location: {
					lat: 0,
					lng: 0
				}
			},
			{
				_strapiId: 20,
				name: 'Emmental',
				country: 'CH',
				location: {
					lat: 0,
					lng: 0
				}
			},
			{
				_strapiId: 7,
				name: 'Berlin',
				country: 'DE',
				location: {
					lat: 0,
					lng: 0
				}
			},
			{
				_strapiId: 109,
				name: 'Zagreb',
				country: 'HR',
				location: {
					lat: 0,
					lng: 0
				}
			},
			{
				_strapiId: 18,
				name: 'Bologna',
				country: 'IT',
				location: {
					lat: 0,
					lng: 0
				}
			},
			{
				_strapiId: 31,
				name: 'Iasi',
				country: 'RO',
				location: {
					lat: 0,
					lng: 0
				}
			},
			{
				_strapiId: 13,
				name: 'Brussels',
				country: 'BE',
				location: {
					lat: 0,
					lng: 0
				}
			},
			{
				_strapiId: 113,
				name: 'Caramulo',
				country: 'PT',
				location: {
					lat: 0,
					lng: 0
				}
			},
			{
				_strapiId: 42,
				name: 'Madrid',
				country: 'ES',
				location: {
					lat: 0,
					lng: 0
				}
			},
			{
				_strapiId: 112,
				name: 'Curia',
				country: 'PT',
				location: {
					lat: 0,
					lng: 0
				}
			},
			{
				_strapiId: 110,
				name: 'Manila',
				country: 'PH',
				location: {
					lat: 0,
					lng: 0
				}
			},
			{
				_strapiId: 79,
				name: 'Prague',
				country: 'CZ',
				location: {
					lat: 0,
					lng: 0
				}
			},
			{
				_strapiId: 3,
				name: 'Milano',
				country: 'IT',
				location: {
					lat: 0,
					lng: 0
				}
			},
			{
				_strapiId: 116,
				name: 'Bangalore',
				country: 'IN',
				location: {
					lat: 0,
					lng: 0
				}
			},
			{
				_strapiId: 118,
				name: 'Zoetermeer',
				country: 'NL',
				location: {
					lat: 0,
					lng: 0
				}
			},
			{
				_strapiId: 17,
				name: 'Mexico',
				country: 'MX',
				location: {
					lat: 0,
					lng: 0
				}
			},
			{
				_strapiId: 19,
				name: 'Lisbon',
				country: 'PT',
				location: {
					lat: 0,
					lng: 0
				}
			},
			{
				_strapiId: 29,
				name: 'Stuttgart',
				country: 'DE',
				location: {
					lat: 0,
					lng: 0
				}
			},
			{
				_strapiId: 1,
				name: 'Luxembourg',
				country: 'LU',
				location: {
					lat: 0,
					lng: 0
				}
			},
			{
				_strapiId: 122,
				name: 'Nancy',
				country: 'FR',
				location: {
					lat: 0,
					lng: 0
				}
			},
			{
				_strapiId: 125,
				name: 'Aveiro',
				country: 'PT',
				location: {
					lat: 0,
					lng: 0
				}
			},
			{
				_strapiId: 6,
				name: 'Timisoara',
				country: 'RO',
				location: {
					lat: 0,
					lng: 0
				}
			},
			{
				_strapiId: 120,
				name: 'The Pod, National Library Building',
				country: 'SG',
				location: {
					lat: 0,
					lng: 0
				}
			},
			{
				_strapiId: 22,
				name: 'Vienna',
				country: 'AT',
				location: {
					lat: 0,
					lng: 0
				}
			},
			{
				_strapiId: 105,
				name: 'Viseu',
				country: 'PT',
				location: {
					lat: 0,
					lng: 0
				}
			},
			{
				_strapiId: 121,
				name: 'Enova',
				country: 'CH',
				location: {
					lat: 0,
					lng: 0
				}
			},
			{
				_strapiId: 10,
				name: 'Basel',
				country: 'CH',
				location: {
					lat: 0,
					lng: 0
				}
			},
			{
				_strapiId: 4,
				name: 'Beirut',
				country: 'LB',
				location: {
					lat: 0,
					lng: 0
				}
			},
			{
				_strapiId: 126,
				name: 'Pune',
				country: 'IN',
				location: null
			},
			{
				_strapiId: 59,
				name: 'Porto',
				country: 'PT',
				location: {
					lat: 0,
					lng: 0
				}
			},
			{
				_strapiId: 16,
				name: 'Bari',
				country: 'IT',
				location: {
					lat: 0,
					lng: 0
				}
			},
			{
				_strapiId: 15,
				name: 'Sydney',
				country: 'AU',
				location: {
					lat: 0,
					lng: 0
				}
			},
			{
				_strapiId: 123,
				name: 'Vinkeveen',
				country: 'NL',
				location: {
					lat: 0,
					lng: 0
				}
			},
			{
				_strapiId: 93,
				name: 'Utrecht',
				country: 'NL',
				location: {
					lat: 0,
					lng: 0
				}
			},
			{
				_strapiId: 102,
				name: 'Munich',
				country: 'DE',
				location: {
					lat: 0,
					lng: 0
				}
			},
			{
				_strapiId: 25,
				name: 'Leeds',
				country: 'GB',
				location: {
					lat: 0,
					lng: 0
				}
			},
			{
				_strapiId: 12,
				name: 'Barcelona',
				country: 'ES',
				location: {
					lat: 0,
					lng: 0
				}
			},
			{
				_strapiId: 76,
				name: 'Kuala Lumpur',
				country: 'MY',
				location: {
					lat: 0,
					lng: 0
				}
			},
			{
				_strapiId: 2,
				name: 'London',
				country: 'GB',
				location: {
					lat: 0,
					lng: 0
				}
			}
		];

		const results = [];

		for (const item of data) {
			try {
				// Remove Strapi ID before insertion
				const { _strapiId, ...convexItem } = item;

				const id = await ctx.db.insert('eventLocations', convexItem);
				results.push({ strapiId: _strapiId, convexId: id });

				console.log(`Migrated eventLocations ${_strapiId} -> ${id}`);
			} catch (error) {
				console.error(`Failed to migrate eventLocations ${item._strapiId}:`, error);
			}
		}

		console.log(`Migration completed for eventLocations: ${results.length}/${data.length} records`);
		return results;
	}
});
