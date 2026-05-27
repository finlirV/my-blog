export interface Post {
  slug: string;
  title: string;
  abstract: string;
  publishedOn: string;
  updatedOn?: string;
  isPublished: boolean;
  tags: string[];
  coverImage?: string;
  readingTime: number;
  content: string;
}

export interface PostMeta {
  slug: string;
  title: string;
  abstract: string;
  publishedOn: string;
  updatedOn?: string;
  isPublished: boolean;
  tags: string[];
  coverImage?: string;
  readingTime: number;
}
