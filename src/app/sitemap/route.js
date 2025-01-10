export async function GET(req) {
    const baseUrl = 'https://indiayaatra.com';

    // Static paths
    const staticPaths = ['', 'tour-packages', 'contact', 'blog'].map((path) => ({
        loc: `${baseUrl}/${path}`,
        changefreq: 'daily',
        priority: path === '' ? 1.0 : 0.8,
        lastmod: new Date().toISOString(),
    }));

    // Fetch dynamic paths from Strapi
    try {
        const response = await fetch('https://admin.indiayaatra.com/api/blog-contents');
        const blogs = await response.json();

        const dynamicPaths =
            blogs.data?.map((blog) => ({
                loc: `${baseUrl}/blog/${blog.attributes.pageURL || blog.attributes.BlogTitle}`,
                changefreq: 'weekly',
                priority: 0.7,
                lastmod: blog.attributes.updatedAt,
            })) || [];

        const allPaths = [...staticPaths, ...dynamicPaths];

        // Generate sitemap XML
        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${allPaths
                .map(
                    (url) => `
        <url>
          <loc>${url.loc}</loc>
          <changefreq>${url.changefreq}</changefreq>
          <priority>${url.priority}</priority>
          <lastmod>${url.lastmod || new Date().toISOString()}</lastmod>
        </url>`
                )
                .join('')}
      </urlset>`;

        return new Response(sitemap, {
            headers: {
                'Content-Type': 'application/xml',
            },
        });
    } catch (error) {
        console.error('Error fetching blog data:', error);
        return new Response(
            '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>',
            {
                headers: {
                    'Content-Type': 'application/xml',
                },
            }
        );
    }
}