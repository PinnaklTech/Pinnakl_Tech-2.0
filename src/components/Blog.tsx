import React, { useEffect, useRef, useState } from 'react';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';

const Blog: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const blogPosts = [
    {
      title: 'The Future of AI in Manufacturing: Trends and Opportunities',
      excerpt: 'Explore how artificial intelligence is revolutionizing manufacturing processes, from predictive maintenance to quality control, and what this means for the industry.',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Technology',
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true
    },
    {
      title: 'Sustainable Engineering Practices for Modern Manufacturing',
      excerpt: 'Learn about the latest sustainable engineering practices that are helping manufacturers reduce their environmental impact while maintaining efficiency.',
      author: 'Michael Rodriguez',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Sustainability',
      image: 'https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      title: 'Case Study: Optimizing Automotive Production Lines',
      excerpt: 'A detailed look at how we helped a major automotive manufacturer increase production efficiency by 35% through process optimization.',
      author: 'Jennifer Kim',
      date: '2024-01-05',
      readTime: '10 min read',
      category: 'Case Study',
      image: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      title: 'CAD Design Best Practices for Complex Engineering Projects',
      excerpt: 'Essential tips and techniques for managing complex CAD projects, from file organization to collaboration workflows.',
      author: 'David Thompson',
      date: '2023-12-28',
      readTime: '7 min read',
      category: 'Design',
      image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      title: 'Quality Control in Modern Manufacturing: A Comprehensive Guide',
      excerpt: 'Understanding the latest quality control methodologies and how they can be implemented to ensure consistent product excellence.',
      author: 'Lisa Wang',
      date: '2023-12-20',
      readTime: '9 min read',
      category: 'Quality',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      title: 'The Role of Simulation in Product Development',
      excerpt: 'How advanced simulation tools are accelerating product development cycles and reducing costs across industries.',
      author: 'Robert Johnson',
      date: '2023-12-15',
      readTime: '5 min read',
      category: 'Simulation',
      image: 'https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Technology': 'bg-blue-100 text-blue-800',
      'Sustainability': 'bg-green-100 text-green-800',
      'Case Study': 'bg-purple-100 text-purple-800',
      'Design': 'bg-orange-100 text-orange-800',
      'Quality': 'bg-red-100 text-red-800',
      'Simulation': 'bg-indigo-100 text-indigo-800',
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <section id="blog" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div 
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Latest Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest trends, insights, and innovations in engineering and manufacturing 
            through our expert analysis and industry perspectives.
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div 
            className={`mb-16 transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="md:w-1/2 p-8 md:p-12">
                  <div className="flex items-center mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(featuredPost.category)}`}>
                      {featuredPost.category}
                    </span>
                    <span className="text-blue-600 text-sm font-medium ml-3">Featured</span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center text-gray-500 text-sm mb-6">
                    <User className="h-4 w-4 mr-1" />
                    <span className="mr-4">{featuredPost.author}</span>
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-4">{new Date(featuredPost.date).toLocaleDateString()}</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{featuredPost.readTime}</span>
                  </div>

                  <button className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {regularPosts.map((post, index) => (
            <article
              key={post.title}
              className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(post.category)}`}>
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <User className="h-4 w-4 mr-1" />
                  <span className="mr-3">{post.author}</span>
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="mr-3">{new Date(post.date).toLocaleDateString()}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  
                  <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors duration-300 flex items-center space-x-1 group">
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Posts CTA */}
        <div 
          className={`text-center transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <button className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <span>View All Articles</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;