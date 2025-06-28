import { sqliteTable, integer, text, real } from 'drizzle-orm/sqlite-core';

export const building = sqliteTable('bulding', {
	id: text('name').primaryKey(),
	kw: integer('kw'),
	tflops: integer('tflops'),
	mType: integer('mType'),
	mUse: real('mUse'),
	pop: integer('pop')
});
export const food = sqliteTable('food', {});
