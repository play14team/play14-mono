import { query, mutation } from './_generated/server';
import { v } from 'convex/values';
import type { Id, Doc } from './_generated/dataModel';
import type { QueryCtx, MutationCtx } from './_generated/server';

// Query: Get single article by slug (matches GraphQL Article query)
export const get = query({
	args: { slug: v.string() },
	handler: async (ctx: QueryCtx, args: { slug: string }) => {
		const article = await ctx.db
			.query('articles')
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			.withIndex('by_slug', (q: any) => q.eq('slug', args.slug))
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			.filter((q: any) => q.neq(q.field('publishedAt'), undefined))
			.unique();

		if (!article) {
			return null;
		}

		// Get related data to match GraphQL ArticleDetails fragment
		const [author, tags] = await Promise.all([
			article.authorId ? ctx.db.get(article.authorId) : null,
			getArticleTags(ctx, article._id)
		]);

		return {
			...article,
			author,
			tags
		};
	}
});

// Query: List articles with pagination and filtering (matches GraphQL Articles query)
export const list = query({
	args: {
		page: v.number(),
		pageSize: v.number(),
		category: v.optional(v.string()),
		tag: v.optional(v.string())
	},
	handler: async (
		ctx: QueryCtx,
		args: { page: number; pageSize: number; category?: string; tag?: string }
	) => {
		// Get all articles based on category, filter by published
		const allArticles = args.category
			? await ctx.db
					.query('articles')
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					.withIndex('by_category', (q: any) => q.eq('category', args.category as any))
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					.filter((q: any) => q.neq(q.field('publishedAt'), undefined))
					.collect()
			: await ctx.db
					.query('articles')
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					.filter((q: any) => q.neq(q.field('publishedAt'), undefined))
					.collect();

		// Apply tag filter (post-query since we need to join with tags)
		let filteredArticles = allArticles;
		if (args.tag) {
			const articlesWithTags = await Promise.all(
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				allArticles.map(async (article: any) => {
					const tags = await getArticleTags(ctx, article._id);
					return { article, tags };
				})
			);

			filteredArticles = articlesWithTags
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				.filter(({ tags }: any) =>
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					tags.some((tag: any) => tag.value.toLowerCase().includes(args.tag!.toLowerCase()))
				)
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				.map(({ article }: any) => article);
		}

		// Sort by publishedAt (descending)
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		filteredArticles.sort((a: any, b: any) => (b.publishedAt || 0) - (a.publishedAt || 0));

		// Apply pagination
		const total = filteredArticles.length;
		const offset = (args.page - 1) * args.pageSize;
		const paginatedArticles = filteredArticles.slice(offset, offset + args.pageSize);

		// Get author data for each article (for ArticleItem fragment)
		const articlesWithAuthors = await Promise.all(
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			paginatedArticles.map(async (article: any) => {
				const author = article.authorId ? await ctx.db.get(article.authorId) : null;
				return {
					...article,
					author
				};
			})
		);

		return {
			data: articlesWithAuthors,
			meta: {
				pagination: {
					page: args.page,
					pageSize: args.pageSize,
					total,
					pageCount: Math.ceil(total / args.pageSize)
				}
			}
		};
	}
});

// Query: Get articles by author
export const getByAuthor = query({
	args: { authorId: v.id('players') },
	handler: async (ctx: QueryCtx, args: { authorId: Id<'players'> }) => {
		const articles = await ctx.db
			.query('articles')
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			.withIndex('by_author', (q: any) => q.eq('authorId', args.authorId))
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			.filter((q: any) => q.neq(q.field('publishedAt'), undefined))
			.collect();

		// Sort by publishedAt (descending)
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		articles.sort((a: any, b: any) => (b.publishedAt || 0) - (a.publishedAt || 0));

		return articles;
	}
});

