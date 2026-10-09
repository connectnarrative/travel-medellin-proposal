import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
export const categories = sqliteTable('categories',{id:text('id').primaryKey(),slug:text('slug').notNull().unique(),data:text('data').notNull()});
export const listings = sqliteTable('listings',{id:text('id').primaryKey(),slug:text('slug').notNull().unique(),category:text('category').notNull(),status:text('status').notNull().default('draft'),relationship:text('relationship').notNull().default('prospect'),data:text('data').notNull(),updated:text('updated').notNull()});
export const commercial=sqliteTable('commercial',{listingId:text('listing_id').primaryKey().references(()=>listings.id,{onDelete:'cascade'}),data:text('data').notNull()});
export const leads=sqliteTable('leads',{id:text('id').primaryKey(),kind:text('kind').notNull(),data:text('data').notNull(),created:text('created').notNull()});
export const settings=sqliteTable('settings',{id:text('id').primaryKey(),data:text('data').notNull()});
