import Layout from "./Layout";
import React from "react";
import HeroSection from "../components/HeroSection"; // Import the HeroSection component

export default function Article(){
    return (<Layout>
        {/* Use the HeroSection component */}
        <HeroSection backgroundImageUrl="https://via.placeholder.com/1200x600" title="UZI: THE FULL-AUTO OF CODE GEN" />
        
        <div className="container mx-auto px-4 py-8">
            {/* Author and Engagement Info */}
            <div className="flex items-center mb-6">
                {/* Author Image Placeholder */}
                <img
                    className="w-10 h-10 rounded-full mr-4"
                    src="https://via.placeholder.com/40" // Placeholder author image
                    alt="Author"
                />
                <div>
                    <p className="font-semibold">Nick K</p> {/* Placeholder Author Name */}
                    <p className="text-gray-600 text-sm">Posted on Jun 2</p> {/* Placeholder Date */}
                </div>
                {/* Add placeholder for engagement icons/counts here */}
            </div>

            {/* Blog Post Title (repeated for clarity below hero) */}
            <h1 className="text-3xl font-bold mb-4">Web Developer's Guide to Midjourney</h1> {/* Placeholder Title */}

            {/* Tags Section */}
            <div className="mb-6">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#webdev</span> {/* Placeholder Tag */}
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#javascript</span> {/* Placeholder Tag */}
                {/* Add more placeholder tags here */}
            </div>

            {/* Blog Post Content Area */}
            <div className="prose max-w-none"> {/* Using 'prose' for basic content styling - requires @tailwindcss/typography */}
                <h2>Background and Motivation</h2> {/* Placeholder Content Heading */}
                <p>
                    Midjourney's learning curve is steep, but climbing it unlocks a superpower for
                    developers and entrepreneurs. Learn how to create stunning, cohesive image sets
                    that actually work for your projects. Go from building style reference galleries to using
                    the describe feature for professional marketing visuals that don't scream "AI-generated."
                </p> {/* Placeholder Content Paragraph */}
                {/* Add more placeholder content here */}
            </div>
        </div>
    </Layout>);
}