// Mutation: Create new article
export const create = mutation({
	args: {
		title: v.string(),
		slug: v.string(),
		category: v.union(
			v.literal('Announcement'),
			v.literal('Article'),
			v.literal('Event'),
			v.literal('Interview'),
			v.literal('Meetup')
		),
		summary: v.string(),
		content: v.string(),
		canonical: v.optional(v.string()),
		authorId: v.optional(v.id('players')),
		publishedAt: v.optional(v.number())
	},
	handler: async (
		ctx: MutationCtx,
		args: {
			title: string;
			slug: string;
			category: 'Announcement' | 'Article' | 'Event' | 'Interview' | 'Meetup';
			summary: string;
			content: string;
			canonical?: string;
			authorId?: Id<'players'>;
			publishedAt?: number;
		}
	) => {
		const articleId = await ctx.db.insert('articles', {
			...args,
			imageIds: [],
			updatedAt: Date.now()
		});

		return articleId;
	}
});

// Mutation: Update article
export const update = mutation({
	args: {
		id: v.id('articles'),
		title: v.optional(v.string()),
		slug: v.optional(v.string()),
		category: v.optional(
			v.union(
				v.literal('Announcement'),
				v.literal('Article'),
				v.literal('Event'),
				v.literal('Interview'),
				v.literal('Meetup')
			)
		),
		summary: v.optional(v.string()),
		content: v.optional(v.string()),
		canonical: v.optional(v.string()),
		authorId: v.optional(v.id('players')),
		publishedAt: v.optional(v.number())
	},
	handler: async (
		ctx: MutationCtx,
		args: {
			id: Id<'articles'>;
			title?: string;
			slug?: string;
			category?: 'Announcement' | 'Article' | 'Event' | 'Interview' | 'Meetup';
			summary?: string;
			content?: string;
			canonical?: string;
			authorId?: Id<'players'>;
			publishedAt?: number;
		}
	) => {
		const { id, ...updates } = args;

		await ctx.db.patch(id, {
			...updates,
			updatedAt: Date.now()
		});

		return id;
	}
});

// Mutation: Delete article
export const remove = mutation({
	args: { id: v.id('articles') },
	handler: async (ctx: MutationCtx, args: { id: Id<'articles'> }) => {
		// Remove related tag relationships
		const tagRelations = await ctx.db
			.query('articleTags')
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			.withIndex('by_article', (q: any) => q.eq('articleId', args.id))
			.collect();

		// Delete all tag relationships
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		await Promise.all(tagRelations.map((rel: any) => ctx.db.delete(rel._id)));

		// Delete the article
		await ctx.db.delete(args.id);
		return args.id;
	}
});

// Mutation: Add tag to article
export const addTag = mutation({
	args: {
		articleId: v.id('articles'),
		tagId: v.id('tags')
	},
	handler: async (ctx: MutationCtx, args: { articleId: Id<'articles'>; tagId: Id<'tags'> }) => {
		// Check if relationship already exists
		const existing = await ctx.db
			.query('articleTags')
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			.withIndex('by_article', (q: any) => q.eq('articleId', args.articleId))
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			.filter((q: any) => q.eq(q.field('tagId'), args.tagId))
			.unique();

		if (existing) {
			return existing._id;
		}

		return await ctx.db.insert('articleTags', args);
	}
});

// Mutation: Remove tag from article
export const removeTag = mutation({
	args: {
		articleId: v.id('articles'),
		tagId: v.id('tags')
	},
	handler: async (ctx: MutationCtx, args: { articleId: Id<'articles'>; tagId: Id<'tags'> }) => {
		const relationship = await ctx.db
			.query('articleTags')
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			.withIndex('by_article', (q: any) => q.eq('articleId', args.articleId))
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			.filter((q: any) => q.eq(q.field('tagId'), args.tagId))
			.unique();

		if (relationship) {
			await ctx.db.delete(relationship._id);
		}

		return args.articleId;
	}
});

// Helper function
async function getArticleTags(ctx: QueryCtx, articleId: Id<'articles'>): Promise<Doc<'tags'>[]> {
	const tagRelations = await ctx.db
		.query('articleTags')
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		.withIndex('by_article', (q: any) => q.eq('articleId', articleId))
		.collect();

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const tags = await Promise.all(tagRelations.map((rel: any) => ctx.db.get(rel.tagId)));

	return tags.filter((tag): tag is Doc<'tags'> => tag !== null);
}
