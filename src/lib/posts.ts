import matter from 'gray-matter';

// Use Vite's glob import to get all markdown files in the posts directory
// The 'as: "raw"' ensures we get the file content as a string
const postFiles = (import.meta as any).glob('/src/content/posts/*.md', { 
  query: '?raw',
  import: 'default',
  eager: true 
});

export interface PostData {
  slug: string;
  title: string;
  date: string;
  description: string;
  coverImage: string;
  tags: string[];
  content: string;
  author?: string;
  readingTime?: string;
}

export function getSortedPostsData(): PostData[] {
  const allPostsData = Object.keys(postFiles).map((filePath) => {
    // Remove /src/content/posts/ and .md to get the slug
    const slug = filePath
      .replace('/src/content/posts/', '')
      .replace('.md', '');

    const fileContent = postFiles[filePath] as string;
    const { data, content } = matter(fileContent);

    // Calculate approximate reading time
    const wordsPerMinute = 200;
    const noOfWords = content.split(/\s/g).length;
    const minutes = Math.ceil(noOfWords / wordsPerMinute);
    const readingTime = `${minutes} min read`;

    return {
      slug,
      content,
      readingTime,
      ...(data as { 
        title: string; 
        date: string; 
        description: string; 
        coverImage: string; 
        tags: string[];
        author?: string;
      }),
    };
  });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostSlugs() {
  return Object.keys(postFiles).map((filePath) => {
    return {
      params: {
        slug: filePath
          .replace('/src/content/posts/', '')
          .replace('.md', ''),
      },
    };
  });
}

export function getPostData(slug: string): PostData | null {
  const filePath = `/src/content/posts/${slug}.md`;
  const fileContent = postFiles[filePath] as string;

  if (!fileContent) return null;

  const { data, content } = matter(fileContent);

  // Calculate approximate reading time
  const wordsPerMinute = 200;
  const noOfWords = content.split(/\s/g).length;
  const minutes = Math.ceil(noOfWords / wordsPerMinute);
  const readingTime = `${minutes} min read`;

  return {
    slug,
    content,
    readingTime,
    ...(data as { 
      title: string; 
      date: string; 
      description: string; 
      coverImage: string; 
      tags: string[];
      author?: string;
    }),
  };
}
