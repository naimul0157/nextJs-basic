import { Suspense } from "react";
export const instant = false;
const blogs = [
    {
        id: 1,
        title: "Getting Started with React",
        author: "John Smith",
        category: "Web Development",
        image: "https://picsum.photos/id/1/800/400",
        description:
            "Learn the fundamentals of React and build your first interactive web application.",
        publishedDate: "2026-01-15",
        readTime: "5 min read",
        tags: ["React", "JavaScript", "Frontend"],
        likes: 120,
        isFeatured: true,
    },
    {
        id: 2,
        title: "Understanding JavaScript Closures",
        author: "Sarah Johnson",
        category: "JavaScript",
        image: "https://picsum.photos/id/2/800/400",
        description:
            "Explore JavaScript closures and understand how lexical scope works.",
        publishedDate: "2026-02-10",
        readTime: "8 min read",
        tags: ["JavaScript", "Programming", "ES6"],
        likes: 85,
        isFeatured: false,
    },
    {
        id: 3,
        title: "Mastering Tailwind CSS",
        author: "Michael Brown",
        category: "CSS",
        image: "https://picsum.photos/id/3/800/400",
        description:
            "Discover how to create beautiful responsive interfaces using Tailwind CSS.",
        publishedDate: "2026-03-05",
        readTime: "6 min read",
        tags: ["Tailwind", "CSS", "UI Design"],
        likes: 210,
        isFeatured: true,
    },
    {
        id: 4,
        title: "Introduction to Node.js",
        author: "David Wilson",
        category: "Backend Development",
        image: "https://picsum.photos/id/4/800/400",
        description:
            "Learn how Node.js works and how to build server-side applications.",
        publishedDate: "2026-04-12",
        readTime: "10 min read",
        tags: ["Node.js", "Backend", "JavaScript"],
        likes: 95,
        isFeatured: false,
    },
    {
        id: 5,
        title: "Building REST APIs with Express",
        author: "Emily Davis",
        category: "Backend Development",
        image: "https://picsum.photos/id/5/800/400",
        description:
            "Understand REST API development using Express.js and Node.js.",
        publishedDate: "2026-05-20",
        readTime: "12 min read",
        tags: ["Express", "API", "Node.js"],
        likes: 175,
        isFeatured: true,
    },
    {
        id: 6,
        title: "Getting Started with MongoDB",
        author: "Daniel Miller",
        category: "Database",
        image: "https://picsum.photos/id/6/800/400",
        description:
            "Learn how to store, manage, and retrieve data using MongoDB.",
        publishedDate: "2026-06-18",
        readTime: "7 min read",
        tags: ["MongoDB", "Database", "Backend"],
        likes: 140,
        isFeatured: false,
    },
    {
        id: 7,
        title: "Understanding Next.js",
        author: "Olivia Taylor",
        category: "Web Development",
        image: "https://picsum.photos/id/7/800/400",
        description:
            "Explore Next.js features including routing, rendering, and server components.",
        publishedDate: "2026-07-22",
        readTime: "9 min read",
        tags: ["Next.js", "React", "Frontend"],
        likes: 250,
        isFeatured: true,
    },
    {
        id: 8,
        title: "Git and GitHub for Beginners",
        author: "James Anderson",
        category: "Programming",
        image: "https://picsum.photos/id/8/800/400",
        description:
            "Learn version control and collaborate with developers using Git and GitHub.",
        publishedDate: "2026-08-14",
        readTime: "6 min read",
        tags: ["Git", "GitHub", "Version Control"],
        likes: 110,
        isFeatured: false,
    },
];
const blogId = async ({ params }) => {
    const { blogId } = await params;
    const blog = blogs.find(blog => blog.id == parseInt(blogId));
    console.log(blog);
    return (
        <div>
            <h1>This is blog detail page</h1>
            <h1>Title: {blog.title}</h1>
            <h1>Author: {blog.author}</h1>
        </div>
    );
};

export default blogId;