import React, { useState, useEffect } from 'react';
import './Insights.css';

const Insights = () => {
  const [activeTab, setActiveTab] = useState('insights');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoaded, setIsLoaded] = useState(false);
  const [likedPosts, setLikedPosts] = useState(new Set());
  const [bookmarkedPosts, setBookmarkedPosts] = useState(new Set());

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const insights = [
    {
      id: 1,
      title: "Solar-Powered Hydrogen: The Green Fuel of the Future",
      summary: "Exploring how green hydrogen, produced using solar energy, offers a renewable vision for a decarbonized world, tackling hard-to-electrify sectors and revolutionizing energy storage.",
      category: "Green Energy",
      readTime: "12 min",
      views: "18.7k",
      author: "Dr. Sarah Chen",
      date: "2024-09-01",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=500&h=300&fit=crop",
      metrics: {
        engagement: 94,
        growth: "+45%",
        impact: "High",
        co2Reduction: "2.3M tons"
      },
      tags: ["Hydrogen", "Solar Energy", "Decarbonization"],
      link: "/insights/solar-hydrogen"
    },    {
      id: 2,
      title: "U.S. Data Centers Energy Demand & Solar Solutions",
      summary: "Deep dive into how solar energy is poised to meet the surging energy demands of U.S. data centers driven by cloud computing, AI, and digital transformation.",
      category: "Energy Efficiency",
      readTime: "15 min", 
      views: "24.3k",
      author: "Michael Rodriguez",
      date: "2024-08-28",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop",
      metrics: {
        engagement: 87,
        growth: "+32%",
        impact: "High",
        co2Reduction: "1.8M tons"
      },
      tags: ["Data Centers", "AI", "Solar Power"],
      link: "/insights/data-centers-solar"
    },
    {
      id: 3,
      title: "IRA Impact: Supercharging Solar Growth in America",
      summary: "Analyzing how the Inflation Reduction Act's $370 billion investment is transforming the solar industry, offering unprecedented opportunities for sustainable growth.",
      category: "Policy & Growth",
      readTime: "10 min",
      views: "31.5k", 
      author: "Emma Thompson",
      date: "2024-08-25",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=500&h=300&fit=crop",
      metrics: {
        engagement: 92,
        growth: "+67%", 
        impact: "Critical",
        co2Reduction: "5.2M tons"
      },
      tags: ["Policy", "Investment", "Growth"],
      link: "/insights/ira-solar-growth"
    },
    {
      id: 4,
      title: "Digital O&M: Revolutionizing Renewable Energy Efficiency",
      summary: "Comprehensive look at how digital Operations and Maintenance solutions are maximizing energy output and ROI across expanding renewable energy projects.",
      category: "Technology",
      readTime: "8 min",
      views: "16.8k",
      author: "Alex Johnson",
      date: "2024-08-22",
      image: "https://images.unsplash.com/photo-1581092160607-ee67c0d5a9e8?w=500&h=300&fit=crop",
      metrics: {
        engagement: 89,
        growth: "+28%",
        impact: "Medium",
        co2Reduction: "950k tons"
      },
      tags: ["Digital", "O&M", "Efficiency"],
      link: "/insights/digital-o-m"
    }
  ];
  const blogs = [
    {
      id: 1,
      title: "Evolution of Solar Modules: Which Technology Leads the Future?",
      excerpt: "Dive into the dramatic rise of solar PV efficiency, from 15% in the 1970s to over 47% in 2024, and explore the cutting-edge technologies shaping tomorrow's energy landscape.",
      category: "Technology",
      readTime: "12 min",
      views: "42.1k",
      likes: 567,
      comments: 89,
      author: "Dr. Lisa Zhang",
      date: "2024-09-02",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&h=300&fit=crop",
      tags: ["Solar Panels", "Efficiency", "Innovation"],
      featured: true,
      link: "/insights/solar-module-evolution"
    },
    {
      id: 2,
      title: "Space-Based Solar Power: Beaming Energy from Orbit", 
      excerpt: "Uncover ESA's SOLARIS initiative and NASA's space-based solar power projects - groundbreaking efforts to harness unlimited solar power from space for continuous clean energy supply.",
      category: "Innovation",
      readTime: "18 min",
      views: "28.9k",
      likes: 423,
      comments: 67,
      author: "David Kim",
      date: "2024-08-30",
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=500&h=300&fit=crop",
      tags: ["Space Solar", "ESA", "Innovation"],
      link: "/insights/space-solar-power"
    },    {
      id: 3,
      title: "Solar Tracking Technology: Maximizing Energy Capture",
      excerpt: "Learn how advanced solar tracking technology enhances efficiency by 25-35% through intelligent panel orientation, weather prediction, and AI-driven optimization systems.",
      category: "Engineering", 
      readTime: "10 min",
      views: "35.7k",
      likes: 394,
      comments: 52,
      author: "Maya Patel",
      date: "2024-08-28",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=500&h=300&fit=crop",
      tags: ["Solar Tracking", "Efficiency", "Engineering"],
      link: "/insights/solar-tracking"
    },
    {
      id: 4,
      title: "Digital Asset Performance: Transforming Solar Investments",
      excerpt: "Explore how digital monitoring and AI-powered analytics ensure solar investments deliver peak performance across commercial, industrial, and residential sectors.",
      category: "Digital Solutions",
      readTime: "14 min", 
      views: "22.4k",
      likes: 298,
      comments: 41,
      author: "Carlos Rodriguez",
      date: "2024-08-26",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=300&fit=crop",
      tags: ["Digital", "Performance", "Analytics"],
      link: "/insights/digital-asset-performance"
    },
    {
      id: 5,
      title: "Solar by 2030: A Brighter Future for America's Energy",
      excerpt: "Vision for solar energy supplying 40% of the nation's electricity by 2030, exploring policy support, technological advances, and infrastructure development needed.",
      category: "Future Vision",
      readTime: "16 min",
      views: "47.2k",
      likes: 682,
      comments: 124,
      author: "Jennifer Liu",
      date: "2024-08-24",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=500&h=300&fit=crop",
      tags: ["Future", "Policy", "Vision 2030"],
      featured: true,
      link: "/insights/solar-by-2030"
    }
  ];
  const categories = [
    { id: 'all', name: 'All Content', count: 18 },
    { id: 'Green Energy', name: 'Green Energy', count: 8 },
    { id: 'Technology', name: 'Technology', count: 12 },
    { id: 'Innovation', name: 'Innovation', count: 6 },
    { id: 'Policy & Growth', name: 'Policy', count: 4 },
    { id: 'Digital Solutions', name: 'Digital', count: 7 }
  ];

  const toggleLike = (id) => {
    setLikedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const toggleBookmark = (id) => {
    setBookmarkedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const getImpactColor = (impact) => {
    switch(impact) {
      case 'Critical': return 'critical-impact';
      case 'High': return 'high-impact';
      case 'Medium': return 'medium-impact';
      default: return 'low-impact';
    }
  };

  const filteredInsights = selectedCategory === 'all' ? insights : insights.filter(item => item.category === selectedCategory);
  const filteredBlogs = selectedCategory === 'all' ? blogs : blogs.filter(item => item.category === selectedCategory);
  return (
    <div className={`insights-container ${isLoaded ? 'loaded' : ''}`}>
      {/* Enhanced Header */}
      <section className="insights-hero">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-icon">☀️</span>
            <span>AmgSol Insights</span>
          </div>
          <h1>Powering the Future with Solar Innovation</h1>
          <p>Explore our latest perspectives on solar technology, sustainability breakthroughs, and the clean energy revolution shaping tomorrow's world.</p>
          
          {/* Stats */}
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-value">12.4M</span>
              <span className="stat-label">CO₂ Tons Reduced</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">850</span>
              <span className="stat-label">GWh Generated</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">47.2k</span>
              <span className="stat-label">Active Readers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="content-tabs">
        <button 
          className={`tab-button ${activeTab === 'insights' ? 'active' : ''}`}
          onClick={() => setActiveTab('insights')}
        >
          <span className="tab-icon">📊</span>
          Data Insights
        </button>
        <button 
          className={`tab-button ${activeTab === 'blogs' ? 'active' : ''}`}
          onClick={() => setActiveTab('blogs')}
        >
          <span className="tab-icon">📝</span>
          Expert Blogs
        </button>
      </div>

      {/* Category Filter */}
      <div className="category-filter">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
          >
            {category.name}
            <span className="category-count">{category.count}</span>
          </button>
        ))}
      </div>      {/* Content Grid */}
      {activeTab === 'insights' ? (
        <section className="insights-grid">
          {filteredInsights.map((insight, index) => (
            <div key={insight.id} className="insight-card enhanced">
              <div className="card-image">
                <img src={insight.image} alt={insight.title} />
                <div className="image-overlay">
                  <span className="category-tag">{insight.category}</span>
                  <span className={`impact-badge ${getImpactColor(insight.metrics.impact)}`}>
                    {insight.metrics.impact} Impact
                  </span>
                </div>
                <div className="co2-badge">
                  {insight.metrics.co2Reduction} CO₂ saved
                </div>
              </div>
              
              <div className="card-content">
                <div className="card-meta">
                  <span className="date">📅 {new Date(insight.date).toLocaleDateString()}</span>
                  <span className="read-time">⏱ {insight.readTime}</span>
                  <span className="views">👁 {insight.views}</span>
                </div>
                
                <h2>{insight.title}</h2>
                <p>{insight.summary}</p>
                
                {/* Enhanced Metrics */}
                <div className="metrics-grid">
                  <div className="metric">
                    <span className="metric-value">{insight.metrics.engagement}%</span>
                    <span className="metric-label">Engagement</span>
                  </div>
                  <div className="metric">
                    <span className="metric-value">{insight.metrics.growth}</span>
                    <span className="metric-label">Growth</span>
                  </div>
                  <div className="metric">
                    <span className="metric-icon">📈</span>
                    <span className="metric-label">Analytics</span>
                  </div>
                </div>
                
                <div className="card-footer">
                  <div className="author-info">
                    <div className="author-avatar">
                      {insight.author.charAt(0)}
                    </div>
                    <span className="author-name">{insight.author}</span>
                  </div>
                  <a href={insight.link} className="read-more-button">
                    View Insight →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </section>
      ) : (
        <section className="insights-grid">
          {filteredBlogs.map((blog, index) => (
            <div key={blog.id} className={`insight-card blog-card ${blog.featured ? 'featured' : ''}`}>
              <div className="card-image">
                <img src={blog.image} alt={blog.title} />
                <div className="image-overlay">
                  <span className="category-tag">{blog.category}</span>
                  {blog.featured && <span className="featured-badge">⭐ Featured</span>}
                </div>
                <button 
                  className={`bookmark-btn ${bookmarkedPosts.has(blog.id) ? 'active' : ''}`}
                  onClick={() => toggleBookmark(blog.id)}
                >
                  🔖
                </button>
              </div>
              
              <div className="card-content">
                <div className="card-meta">
                  <span className="date">📅 {new Date(blog.date).toLocaleDateString()}</span>
                  <span className="read-time">⏱ {blog.readTime}</span>
                  <span className="views">👁 {blog.views}</span>
                </div>
                
                <h2>{blog.title}</h2>
                <p>{blog.excerpt}</p>
                
                <div className="blog-tags">
                  {blog.tags.map((tag, i) => (
                    <span key={i} className="blog-tag">#{tag}</span>
                  ))}
                </div>
                
                <div className="card-footer">
                  <div className="author-info">
                    <div className="author-name">{blog.author}</div>
                  </div>
                  
                  <div className="blog-actions">
                    <button 
                      className={`like-btn ${likedPosts.has(blog.id) ? 'active' : ''}`}
                      onClick={() => toggleLike(blog.id)}
                    >
                      ❤️ {blog.likes + (likedPosts.has(blog.id) ? 1 : 0)}
                    </button>
                    <span className="comments">💬 {blog.comments}</span>
                    <a href={blog.link} className="read-more-button">Read More →</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default Insights;